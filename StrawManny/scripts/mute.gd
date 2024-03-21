extends TextureButton

var main_bus = AudioServer.get_bus_index('Master')

func _on_Volume_pressed():
	AudioServer.set_bus_mute(main_bus, not AudioServer.is_bus_mute(main_bus))
