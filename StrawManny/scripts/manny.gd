extends KinematicBody2D

onready var animation = $AnimatedSprite
onready var collision = $Area2D

export var movement_speed = float(1400)

export var move_right_action = String("right")
export var move_left_action = String("left")
export var move_up_action = String("up")
export var move_down_action = String("down")

export var ability_1_action = String("use_ability_1")
export var ability_2_action = String("use_ability_2")
export var ability_3_action = String("use_ability_3")
export var ability_4_action = String("use_ability_4")

export var run_animation = String("run")
export var idle_animation = String("idle")


export var can_move = bool(false)
export var life_count = int(1)

var movement_ability_multiplier = float(1)


const INDEX_NONE = int(-1)

var movement_inputs = {
	move_right_action: false,
	move_left_action: false,
	move_up_action: false,
	move_down_action: false,
}

var ability_inputs = {
	ability_1_action: false,
	ability_2_action: false,
	ability_3_action: false,
	ability_4_action: false,
}

# Read user input 60 times/second
func _physics_process(_delta):
	read_input()
	if can_move:
		play_locomotion_animation(run_animation if is_any_movement_input_down() else idle_animation)		
		var velocity = get_velocity_from_input()
		apply_velocity(velocity)
	
	var ability_index = get_ability_input_down_index()
	if ability_index != INDEX_NONE:
		execute_ability(ability_index)

func _ready():
	Engine.set_target_fps(Engine.get_iterations_per_second())
	setup_initial_signals()
	initialize_manny()
	
	if !TutorialManager.do_overworld_tutorial :
		on_tutorial_finished()

func execute_ability(index : int):
	print("execute_ability index: ", index)
	var inventory_item = Inventory.get_item_at_index(index)
	if inventory_item != null:
		var ability = inventory_item._get_ability()
		if ability != null:
			ability._use_ability(self)
			Inventory.remove_item(inventory_item)
			inventory_item.destroy_pickup()

func get_inventory():
	return get_node("Inventory")

func set_movement_ability_multiplier(multiplier : float):
	movement_ability_multiplier = multiplier

func add_extra_lives(count : int):
	life_count += count
	print("Lives: ", life_count)
	
func get_live_count() -> int:
	return life_count

func get_movement_speed() -> float:
	return movement_speed * movement_ability_multiplier

func setup_initial_signals():
	collision.connect("body_entered", self, "_on_Player_body_entered")
	var tutorial = get_tree().current_scene.get_node("Node2D2/Tutorial")
	if tutorial:
		tutorial.connect("overworld_tutorial_finished", self, "on_tutorial_finished")
	Inventory.connect("item_received_for_instant_use", self, "_on_Inventory_item_received_for_instant_use")
		
func on_tutorial_finished():
	can_move = true
	var tutorial = get_tree().current_scene.get_node("Node2D2/Tutorial")
	if tutorial:
		tutorial.disconnect("overworld_tutorial_finished", self, "on_tutorial_finished")

func initialize_manny():
	play_locomotion_animation(idle_animation)

func is_any_movement_input_down() -> bool:
	for input in movement_inputs:
		if movement_inputs[input]:
			return true
	return false

func get_ability_input_down_index() -> int:
	var index = 0
	for input in ability_inputs:
		if ability_inputs[input]:
			return index
		index = index + 1
	return INDEX_NONE

func is_any_input_down() -> bool:
	return is_any_movement_input_down() || get_ability_input_down_index() != INDEX_NONE


# applies the given velocity to the character.
# param velocity should not be normalized before being passed in, this function performs that operation
func apply_velocity(velocity : Vector2):
	if velocity.length() > 0:
		#Normalize vector to prevent diagonal movement from being faster
		velocity = velocity.normalized()
		#Speed of sprite:
		velocity = move_and_slide(velocity * get_movement_speed())


func play_locomotion_animation(animation_to_play : String):
	animation.play(animation_to_play)


func get_velocity_from_input() -> Vector2:
	var velocity = Vector2()
	#separate conditionals for actual motion and direction:
	if movement_inputs.get(move_up_action):
		velocity.y -= 1
	elif movement_inputs.get(move_down_action):
		velocity.y += 1

	if movement_inputs.get(move_right_action):
		$AnimatedSprite.flip_h = true
		velocity.x += 1
	elif movement_inputs.get(move_left_action):
		$AnimatedSprite.flip_h = false
		velocity.x -= 1
	
	return velocity


func read_input():
	# Do not allow input if a dialogue is active
	if DialogueManager.is_active():
		return

	movement_inputs[move_right_action] = Input.is_action_pressed(move_right_action)
	movement_inputs[move_left_action] = Input.is_action_pressed(move_left_action)
	movement_inputs[move_up_action] = Input.is_action_pressed(move_up_action)
	movement_inputs[move_down_action] = Input.is_action_pressed(move_down_action)
	
	ability_inputs[ability_1_action] = Input.is_action_just_pressed(ability_1_action)
	ability_inputs[ability_2_action] = Input.is_action_just_pressed(ability_2_action)
	ability_inputs[ability_3_action] = Input.is_action_just_pressed(ability_3_action)
	ability_inputs[ability_4_action] = Input.is_action_just_pressed(ability_4_action)

	if (Input.is_action_pressed("ui_accept")):
		DialogueManager.open_textbox(["Test!", "Test 2!"], global_position)


# This gets called when an item that is a powerup is being picked up so abilities from the powerup should be added here
func _on_Inventory_item_received_for_instant_use(ability):
	ability._use_ability(self)
	


func _on_Player_body_entered(body):
	if body.is_in_group("Knight"):
		for i in Inventory.get_num_of_items():
			var item = Inventory.get_item_at_index(i)
			if item != null:
				var node_to_remove = item.get_parent()
				var item_parent = node_to_remove.get_parent()
				item_parent.remove_child(node_to_remove)
		get_tree().change_scene("res://scenes/Challenge.tscn")
