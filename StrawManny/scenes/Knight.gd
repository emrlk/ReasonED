extends Node2D

onready var max_health = 500
onready var current_health = max_health
var health_bar
var health_label
onready var mouseOnEnemy = false
onready var basicAttackDmg = 10

onready var area2D = get_node("KinematicBody2D/Area2D")
onready var scorecard = get_node("Knight_defeated")

func _ready():
	scorecard.visible = false;
	area2D.connect("mouse_entered", self, "on_mouse_entered")
	
	#Find health bar and label child nodes
	health_bar = get_node("KnightHealthBar")
	health_label = get_node("KnightHealthBar/HealthValue")
	
	#Set initial health to max
	update_bar_and_label()
	
	
#Handles player clicking (basic attacks)
func _input(event):
	# Check if it's a mouse button press event
		if event is InputEventMouseButton:
			if event.is_pressed() and event.button_index == BUTTON_LEFT:
				if current_health > basicAttackDmg: 
					# Reduce health when clicked
					take_damage(basicAttackDmg)
				
				else:
					#Play 
					show_scorecard()


# Reduce health
func take_damage(amount):
	current_health -= amount
	update_bar_and_label()
	

# Update the health bar progress and the label value
func update_bar_and_label():
	health_bar.value = current_health
	health_label.text = str(current_health)
	
func show_scorecard():
	scorecard.visible = true;
	

#Not working (mouse enter not being detected?)
func _on_Area2D_mouse_entered():
	mouseOnEnemy = true;
	print("Mouse on enemy") 
	

#Also Not working 
func _on_Area2D_mouse_exited():
	mouseOnEnemy = false;
	print("Mouse off enemy") 

