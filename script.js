// Fonction d'alerte au clic sur le bouton
function showAlert() {
    alert("Bienvenue sur le Blog de la Marmite !");
}

// Fonction pour animer l'apparition des éléments lors du défilement
function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // Point de déclenchement (150px avant que l'élément ne soit visible)

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Écouteur d'événements pour le clic sur le bouton d'alerte
const alertButton = document.querySelector('#alertButton');
if (alertButton) {
    alertButton.addEventListener('click', showAlert);
}

// Écouteur d'événements pour le défilement de la page
window.addEventListener('scroll', revealOnScroll);

// Initialiser la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
});
