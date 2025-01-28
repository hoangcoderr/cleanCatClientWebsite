function downloadClient() {
    window.location.href = 'https://www.dropbox.com/scl/fi/wqxaencskawg86zeg1syd/cleanCatClient.jar?rlkey=1oljpd0acvoqzwpmhbr7aq8zh&e=2&st=0puaq4bo&dl=0';
}

function showDonateInfo() {
    alert('VCB: 1032329131\nMomo: 0854975357');
}

function showDonateInfo() {
    const overlay = document.getElementById('donateOverlay');
    overlay.classList.add('show');
}

function closeDonateInfo() {
    const overlay = document.getElementById('donateOverlay');
    overlay.classList.remove('show');
}