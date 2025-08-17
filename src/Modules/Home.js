import cake from "../Assets/cake.jpg"

function home() {
    const content = document.querySelector("#content");

    const header = document.createElement("h1");
    header.className ="home-title";
    header.innerText = "Fresh Baked Goodness Daily"

    const smallerHeader = document.createElement("h3");
    smallerHeader.className ="home-subtitle";
    smallerHeader.innerText = "Artisan breads, pastries, and treats made with love since 1998"

    const textImage = document.createElement("div");
    textImage.className ="home-container";

    const text = document.createElement("p")
    text.className ="home-text";
    text.innerText = "Welcome to Sweet Crumb Bakery, where every morning begins with the aroma of freshly baked bread and pastries. " +
    "Our skilled bakers arrive before dawn to craft each loaf, croissant, and cookie by hand using traditional techniques and the finest ingredients. " +
    "From our signature sourdough to decadent chocolate éclairs, we're your neighborhood source for authentic baked goods that bring families together."

    const image = document.createElement("img");
    image.className ="home-image"
    image.src = cake;

    textImage.appendChild(text);
    textImage.appendChild(image);

    content.appendChild(header);
    content.appendChild(smallerHeader);
    content.appendChild(textImage);
}

export { home };