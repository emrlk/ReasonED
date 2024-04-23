extends Node

signal strength_score_update
signal manny_health_update

var current_level = preload('res://scenes/Level1.tscn')

var health = 6
var level = 1
var score = 0
var strength = 0
var strength_max_value = 2500

func decrease_manny_health(increment):
	health -= increment
	emit_signal("manny_health_update")
	
	
func _ready():
	health = 6
	score = 0
	strength = 0
	level = 1
	current_level = preload('res://scenes/Level1.tscn')
	

func enemy_defeated(added_strength, added_score):
	strength = strength + added_strength
	score = score + added_score

	if strength == strength_max_value:
		if level == 1:
			level = 2
			current_level = preload('res://scenes/Level2.tscn')
		elif level == 2:
			current_level = preload('res://scenes/Level3.tscn')
			level = 3
		else:
			current_level = preload('res://scenes/Win.tscn')
		strength = 0
		
	emit_signal("strength_score_update")


