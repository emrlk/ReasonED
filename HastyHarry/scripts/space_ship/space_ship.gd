extends Area2D


export var minimum_artifacts = int(6)

onready var notification = $Notification
onready var timer = $Timer

func _ready():
	notification.hide()
	timer.connect("timeout", self, "_on_timer_timeout")
	pass # Replace with function body.

func _on_timer_timeout():
	timer.stop()
	notification.hide()

func entered_body_is_manny(body) -> bool:
	return body.get_name() == "Manny"

func manny_has_required_artifacts() -> bool:
	return Inventory.get_num_of_items() >= minimum_artifacts

func get_remaining_artifact_count() -> int:
	return minimum_artifacts - Inventory.get_num_of_items()

func manage_notification(wait_time, text):
	notification.show()
	notification.text = text
	timer.wait_time = wait_time
	timer.start()

func enter_ship():
	pass # change scene to spacehip level with harry here

func _on_Area2D_body_entered(body):
	if entered_body_is_manny(body):
		if manny_has_required_artifacts():
			enter_ship()
		else:
			var remaining_artifacts = get_remaining_artifact_count()
			manage_notification(2.0, "Manny does NOT have enough artifacts, he must find " + str(remaining_artifacts) + " more")

