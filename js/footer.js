// Attendez que le contenu de la page soit chargé
window.addEventListener('DOMContentLoaded', (event) => {
    const footer = document.querySelector('footer');
  
    // Fonction pour vérifier la position de défilement et masquer/afficher le footer
    function checkFooterVisibility() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
  
      if (scrollPosition + windowHeight >= documentHeight) {
        footer.classList.remove('footer-hidden');
      } else {
        footer.classList.add('footer-hidden');
      }
    }
  
    // Ajouter l'événement de défilement
    window.addEventListener('scroll', checkFooterVisibility);
  
    // Appeler la fonction au chargement de la page pour gérer l'état initial du footer
    checkFooterVisibility();
  });
  