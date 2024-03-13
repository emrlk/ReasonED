extends Node

signal item_added(item)
signal item_received_for_instant_use(item)

var items = []

func get_items():
	return items

func get_item(item_to_find):
	for item in items:
		if item == item_to_find:
			return item
	return null

func add_item(item):
	print("adding item: ", item)
	if item.is_powerup():
		emit_signal("item_received_for_instant_use", item)
	else:
		items.append(item)
		emit_signal("item_added", item)
	
func get_num_of_items():
	return items.size()

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.
