const categoryBtns = document.querySelectorAll('.category-btn');
const matchCards = document.querySelectorAll('.match-card');

// FILTRE PAR CATÉGORIE
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.cat;

        matchCards.forEach(card => {
            card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'block' : 'none';
        });

        const visibleCards = Array.from(matchCards).filter(c => c.style.display !== 'none');
        visibleCards.sort((a,b) => new Date(b.dataset.date) - new Date(a.dataset.date));
        const parent = document.querySelector('.match-list');
        visibleCards.forEach(c => parent.appendChild(c));
    });
});

// Tri au chargement
document.querySelector('.category-btn.active').click();

// ---- POPUP ----
document.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", () => {
        const popupID = button.dataset.popup;
        document.getElementById(popupID).style.display = "flex";
    });
});

document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".popup-bg").style.display = "none";
    });
});

// Clique extérieur = fermer
document.querySelectorAll(".popup-bg").forEach(p => {
    p.addEventListener("click", e => {
        if (e.target === p) p.style.display = "none";
    });
});

// Génération des barres de notes
document.querySelectorAll('.note-bar').forEach(bar => {
    const note = parseFloat(bar.dataset.note);
    bar.style.setProperty('--note', note);
});
