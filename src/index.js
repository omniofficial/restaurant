import "./styles.css";
import { homepage } from "./modules/homepage.js";
import { menu } from "./modules/menu.js";
import { contact } from "./modules/contact.js";
console.log("Hello, World!");

// Load homepage by default
homepage();

// Tab switcher logic here. If user clicks a certain button, either run homepage, menu, or contact.
homepage();
menu();
contact();
