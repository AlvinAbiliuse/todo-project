
class newData {
	constructor(title, description, dueDate, priority, check) {
			this.title = title,
			this.description = description,
			this.dueDate = dueDate,
			this.priority = priority,
			this.check = check
	}

};

function createCard(data) {
	const mainContainer = document.querySelector(".mainCards");
	const newCard = document.createElement("div");
	newCard.className = "card"

	const title = document.createElement("h2");
	const description = document.createElement("p");
	const dueDate = document.createElement("p");
	const priority = document.createElement("p");
	const check = document.createElement("p");

	title.textContent = data.title;
	description.textContent = data.description;
	dueDate.textContent = data.dueDate;
	priority.textContent = data.priority;
	check.textContent = data.check;

	newCard.appendChild(title);		
	newCard.appendChild(description);		
	newCard.appendChild(dueDate);		
	newCard.appendChild(priority);		
	newCard.appendChild(check);		

	mainContent.appendChild(newCard);

}

createCard(new newData("todo list", "create a to do list", "1 week", "important", "no"));
