document.addEventListener('DOMContentLoaded', () => {
    const characterGrid = document.getElementById('characterGrid');

    const characters = [
        { name: "Wilson", id: "Wilson" },
        { name: "Willow", id: "Willow" },
        { name: "Wolfgang", id: "Wolfgang" },
        { name: "Wendy", id: "Wendy" },
        { name: "WX-78", id: "WX-78" },
        { name: "Wickerbottom", id: "Wickerbottom" },
        { name: "Woodie", id: "Woodie" },
        { name: "Wes", id: "Wes" },
        { name: "Maxwell", id: "Maxwell" },
        { name: "Wigfrid", id: "Wigfrid" },
        { name: "Webber", id: "Webber" },
        { name: "Winona", id: "Winona" },
        { name: "Warly", id: "Warly" },
        { name: "Wortox", id: "Wortox" },
        { name: "Wormwood", id: "Wormwood" },
        { name: "Wurt", id: "Wurt" },
        { name: "Walter", id: "Walter" },
        { name: "Wanda", id: "Wanda" }
    ];

    characters.forEach(character => {
        const characterLink = document.createElement('a');
        characterLink.classList.add('character-item');
        characterLink.href = `/dst/skilltree/${character.id}`;

        const characterIcon = document.createElement('img');
        characterIcon.classList.add('icon');
        characterIcon.src = `images/characters/${character.id}_Head.webp`;
        characterIcon.alt = character.name;

        characterLink.appendChild(characterIcon);
        characterGrid.appendChild(characterLink);
    });
});