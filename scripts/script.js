const items = document.querySelectorAll(".top-text li");
let current = 0;


items[current].classList.add("active");

setInterval(() => {
  items[current].classList.remove("active");
  current = (current + 1) % items.length;
  items[current].classList.add("active");
}, 2000);

/*-------------------------------------------------*/


const menuButton = document.querySelector('.navbar > button');
const sluitButton = document.querySelector('.zoekbalk > button');

menuButton.onclick = () => {
  document.querySelector('.navbar nav').classList.add('toonMenu');
};

sluitButton.onclick = () => {
  document.querySelector('.navbar nav').classList.remove('toonMenu');
};




/*-------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    const infoItems = document.querySelectorAll(".experts > ul > li");

    infoItems.forEach(item => {
        const button = item.querySelector("button");
        const icon = button.querySelector("img");

        button.addEventListener("click", () => {
            item.classList.toggle("active");

            icon.src = item.classList.contains("active")
                ? "images/rodemin.png"
                : "images/rodeplus.png";
        });
    });
});




/*-------------------------------------------------*/

const buttons = document.querySelectorAll('.headings-ontdekrituals button');
const figures = document.querySelectorAll('.rituals-images figure');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Verwijder active state van alle buttons en figures
    buttons.forEach(b => b.classList.remove('is-active'));
    figures.forEach(f => f.classList.remove('is-active'));

    // Voeg active state toe aan aangeklikte button en bijbehorende figure
    button.classList.add('is-active');
    figures[index].classList.add('is-active');
  });
});

