extends Control

onready var textLabel = get_node("MarginContainer/VBoxContainer/Text")
onready var okButton = get_node("MarginContainer/VBoxContainer/HBoxContainer/OKButton")

signal overworld_tutorial_finished

func _ready():
	if TutorialManager.do_overworld_tutorial:
		TutorialManager.do_overworld_tutorial = false
		okButton.connect("pressed", self, "_on_ok_pressed")
		_do_tts()
	else:
		_on_ok_pressed()

func _do_tts():
	var speed = 1
	yield($TextToSpeech.say(textLabel.text, TextToSpeechEngine.VOICE_AEW, speed), "completed")

func _on_ok_pressed():
	emit_signal("overworld_tutorial_finished")
	queue_free()
