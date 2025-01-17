const createCard = (data, id) => {
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
	console.log(id);
  identifier.textContent = id;
  identifier.className = "identifier";

  newCard.appendChild(title);   
  newCard.appendChild(description);   
  newCard.appendChild(dueDate);   
  newCard.appendChild(priority);    
  newCard.appendChild(check);
  newCard.appendChild(identifier);

  mainCards.appendChild(newCard);

}

export default createCard;
