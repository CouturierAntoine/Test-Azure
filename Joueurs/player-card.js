// Sélecteurs
const popup = document.getElementById("player-popup");
const closeBtn = document.querySelector(".popup-close");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");

// On cible *toutes* les images de joueurs
const playerImages = document.querySelectorAll(".player-header-bastard img, .player-header-ubers img, .player-header-pxg img, .player-header-barcha img, .player-header-manshine img");

// Ouvrir le popup quand on clique sur une image
playerImages.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";

        // Exemple de contenu personnalisé
        popupTitle.textContent = "Profil de " + img.closest("div").querySelector("h2").innerText;
        popupText.textContent = "Ici tu peux ajouter les infos avancées, descriptions, anecdotes, etc.";
    });
});

// Fermer
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Fermer si on clique sur le fond noir
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
