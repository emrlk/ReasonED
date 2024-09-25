extends Node


func get_manny():
	return owner.get_parent()

func get_knight():
	return get_tree().get_current_scene().get_node("Knight")

# Called when the node enters the scene tree for the first time.
func _ready():
	Inventory.connect("item_added", self, "_on_inventory_item_added")
	Inventory.connect("item_removed", self, "_on_inventory_item_removed")
	call_deferred("process_existing_items")

func process_existing_items():
	print("CALLED DEFERRED TEST")
	for i in Inventory.get_num_of_items():
		var item = Inventory.get_item_at_index(i)
		if item != null:
			var item_to_add = item.get_parent()
			get_tree().get_current_scene().add_child(item_to_add)
			print("Item: ", item_to_add)
			_on_inventory_item_added(item, i)

func _on_inventory_item_added(item, index):
	var ability = item._get_ability()
	if ability != null:
		var button = get_child(index)
		if button != null:
			button.set_disabled(false)
			button.set_normal_texture(ability.get_ability_texture())
			print("button: ", button)

func _on_inventory_item_removed(item, index):
	var button = get_child(index)
	if button != null:
		button.set_disabled(true)
		button.set_normal_texture(null)

func _on_ability_pressed(index : int):
	var inventory_item = Inventory.get_item_at_index(index)
	if inventory_item != null:
		execute_ability(inventory_item._get_ability())
		Inventory.remove_item(inventory_item)
		inventory_item.destroy_pickup()

func execute_ability(ability):
	if ability != null:
		if ability.should_use_on_knight():
			ability._use_ability(get_knight())
		else:
			ability._use_ability(get_manny())
