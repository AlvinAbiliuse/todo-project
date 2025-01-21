import image from "./images/settings.svg"

export function rightContainer() {
	let container = document.querySelector(".mainContents");
	let topBar = document.createElement("div");
	topBar.className = "topBar";
	let leftItems = document.createElement("div");
	let header = document.createElement("h2");
	leftItems.appendChild(header);
	let addButton = document.createElement("button");
	addButton.className = "itemAdd";
	addButton.textContent = "+ Add";
	leftItems.appendChild(addButton);
	let img = document.createElement("img");
	img.className = "filter";
	img.setAttribute("src", image);
	topBar.appendChild(leftItems);
	topBar.appendChild(img);
	
	let modal = document.createElement("dialog");
	let title = document.createElement("label");
	let description = document.createElement("label");
	let dueDate = document.createElement("label");
	let priority = document.createElement("label");

	 
	let titleInput = document.createElement("input");
	let descriptionInput = document.createElement("textarea");
	let dueDateInput = document.createElement("input");
	let priorityInput = document.createElement("input");
	let submitButton = document.createElement("button");
	submitButton.className = "itemSubmitBtn";	
	submitButton.textContent = "Add To List";	

	modal.className = "itemAddModal";
	title.textContent = "Title: ";
	description.textContent = "Description: ";
	dueDate.textContent = "Due Date: ";
	priority.textContent = "Priority: ";
	

	modal.appendChild(title);
	modal.appendChild(titleInput);
	modal.appendChild(description);
	modal.appendChild(descriptionInput);
	modal.appendChild(dueDate);
	modal.appendChild(dueDateInput);
	modal.appendChild(priority);
	modal.appendChild(priorityInput);
	modal.appendChild(submitButton);
	topBar.appendChild(modal);	


	let mainCards = document.createElement("div");
	mainCards.className = "mainCards";
	container.appendChild(topBar);
	container.appendChild(mainCards);	
}

export function populateMain(data) {
	let header = document.querySelector(".topBar h2");
	header.textContent = data.name;
	let mainCards = document.querySelector(".mainCards");
	let obj = data["cards"];
	for (let i in obj) {
		let card = document.createElement("div");
		card.className = "card";
	
		let title = document.createElement("h3");
		title.textContent = obj[i]["name"];
		card.appendChild(title);
		let rightButtons = document.createElement("div");
		let removeBtn = document.createElement("button");
		removeBtn.className = "removeBtn";
		let completeBtn = document.createElement("button");
		completeBtn.className = "completeBtn";
		removeBtn.textContent = "Remove";
		completeBtn.textContent = "Complete";
		rightButtons.appendChild(removeBtn);
		rightButtons.appendChild(completeBtn);
		card.appendChild(rightButtons);
		mainCards.appendChild(card);
	}
}


export function expandCard(data) {


}
