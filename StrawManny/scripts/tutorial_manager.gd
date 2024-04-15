extends Node

var do_overworld_tutorial = bool(false)
var do_claim_tutorial = bool(false)
var do_combat_tutorial = bool(false)

func set_tutorial_flags():
	do_overworld_tutorial = true
	do_claim_tutorial = true
	do_combat_tutorial = true

func clear_tutorial_flags():
	do_overworld_tutorial = false
	do_claim_tutorial = false
	do_combat_tutorial = false
