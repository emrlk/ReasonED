extends Node2D

var max_health = 500
var current_health = max_health
var health_bar
var health_label
var mouseOnEnemy = false
onready var area2D = get_node("Knight/KinematicBody2D/Area2D")

func _ready():
	#Find health bar and label child nodes
	health_bar = get_node("Knight/KnightHealthBar")
	health_label = get_node("Knight/KnightHealthBar/HealthValue")
	
	#Set initial health to max
	update_bar_and_label()
	

func _input(event):
	# Check if it's a mouse button press event
		if event is InputEventMouseButton:
			if event.is_pressed() and event.button_index == BUTTON_LEFT:
				if current_health > 0:
					# Reduce health when clicked
					take_damage(5)
				
				else:
					pass#play dying animation and display defeat image


# Method to reduce health
func take_damage(amount):
	current_health -= amount
	update_bar_and_label()
	

# Update the health bar
func update_bar_and_label():
	health_bar.value = current_health
	health_label.text = str(current_health)
	
	
func _on_mouse_entered():
	mouseOnEnemy = true;
	print("Mouse on enemy")
	


func _on_mouse_exited():
	mouseOnEnemy = false;




func _on_KinematicBody2D_mouse_entered():
	mouseOnEnemy = true;
	print("Mouse on enemy")

