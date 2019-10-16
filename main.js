const linksEl = document.querySelector("#links");

const contactLinks = [
    {
        name: "Github",
        link: "https://github.com/guilhermebalog",
    }, { 
        name: "Linkedin",
        link: "https://www.linkedin.com/in/guilherme-balog-gardino-233ab2186/",
    }, { 
        name: "Instagram",
        link: "https://www.instagram.com/baloguii/",
    }, {
        name: "Email",
        link: "mailto:guibalog@gmail.com",
    }
];

function createContactLinkElement(contactLink){
    const a = document.createElement("a");
    a.target = "_blank";
    a.rel = "noreferer";

    a.href = contactLink.link
    a.innerHTML = contactLink.name;

    return a;
}

function renderContactLinks(){
    linksEl.innerHTML = "";
    contactLinks.forEach(contactLink => {
        const contactElement = createContactLinkElement(contactLink);
        linksEl.appendChild(contactElement);
        return;
    });
}
renderContactLinks();
