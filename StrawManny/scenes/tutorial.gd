extends Control


# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	var text = "Welcome to Straw Manny! Enemy knights are scattered around the map. Find them and contest their logical assertions. Use ability powerups you find to defeat them in combat and level up. Good luck!"
	var speed = 0.9
	yield($TextToSpeech.say(text, TextToSpeechEngine.VOICE_AEW, speed), "completed")



# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
