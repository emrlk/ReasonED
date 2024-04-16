extends Control

onready var textLabel = get_node("MarginContainer/VBoxContainer/Text")
onready var okButton = get_node("MarginContainer/VBoxContainer/HBoxContainer/OKButton")

func _ready():
	if TutorialManager.do_claim_tutorial:
		TutorialManager.do_claim_tutorial = false
		# TODO: TTS
		okButton.connect("pressed", self, "_on_ok_pressed")
	else:
		_on_ok_pressed()

func _on_ok_pressed():
	queue_free()
