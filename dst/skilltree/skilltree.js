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
        { name: "Wanda", id: "Wanda" },
        { name: "Random", id: "Random" }
    ];

    const charactersWithoutSkilltree = ["WX-78", "Wickerbottom", "Wes", "Maxwell", "Webber", "Warly", "Wanda"];

    characters.forEach(character => {
        const characterLink = document.createElement('a');
        characterLink.classList.add('character-item');

        if (character.id === "Random") {
            characterLink.classList.remove('no-skilltree');
            characterLink.href = `/dst/skilltree/Random.html`;
            
            characterLink.addEventListener('click', function(event) {
                event.preventDefault();
                
                const skillTreeCharacters = characters.filter(char => 
                    !charactersWithoutSkilltree.includes(char.id) && char.id !== "Random"
                );

                if (skillTreeCharacters.length > 0) {
                    const randomIndex = Math.floor(Math.random() * skillTreeCharacters.length);
                    const randomCharacter = skillTreeCharacters[randomIndex];
                    window.open(`/dst/skilltree/${randomCharacter.id}.html`, '_blank');
                } else {
                    alert("No skill trees available for random selection!");
                }
            });
        } else if (charactersWithoutSkilltree.includes(character.id)) {
            characterLink.classList.add('no-skilltree');
            characterLink.href = "javascript:void(0);";
        } else {
            characterLink.href = `/dst/skilltree/${character.id}.html`;
        }

        const characterIcon = document.createElement('img');
        characterIcon.classList.add('icon');
        characterIcon.src = `images/characters/${character.id}_Head.webp`;
        characterIcon.alt = character.name;

        characterLink.appendChild(characterIcon);
        characterGrid.appendChild(characterLink);
    });
});