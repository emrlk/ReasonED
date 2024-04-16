extends Node

var knight = preload("res://scenes/Knight.tscn")
const NUM_KNIGHTS = 200
const KNIGHT_LAYER = 1  # Adjust as needed to place the knights on the correct layer
const NUM_POWERUPS = 200
const NUM_ABILITIES = 200

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
		randomKnight.set_z_index(KNIGHT_LAYER)  # Set the Z-index to place the knight on the desired layer
		add_child(randomKnight)
		i += 1
		
#Spawn powerups randomly around the grounds	
func spawnPowerups():
	pass
	
#Spawn combat abilities randomly around the grounds	
func spawnAbilities():
	pass
