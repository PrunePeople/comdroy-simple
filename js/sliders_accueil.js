"use strict";

// Sélection des éléments HTML correspondant aux classes des curseurs
let imgSlider = document.getElementsByClassName("imgSlider-1");
let imgSlider2 = document.getElementsByClassName("imgSlider-2");
let imgSlider3 = document.getElementsByClassName("imgSlider-3");
let imgSlider4 = document.getElementsByClassName("imgSlider-4");
let imgSlider5 = document.getElementsByClassName("imgSlider-5");

// Variables de suivi de l'étape courante pour chaque curseur
let step = 0;
let step2 = 0;
let step3 = 0;
let step4 = 0;
let step5 = 0;

// Fonction pour retirer la classe 'active' de tous les éléments du curseur
function takeOffActiveImage(slider) {
  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.remove("active");
  }
}

// Fonction d'intervalle pour afficher les images du curseur
function interval(etape, slider) {
  setInterval(() => {
    etape++;
    if (etape >= slider.length) {
      etape = 0;
    }
    takeOffActiveImage(slider);
    slider[etape].classList.add("active");
  }, 2500);
}

// Fonction principale pour démarrer les intervalles pour chaque curseur
export function sliders() {
  // Démarrer l'intervalle pour chaque curseur avec son étape correspondante
  interval(step, imgSlider);
  interval(step2, imgSlider2);
  interval(step3, imgSlider3);
  interval(step4, imgSlider4);
  interval(step5, imgSlider5);
}

// Appel de la fonction principale pour démarrer les curseurs
sliders();
