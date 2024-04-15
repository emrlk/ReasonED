extends Area2D


export var minimum_artifacts = int(4)


func _ready():
	pass # Replace with function body.

func entered_body_is_manny(body) -> bool:
	return body.get_name() == "Manny"

func manny_has_required_artifacts() -> bool:
	return Inventory.get_num_of_items() >= minimum_artifacts

func _on_Area2D_body_entered(body):
	if entered_body_is_manny(body):
		if manny_has_required_artifacts():
			print("Manny has artifacts: ", Inventory.get_num_of_items())
		else:
			print("Manny does NOT have enough artifacts")
