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

    /* Generic container helper function */
    function createGenericContainer(titleText, bodyText) {
        const genericContainer = document.createElement("div");
        genericContainer.classList.add("generic-container");

        /* Inside of each generic container, I want the following: */
        const heading = document.createElement("h1");
        heading.textContent = titleText;
        heading.classList.add("text");
        genericContainer.appendChild(heading);

        const description = document.createElement("p");
        description.textContent = bodyText;
        description.classList.add("text");
        genericContainer.appendChild(description);

        return genericContainer;
    }

    /* Call helper function */
    contentContainer.appendChild(
        createGenericContainer("Overview", "lorem ipsum blah blah blah"),
    );
    contentContainer.appendChild(
        createGenericContainer("Hours", "lorem ipsum blah blah blah"),
    );
    contentContainer.appendChild(
        createGenericContainer("Location", "lorem ipsum blah blah blah"),
    );

    content.appendChild(contentContainer);
}
