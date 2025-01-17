( function () {
		let leftSide = document.querySelector("#leftContainer");

		let userCards = document.createElement("div");
		userCards.className = "userCards";
		let button = document.createElement("button");
		button.className = "userBtn";
		button.textContent = "Add List";
		userCards.appendChild(button);
		let modal = document.createElement("dialog");
		let form = document.createElement("form");
		form.setAttribute("method", "dialog");
		

		let titleLabel = document.createElement("label");
		let titleInput = document.createElement("input");
		let descriptionLabel = document.createElement("label");
		let descriptionInput = document.createElement("textarea");
		let dueDateLabel = document.createElement("label");
		let dueDateInput = document.createElement("input");
		let priorityLabel = document.createElement("label");
		let priorityInput = document.createElement("input");
		let checkLabel = document.createElement("label");
		let checkInput = document.createElement("input");
		let formSubmit = document.createElement("button");

		titleLabel.setAttribute("for", "title");
		titleLabel.textContent = "Title:";
		titleInput.id= "title";	
		descriptionLabel.setAttribute("for", "description");
		descriptionLabel.textContent = "Description:";
		descriptionInput.id = "description";
		dueDateLabel.setAttribute("for", "dueDate");
		dueDateLabel.textContent = "Due Date:";
		dueDateInput.id = "dueDate";
		priorityLabel.setAttribute("for", "priority");
		priorityLabel.textContent = "Priority:";
		priorityInput.id = "priority";
		checkLabel.setAttribute("for", "check");
		checkLabel.textContent = "Check:";
		checkInput.id = "check";
		formSubmit.textContent = "Add";
		formSubmit.className = "addSubmit";
		

	
		form.appendChild(titleLabel);
		form.appendChild(titleInput);
		form.appendChild(descriptionLabel);
		form.appendChild(descriptionInput);
		form.appendChild(dueDateLabel);
		form.appendChild(dueDateInput);
		form.appendChild(priorityLabel);
		form.appendChild(priorityInput);
		form.appendChild(checkLabel);
		form.appendChild(checkInput);
		form.appendChild(formSubmit);
	
		modal.appendChild(form);
		userCards.appendChild(modal);

		leftSide.appendChild(userCards);
		
		document.querySelector("dialog").showModal();
		

})();




