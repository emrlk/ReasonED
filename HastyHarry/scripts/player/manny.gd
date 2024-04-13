extends KinematicBody2D

onready var animation = $AnimatedSprite
onready var collision = $Area2D

export var movement_speed = float(1400)

export var move_right_action = String("right")
export var move_left_action = String("left")
export var move_up_action = String("up")
export var move_down_action = String("down")

export var run_animation = String("run")
export var idle_animation = String("idle")


export var can_move = bool(true)


const INDEX_NONE = int(-1)

var movement_inputs = {
	move_right_action: false,
	move_left_action: false,
	move_up_action: false,
	move_down_action: false,
}

# Read user input 60 times/second
func _physics_process(_delta):
	read_input()
	if can_move:
		play_locomotion_animation(run_animation if is_any_movement_input_down() else idle_animation)		
		var velocity = get_velocity_from_input()
		apply_velocity(velocity)
	print("inventory item count: ", Inventory.get_num_of_items())

func _ready():
	Engine.set_target_fps(Engine.get_iterations_per_second())
	setup_initial_signals()
	initialize_manny()

func setup_initial_signals():
	Inventory.connect("item_received_for_instant_use", self, "_on_Inventory_item_received_for_instant_use")
		
func on_tutorial_finished():
	can_move = true
	var tutorial_ok_button = get_tree().current_scene.get_node("Node2D2").get_node("Tutorial").get_node("MarginContainer").get_node("VBoxContainer").get_node("HBoxContainer").get_node("OKButton")
	if tutorial_ok_button:
		tutorial_ok_button.disconnect("pressed", self, "on_tutorial_finished")

func initialize_manny():
	play_locomotion_animation(idle_animation)

func is_any_movement_input_down() -> bool:
	for input in movement_inputs:
		if movement_inputs[input]:
			return true
	return false


# applies the given velocity to the character.
# param velocity should not be normalized before being passed in, this function performs that operation
func apply_velocity(velocity : Vector2):
	if velocity.length() > 0:
		#Normalize vector to prevent diagonal movement from being faster
		velocity = velocity.normalized()
		#Speed of sprite:
		velocity = move_and_slide(velocity * movement_speed)


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
	movement_inputs[move_right_action] = Input.is_action_pressed(move_right_action)
	movement_inputs[move_left_action] = Input.is_action_pressed(move_left_action)
	movement_inputs[move_up_action] = Input.is_action_pressed(move_up_action)
	movement_inputs[move_down_action] = Input.is_action_pressed(move_down_action)

