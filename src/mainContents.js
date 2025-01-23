import image from "./images/settings.svg";

export function rightContainer() {
  let container = document.querySelector(".mainContents");
  let topBar = document.createElement("div");
  topBar.className = "topBar";
  let leftItems = document.createElement("div");
  let header = document.createElement("h2");
  leftItems.appendChild(header);
  let addButton = document.createElement("button");
  addButton.className = "itemAdd";
  addButton.textContent = "+ Add";
  leftItems.appendChild(addButton);
  let img = document.createElement("img");
  img.className = "filter";
  img.setAttribute("src", image);
  topBar.appendChild(leftItems);
  topBar.appendChild(img);

  let modal = document.createElement("dialog");
  let title = document.createElement("label");
  let description = document.createElement("label");
  let dueDate = document.createElement("label");
  let priority = document.createElement("label");

  let titleInput = document.createElement("input");
  let descriptionInput = document.createElement("textarea");
  let dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "date");
  let priorityInput = document.createElement("input");
  priorityInput.setAttribute("type", "number");
  let submitButton = document.createElement("button");
  submitButton.className = "itemSubmitBtn";
  submitButton.textContent = "Add To List";

  titleInput.className = "titleInput";
  descriptionInput.className = "descriptionInput";
  dueDateInput.className = "dueDateInput";
  priorityInput.className = "priorityInput";
  priorityInput.setAttribute("min", 0);
  priorityInput.setAttribute("max", 10);
  modal.className = "itemAddModal";
  title.textContent = "Title: ";
  description.textContent = "Description: ";
  dueDate.textContent = "Due Date: ";
  priority.textContent = "Priority: ";

  modal.appendChild(title);
  modal.appendChild(titleInput);
  modal.appendChild(description);
  modal.appendChild(descriptionInput);
  modal.appendChild(dueDate);
  modal.appendChild(dueDateInput);
  modal.appendChild(priority);
  modal.appendChild(priorityInput);
  modal.appendChild(submitButton);
  topBar.appendChild(modal);

  let mainCards = document.createElement("div");
  mainCards.className = "mainCards";
  container.appendChild(topBar);
  container.appendChild(mainCards);
}

export function populateMain(data) {
  let header = document.querySelector(".topBar h2");
  header.textContent = data.name;

  let infoModal = document.createElement("dialog");
  infoModal.className = "infoModal";
  let modalTitle = document.createElement("h3");
  let modalDescription = document.createElement("p");
  let modalDueDate = document.createElement("p");
  let modalPriority = document.createElement("p");
  let modalCloseBtn = document.createElement("button");
  let modalEditBtn = document.createElement("button");

  modalTitle.className = "infoTitle";
  modalDescription.className = "infoDescription";
  modalDueDate.className = "infoDueDate";
  modalPriority.className = "infoPriority";

  infoModal.appendChild(modalTitle);
  infoModal.appendChild(modalDescription);
  infoModal.appendChild(modalDueDate);
  infoModal.appendChild(modalPriority);

  let mainCards = document.querySelector(".mainCards");
  mainCards.innerHTML = "";
  mainCards.appendChild(infoModal);
  if (JSON.parse(window.localStorage[data.name])["completed"] == "yes") {
    document.querySelector(".topBar").className = "topBar completed";
    mainCards.className = "mainCards completed";
  } else {
    document.querySelector(".topBar").className = "topBar";
    mainCards.className = "mainCards";
  }
  let obj = data["cards"];
  for (let i in obj) {
    let card = document.createElement("div");

    if (obj[i].completed == "no") {
      card.className = "card";
    } else if (obj[i].completed == "yes") {
      card.className = "card completed";
    }
		let cardP = Number(obj[i].priority);
		if (cardP >= 0 && cardP <= 4 ) {
			card.className = card.className + " lowPriority";
		
		} else if (cardP >=5 && cardP <= 7) {
			card.className = card.className + " medPriority";
		
		} else if (cardP >= 8 && cardP <= 10) {
			card.className = card.className + " highPriority";
		}
    let title = document.createElement("h3");
    title.textContent = obj[i]["name"];
    card.appendChild(title);
    let dueDate = document.createElement("p");
    /* add dueDate data */
    let rightButtons = document.createElement("div");
    let removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    let completeBtn = document.createElement("button");
    completeBtn.className = "completeBtn";
    let editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    removeBtn.textContent = "Remove";
    completeBtn.textContent = "Complete";
    editBtn.textContent = "Edit";
    rightButtons.appendChild(removeBtn);
    rightButtons.appendChild(completeBtn);
    rightButtons.appendChild(editBtn);
    card.appendChild(rightButtons);
    mainCards.appendChild(card);
  }
}
