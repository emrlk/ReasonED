extends Node

signal item_added(item)
signal item_received_for_instant_use(item)

signal use_ability_1()
signal use_ability_2()

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
	if false: #item.is_powerup():
		emit_signal("item_received_for_instant_use", item)
	else:
		items.append(item)
		update_inventory(items)
		emit_signal("item_added", item)
	
func get_num_of_items():
	return items.size()
	
	

var ability_textures = {"item1": preload("res://assets/Sprites/Fourmagicalelementicons--15456i1x562p1k3g2d/pngs/badges/fire.png"),
					"item2":  preload("res://assets/Sprites/Fourmagicalelementicons--15456i1x562p1k3g2d/pngs/badges/water-drop.png")
					}
var ability_actions = { "item1": "use_ability_1",
						"item2": "use_ability_2"
						}

func update_inventory (items):
	for i in get_child_count():
		var button = get_child(i)
		
		if i < items.size():
			button.set_normal_texture(ability_textures[items[i]])
			button.set_disabled(false)
			
		else:
			button.set_disabled(true)
		
		
func call_ability(button_name):
	var ability_button = get_node(button_name)
	print_debug("button: ", button_name)
	ability_button.set_disabled(true)
	
	var index = ability_button.get_index()
	print_debug("index: ", index)
	print_debug("items: ", items)
	
	emit_signal(ability_actions[items[index]])
	items.remove(index)
	print_debug("after removal: ", items)
	
	update_inventory(items)
	

# Called when the node enters the scene tree for the first time.
func _ready():
	add_item("item2")
	add_item("item1")
	add_item("item2")
	

