// Ouvrir le pop-up
document.querySelectorAll(".player-card-main").forEach(card => {
    card.addEventListener("click", () => {
        document.getElementById("playerPopupAntoine").style.display = "flex";
    });
});

// Fermer avec bouton
document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".popup-bg").style.display = "none";
    });
});

// Fermer en cliquant en dehors
document.querySelectorAll(".popup-bg").forEach(p => {
    p.addEventListener("click", e => {
        if (e.target === p) p.style.display = "none";
    });
});
