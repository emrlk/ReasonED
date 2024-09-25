extends Node

onready var textbox_scene = preload("res://scenes/textbox.tscn")
onready var textoverlay_scene = preload("res://scenes/textoverlay.tscn")
var cur_text_obj = null
var cur_textbox = null
var text_array
var line_finished
var cur_line

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

func is_active():
	return cur_textbox != null

func open_textoverlay(text_to_display : Array, pos : Vector2):
	cur_text_obj = textoverlay_scene.instance()
	get_tree().root.add_child(cur_text_obj)
	cur_textbox = cur_text_obj.get_node("TextBox")
	_init_textbox(text_to_display, pos)

func open_textbox(text_to_display : Array, pos : Vector2):
	cur_text_obj = textbox_scene.instance()
	get_tree().root.add_child(cur_text_obj)
	cur_textbox = cur_text_obj
	_init_textbox(text_to_display, pos)

func _init_textbox(text_to_display : Array, pos : Vector2):
	cur_line = 0
	text_array = text_to_display
	cur_text_obj.set_global_position(pos)
	cur_textbox.connect("text_finished_displaying", self, "_on_text_finished_displaying")
	
	_show_line_of_text()

func _show_line_of_text():
	line_finished = false
	cur_textbox.start_text_display(text_array[cur_line])

func _on_text_finished_displaying():
	# Allow user to move on to the next line
	line_finished = true

func _cleanup_text_obj():
	cur_text_obj.queue_free()
	cur_text_obj = null
	cur_textbox = null
	emit_signal("dialogue_finished")

func _unhandled_input(event):
	if (!is_active()):
		return
	
	if (event.is_action_pressed("ui_cancel") && line_finished):
		# Move on to the next line of dialogue
		cur_line += 1
		if (cur_line < text_array.size()):
			_show_line_of_text()
		else:
			_cleanup_text_obj()
