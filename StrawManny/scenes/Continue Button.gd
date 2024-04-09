extends TextureButton


func _pressed():
	var tutorial = preload('res://scenes/Level1.tscn')
	get_tree().change_scene_to(tutorial)
