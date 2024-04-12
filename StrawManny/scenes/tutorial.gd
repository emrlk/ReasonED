extends Control


# Declare member variables here. Examples:
# var a = 2
# var b = "text"
onready var textLabel = get_node("MarginContainer/VBoxContainer/Text")

# Called when the node enters the scene tree for the first time.
func _ready():
	var speed = 1
	yield($TextToSpeech.say(textLabel.text, TextToSpeechEngine.VOICE_AEW, speed), "completed")



# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
