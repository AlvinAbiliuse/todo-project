import "./styles.css";
import listItems from "./data.json";
import createCard from "./createCard.js";
import sideContent from "./sideContent.js";
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

function initializePage() {
	for (let i = 0; i < Object.keys(listItems).length; i++) {
		const temp = listItems[Object.keys(listItems)[i]];
		createCard(new newData(temp["title"], temp["description"],
			temp["dueDate"], temp["priority"], temp["check"]), 
					Object.keys(listItems)[i]);
	}
}

initializePage();





