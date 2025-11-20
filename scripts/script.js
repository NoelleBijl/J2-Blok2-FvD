const items = document.querySelectorAll(".top-text .item");
let current = 0;

// Eerst item tonen
items[current].classList.add("active");

setInterval(() => {
  // huidig item verbergen
  items[current].classList.remove("active");

  // volgende item
  current = (current + 1) % items.length;

  // nieuw item tonen
  items[current].classList.add("active");

}, 2000); // 2 seconden



const menuButton = document.querySelector('header > button');


menuButton.onclick = function openMenu() {
  const nav = document.querySelector('header nav');
  nav.classList.add('toonMenu');
};

/************************************/
/* menu sluiten met de sluit button */
/************************************/

const sluitButton = document.querySelector('nav > button');

sluitButton.onclick = function sluitMenu() {
  const nav = document.querySelector('header nav');
  nav.classList.remove('toonMenu');
};


