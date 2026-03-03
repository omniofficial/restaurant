// MENU - Creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

import lollipopImage from "../images/lollipop.png";
import tootsierollImage from "../images/tootsieroll.png";
import candycaneImage from "../images/candycane.png";
import candyappleImage from "../images/candyapple.png";

export function menu() {
    console.log("menu module is running");
    // Grab content div
    const content = document.getElementById("content");

    // Clear previous content
    content.textContent = "";

    /* ----------- MAKE MENU TITLE CONTAINER + TEXT ----------- */
    const mainTitleContainer = document.createElement("div");
    mainTitleContainer.classList.add("main-title-container");

    const mainSectionTitle = document.createElement("div");
    mainSectionTitle.classList.add("main-section-title");

    const heading = document.createElement("h1");
    heading.textContent = "Menu Items";

    mainSectionTitle.appendChild(heading);
    mainTitleContainer.appendChild(mainSectionTitle);

    content.appendChild(mainTitleContainer);

    /* ----------- MAKE CONTENT CONTAINER + ELEMENTS ----------- */
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");

    /* Generic container helper function (each menu item) */
    function createMenuItem(title, description, price, image) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-container");

        /* Inside of each menu item, I want the following: */
        const itemTitle = document.createElement("div");
        itemTitle.textContent = title;
        menuItem.appendChild(itemTitle);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = description;
        menuItem.appendChild(itemDescription);

        const itemPrice = document.createElement("p");
        itemPrice.textContent = price;
        menuItem.appendChild(itemPrice);

        const itemImage = document.createElement("img");
        itemImage.src = image;
        itemImage.alt = title;
        menuItem.appendChild(itemImage);

        return menuItem;
    }

    // Create test menu items */
    contentContainer.appendChild(
        createMenuItem(
            "Lollipop",
            "A savory lollipop for a savory treat",
            "$2",
            lollipopImage,
        ),
    );

    contentContainer.appendChild(
        createMenuItem(
            "Tootsie Roll",
            "The darkest of the darkest tootsie roll!",
            "$1",
            tootsierollImage,
        ),
    );

    contentContainer.appendChild(
        createMenuItem(
            "Candy Cane",
            "A minty candy cane",
            "$1",
            candycaneImage,
        ),
    );

    contentContainer.appendChild(
        createMenuItem(
            "Candy Apple",
            "A sweet and sour candy apple dipped in fudge",
            "$5",
            candyappleImage,
        ),
    );

    content.appendChild(contentContainer);
}
