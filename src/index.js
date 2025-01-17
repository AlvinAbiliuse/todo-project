import "./styles.css";

const listItems = {
	item1: {
		title: "To do List",
		description: "create a todo list",
		dueDate: "1 week",
		priority: "high",
		checked: "no"
	},
	item2: {
		title: "To do List",
		description: "create a todo list",
		dueDate: "1 week",
		priority: "high",
		checked: "no"
	},
	item3: {
		title: "To do List",
		description: "create a todo list",
		dueDate: "1 week",
		priority: "high",
		checked: "no"
	},
	item4: {
		title: "To do List",
		description: "create a todo list",
		dueDate: "1 week",
		priority: "high",
		checked: "no"
	},
	item5: {
		title: "To do List",
		description: "create a todo list",
		dueDate: "1 week",
		priority: "high",
		checked: "no"
	},
	item6: {
		title: "To do List",
		description: "create a todo list",
		dueDate: "1 week",
		priority: "high",
		checked: "no"
	},
	item7: {
		title: "To do List",
		description: "create a todo list",
		dueDate: "1 week",
		priority: "high",
		checked: "no"
	}
}


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
	const mainCards = document.querySelector(".mainCards");
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

	mainCards.appendChild(newCard);

}

function initializePage() {
	for (let i = 0; i < Object.keys(listItems).length; i++) {
		const temp = listItems[Object.keys(listItems)[i]];
		createCard(new newData(temp["title"], temp["description"],
			temp["dueDate"], temp["priority"], temp["check"]));
	}
}

initializePage();















