// Popups Saison
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

document.querySelectorAll(".popup-bg").forEach(p => {
    p.addEventListener("click", e => {
        if(e.target === p) p.style.display = "none";
    });
});

const filterSelect = document.getElementById("filterSelect");
const toggleOrderBtn = document.getElementById("toggleOrder");
let descending = true;

function sortTopButeurs() {
    const table = document.getElementById("topButeursTable").querySelector("tbody");
    const rows = Array.from(table.querySelectorAll("tr"));
    const filter = filterSelect.value;

    rows.sort((a, b) => {
        let aVal, bVal;

        switch(filter) {
            case "rank":
                aVal = parseInt(a.children[0].innerText);
                bVal = parseInt(b.children[0].innerText);
                break;
            case "goals":
                aVal = parseInt(a.children[3].innerText);
                bVal = parseInt(b.children[3].innerText);
                break;
            case "matches":
                aVal = parseInt(a.children[4].innerText);
                bVal = parseInt(b.children[4].innerText);
                break;
            case "avg":
                aVal = parseFloat(a.children[5].innerText);
                bVal = parseFloat(b.children[5].innerText);
                break;
        }

        return descending ? bVal - aVal : aVal - bVal;
    });

    rows.forEach(row => table.appendChild(row));
}

filterSelect.addEventListener("change", sortTopButeurs);
toggleOrderBtn.addEventListener("click", () => {
    descending = !descending;
    toggleOrderBtn.innerText = descending ? "Ordre: Descendant" : "Ordre: Ascendant";
    sortTopButeurs();
});


const seasonCards = document.querySelectorAll(".season-card");
const seasonList = document.querySelector(".season-list");

const sortedSeasons = Array.from(seasonCards).sort((a, b) => {
    return new Date(b.dataset.start) - new Date(a.dataset.start); // du plus récent au plus ancien
});

sortedSeasons.forEach(card => seasonList.appendChild(card));
