extends Control

func _ready():
	if TutorialManager.do_claim_tutorial:
		TutorialManager.do_claim_tutorial = false
		# TODO: TTS + signal on finish
	else:
		hide()
