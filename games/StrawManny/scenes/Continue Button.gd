extends TextureButton


func _pressed():
	Inventory.prepare_items_to_change_scene()
	var tutorial = preload('res://scenes/Level1.tscn')
	get_tree().change_scene_to(tutorial)
