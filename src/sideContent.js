( function () {
	let leftSide = document.querySelector("#leftContainer");
	let userCards = document.createElement("div");
	userCards.className = "userCards";
	let button = document.createElement("button");
	button.className = "userBtn";
	button.textContent = "Add List";
	userCards.appendChild(button);
	leftSide.appendChild(userCards);
})();




