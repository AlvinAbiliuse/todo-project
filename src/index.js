import "./styles.css";
import listItems from "./data.json";

console.log(listItems);

class newData {
	constructor(title, description, dueDate, priority, check) {
			this.title = title,
			this.description = description,
			this.dueDate = dueDate,
			this.priority = priority,
			this.check = check
	}

};

function createCard(data, id) {
	const mainCards = document.querySelector(".mainCards");
	const newCard = document.createElement("div");
	newCard.className = "card"

	const title = document.createElement("h2");
	const description = document.createElement("p");
	const dueDate = document.createElement("p");
	const priority = document.createElement("p");
	const check = document.createElement("p");
	const identifier = document.createElement("p");

	title.textContent = data.title;
	description.textContent = data.description;
	dueDate.textContent = data.dueDate;
	priority.textContent = data.priority;
	check.textContent = data.check;
	identifier.textContent = id;
	identifier.className = "identifier";

	newCard.appendChild(title);		
	newCard.appendChild(description);		
	newCard.appendChild(dueDate);		
	newCard.appendChild(priority);		
	newCard.appendChild(check);
	newCard.appendChild(identifier);
	console.log(listItems[identifier.textContent]);

	mainCards.appendChild(newCard);

}

function initializePage() {
	for (let i = 0; i < Object.keys(listItems).length; i++) {
		const temp = listItems[Object.keys(listItems)[i]];
		createCard(new newData(temp["title"], temp["description"],
			temp["dueDate"], temp["priority"], temp["check"]), 
					Object.keys(listItems)[i]);
	}
}

initializePage();

console.log(JSON.stringify(listItems));














