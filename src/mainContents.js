

export function rightContainer(data) {
	let container = document.querySelector(".mainContents");
	let topBar = document.createElement("div");
	topBar.className = "topBar";
	let header = document.createElement("h2");
	let img = document.createElement("img");
	img.setAttribute("src", "./images/settings.svg");
	topBar.appendChild(header);
	topBar.appendChild(img);
	
	let mainCards = document.createElement("div");
	mainCards.className = "mainCards":
	container.appendChild(topbar);
	container.appendChild(mainCards);	
}

export function populateMain(data) {

}


export function expandCard(data) {


}
