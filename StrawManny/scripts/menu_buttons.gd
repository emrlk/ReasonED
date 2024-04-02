extends TextureButton

func _on_Tutorial_pressed():
	var tutorial = preload('res://scenes/Level1.tscn')
	var _result = get_tree().change_scene_to(tutorial)

