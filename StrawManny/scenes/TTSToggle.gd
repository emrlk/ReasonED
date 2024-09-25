extends CheckButton

# Declare the exported variable
export var bus_name: String

var bus_index: int

func _ready() -> void:
	# Get the index of the audio bus
	bus_index = AudioServer.get_bus_index(bus_name)

	# Connect the toggled signal of the toggle switch to _on_toggle_toggled function
	connect("toggled", self, "_on_toggle_toggled")
	
	# Set the initial state of the toggle switch based on the volume of the audio bus
	var volume = AudioServer.get_bus_volume_db(bus_index)
	if volume > -80:  # If volume is not muted
		pressed = true

func _on_toggle_toggled(button_pressed: bool) -> void:
	if button_pressed:
		# Unmute the audio bus by setting the volume to a value greater than -80 dB
		AudioServer.set_bus_volume_db(bus_index, 0)
	else:
		# Mute the audio bus by setting the volume to -80 dB
		AudioServer.set_bus_volume_db(bus_index, -80)
