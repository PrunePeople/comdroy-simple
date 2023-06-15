// Formulaire
//Récuperer le formulaire
const formulaire = document.getElementById("myForm");
const name = document.getElementById("idName");
const firstname = document.getElementById("idFirstName");
const mail = document.getElementById("idMail");
const entreprise = document.getElementById("idEntreprise");
const phone = document.getElementById("idPhone");
const comment = document.getElementById("textarea");
const mailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
const telRegex = new RegExp("^[0-9]{10}$");

// Soumission évenement au formulaire

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  recap();
});

function recap() {
  if (
    !name.value ||
    !firstname.value ||
    !mail.value ||
    !phone.value ||
    !comment.value
  ) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  if (!mailRegex.test(mail.value)) {
    alert("Veuillez fournir une adresse e-mail valide.");
    return;
  }

  if (!telRegex.test(phone.value)) {
    alert("Veuillez fournir un numéro de téléphone valide");
    return;
  }

  if (
    name.value &&
    firstname.value &&
    mail.value &&
    phone.value &&
    comment.value
  ) {
    alert("Votre formulaire a été soumis avec succès !");
    return;
  }
  formulaire.submit();
  formulaire.reset();
}

// Diaporama
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