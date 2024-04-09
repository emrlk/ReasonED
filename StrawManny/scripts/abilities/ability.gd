extends Node


export var is_instant_powerup = bool(false)
export(Texture) var ability_texture = Texture

# Called when the node enters the scene tree for the first time.
func _ready():
	get_node("Image").texture = ability_texture

func is_powerup() -> bool:
	return is_instant_powerup

func get_ability_texture() -> Texture:
	return ability_texture

# overrideable function to be used on all child scripts
func _use_ability(_manny):
	print("OVERRIDE ME IN THE CHILD SCRIPTS: " + _manny)
