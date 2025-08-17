import { home } from './Modules/Home.js'
import { menu } from './Modules/Menu.js'
import { about } from './Modules/About.js'
import "./styles.css";

let moduleCheck = 1; // realistically it can start at any number. Logic handles what to do.
home();

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", () => {
    // button logic is our checker at the respective button?
    // if not we load this page. else we don't do anything
    if(moduleCheck !== 1) {
        content.innerHTML = ''; // this just clears the content div where our home, menu, about pages go.
        home();
        moduleCheck = 1; // we change it to the current page so that other buttons know.
    } else {}
})

menuBtn.addEventListener("click", () => {
    if(moduleCheck !== 2) {
        content.innerHTML = '';
        menu();
        moduleCheck = 2;
    } else {}
})

aboutBtn.addEventListener("click", () => {
    if(moduleCheck !== 3) {
        content.innerHTML = '';
        about();
        moduleCheck = 3;
    } else {}
})
