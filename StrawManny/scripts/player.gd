extends KinematicBody2D

var velocity : Vector2 = Vector2()
var direction : Vector2 = Vector2()
var sprite : Sprite

onready var dialogue_scene = preload("res://scenes/dialogue.tscn")
var dialogue

func _ready():
	sprite = $Sprite
	Engine.set_target_fps(Engine.get_iterations_per_second())
	
func read_input():
	velocity = Vector2()
	
	# Move the player and change its direction according to the keybind
	if Input.is_action_pressed("up"):
		velocity.y -= 1
		direction = Vector2(0,-1)

	if Input.is_action_pressed("down"):
		velocity.y += 1
		direction = Vector2(0,1)

	if Input.is_action_pressed("left"):
		velocity.x -= 1
		direction = Vector2(-1,0)
		
		#flips sprite in the direction of movement
		#must be same scaling as sprite texture
		sprite.scale.x = 1 
		

	if Input.is_action_pressed("right"):
		velocity.x += 1
		direction = Vector2(1,0)
		
		#flips sprite in the direction of movement
		#must be same scaling as sprite texture
		sprite.scale.x = -1

	if Input.is_action_pressed("ui_select"):
		dialogue = dialogue_scene.instance()
		get_tree().root.add_child(dialogue)
		#TODO: figure out how to position this properly...
		var new_pos = global_position;
		new_pos.y += 150
		new_pos.x -= 600
		dialogue.set_global_position(new_pos)
		dialogue.get_node("TextBox").start_text_display("Hello! My name is Manny, Straw Manny!")

	# Prevent diagonal movement from being twice as fast as up, down, etc. individually
	velocity = velocity.normalized()
	velocity = move_and_slide(velocity * 400)
	
	
# Read user input 60 times/second
func _physics_process(delta):
	read_input()
	
