extends Container

var heart_fractions = [ preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/100-percent.png"),
						## preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/25-percent.png"),
						 preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/50-percent.png"),
						## preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/75-percent.png")
						]
var heart_empty = preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/0-percent.png")

onready var health = $VBoxContainer/Top_Bar/Health
func draw_health(value):
	for i in health.get_child_count():
		if value <= i * heart_fractions.size():
			health.get_child(i).texture = heart_empty
		elif value > (i + 1) * heart_fractions.size():
			health.get_child(i).texture = heart_fractions.front()
		else:
			health.get_child(i).texture = heart_fractions[value % heart_fractions.size()]


onready var strength = $VBoxContainer/Top_Bar/Strength
onready var level_text = $VBoxContainer/Top_Bar/VBoxContainer/Level
var level_format = " Level: %d"
onready var score_text = $VBoxContainer/Top_Bar/VBoxContainer/Score
var score_format = " Score: %d"
var level = 0
var score = 0

var defeat_points = [100, 125, 150]

func enemy_defeated():
	strength.value = strength.value + 1
	
	score = score + defeat_points[level]
	score_text.text = score_format % [score]
	
	
	if strength.value == strength.max_value:
		level = level + 1
		level_text.text = level_format % [level + 1]
		
		strength.value = 0


# Called when the node enters the scene tree for the first time.
func _ready():
	draw_health(5)
	for i in range(4):
		enemy_defeated()
		




func _on_ability_pressed(extra_arg_0):
	pass # Replace with function body.
