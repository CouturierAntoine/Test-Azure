const popup = document.getElementById("popupSeason");
const openBtn = document.getElementById("openSeasonPopup");
const closeBtn = document.getElementById("closeSeasonPopup");
const seasonSelect = document.getElementById("seasonSelect");
const seasonStatsDisplay = document.getElementById("seasonStatsDisplay");

function getStatsForSeason(season) {
    const elem = document.querySelector(
        `.season[data-season="${season}"]`
    );

    return {
        matchs: elem.dataset.matchs,
        buts: elem.dataset.buts,
        assists: elem.dataset.assists,
        saves: elem.dataset.saves,
        mvp: elem.dataset.mvp,
        win: elem.dataset.win,
        lose: elem.dataset.lose
    };
}

function updateSeasonStats(season) {
    const s = getStatsForSeason(season);

    seasonStatsDisplay.innerHTML = `
        <p><strong>Matchs :</strong> ${s.matchs}</p>
        <p><strong>Buts :</strong> ${s.buts}</p>
        <p><strong>Assists :</strong> ${s.assists}</p>
        <p><strong>Defensive Save :</strong> ${s.saves}</p>
        <p><strong>MVP :</strong> ${s.mvp}</p>
        <p><strong>Victoire :</strong> ${s.win}</p>
        <p><strong>Défaite :</strong> ${s.lose}</p>
    `;
}

openBtn.onclick = () => {
    popup.style.display = "flex";
    updateSeasonStats(seasonSelect.value);
};

closeBtn.onclick = () => {
    popup.style.display = "none";
};

seasonSelect.onchange = () => {
    updateSeasonStats(seasonSelect.value);
};