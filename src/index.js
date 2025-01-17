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




