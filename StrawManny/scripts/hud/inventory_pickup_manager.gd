extends Node


func get_manny():
	return owner.get_parent()

# Called when the node enters the scene tree for the first time.
func _ready():
	get_manny().get_inventory().connect("item_added", self, "_on_inventory_item_added")
	get_manny().get_inventory().connect("item_removed", self, "_on_inventory_item_removed")

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
	get_manny().execute_ability(index)
