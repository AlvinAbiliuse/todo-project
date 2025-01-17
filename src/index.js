console.log("hello world");



class newData{
	constructor(title, description, dueDate, priority, check) {
			this title = title,
			this.description = description,
			this.dueDate = dueDate,
			this.priority = priority,
			this.check = check,
	}

	return {title, description, dueDate, priority, check}
};


console.log(new NewDate("todo list", "create a to do list",
	"1 week", "important", "no"));
