import "./styles.css";
import "./sideContent.js";

import listItems from "./data.json";
import createCard from "./createCard.js";

class newData {
	constructor(title, description, dueDate, priority, check) {
			this.title = title,
			this.description = description,
			this.dueDate = dueDate,
			this.priority = priority,
			this.check = check
	}
};

function initializePage() {
	for (let i = 0; i < Object.keys(listItems).length; i++) {
		let temp = listItems[Object.keys(listItems)[i]];
		createCard(new newData(temp["title"], temp["description"],
			temp["dueDate"], temp["priority"], temp["check"]), 
					Object.keys(listItems)[i]);
	}
}

initializePage();

let openModal = document.querySelector(".userBtn");
let modal = document.querySelector("dialog");
let form = document.querySelector("dialog form");
let closeBtn = document.querySelector(".modalCloseBtn");

openModal.addEventListener("click", () => {
	modal.showModal();
});	

form.addEventListener("submit", (e) => {
	console.log(e.target);
	createCard(new newData(
		e.target.querySelector("#title").value,
		e.target.querySelector("#description").value,
		e.target.querySelector("#dueDate").value,
		e.target.querySelector("#priority").value,
		e.target.querySelector("#check").value)
	, Math.floor(Math.random() * 100000).toString());;
	for (let i=0; i < 5; i++) {
		console.log(["#title", "#description", "#dueDate", 
			"#priority", "#check"][i]);
		e.target.querySelector(
			["#title", "#description", "#dueDate", "#priority",
				"#check"][i]).value = "";
	}	
});

closeBtn.addEventListener("click", () => {modal.close()});


















