extends Node2D

onready var max_health = 500
onready var current_health = max_health
var health_bar
var health_label
onready var mouseOnEnemy = false
onready var basicAttackDmg = 10
var extra_damage_active = false
var extra_damage_timer = null
onready var descriptionLabel = $AbilityDescriptionPanel/Label
onready var timerLabel = $Timer/Label



onready var scorecard = get_node("Knight_defeated")

func _ready():
	scorecard.visible = false;
	descriptionLabel.get_parent().hide()
	timerLabel.hide()
	
	# Find health bar and label child nodes
	health_bar = get_node("KnightHealthBar")
	health_label = get_node("KnightHealthBar/HealthValue")
	
	# Set initial health to max
	update_bar_and_label()
	

# Handles player clicking (basic attacks)
func _input(event):
	# Check if it's a mouse button press event
	if mouseOnEnemy && event is InputEventMouseButton:
		if event.is_pressed() and event.button_index == BUTTON_LEFT:
			if extra_damage_active and current_health > (basicAttackDmg + 10):
					take_damage(basicAttackDmg + 10) # Apply extra damage if timer is active
			else:
				if current_health >= basicAttackDmg:
					take_damage(basicAttackDmg)
			
			if current_health <= 0:
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

func _on_KinematicBody2D_mouse_entered():
	mouseOnEnemy = true;
	print("Mouse on enemy _on_KinematicBody2D_mouse_entered") 

func _on_KinematicBody2D_mouse_exited():
	mouseOnEnemy = false;
	print("Mouse off enemy _on_KinematicBody2D_mouse_exited") 



#COMBAT ABILITY FUNCTIONS-----------------------------------------------------

# Starts the timer for the extra damage duration
func start_extra_damage_timer(duration):
	extra_damage_timer = $Timer
	extra_damage_timer.set_wait_time(duration)
	extra_damage_timer.connect("timeout", self, "_on_extra_damage_timer_timeout")
	extra_damage_timer.start()
	extra_damage_active = true
	timerLabel.show()

# Stops the timer for the extra damage duration
func stop_extra_damage_timer():
	if extra_damage_timer != null:
		extra_damage_timer.stop()
		extra_damage_timer.queue_free()
		extra_damage_active = false

# Called when the extra damage timer expires
func _on_extra_damage_timer_timeout():
	extra_damage_active = false
	descriptionLabel.hide()
	descriptionLabel.get_parent().hide()
	timerLabel.hide()
	
#Describe the effect of a clicked ability for a given duration
func describeAbility(description, abilityDuration):
	descriptionLabel.text = description
	descriptionLabel.get_parent().show()
	descriptionLabel.show()


func _process(delta):
	if $Timer.time_left >=0:
		timerLabel.text = "%d:%02d" % [floor($Timer.time_left / 60), int($Timer.time_left) % 60]
