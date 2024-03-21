extends KinematicBody2D

onready var animation = $AnimatedSprite
onready var inventory = $Inventory
onready var collision = $Area2D


export var move_right_action = String("right")
export var move_left_action = String("left")
export var move_up_action = String("up")
export var move_down_action = String("down")

export var run_animation = String("run")
export var idle_animation = String("idle")

var inputs = {
	move_right_action: false,
	move_left_action: false,
	move_up_action: false,
	move_down_action: false,
}


# Read user input 60 times/second
func _physics_process(_delta):
	read_input()
	play_locomotion_animation(run_animation if is_any_input_down() else idle_animation)		
	var velocity = get_velocity_from_input()
	apply_velocity(velocity)
	
	
func _ready():
	Engine.set_target_fps(Engine.get_iterations_per_second())
	collision.connect("body_entered", self, "_on_Player_body_entered")



func is_any_input_down() -> bool:
	return inputs.get(move_right_action) or inputs.get(move_left_action) or inputs.get(move_up_action) or inputs.get(move_down_action)


# applies the given velocity to the character.
# param velocity should not be normalized before being passed in, this function performs that operation
func apply_velocity(velocity : Vector2):
	if velocity.length() > 0:
		#Normalize vector to prevent diagonal movement from being faster
		velocity = velocity.normalized()
		#Speed of sprite:
		velocity = move_and_slide(velocity * 800)


func play_locomotion_animation(animation_to_play : String):
	animation.play(animation_to_play)


func get_velocity_from_input() -> Vector2:
	var velocity = Vector2()
	#separate conditionals for actual motion and direction:
	if inputs.get(move_up_action):
		velocity.y -= 1
	elif inputs.get(move_down_action):
		velocity.y += 1

	if inputs.get(move_right_action):
		$AnimatedSprite.flip_h = true
		velocity.x += 1
	elif inputs.get(move_left_action):
		$AnimatedSprite.flip_h = false
		velocity.x -= 1
	
	return velocity


func read_input():
	inputs[move_right_action] = Input.is_action_pressed(move_right_action)
	inputs[move_left_action] = Input.is_action_pressed(move_left_action)
	inputs[move_up_action] = Input.is_action_pressed(move_up_action)
	inputs[move_down_action] = Input.is_action_pressed(move_down_action)


# This gets called when an item is added to the inventory script on manny incase we need to use it for something
func _on_Inventory_item_added(item):
	print("Ability Power: ", item)


# This gets called when an item that is a powerup is being picked up so abilities from the powerup should be added here
func _on_Inventory_item_received_for_instant_use(item):
	print("Powerup: ", item)


func _on_Player_body_entered(body):
	if body.is_in_group("Knight"):
		get_tree().change_scene("res://scenes/Challenge.tscn")
