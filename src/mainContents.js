import image from "./images/settings.svg"

export function rightContainer() {
	let container = document.querySelector(".mainContents");
	let topBar = document.createElement("div");
	topBar.className = "topBar";
	let header = document.createElement("h2");
	let img = document.createElement("img");
	img.className = "filter";
	img.setAttribute("src", image);
	topBar.appendChild(header);
	topBar.appendChild(img);
	
	let mainCards = document.createElement("div");
	mainCards.className = "mainCards";
	container.appendChild(topBar);
	container.appendChild(mainCards);	
}

export function populateMain(data) {

}


export function expandCard(data) {


}
