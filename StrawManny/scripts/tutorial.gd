extends TextureButton

func _on_OKButton_pressed():
	# Destroy the tutorial box
	# TODO: better way to do this?
	emit_signal("tutorial_finished");
	get_parent().get_parent().get_parent().get_parent().queue_free()
