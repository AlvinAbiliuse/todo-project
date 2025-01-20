import { sidebar } from "./sidebar.js";
import "./styles.css";


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
			"completed": {
			}
		}
	}))
}

let data = JSON.parse(storage["storage"])["Default"];
console.log(data);


sidebar(JSON.parse(storage["storage"]));

let newProject = document.querySelector(".newProjectButton");
let modal = document.querySelector(".sidebar dialog");


newProject.addEventListener("click", () => {
		modal.showModal();
});
		
