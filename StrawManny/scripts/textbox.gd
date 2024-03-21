extends MarginContainer

var text
var cur_letter_index
onready var label = $MarginContainer/Label
onready var timer = $LetterTimer

signal text_finished_displaying

func _ready():
	pass # Replace with function body.
	
func start_text_display(text_to_display : String):
	text = text_to_display
	cur_letter_index = 0
	
	# This will start the letter timer
	_add_letter_to_display()

func _add_letter_to_display():
	label.text += text[cur_letter_index]
	cur_letter_index += 1
	if (cur_letter_index >= text.length()):
		emit_signal("text_finished_displaying")
		return
	timer.start(0.03)

func _on_letter_timer_timeout():
	_add_letter_to_display()
