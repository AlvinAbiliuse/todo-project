import { sidebar, cards } from "./sidebar.js";

import { rightContainer, populateMain, expandCard } from 
	"./mainContents.js";

import "./styles.css";


let storage = window["localStorage"];

function initialize() {
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
	}
};

initialize();
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

let sidebarBtn = document.querySelector(".sideBarCards");

sidebarBtn.addEventListener("click", (e) => {
	console.log(e.target);
	if (e.target.className == "complete") {
		let tempStorage = JSON.parse(storage[e.target.parentNode.
			parentNode.querySelector("h2").textContent]);
		console.log(tempStorage);
		if (e.target.parentNode.parentNode.classList.contains(
			"completed")) {
			e.target.parentNode.parentNode.className = "sideCard";
			tempStorage.completed = "no";
			storage[tempStorage.name] = JSON.stringify(
				tempStorage);
			data = tempStorage;
			populateMain(data);
		} else {
			e.target.parentNode.parentNode.className = 
				"sideCard completed";
			tempStorage.completed = "yes";
			storage[tempStorage.name] = JSON.stringify(
				tempStorage);
			data = tempStorage;
			populateMain(data);
		}
	} else if (e.target.className == "delete") {
		storage.removeItem(e.target.parentNode.parentNode.
			querySelector("h2").textContent);
		cards(storage);
		if (storage.length > 0) {
			populateMain(data);
			data = JSON.parse(storage[Object.keys(storage)[0]]);
		} else {
			document.querySelector(".topBar h2").textContent = "";
			document.querySelector(".mainCards").innerHTML = "";
		}
		
	}
});	


completeBtn.addEventListener("click", (e) => {
		console.log(e.target.parentNode.parentNode);
	if (e.target.parentNode.parentNode.classList.contains(
		"sideCard")) {
		if (e.target.parentNode.parentNode.classList.contains(
			"completed")) {
		}
	}
});










