extends Control

onready var textLabel = get_node("MarginContainer/VBoxContainer/Text")

func _ready():
	if TutorialManager.do_overworld_tutorial:
		TutorialManager.do_overworld_tutorial = false
		var speed = 1
		_do_tts()
	else:
		hide()

func _do_tts():
	var speed = 1
	yield($TextToSpeech.say(textLabel.text, TextToSpeechEngine.VOICE_AEW, speed), "completed")

# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
