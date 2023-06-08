const menu = document.querySelector('.dropdown__language-option');
const toggleButton = document.querySelector('.navbar__icones_languages');
const languageButtonFR = document.querySelector('.dropdown__language-linkFR');
const languageButtonEN = document.querySelector('.dropdown__language-linkEN');

const menuBurger = document.querySelector('.dropdown__menu_burger-choises');
const toggleButtonBurger = document.querySelector('.navbar__menu_burger');


/**
 * Make appear or disappear the language dropdown when you click on the flag icons.
 */
toggleButton.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
toggleButtonBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
});
/**
 * Make disappear the language dropdown when you click on french choice.
 */
  languageButtonFR.addEventListener('click',() => {
  menu.classList.remove('show');
});
/**
 * Make disappear the language dropdown when you click on english choice.
 */
languageButtonEN.addEventListener('click',() => {
  menu.classList.remove('active');
});

/**
 * Make disappear the language and burger dropdown when you click out of the menu.
 */
document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
    menu.classList.remove('show');
  }
});
document.addEventListener('click', function(event) {
  if (!menuBurger.contains(event.target) && !toggleButtonBurger.contains(event.target)) {
    menuBurger.classList.remove('active');
  }
});