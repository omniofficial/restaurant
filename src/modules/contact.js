// CONTACT - Exports contact page

export function contact() {
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
    heading.textContent = "Contact Us";

    mainSectionTitle.appendChild(heading);
    mainTitleContainer.appendChild(mainSectionTitle);

    content.appendChild(mainTitleContainer);

    /* ----------- MAKE CONTENT CONTAINER + ELEMENTS ----------- */
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");

    /* Generic container helper function */
    function createContactCard(title, name, number, email) {
        const contactCard = document.createElement("div");
        contactCard.classList.add("contact-card");

        /* Inside of each contact card, I want the following: */
        const contactTitle = document.createElement("h1");
        contactTitle.textContent = title;
        contactCard.appendChild(contactTitle);

        const contactName = document.createElement("p");
        contactName.textContent = name;
        contactCard.appendChild(contactName);

        const contactNumber = document.createElement("p");
        contactNumber.textContent = number;
        contactCard.appendChild(contactNumber);

        const contactEmail = document.createElement("p");
        contactEmail.textContent = email;
        contactCard.appendChild(contactEmail);

        return contactCard;
    }

    /* Call helper function */
    contentContainer.appendChild(
        createContactCard(
            "Little Piggie #1",
            "Owner",
            "999-999-9999",
            "piggie1email@real.com",
        ),
    );

    contentContainer.appendChild(
        createContactCard(
            "Little Piggie #2",
            "Candy Specialist",
            "999-999-9999",
            "piggie2email@real.com",
        ),
    );

    contentContainer.appendChild(
        createContactCard(
            "Little Piggie #3",
            "Candy Chef",
            "999-999-9999",
            "piggie3email@real.com",
        ),
    );

    contentContainer.appendChild(
        createContactCard(
            "Little Piggie #4",
            "Candy Chef",
            "999-999-9999",
            "piggie4email@real.com",
        ),
    );

    content.appendChild(contentContainer);
}
