import "./styles.css";
import { homepage } from "./modules/homepage.js";
import { menu } from "./modules/menu.js";
import { contact } from "./modules/contact.js";

// Load homepage by default
homepage();

// Tab switcher logic here. If user clicks a certain button, either run homepage, menu, or contact. Add event listeners.
homepage();
menu();
contact();

// Active button logic for color
const buttons = document.querySelectorAll("nav button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove 'active' from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));
        // Add 'active' to clicked button
        button.classList.add("active");
    });
});
