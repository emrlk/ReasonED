extends Sprite

export var character_name = "Character"

func was_click_on_item(event):
	if event is InputEventMouseButton and event.pressed and event.button_index == BUTTON_LEFT:
		if get_rect().has_point(to_local(event.position)):
			return true
	return false

func get_player_character():
	return get_tree().get_root().find_node(character_name, true, false)

func get_character_inventory(character):
	return character.find_node("Inventory", true, false)

func _input(event):
	if was_click_on_item(event):
		var inventory = get_character_inventory(get_player_character())
		inventory.add_item(get_parent())
