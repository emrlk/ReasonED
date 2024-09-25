extends HSlider

# Declare the exported variable
export var bus_name: String

var bus_index: int

# Function to convert decibels to linear scale
func db_to_linear(db: float) -> float:
	return pow(10, db / 20)

# Function to convert linear scale to decibels
func linear_to_db(linear: float) -> float:
	return 20 * log(linear) / log(10)

func _ready() -> void:
	# Get the index of the audio bus
	bus_index = AudioServer.get_bus_index(bus_name)
	
	# Connect the value_changed signal of the slider to _on_value_changed function
	connect("value_changed", self, "_on_value_changed")
	
	# Set the initial value of the slider based on the volume of the audio bus
	value = db_to_linear(AudioServer.get_bus_volume_db(bus_index))

func _on_value_changed(value: float) -> void:
	# Convert the slider value to decibels and set the volume of the audio bus
	AudioServer.set_bus_volume_db(bus_index, linear_to_db(value))
