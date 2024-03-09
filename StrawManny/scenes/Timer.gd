extends Timer

var knight = preload("res://scenes/Knight.tscn")


# Called when the node enters the scene tree for the first time.
func _ready():
	pass


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass


func _on_Timer_timeout():

	var randomKnight = knight.instance()
	randomKnight.position = Vector2(rand_range(-2000,2000), rand_range(-2000,2000))
	add_child(randomKnight)
	wait_time = rand_range(0,1)
