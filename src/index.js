import { sidebar, cards } from "./sidebar.js";

import { rightContainer, populateMain } from 
	"./mainContents.js";

import "./styles.css";


let storage = window["localStorage"];

function initialize() {
	if (storage.length > 1) {
		console.log("Storage Exists");
	} else {
		console.log("Data does not exist; creating Storage");
		storage.setItem("Default", JSON.stringify(
		{
			"name": "Default",
			"cards": [],
			"completed": "no"
		}))
		storage.setItem("current", JSON.stringify(
		{
			"name": "current",
			"current": "Default",
		}))	
	}
};

initialize();

let current = JSON.parse(storage["current"])["current"]
let data = JSON.parse(storage[current]);


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


let itemAddModal = document.querySelector(".itemAddModal");
let itemAdd = document.querySelector(".itemAdd");
let itemSubmit = document.querySelector(".itemSubmitBtn");
itemAdd.addEventListener("click", () => {
	let cDate = new Date();
	let month, day;
	if (cDate.getMonth() + 1 < 10) {
		month = "0" + (cDate.getMonth() + 1);
	} else {
		month = cDate.getMonth();
	}
	if (cDate.getDay() > 10) {
		day = "0" + cDate.getDate();
	} else {
		day = cDate.getDate();
	}
	let fDate = `${cDate.getFullYear()}-${month}-${day}`;

	console.log(fDate);
	document.querySelector(".titleInput").value = "";
	document.querySelector(".descriptionInput").value = "";
	
	document.querySelector(".dueDateInput").value = fDate;
	document.querySelector(".priorityInput").value = 0;

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
		let tempCurr = JSON.parse(storage["current"]);
		tempCurr.current = temp;
		storage["current"] = JSON.stringify(tempCurr)
		data = JSON.parse(storage[temp]);
		populateMain(data);
	}
});

let sidebarBtn = document.querySelector(".sideBarCards");

sidebarBtn.addEventListener("click", (e) => {
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
			data = JSON.parse(storage[Object.keys(storage)[0]]);
			populateMain(data);
		} else {
			document.querySelector(".topBar h2").textContent = "";
			document.querySelector(".mainCards").innerHTML = "";
		}
		
	}
});	


function expandCards(data) {
	console.log(data);
	
	document.querySelector(".infoTitle").textContent = 
		`Name: ${data.name}`;
	document.querySelector(".infoDescription").textContent  = 
		`Description: ${data.description}`;
	document.querySelector(".infoDueDate").textContent = 
		`Due Date: ${data.dueDate}`;
	document.querySelector(".infoPriority").textContent = 
		`Priority: ${data.priority}`;

	let infoModal = document.querySelector(".infoModal");
	infoModal.showModal();
}

let mainCardButtons = document.querySelector(".mainCards");

mainCardButtons.addEventListener("click", (e) => {
	if (e.target.className == "completeBtn") {
		e.target.parentNode.parentNode.classList.toggle(
			"completed");
		if (e.target.parentNode.parentNode.classList.contains(
			"completed")) {
			for (let i in data.cards) {
				if (data.cards[i].name == e.target.parentNode.
					parentNode.querySelector("h3").textContent) {
					console.log(data.cards[i]);
					if (data.cards[i].completed == "no") {
						data.cards[i].completed = "yes";
					} else if (data.cards[i].completed == "yes") {
						data.cards[i].completed = "no";
					}
				}
			}
		} else {
			for (let i in data.cards) {
				if (data.cards[i].name == e.target.parentNode.
					parentNode.querySelector("h3").textContent) {
					console.log(data.cards[i]);
					if (data.cards[i].completed == "no") {
						data.cards[i].completed = "yes";
					} else if (data.cards[i].completed == "yes") {
						data.cards[i].completed = "no";
					}
				}
			}
		}
	storage[data.name] = JSON.stringify(data);
		
	} else if (e.target.className == "removeBtn") {
		let removed = 0;
		for (let i in data.cards) {
			if (e.target.parentNode.parentNode.querySelector("h3").
				textContent == data.cards[i].name) {
				console.log(data.cards[i].name);
				console.log(i - removed);
				data.cards.splice(i - removed, (i + 1) - removed);
				removed++
			}
		}
		e.target.parentNode.parentNode.remove();
		storage[data.name] = JSON.stringify(data);
		console.log(data.cards);


	} else if (e.target.className == "editBtn") {
		console.log(e.target);

	} else if (e.target.classList.contains("card")) {
		let cardData;
		for (let i in data["cards"]) {
			if (data["cards"][i]["name"] == e.target.
				querySelector("h3").textContent) {
				cardData = data["cards"][i]
			}
		}
	
		expandCards(cardData);
	
	} else if (e.target.nodeName == "H3") {
		let cardData;
		for (let i in data["cards"]) {
			if (data["cards"][i]["name"] == e.target.textContent) {
				cardData = data["cards"][i]
			}
		}
		expandCards(cardData);
	

	}
});




