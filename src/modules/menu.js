// MENU - Creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

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
    function createMenuItem(title, description, price, image) {}
}
