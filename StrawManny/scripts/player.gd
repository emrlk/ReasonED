extends KinematicBody2D
onready var animation = $AnimatedSprite



# Read user input 60 times/second
func _physics_process(delta):
	read_input()
	
func _ready():
	Engine.set_target_fps(Engine.get_iterations_per_second())

	
func read_input():
	var velocity = Vector2()
	var right = Input.is_action_pressed("right")
	var left = Input.is_action_pressed("left")
	var up = Input.is_action_pressed("up")
	var down = Input.is_action_pressed("down")
	var lastXDirection
	
	if up or down or right or left:
		# Play "run" animation when any movement key is pressed
		animation.play("run")
	else:
		# Play "idle" animation when no movement keys are pressed
		animation.play("idle")

	#separate conditionals for actual motion and direction:
	if up:
		velocity.y -= 1
	elif down:
		velocity.y += 1

	if right:
		$AnimatedSprite.flip_h = true
		velocity.x += 1
	elif left:
		$AnimatedSprite.flip_h = false
		velocity.x -= 1


	#Normalize vector to prevent diagonal movement from being faster
	velocity = velocity.normalized()
	#Speed of sprite:
	velocity = move_and_slide(velocity * 600)
	
	

	
