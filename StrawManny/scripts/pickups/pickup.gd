extends Area2D

signal picked_up(inventory)

onready var collision_shape = $CollisionShape2D

export var can_be_picked_up = bool(true)
export var is_instant_powerup = bool(false)

var picked_up = bool(false)


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


func is_picked_up() -> bool:
	return picked_up


func is_powerup() -> bool:
	return is_instant_powerup


func allowed_to_be_picked_up() -> bool:
	return can_be_picked_up and !picked_up
	

func pickup(player_inventory):
	if allowed_to_be_picked_up() and player_inventory != null:
		player_inventory.add_item(self)
		emit_signal("picked_up", player_inventory)
		self.hide()
		picked_up = true


func _on_Area2D_body_entered(body):
	pickup(body.find_node("Inventory", true, false))
