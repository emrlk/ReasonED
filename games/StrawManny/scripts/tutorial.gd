extends Control

onready var textLabel = get_node("MarginContainer/VBoxContainer/Text")
onready var okButton = get_node("MarginContainer/VBoxContainer/HBoxContainer/OKButton")

signal tutorial_finished

func _ready():
	# Kinda a hack... is there a better way to do this?
	var id = get_node("ID").process_priority
	if TutorialManager.flags[id]:
		TutorialManager.flags[id] = false
		okButton.connect("pressed", self, "_on_ok_pressed")
		_do_tts()
	else:
		# Don't destroy the tutorial immediately, as anything dependent on the signal
		# may not have initialized yet
		call_deferred("_on_ok_pressed")

func _do_tts():
	var speed = 1
	yield($TextToSpeech.say(textLabel.text, TextToSpeechEngine.VOICE_AEW, speed), "completed")

func _on_ok_pressed():
	emit_signal("tutorial_finished")
	queue_free()
