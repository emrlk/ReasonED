extends Container

var heart_fractions = [preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/100-percent.png"),
					preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/25-percent.png"),
					preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/50-percent.png"),
					preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/75-percent.png")]
var heart_empty = preload("res://assets/UI/extralife--134u37401q8c0y3e41/black-border/0-percent.png")

func update_health(value):
	for i in get_child_count():
		if value <= i * heart_fractions.size():
			get_child(i).texture = heart_empty
		elif value > (i + 1) * heart_fractions.size():
			get_child(i).texture = heart_fractions.front()
		else:
			get_child(i).texture = heart_fractions[value % heart_fractions.size()]



# Called when the node enters the scene tree for the first time.
func _ready():
	update_health(15)

