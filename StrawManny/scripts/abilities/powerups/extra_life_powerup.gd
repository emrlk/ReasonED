extends "res://scripts/abilities/ability.gd"

export var extra_life_count = int(1)

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


func _use_ability(_manny):
	_manny.add_extra_lives(extra_life_count)
