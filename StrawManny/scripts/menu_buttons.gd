extends TextureButton

func _on_Tutorial_pressed():
	start_level1()
	TutorialManager.set_tutorial_flags()

func _on_Play_pressed():
	start_level1()
	TutorialManager.clear_tutorial_flags()

func start_level1():
	var _result = get_tree().change_scene_to(MannyData.current_level)
