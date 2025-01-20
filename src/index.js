let storage = window["localStorage"];


if (storage["storage"]) {
	console.log("Storage Exists");
} else {
	console.log("Data does not exist; creating Storage");
	storage.setItem("storage", JSON.stringify(
	{
		"Default": {
			"name": "Default",
			"cards": {
			},
		}
	}))
}

let data = JSON.parse(storage["storage"]);
console.log(data);
