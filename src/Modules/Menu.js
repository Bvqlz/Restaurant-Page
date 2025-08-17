function menu() {
    const content = document.querySelector("#content");

    const header = document.createElement("h1");
    header.className = "menu-header";
    header.textContent = "Our Daily Selections";
    content.appendChild(header);

    // array that has 3 objects. Has  title and items array that contains menu items.
    const menuSections = [
        {
            title: "Breads Section",
            items: [
                "Artisan Sourdough - $6.50",
                "Classic French Baguette - $3.25",
                "Whole Wheat Honey Oat - $5.75",
                "Rosemary Focaccia - $7.00"
            ]
        },
        {
            title: "Pastries & Sweets",
            items: [
                "Butter Croissants - $2.75",
                "Chocolate Éclairs - $4.50",
                "Apple Cinnamon Danish - $3.25",
                "Fresh Fruit Tarts - $5.50",
            ]
        },
        {
            title: "Speciality Items",
            items: [
                "Custom Birthday Cakes (48hr notice) - $65",
                "Wedding Cakes & Catering - Starting at $250",
                "Seasonal Holiday Cookies - $20",
            ]
        }
    ]

    menuSections.forEach(section => {
        const sectionHeader = document.createElement("h2"); // header for each object
        sectionHeader.className = "menu-section"; // generic header class name to catch all 3
        sectionHeader.textContent = section.title; // access each object title
        content.appendChild(sectionHeader);

        const list = document.createElement("ul"); // within each, we create a list for each section
        list.className = "menu-list"; // generic

        // remember that items is an array we can access the menu items within it
        section.items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.className = "menu-item"; // generic
            listItem.textContent = item; // the menu item
            list.appendChild(listItem);
        });
        content.appendChild(list);
    })
}

export { menu };