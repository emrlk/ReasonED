extends KinematicBody2D


# Declare member variables here. Examples:
export var idle_animation = String("idle")
export var strike_animation = String("Strike")
onready var animation = $AnimatedSprite
onready var inventory = $Inventory

func play_locomotion_animation(animation_to_play : String):
	animation.play(animation_to_play)
# Called when the node enters the scene tree for the first time.
func _ready():
	play_locomotion_animation(idle_animation)


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
