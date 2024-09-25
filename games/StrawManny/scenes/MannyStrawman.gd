extends KinematicBody2D


# Declare member variables here. Examples:
export var idle_animation = String("idle")
export var strike_animation = String("Strike")
onready var animation = $AnimatedSprite
onready var inventory = $Inventory
onready var timer = $Timer
onready var textPanel = $strawmanDefeatPanel
var hasIdled = false

func play_locomotion_animation(animation_to_play : String):
	animation.play(animation_to_play)
# Called when the node enters the scene tree for the first time.
func _ready():
	textPanel.hide()
	animation.play("Strike")
	MannyData.decrease_manny_health(2)


func _on_Timer_timeout():
		textPanel.show()
		print(MannyData.health)
		
		if MannyData.health <= 0:
			var next_scene = preload('res://scenes/GameOver.tscn')
			get_tree().change_scene_to(next_scene)


func _on_AnimatedSprite_animation_finished():
	if hasIdled == false:
		animation.play("idle")
		hasIdled = true
