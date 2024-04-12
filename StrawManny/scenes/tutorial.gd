extends Control

onready var textLabel = get_node("MarginContainer/VBoxContainer/Text")

func _ready():
	var speed = 1
	yield($TextToSpeech.say(textLabel.text, TextToSpeechEngine.VOICE_AEW, speed), "completed")


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
