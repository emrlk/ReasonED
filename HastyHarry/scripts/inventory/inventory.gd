extends Node

signal item_added(item, index)
signal item_received_for_instant_use(item)
signal item_removed(item, index)

export var max_item_count = int(10)
export var allow_array_resize = bool(true)

var items = []

# Called when the node enters the scene tree for the first time.
func _ready():
	if !allow_array_resize:
		items.resize(max_item_count)
		for i in items.size():
			items[i] = null


func get_items():
	return items

func get_item(item_to_find):
	var index = items.find(item_to_find)
	if index > 0:
		return items[index]
	return null

func add_item_at_null_index(item) -> int:
	for i in max_item_count:
		if items[i] == null:
			items[i] = item
			return i
	return -1

func add_item(item) -> bool:
	if (allow_array_resize && items.size() < max_item_count - 1) || !allow_array_resize:
		var should_add_to_inventory = bool(true)
		var ability = item._get_ability()
		if ability != null:
			if ability.is_powerup(): #item.is_powerup():
				emit_signal("item_received_for_instant_use", ability)
				item.destroy_pickup()
				should_add_to_inventory = false

		if should_add_to_inventory:
			if allow_array_resize:
				items.append(item)
				item.hide_pickup()
				emit_signal("item_added", item, items.size() - 1)
				on_inventory_changed()
				return true
			else:
				var index = add_item_at_null_index(item)
				if index > -1:
					item.hide_pickup()
					emit_signal("item_added", item, index)
					on_inventory_changed()
					return true
	return false
	
func get_num_of_items():
	return items.size()
	
func get_item_at_index(index : int):
	if items.size() > index:
		return items[index]
	return null

func remove_item_null_index(index):
	items[index] = null

func remove_item(item):
	var index = items.find(item)
	if index > -1:
		if allow_array_resize:
			emit_signal("item_removed", item, index)
			items.erase(item)
		else:
			emit_signal("item_removed", item, index)
			remove_item_null_index(index)
			on_inventory_changed()

func remove_item_at_index(index : int):
	if index < items.size():
		emit_signal("item_removed", items[index], index)
		items.remove(index)
		on_inventory_changed()

func on_inventory_changed():
	pass
