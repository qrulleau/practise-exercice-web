// afficher la navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.secondary-nav');

// afficher le contenu des inputs
const input = document.querySelectorAll('.display-content');

// ajoute is-active au click a l element hambuger et toogle la classe display-nav a l element
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('display-nav');
});

// toogle la classe selected a l element input et il va chercher l element qui a la meme id que la value du button
input.forEach((element) => {
  element.addEventListener('click', function () {
    element.classList.toggle('selected');

    let value = element.value;
    const displayContent = document.getElementById(value);
    displayContent.classList.toggle('d-none');
  });
});
