import { sidebar, cards } from "./sidebar.js";

import { rightContainer, populateMain, expandCard } from 
	"./mainContents.js";

import "./styles.css";


let storage = window["localStorage"];


if (storage.length > 0) {
	console.log("Storage Exists");
} else {
	console.log("Data does not exist; creating Storage");
	storage.setItem("Default", JSON.stringify(
	{
		"name": "Default",
		"cards": [],
		"completed": "no"
	}))
};
let data = JSON.parse(storage["Default"]);


sidebar(storage);
cards(storage);
rightContainer();
populateMain(data);






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
		"cards": [],
		"completed": "",
	};
	storage.setItem(name, JSON.stringify(obj));
	data = JSON.parse(storage[name]);
	cards(storage);
	populateMain(data);
});


let newItemModal = "";
let itemAddModal = document.querySelector(".itemAddModal");
let itemAdd = document.querySelector(".itemAdd");
let itemSubmit = document.querySelector(".itemSubmitBtn");
itemAdd.addEventListener("click", () => {
	itemAddModal.showModal();
});

itemSubmit.addEventListener("click", (e) => {
	let tempData = e.target.parentNode;
	let currentProject = document.querySelector(".topBar h2").
		textContent;
	data["cards"].push({
		"name": tempData.querySelector(".titleInput").value,
		"description": tempData.querySelector(
			".descriptionInput").value,
		"dueDate": tempData.querySelector(".dueDateInput").value,
		"priority": tempData.querySelector(".priorityInput")
			.value,
		"completed": "no",
	});
	tempData.querySelector(".titleInput").value = "";
	tempData.querySelector(".descriptionInput").value = "";
	tempData.querySelector(".dueDateInput").value = "";
	tempData.querySelector(".priorityInput").value = "";
	storage[currentProject] = JSON.stringify(data);
	populateMain(data);

	itemAddModal.close();
});


let sidebarCards = document.querySelector(".sidebar");
sidebarCards.addEventListener("click", (e) => {
	if (e.target.parentNode.className == "sideCard" || 
		e.target.parentNode.classList.contains("sideCard")) {
		let temp = e.target.parentNode.querySelector("h2").
			textContent;
		data = JSON.parse(storage[temp]);
		populateMain(data);
	}
});

let deleteBtn = document.querySelector(".delete");
let completeBtn = document.querySelector(".complete");












