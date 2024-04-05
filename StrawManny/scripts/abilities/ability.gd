extends Node


export var is_instant_powerup = bool(false)


# Called when the node enters the scene tree for the first time.
func _ready():
	pass

func is_powerup() -> bool:
	return is_instant_powerup

# overrideable function to be used on all child scripts
func _use_ability(_manny):
	print("OVERRIDE ME IN THE CHILD SCRIPTS: " + _manny)
