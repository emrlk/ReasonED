extends TextureButton


func _pressed():
	Inventory.prepare_items_to_change_scene()
	get_tree().change_scene_to(MannyData.current_level)
