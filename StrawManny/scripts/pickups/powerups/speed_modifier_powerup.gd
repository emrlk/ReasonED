extends "res://scripts/pickups/ability.gd"


export var movement_speed_multiplier = float(1.5)


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


func _use_ability(ability_receiver):
	ability_receiver.set_movement_ability_multiplier(movement_speed_multiplier)
