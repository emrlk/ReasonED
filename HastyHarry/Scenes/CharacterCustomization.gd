extends Node2D

const root_path = "res://Assets/Characters/Harry/"

onready var body_sprite = $CompositionSprite/Body
onready var hair_sprite = $CompositionSprite/Hair
onready var spacesuit_sprite = $CompositionSprite/Shirt

onready var hair_color_label = get_node("../MarginContainer/HBoxContainer/VBoxContainer/Head/HairColor")
onready var body_color_label = get_node("../MarginContainer/HBoxContainer/VBoxContainer/Body/BodyColor")
onready var spacesuit_color_label = get_node("../MarginContainer/HBoxContainer/VBoxContainer/Spacesuit/SpacesuitColor")

var body_index = 0
var hair_index = 0
var spacesuit_index = 0

const type_index = 0
const name_index = 1
const color_index = 2
const path_index = 3

var harry_hair_data = {}
var harry_body_data = {}
var harry_spacesuit_data = {}

func _ready():
	load_character_data()
	set_character_textures()
	set_label_color_text()

	
func load_character_data():
	var file = File.new()
	file.open(root_path + "HarryCustomization.csv", file.READ)
	file.get_csv_line()# skip the first line containing data about each column
	while !file.eof_reached():
		var data = Array(file.get_csv_line())
		match data[type_index]:
			"Hair":
				harry_hair_data[harry_hair_data.size()] = data
			"Body":
				harry_body_data[harry_body_data.size()] = data
			"Spacesuit":
				harry_spacesuit_data[harry_spacesuit_data.size()] = data
		
	print(harry_body_data)
	file.close()

func set_character_textures():
	body_sprite.texture = load(root_path + harry_body_data[body_index][path_index])
	hair_sprite.texture = load(root_path + harry_hair_data[hair_index][path_index])
	spacesuit_sprite.texture = load(root_path + harry_spacesuit_data[spacesuit_index][path_index])
	print(root_path + harry_body_data[body_index][path_index])
	
func set_label_color_text():
	if hair_color_label != null:
		hair_color_label.text = harry_hair_data[hair_index][color_index]
	if body_color_label != null:
		body_color_label.text = harry_body_data[body_index][color_index]
	if spacesuit_color_label != null:
		spacesuit_color_label.text = harry_spacesuit_data[spacesuit_index][color_index]

func _on_B_HairIncrease_pressed():
	hair_index += 1
	if hair_index >= harry_hair_data.size():
		hair_index = 0
	set_character_textures()
	set_label_color_text()

func _on_B_HairDecrease_pressed():
	hair_index -= 1
	if hair_index < 0:
		hair_index = harry_body_data.size() - 1
	set_character_textures()
	set_label_color_text()

func _on_B_BodyIncrease_pressed():
	body_index += 1
	if body_index >= harry_body_data.size():
		body_index = 0
	set_character_textures()
	set_label_color_text()

func _on_B_BodyDecrease_pressed():
	body_index -= 1
	if body_index < 0:
		body_index = harry_body_data.size() - 1
	set_character_textures()
	set_label_color_text()

func _on_B_SpacesuitIncrease_pressed():
	spacesuit_index += 1
	if spacesuit_index >= harry_spacesuit_data.size():
		spacesuit_index = 0
	set_character_textures()
	set_label_color_text()

func _on_B_SpacesuitDecrease_pressed():
	spacesuit_index -= 1
	if spacesuit_index < 0:
		spacesuit_index = harry_spacesuit_data.size() - 1
	set_character_textures()
	set_label_color_text()
