extends TextureRect


# Declare member variables here. Examples:
# var a = 2
# var b = "text"
onready var score_text = $scoreLabel
var score_format = " Score: %d"

# Called when the node enters the scene tree for the first time.
func _ready():
	 score_text.text = score_format % [MannyData.score]


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass


func _on_Continue_Button_pressed():
	Inventory.items = []
	Inventory._ready()
	MannyData._ready()
	var next_scene = preload('res://scenes/main_menu.tscn')
	get_tree().change_scene_to(next_scene)
