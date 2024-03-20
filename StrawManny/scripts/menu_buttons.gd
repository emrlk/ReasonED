extends TextureButton

func _on_Tutorial_pressed():
	var tutorial = preload('res://scenes/main.tscn')
	var _result = get_tree().change_scene_to(tutorial)

