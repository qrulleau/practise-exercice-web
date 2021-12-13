// afficher la navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.secondary-nav');

// afficher le contenu des inputs

const input = document.querySelectorAll('.display-content');
console.log(input);

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('display-nav');
});

input.forEach((element) => {
  element.addEventListener('click', function () {
    element.classList.toggle('selected');

    let value = element.value;
    const displayContent = document.getElementById(value);
    displayContent.classList.toggle('d-none');
  });
});
