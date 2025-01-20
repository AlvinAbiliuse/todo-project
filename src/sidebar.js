
export function sidebar(data) {
	let sidebar = document.querySelector(".sidebar");
	let header = document.createElement("h1");
	let newProjectBtn = document.createElement("button");
	let modal = document.createElement("dialog");
	let cardContainer = document.createElement("div");

	header.textContent = "TODO";
	newProjectBtn.className = "newProjectButton";
	newProjectBtn.textContent = "+ New Project";

	modal.className = "newProjectModal";
	
	let projectName = document.createElement("label");
	projectName.textContent = "Project Name: ";
	let nameInput = document.createElement("input");
	let submit = document.createElement("button");
	submit.textContent = "Add";
	cardContainer.className = "sideBarCards";

	modal.appendChild(projectName);
	modal.appendChild(nameInput);
	
	sidebar.appendChild(header);
	sidebar.appendChild(newProjectBtn);
	sidebar.appendChild(modal);
	sidebar.appendChild(cardContainer);	

	modal.appendChild(submit);

};
export function cards(data) {
	let cardContainer = document.querySelector(".sideBarCards");
	cardContainer.innerHTML = "";
	for (let i=0; i < Object.keys(data).length; i++) {
		let obj = JSON.parse(data[Object.keys(data)[i]]);
		let newCard = document.createElement("div");
		newCard.className = "sideCard";
		let title = document.createElement("h2");
		console.log(obj);
		title.textContent = obj["name"];
		let elId = document.createElement("p");
		elId.className = "eyeD";
		elId.textContent = Object.keys(data)[i];
		let lower = document.createElement("div");
		let removeBtn = document.createElement("button");
		let completeBtn = document.createElement("button");
		removeBtn.className = "delete";
		completeBtn.className = "complete"	
		removeBtn.textContent = "Delete";
		completeBtn.textContent = "Complete";

		lower.appendChild(removeBtn);
		lower.appendChild(completeBtn);

		newCard.appendChild(title);
		newCard.appendChild(elId);
		newCard.appendChild(lower);
		cardContainer.appendChild(newCard);
	}
};	

