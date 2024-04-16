extends Container

var heart_fractions = [ preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/100-percent.png"),
						## preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/25-percent.png"),
						 preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/50-percent.png"),
						## preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/75-percent.png")
						]
var heart_empty = preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/0-percent.png")

var manny_health = 6


onready var health = $VBoxContainer/Top_Bar/Health
func draw_health():
	for i in health.get_child_count():
		if MannyData.health <= i * heart_fractions.size():
			health.get_child(i).texture = heart_empty
		elif MannyData.health > (i + 1) * heart_fractions.size():
			health.get_child(i).texture = heart_fractions.front()
		else:
			health.get_child(i).texture = heart_fractions[MannyData.health % heart_fractions.size()]


onready var strength = $VBoxContainer/Top_Bar/Strength
onready var level_text = $VBoxContainer/Top_Bar/VBoxContainer/Level
var level_format = " Level: %d"
onready var score_text = $VBoxContainer/Top_Bar/VBoxContainer/Score
var score_format = " Score: %d"

func draw_strength_score():
	score_text.text = score_format % [MannyData.score]
	level_text.text = level_format % [MannyData.level + 1]
	strength.value = MannyData.strength

# Called when the node enters the scene tree for the first time.
func _ready():
	MannyData.connect("manny_health_update", self, "draw_health")
	MannyData.connect("strength_score_update", self, "draw_strength_score")
	
	strength.max_value = MannyData.strength_max_value
	
	draw_health()
	draw_strength_score()
		




func _on_ability_pressed(extra_arg_0):
	pass # Replace with function body.
