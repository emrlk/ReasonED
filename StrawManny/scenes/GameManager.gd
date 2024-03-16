extends Node

var knight = preload("res://scenes/Knight.tscn")
const NUM_KNIGHTS = 200

func _ready():
	
	start_game()


func start_game():
	spawnKnights()
	

func end_game():
	# Logic to end the game 
	pass


func switch_level(level_name):
	# Logic to switch to a new level 
	pass

func spawnKnights():
	var i = 0
	while i < NUM_KNIGHTS:
		var randomKnight = knight.instance()
		randomKnight.position = Vector2(rand_range(-40000,40000), rand_range(-40000,40000))
		add_child(randomKnight)
		i += 1
