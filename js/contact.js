// Sélectionne toutes les images dans les conteneurs de diaporama
const images = document.querySelectorAll('.slideshow-container .image');
let currentImageIndex = 0;

// Fonction pour afficher l'image suivante
function showNextImage() {
  images[currentImageIndex].style.display = 'none'; // Masque l'image actuelle
  currentImageIndex = (currentImageIndex + 1) % images.length; // Incrémente l'index de l'image actuelle en bouclant sur la longueur totale des images
  images[currentImageIndex].style.display = 'block'; // Affiche la nouvelle image
}

// Fonction pour afficher l'image précédente
function showPreviousImage() {
  images[currentImageIndex].style.display = 'none'; // Masque l'image actuelle
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Décrémente l'index de l'image actuelle en bouclant sur la longueur totale des images
  images[currentImageIndex].style.display = 'block'; // Affiche la nouvelle image
}

// Fonction pour changer de diapositive en fonction de la direction
function changeSlide(direction) {
  if (direction === 1) {
    showNextImage(); // Appelle la fonction pour afficher l'image suivante
  } else if (direction === -1) {
    showPreviousImage(); // Appelle la fonction pour afficher l'image précédente
  }
}

setInterval(showNextImage, 3000); // Change d'image toutes les 3 secondes (3000 ms)
