import { sidebar } from "./sidebar.js";
import "./styles.css";


let storage = window["localStorage"];


if (storage) {
	console.log("Storage Exists");
} else {
	console.log("Data does not exist; creating Storage");
	storage.setItem("Default", JSON.stringify(
	{
		"name": "Default",
		"cards": {
		},
		"completed": {
		}
	}))
};
console.log(storage["Default"]);
let data = JSON.parse(storage["Default"]);
console.log(data);


sidebar(storage);

let newProject = document.querySelector(".newProjectButton");
let modal = document.querySelector(".sidebar dialog");
let newProjectButton = document.querySelector(
		".newProjectModal button");
let projectName = document.querySelector(
		".newProjectModal input");
newProject.addEventListener("click", () => {
		modal.showModal();
});
		
newProjectButton.addEventListener("click", () => {
	let name = projectName.value;
	projectName.value = "";
	modal.close();
	let obj = {
		"name": name,
		"cards": {
		},
		"completed": {
		}
	};
	storage.setItem(name, JSON.stringify(obj));
	sidebar(storage);
});









	
