extends Node

export(Texture) var artifact_texture = Texture

# Called when the node enters the scene tree for the first time.
func _ready():
	get_node("Image").texture = artifact_texture

func get_artifact_texture() -> Texture:
	return artifact_texture

# overrideable function to be used on all child scripts
func _get_artifact_data():
	print("GET THE ARTIFACT DATA HERE, OVERRIDEABLE JUST INCASE")
