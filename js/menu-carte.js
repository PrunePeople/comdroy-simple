// Ajoute des points de suspension au milieu d'une chaîne de caractères si elle est inférieure à une certaine longueur maximale.
function addMiddleDots(name, maxLength) {
  if (name.length >= maxLength) {
    return name;
  }
  const nbrOfDotsToAdd = maxLength - name.length;
  const dots = Array(nbrOfDotsToAdd).fill(".").join("");
  return name + dots;
};

// Méthode asynchrone permettant de générer du code HTML de la carte à partir des données récupérées depuis le fichier JSON.
class Menu {
  async templateMenu() {
    const menu = await this.fetchData();

    /*
    Génère le code HTML représentant les entrées de la formule du midi des menu à partir des données contenues dans l'objet "menu" 
    en utilisant la fonction 'map()' pour créer des balises <p> pour chaque éléments, 
    puis la fonction 'join()' pour les concaténer en une seule chaîne de caractères
    */
    const formuleMidiEntreesHTML = menu.menus.formuleMidi.entrees
      .map(
        (item) => `
      <p>${item.name}</p>
    `
      )
      .join("");

    const formuleMidiPlatsHTML = menu.menus.formuleMidi.plats
      .map(
        (item) => `
      <p>${item.name}</p>
    `
      )
      .join("");

    const formuleMidiDessertsHTML = menu.menus.formuleMidi.desserts
      .map(
        (item) => `
      <p>${item.name}</p>
    `
      )
      .join("");

    const formuleSoirWKEntreesHTML = menu.menus.formuleSoirWK.entrees
      .map(
        (item) => `
          <p>${item.name}</p>
        `
      )
      .join("");

    const formuleSoirWKPlatsHTML = menu.menus.formuleSoirWK.plats
      .map(
        (item) => `
          <p>${item.name}</p>
        `
      )
      .join("");

    const formuleSoirWKDessertsHTML = menu.menus.formuleSoirWK.desserts
      .map(
        (item) => `
          <p>${item.name}</p>
        `
      )
      .join("");

    const menuEnfantHTML = menu.menus.menuEnfant
      .map(
        (item) => `
          <p>${item.name}</p>
        `
      )
      .join("");

    const aLaCarteEntreesHTML = menu.menus.aLaCarte.entrees
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const aLaCartePlatsHTML = menu.menus.aLaCarte.plats
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const aLaCarteDessertsHTML = menu.menus.aLaCarte.desserts
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const aLaCarteSuggestionsEntreesHTML =
      menu.menus.aLaCarte.suggestions.entrees
        .map(
          (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
        )
        .join("");

    const aLaCarteSuggestionsPlatsHTML = menu.menus.aLaCarte.suggestions.plats
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const aLaCarteSuggestionsDessertsHTML =
      menu.menus.aLaCarte.suggestions.desserts
        .map(
          (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
        )
        .join("");

    const aLaCarteGlacesIncontournablesHTML =
      menu.menus.aLaCarte.glaces.incontournables
        .map(
          (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
        )
        .join("");

    const aLaCarteGlacesInattenduesHTML = menu.menus.aLaCarte.glaces.inattendues
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const aLaCarteGlacesInterditesHTML = menu.menus.aLaCarte.glaces.interdites
      .map(
        (item) => `
        <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
      `
      )
      .join("");
    const aLaCarteGlacesNosParfumsGlaceHTML =
      menu.menus.aLaCarte.glaces.nosParfums.glace
        .map(
          (item) => `
      <p>${addMiddleDots(item.name, 90)}  ${item.price1.toFixed(
            2
          )}€ - ${item.price2.toFixed(2)}€</p>
    `
        )
        .join("");

    const aLaCarteGlacesNosParfumsSorbetHTML =
      menu.menus.aLaCarte.glaces.nosParfums.sorbet
        .map(
          (item) => `
        <p>${addMiddleDots(item.name, 90)}  ${item.price1.toFixed(
            2
          )}€ - ${item.price2.toFixed(2)}€</p>
      `
        )
        .join("");

    const boissonsCocktailsSansAlcoolHTML = menu.boissons.cocktails.sansAlcool
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const boissonsCocktailsAvecAlcoolHTML = menu.boissons.cocktails.avecAlcool
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const boissonsBieresHTML = menu.boissons.bieres
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const boissonsWhiskiesHTML = menu.boissons.whiskies
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const boissonsAperitifsHTML = menu.boissons.aperitifs
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const boissonsSoftsHTML = menu.boissons.softs
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const boissonsBoissonsChaudesHTML = menu.boissons.boissonsChaudes
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const boissonsDigestifsHTML = menu.boissons.digestifs
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const boissonsRhumsHTML = menu.boissons.rhums
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const boissonsVinsRougeHTML = menu.boissons.vins.rouge
      .map(
        (item) => `
        <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
      `
      )
      .join("");

    const boissonsVinsRoseHTML = menu.boissons.vins.rose
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const boissonsVinsblancSecHTML = menu.boissons.vins.blancSec
      .map(
        (item) => `
        <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
      `
      )
      .join("");

    const boissonsVinsBlancMoelleuxHTML = menu.boissons.vins.blancMoelleux
      .map(
        (item) => `
      <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
    `
      )
      .join("");

    const boissonsVinsChampagneHTML = menu.boissons.vins.champagne
      .map(
        (item) => `
    <p>${addMiddleDots(item.name, 90)}  ${item.price.toFixed(2)}€</p>
    `
      )
      .join("");

    return `
    <div class="bordered-content">
    <h2 id="menus">Nos Menus</h2>
    <h3 id="menus-formuleMidi">Formule Midi</h3>
    <h4>Entrées</h4>
    <div class="menu-gauche-donnees">${formuleMidiEntreesHTML}</div>
    <h4>Plats</h4>
    <div class="menu-gauche-donnees">${formuleMidiPlatsHTML}</div>
    <h4>Desserts</h4>
    <div class="menu-gauche-donnees">${formuleMidiDessertsHTML}</div>
    <br>
    <h3 id="menus-formuleSoirWK">Formule Soir & Week-end</h3>
    <h4>Entrées</h4>
    <div class="menu-gauche-donnees">${formuleSoirWKEntreesHTML}</div>
    <h4>Plats</h4>
    <div class="menu-gauche-donnees">${formuleSoirWKPlatsHTML}</div>
    <h4>Desserts</h4>
    <div class="menu-gauche-donnees">${formuleSoirWKDessertsHTML}</div>
    <br>
    <h3>Menu Enfant</h3>
    <div class="menu-gauche-donnees" id="menus-enfant">${menuEnfantHTML}</div>
    <br>
    <hr>
    <h2 id="aLaCarte">A la carte</h2>
    <h3>Entrées à la carte</h3>
    <div class="menu-gauche-donnees" id="aLaCarte-entrees">${aLaCarteEntreesHTML}</div>
    <h3>Plats à la carte</h3>
    <div class="menu-gauche-donnees" id="aLaCarte-plats">${aLaCartePlatsHTML}</div>
    <h3>Desserts à la carte</h3>
    <div class="menu-gauche-donnees" id="aLaCarte-desserts">${aLaCarteDessertsHTML}</div>
    <br>
    <h3 id="aLaCarte-suggestions">Suggestions</h3>
    <h4>Entrées</h4>
    <div class="menu-gauche-donnees" id="aLaCarte-suggestions-entrees">${aLaCarteSuggestionsEntreesHTML}</div>
    <h4>Plats</h4>
    <div class="menu-gauche-donnees" id="aLaCarte-suggestions-plats">${aLaCarteSuggestionsPlatsHTML}</div>
    <h4>Desserts</h4>
    <div class="menu-gauche-donnees" id="aLaCarte-suggestions-desserts">${aLaCarteSuggestionsDessertsHTML}</div>
    <br>
    <h3 id="aLaCarte-glaces">Glaces</h3>
    <h4>Les Incontournables</h4>
    <div class="menu-gauche-donnees" id="aLaCarte-glaces-incontournables">${aLaCarteGlacesIncontournablesHTML}</div>
    <h4>Les Inattendues</h4>
    <div class="menu-gauche-donnees" id="aLaCarte-glaces-inattendues">${aLaCarteGlacesInattenduesHTML}</div>
    <h4>Les Interdites</h4>
    <div class="menu-gauche-donnees" id="aLaCarte-glaces-interdites">${aLaCarteGlacesInterditesHTML}</div>
    <h4 id="aLaCarte-glaces-nosParfums">Nos Parfums</h4>
    <h4>Nos Glaces</h4>
    <div class="menu-gauche-donnees" id="aLaCarte-glaces-nosParfums-glaces">${aLaCarteGlacesNosParfumsGlaceHTML}</div>
    <h4>Nos Sorbets</h4>
    <div class="menu-gauche-donnees" id="aLaCarte-glaces-nosParfums-sorbets">${aLaCarteGlacesNosParfumsSorbetHTML}</div>
    <br>
    <hr>
    <h2 id="boissons">Nos Boissons</h2>
    <h3 id="boissons-cocktails">Cocktails</h3>
    <h4>Sans alcool</h4>
    <div class="menu-gauche-donnees" id="boissons-cocktails-sansAlcool">${boissonsCocktailsSansAlcoolHTML}</div>
    <h4>Avec alcool</h4>
    <div class="menu-gauche-donnees" id="boissons-cocktails-avecAlcool">${boissonsCocktailsAvecAlcoolHTML}</div>
    <h3>Nos Apéritifs</h3>
    <div class="menu-gauche-donnees" id="boissons-aperitifs">${boissonsAperitifsHTML}</div>
    <h3>Nos Bières<h3>
    <div class="menu-gauche-donnees" id="boissons-bieres">${boissonsBieresHTML}</div>
    <h3>Nos Softs<h3>
    <div class="menu-gauche-donnees" id="boissons-softs">${boissonsSoftsHTML}</div>
    <h3>Nos Whiskies<h3>
    <div class="menu-gauche-donnees" id="boissons-whiskies">${boissonsWhiskiesHTML}</div>
    <h3>Nos Digestifs<h3>
    <div class="menu-gauche-donnees" id="boissons-digestifs">${boissonsDigestifsHTML}</div>
    <h3>Nos Rhums<h3>
    <div class="menu-gauche-donnees" id="boissons-rhums">${boissonsRhumsHTML}</div>
    <h3>Nos Boissons chaudes<h3>
    <div class="menu-gauche-donnees" id="boissons-boissonsChaudes">${boissonsBoissonsChaudesHTML}</div>
    <h3 id="boissons-vinsChampagnes">Nos Vins</h3>
    <h4>Vins Rouge</h4>
    <div class="menu-gauche-donnees" id="boissons-vinsChampagnes-vinRouge">${boissonsVinsRougeHTML}</div>
    <h4>Vins Rosé</h4>
    <div class="menu-gauche-donnees" id="boissons-vinsChampagnes-vinRose">${boissonsVinsRoseHTML}</div>
    <h4>Vins bkanc moelleux</h4>
    <div class="menu-gauche-donnees" id="boissons-vinsChampagnes-vinBlancMoelleux">${boissonsVinsBlancMoelleuxHTML}</div>
    <h4>Vin Blanc sec</h4>
    <div class="menu-gauche-donnees" id="boissons-vinsChampagnes-vinBlancSec">${boissonsVinsblancSecHTML}</div>
    <h4>Champagne</h4>
    <div class="menu-gauche-donnees" id="boissons-vinsChampagnes-Champagne">${boissonsVinsChampagneHTML}</div>
  </div>
  
      `;
  }
  // Fonction asynchrone qui récupèrer les données depuis le fichier JSON en utilisant l'API Fetch,
  // puis les transforme en objet JSON avant de les renvoyer
  async fetchData() {
    const rawData = await fetch("../src/data.json");
    const data = await rawData.json();
    return data;
  }
}

// Remplissage du DOM HTML
const el_menu = document.querySelector(".menu-colonne-gauche");
const menu_object = new Menu();

async function renderMenu() {
  el_menu.innerHTML = await menu_object.templateMenu();
}

renderMenu();



// Position de la barre de navigation suivant le défilement de la fenêtre
window.addEventListener("scroll",  () => {
  const navigation = document.querySelector(".menu-navigation");
  const windowHeight = window.innerHeight;
  const threshold = windowHeight * 1.3; 

  if (window.scrollY > threshold) {
    navigation.classList.add("sticky"); // Ajout de la classe .sticky 
  } else {
    navigation.classList.remove("sticky");
  }
});


// Bouton de retour en haut
// Apparition de la flèche suivant le défilement de l'écran
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  const scrollToTopButton = document.querySelector(".scroll-to-top");

  if (scrollPosition > 500) {
    scrollToTopButton.classList.add("show"); // Ajout de la classe .show pour montrer la flèche
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

// Fait défiler la fenêtre vers le haut de la page lors du clique 
document
  .querySelector(".scroll-to-top")
  .addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
