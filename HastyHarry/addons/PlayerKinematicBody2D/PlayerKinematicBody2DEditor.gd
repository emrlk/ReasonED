tool
extends EditorPlugin


func _enter_tree():
	add_custom_type("PlayerKinematicBody2D", "KinematicBody2D", preload("PlayerKinematicBody2D.gd"), preload("res://icon.png"))


func _exit_tree():
	remove_custom_type("MyButton")
