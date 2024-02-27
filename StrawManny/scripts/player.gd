extends KinematicBody2D
onready var animation = $AnimationPlayer

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

	
# Move the player and change its direction according to the keybind
	if up:
		animation.play("run")
		velocity.y -= 1

	elif down:
		animation.play("run")
		velocity.y += 1
	
	
	if right:
		$Sprite2.flip_h = true
		animation.play("run")
		velocity.x += 1

		
	elif left:
		$Sprite2.flip_h = false
		animation.play("run")
		velocity.x -= 1

	else:
		#change to .play("idle") once ready
		animation.stop()

	# Prevent diagonal movement from faster than up, down, etc. individually
	velocity = velocity.normalized()
	velocity = move_and_slide(velocity * 600)
	
	

	
