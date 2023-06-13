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
  console.log("Slider length:", slider.length);
  setInterval(() => {
    etape++;
    if (etape >= slider.length) {
      etape = 0;
    }
    console.log("Current step:", etape);
    takeOffActiveImage(slider);
    slider[etape].classList.add("active");
  }, 2500);
}

// Fonction principale pour démarrer les intervalles pour chaque curseur
function sliders() {
  // Démarrer l'intervalle pour chaque curseur avec son étape correspondante
  console.log("imgSlider length:", imgSlider.length);
  console.log("imgSlider2 length:", imgSlider2.length);
  console.log("imgSlider3 length:", imgSlider3.length);
  console.log("imgSlider4 length:", imgSlider4.length);
  console.log("imgSlider5 length:", imgSlider5.length);

  interval(step, imgSlider);
  interval(step2, imgSlider2);
  interval(step3, imgSlider3);
  interval(step4, imgSlider4);
  interval(step5, imgSlider5);
}

// Ajout de la classe 'active' à la première image de chaque curseur
if (imgSlider.length > 0) {
  imgSlider[0].classList.add("active");
}

if (imgSlider2.length > 0) {
  imgSlider2[0].classList.add("active");
}

if (imgSlider3.length > 0) {
  imgSlider3[0].classList.add("active");
}

if (imgSlider4.length > 0) {
  imgSlider4[0].classList.add("active");
}

if (imgSlider5.length > 0) {
  imgSlider5[0].classList.add("active");
}

sliders();
