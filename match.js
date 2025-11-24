const categoryBtns = document.querySelectorAll('.category-btn');
const matchCards = document.querySelectorAll('.match-card');

// Filtrer par catégorie
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.cat;

        matchCards.forEach(card => {
            if(cat === 'all' || card.dataset.cat === cat) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Trier les matchs par date (descendant)
        const visibleCards = Array.from(matchCards).filter(c => c.style.display !== 'none');
        visibleCards.sort((a,b) => new Date(b.dataset.date) - new Date(a.dataset.date));
        const parent = document.querySelector('.match-list');
        visibleCards.forEach(c => parent.appendChild(c));
    });
});

// Initial sort by date
document.querySelector('.category-btn.active').click();
