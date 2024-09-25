extends "res://scripts/pickups/ability.gd"

export var damage_amount = int(25)
export var duration = 5 # Duration of extra damage in seconds


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

#Called When ability is clicked in combat
func _use_ability(ability_receiver):
	ability_receiver.start_extra_damage_timer(duration)
	ability_receiver.describeAbility("Basic-Attack Damage Increase!", duration)
	$SoundOnUse.play()
	# Additional logic as needed


