extends Node

var NUM_TUTORIALS = int(2)
var flags = Array()

func set_tutorial_flags():
	flags.resize(NUM_TUTORIALS)
	for i in NUM_TUTORIALS:
		flags[i] = true

func clear_tutorial_flags():
	flags.resize(NUM_TUTORIALS)
	for i in NUM_TUTORIALS:
		flags[i] = false
