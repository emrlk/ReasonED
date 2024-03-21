extends KinematicBody2D

var velocity : Vector2 = Vector2()
var direction : Vector2 = Vector2()
var sprite : Sprite
const sample_text = [
	"Hello! My name is Manny, Straw Manny!",
	"I'm a knight, but I'm not the best at combat...",
	"Mind helping me out?"
];

func _ready():
	sprite = $Sprite
	Engine.set_target_fps(Engine.get_iterations_per_second())
	
func read_input():
	# Don't allow input if a dialog/textbox is active
	if DialogueManager.is_active():
		return

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

	if Input.is_action_just_pressed("ui_select"):
		var textbox_pos = global_position;
		textbox_pos.y += 100
		textbox_pos.x -= 600
		velocity = Vector2(0, 0)
		DialogueManager.open_textbox(sample_text, textbox_pos);

	# Prevent diagonal movement from being twice as fast as up, down, etc. individually
	velocity = velocity.normalized()
	velocity = move_and_slide(velocity * 400)
	
# Read user input 60 times/second
func _physics_process(delta):
	read_input()
	
