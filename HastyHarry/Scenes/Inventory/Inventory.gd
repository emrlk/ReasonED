extends Node


var items = []

func get_items():
	return items

func get_item(item_to_find):
	for item in items:
		if item == item_to_find:
			return item
	return null

func add_item(item):
	items.append(item)
	
func get_num_of_items():
	return items.size()

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


func print_test():
	print("THIS IS A TEST CALL")
