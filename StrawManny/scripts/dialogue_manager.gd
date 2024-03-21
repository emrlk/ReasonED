extends Node

onready var textbox_scene = preload("res://scenes/textbox.tscn")
onready var dialogue_scene = preload("res://scenes/dialogue.tscn")
var cur_textbox = null
var text_array
var line_finished
var cur_line
var textbox_pos : Vector2

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

func is_active():
	return cur_textbox != null

func open_textbox(text_to_display : Array, pos : Vector2):
	cur_line = 0
	textbox_pos = pos
	text_array = text_to_display
	_show_textbox()

func _show_textbox():
	line_finished = false
	cur_textbox = textbox_scene.instance()
	get_tree().root.add_child(cur_textbox)
	cur_textbox.connect("text_finished_displaying", self, "_on_text_finished_displaying")
	cur_textbox.set_global_position(textbox_pos)
	cur_textbox.start_text_display(text_array[cur_line])

func _on_text_finished_displaying():
	# Allow user to move on to the next line
	line_finished = true

func _unhandled_input(event):
	if (!is_active()):
		return
	
	if (event.is_action_pressed("ui_cancel") && line_finished):
		# Move on to the next line of dialogue
		cur_textbox.queue_free()
		cur_line += 1
		if (cur_line < text_array.size()):
			_show_textbox()
		else:
			cur_textbox = null
