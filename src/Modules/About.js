import kitchen from "../Assets/kitchen.jpg"

function about() {
    const content = document.querySelector("#content");

    const header = document.createElement("h1");
    header.className ="about-header"
    header.textContent = "Our Story";

    const textImage = document.createElement("div");
    textImage.className = "about-container";

    const texts = document.createElement("div");
    texts.className = "text-container";

    const text1 = document.createElement("p");
    text1.className ="about-text";
    text1.textContent = "Sweet Crumb Bakery started as a dream in Maria and Giuseppe's small kitchen in 1998. After immigrating from Italy, they brought generations of family recipes and a passion for authentic baking to our community. " +
        "Today, their daughter Sofia continues the tradition, blending time-honored techniques with creative new flavors.\n"

    const text2 = document.createElement("p");
    text2.className ="about-text";
    text2.textContent = "We source our flour from local mills, use organic eggs from nearby farms, and never compromise on quality. " +
        "Every item is baked fresh daily – when we sell out, we're done for the day. That's our promise to you: only the freshest, most delicious baked goods make it to our shelves."

    const img = document.createElement("img");
    img.className ="about-image";
    img.src = kitchen;

    const contactSection = document.createElement("div");
    contactSection.className ="contact-container";

    const contactTitle = document.createElement("h3");
    contactTitle.className ="contact-header";
    contactTitle.textContent = "Contact Us!";

    //practice with a different way of creating elements
    const contactInfo = document.createElement("div");
    contactInfo.className ="contact-info";
    contactInfo.innerHTML = `
        <p><strong>Address:</strong> 1247 Oak Street, City, State 33333</p>
        <p><strong>Phone:</strong> (123) 555-BAKE (2253)</p>
        <p><strong>Email:</strong> hello@sweetcrumbbakery.com</p>
        <p><strong>Hours:</strong> Tue-Sat: 6AM-6PM | Sun: 7AM-3PM | Closed Mondays</p>
    `;


    texts.appendChild(text1);
    texts.appendChild(text2);
    textImage.appendChild(texts);
    textImage.appendChild(img);

    contactSection.appendChild(contactTitle);
    contactSection.appendChild(contactInfo);

    content.appendChild(header);
    content.appendChild(textImage);
    content.appendChild(contactSection);
}

export { about };