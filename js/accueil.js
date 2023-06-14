// Sélectionnez tous les éléments <img> dans les diaporamas
const images = document.querySelectorAll(".accueil__grid-item img");


// Initialisez un index pour suivre l'image active
let currentIndex = 0;

// Définissez une fonction pour afficher l'image suivante
function showNextImage() {
  // Masquez toutes les images
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }

  // Affichez l'image suivante
  images[currentIndex].classList.add("active");

  // Incrémentez l'index pour afficher l'image suivante
  currentIndex = (currentIndex + 1) % images.length;
}

// Démarrez les diaporamas en appelant la fonction showNextImage toutes les 3 secondes
setInterval(showNextImage, 3000);
