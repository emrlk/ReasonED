#Strike

extends "res://scripts/pickups/ability.gd"

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


func _use_ability(ability_receiver):
	ability_receiver.describeAbility("Heavy Strike!", 3)
	ability_receiver.strike()
	
