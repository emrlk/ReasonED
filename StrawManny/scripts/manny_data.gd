extends Node

var health = 6

signal strength_score_update
signal manny_health_update

var level = 0
var score = 0
var strength = 0
var strength_max_value = 1500

func decrease_manny_health(increment):
	health -= increment
	emit_signal("manny_health_update")
	

func enemy_defeated(added_strength, added_score):
	strength = strength + added_strength
	score = score + added_score

	if strength == strength_max_value:
		level = level + 1
		strength = 0
		
	emit_signal("strength_score_update")


