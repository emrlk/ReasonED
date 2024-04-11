extends Control

var text_display_scene
var current_question
var current_level
var random_question

# Define Question class
class Question:
	var text: String
	var difficulty: String
	var answers: Array
	
	func _init(text, difficulty, answers):
		self.text = text
		self.difficulty = difficulty
		self.answers =  answers

# Initialize question list (TBC)
var questions = [
	Question.new("Wheat is an effective crop for our farmers to grow.", "easy", 
		["How could you think it's the most effective crop?",
		 "Not everyone needs to switch their fields just to grow wheat.",
		 "Do you think that kingdoms should prioritize growing wheat?"]),
	Question.new("Swords are a popular choice among knights.", "easy", 
		["You know that knights choose weapons other than swords, right?",
		 "So you think every knight needs a sword?",
		 "Do you think other weapons would’ve been effective for knights?"]),
	Question.new("Castles are very important to protect societies from invaders.", "easy", 
		["So you think every society needs a castle in order to survive?",
		 "Why do you think that all societies need castles to thrive? ",
		 "Do you think that castles were effective for most societies to build?"]),
	Question.new("Lutes and harps are popular instruments in medieval times.", "easy", 
		["So, you think every song should use lutes and harps in it?",
		 "You completely ignore the existence of other instruments, like drums or flutes!",
		 "Do you think more songs should incorporate lutes and harps?"]),
	Question.new("Knights are the epitome of nobility and honor in a kingdom.", "easy", 
		["Hey, knights are not the only noble people in a kingdom!",
		 "Regular citizens are not dishonorable!",
		 "Being knighted does not stop someone from acting dishonorable."]),
	Question.new("Witch hunts allowed societies to unite together to defend itself from perceived threats.", "intermediate", 
		["Why do you think that it’s ok to hunt people without evidence?",
		 "Anyone who agrees with witch hunts thinks it’s ok to punish those who are simply suspected of a crime.",
		 "Although hunts could unite a society, it is important to justify evidential reasons before enacting punishment. "]),
	Question.new("Trial by combat allows people to quickly settle disputes between themselves.", "intermediate",
		 ["People who agree with trial by combat simply glorify violence, and don’t care to solve disputes.",
		 "Supporters of trial by combat romanticize the tradition, and don’t want consequences for their actions.",
		 "Trial by combat could resolve situations quickly, but it won’t lead to reliable or fair outcomes in most scenarios."]),
	Question.new("Advanced question 1", "advanced", 
		["",
		 "",
		 ""]),
	Question.new("Advanced question 2", "advanced", 
		["",
		 "",
		 ""])
]

# Reference to the Label node for displaying the claims
onready var question_label = get_node("TextureRect/TextBoxContainer/MarginContainer/Label")

# Reference to the Labels of the Button nodes for answer choices
onready var answer_buttons = [
	get_node("AnswerButton1").get_node("Label"),
	get_node("AnswerButton2").get_node("Label"),
	get_node("AnswerButton3").get_node("Label")
]




# Function to display a question and its answer choices
func display_question(question: Question):
	current_question = question
	var text_display = text_display_scene.instance()
	add_child(text_display)
	text_display.start_text_display(question.text)
	
	
func display_answers(question: Question):
	var answers = question.answers
	var correct_answer_index = answers.size() - 1  # Index of the correct answer
	
	# Remove the correct answer from the array
	var shuffled_answers = answers.slice(0, correct_answer_index).duplicate()
	
	# Randomly select a position for the correct answer
	var correct_position = randi() % (shuffled_answers.size() + 1)
	
	# Insert the correct answer at the selected position
	shuffled_answers.insert(correct_position, answers[correct_answer_index])
	
	# Assign the shuffled answers to the buttons
	for i in range(answer_buttons.size()):
		answer_buttons[i].text = shuffled_answers[i]



# Hide answer choices
func hide_answer_choices():
	for button in answer_buttons:
		button.get_parent().visible = false
		button.visible = false

# Show answer choices
func show_answer_choices():
	for button in answer_buttons:
		button.get_parent().visible = true;
		button.visible = true


# Function to get a random question of a specific difficulty
func get_random_question(difficulty):
	var valid_questions = []
	for q in questions:
		if q.difficulty == difficulty:
			valid_questions.append(q)
	if valid_questions.size() > 0:
		var index = randi() % valid_questions.size()
		return valid_questions[index]
	else:
		return null


# Called when the node enters the scene tree for the first time
func _ready():
	# Hide answer choices initially
	hide_answer_choices()
	text_display_scene = preload("res://scenes/textbox.tscn")
	
	# Set the text of the text box to a random question based on the current level
	current_level = "easy" # Change this based on the current level
	random_question = get_random_question(current_level)
	
	# Connect signals for answer buttons
	for button in answer_buttons:
		button.get_parent().connect("pressed", self, "_on_answer_button_pressed")
	
	if random_question:
		display_question(random_question) #Begin question display
		$"Continue Button".show()
	else:
		question_label.text = "No question available for this difficulty."



func _on_Continue_Button_pressed():
	display_answers(random_question) #Begin Answer choice display
	show_answer_choices()
	$"Continue Button".hide()

# Handles answer button selection
func _on_answer_button_pressed():
	var selected_answer = get_selected_answer()
	var correct_answer = current_question.answers[current_question.answers.size() - 1]
	
	if selected_answer == correct_answer:
		#Switch to combat scene
		get_tree().change_scene("res://scenes/Combat.tscn")
	else:
		#Switch to straw man scene
		get_tree().change_scene("res://scenes/StrawMan.tscn")

#Retrieves the selected answer from the buttons
func get_selected_answer():
	for button in answer_buttons:
		if button.get_parent().pressed:
			return button.text
	return ""  # Return an empty string if no answer is selected

