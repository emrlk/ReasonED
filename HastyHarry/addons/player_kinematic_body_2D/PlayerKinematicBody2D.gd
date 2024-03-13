extends KinematicBody2D

var direction = Vector2()
var velocity = Vector2()

export var movement_speed = float(25.0)
export var sprint_speed_multiplier = float(2.0)
export var enable_movement_by_default = bool(false)

var can_move = enable_movement_by_default

# Called when the node enters the scene tree for the first time.
func _ready():
	can_move = enable_movement_by_default
	
func _physics_process(delta):
	if can_move:
		handle_movement(delta)
	
func enable_movement():
	can_move = true
	
func disable_movement():
	can_move = false
	
func get_direction():
	return direction
func get_velocity():
	return velocity

func handle_movement(delta):
	if Input.is_action_pressed("MoveRight"):
		direction.x = 1
	elif Input.is_action_pressed("MoveLeft"):
		direction.x = -1
	else:
		direction.x = 0
		
	if Input.is_action_pressed("MoveUp"):
		direction.y = -1
	elif Input.is_action_pressed("MoveDown"):
		direction.y = 1
	else:
		direction.y = 0		
	
	velocity = direction * movement_speed
	
	if Input.is_action_pressed("Sprint"):
		velocity *= sprint_speed_multiplier
	
	if velocity.length() > 0:
		move_and_slide(velocity)
