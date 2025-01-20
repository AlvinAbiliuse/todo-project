
export function sidebar(data) {
	let sidebar = document.querySelector(".sidebar");

	let header = document.createElement("h1");
	let newProjectBtn = document.createElement("button");
	let modal = document.createElement("dialog");
	let cardContainer = document.createElement("div");

	header.textContent = "TODO Project";
	newProjectBtn.className = "newProjectButton";
	newProjectBtn.textContent = "+ New Project";
	modal.className = "newProjectModal";
	cardContainer.className = "sideBarCards";

	console.log(Object.keys(data));	
	for (let i=0; i < Object.keys(data).length; i++) {
		let obj = data[Object.keys(data)[i]];
		let newCard = document.createElement("div");
		newCard.className = "sideCard";
		let title = document.createElement("h2");
		title.textContent = obj.name;
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




	sidebar.appendChild(header);
	sidebar.appendChild(newProjectBtn);
	sidebar.appendChild(modal);
	sidebar.appendChild(cardContainer);	



}

