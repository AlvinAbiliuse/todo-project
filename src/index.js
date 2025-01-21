import { sidebar, cards } from "./sidebar.js";

import { rightContainer, populateMain, expandCard } from 
	"./mainContents.js";

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
		"completed": "no"
	}))
};

let data = JSON.parse(storage["Default"]);


sidebar(storage);
cards(storage);
rightContainer();
populateMain(JSON.parse(storage["Default"]));

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
	cards(storage);
});

let newItemModal = "";
let itemAddModal = document.querySelector(".itemAddModal");
let itemAdd = document.querySelector(".itemAdd");
let itemSubmit = document
itemAdd.addEventListener("click", () => {
	itemAddModal.showModal();
});






	
