// Exemple de données joueurs
const PLAYERS = [
    { name: "Dylan", club: "Manshine City", position: "RW", value: 6, avatar: "Joueurs/images-joueurs/dylan.jpeg" },
    { name: "Antoine", club: "Manshine City", position: "Milieu", value: 7, avatar: "Joueurs/images-joueurs/anto.png" },
    { name: "Alessio", club: "Manshine City", position: "Défenseur", value: 2, avatar: "Joueurs/images-joueurs/alessio.png" },
    { name: "Jason", club: "PXG", position: "Attaquant", value: 1, avatar: "Joueurs/images-joueurs/jason.png" },
    { name: "Enzo", club: "PXG", position: "Défenseur", value: 1, avatar: "Joueurs/images-joueurs/enzo.png" },
    { name: "Imrane", club: "PXG", position: "Attaquant", value: 1, avatar: "Joueurs/images-joueurs/ntm.png" },
    { name: "Elijah", club: "PXG", position: "Attaquant", value: 1, avatar: "Joueurs/images-joueurs/elijah.png" },
    { name: "William", club: "PXG", position: "Attaquant", value: 1, avatar: "Joueurs/images-joueurs/william.png" },
    { name: "Matheo", club: "Retraite", position: "CM", value: 1, avatar: "Joueurs/images-joueurs/matheo.png" },
    { name: "Theo", club: "Retraite", position: "RW", value: 1, avatar: "Joueurs/images-joueurs/theo.png" },
];

const container = document.getElementById("playersContainer");

// Créer les cartes
PLAYERS.forEach(p => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.dataset.link = `player_fiche.html?name=${encodeURIComponent(p.name)}`;

    card.innerHTML = `
        <img src="${p.avatar}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Club: ${p.club}</p>
        <p>Position: ${p.position}</p>
        <p>Valeur: ${p.value}</p>
    `;

    // Cliquer sur la card ouvre la fiche (ou autre page)
    card.addEventListener("click", () => {
        window.location.href = card.dataset.link;
    });

    container.appendChild(card);
});
