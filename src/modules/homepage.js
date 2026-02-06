// HOMEPAGE - Creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

export function homepage() {
    console.log("homepage module is running");

    // Grab content div
    const content = document.getElementById("content");

    // Clear previous content
    content.textContent = "";

    /* ----------- MAKE MAIN TITLE CONTAINER + TEXT ----------- */
    const mainTitleContainer = document.createElement("div");
    mainTitleContainer.classList.add("main-title-container");

    const mainSectionTitle = document.createElement("div");
    mainSectionTitle.classList.add("main-section-title");

    const heading = document.createElement("h1");
    heading.textContent = "Adrian's Candy Store";

    mainSectionTitle.appendChild(heading);
    mainTitleContainer.appendChild(mainSectionTitle);

    content.appendChild(mainTitleContainer);

    /* ----------- MAKE CONTENT CONTAINER + ELEMENTS ----------- */
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");

    /* Inside of content-container, make three generic containers */
    const genericContainer = document.createElement("div");
    genericContainer.classList.add("generic-container");

    /* Inside of generic-container, add text div */
    const text = document.createElement("div");
    text.classList.add("text");

    const p = document.createElement("p");
    p.textContent = "lorem";

    const h2 = document.createElement("h2");
    h2.textContent = "Overview";

    /* Append my elements to content-container. Then append content-container to content.*/
    text.appendChild(h2);
    text.appendChild(p);
    genericContainer.appendChild(text);
    contentContainer.appendChild(genericContainer);

    content.appendChild(contentContainer);
}
