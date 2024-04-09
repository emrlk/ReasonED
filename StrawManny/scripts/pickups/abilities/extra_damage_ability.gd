extends "res://scripts/pickups/ability.gd"

export var damage_amount = int(25)

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


func _use_ability(ability_receiver):
	ability_receiver.take_damage(damage_amount)
	print("Damage Amount: ", damage_amount)
