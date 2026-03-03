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
        createGenericContainer(
            "Overview",
            "Welcome to Adrian's Candy Store! We offer a wide variety of sweet treats, from classic candies to unique gourmet confections. Our mission is to bring a smile to every customer with high quality, handcrafted sweets.",
        ),
    );

    contentContainer.appendChild(
        createGenericContainer(
            "Hours",
            "Monday - Friday: 10:00 AM - 8:00 PM\nSaturday: 11:00 AM - 9:00 PM\nSunday: 12:00 PM - 6:00 PM",
        ),
    );

    contentContainer.appendChild(
        createGenericContainer(
            "Location",
            "123 Sweet Tooth Lane, Sugarville, CA 90210\nCome visit us and explore our delicious candy collection!",
        ),
    );

    content.appendChild(contentContainer);
}
