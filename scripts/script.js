const items = document.querySelectorAll(".top-text li");
let current = 0;


items[current].classList.add("active");

setInterval(() => {
  items[current].classList.remove("active");
  current = (current + 1) % items.length; /*ChatGPT*/
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

document.addEventListener("DOMContentLoaded", () => {  /*Bron: ChatGPT, de js werkte niet dus heeft chatGPT deze regel toegevoegd*/
    const infoItems = document.querySelectorAll(".experts > ul > li");

    infoItems.forEach(item => {
        const button = item.querySelector("button");
        const icon = button.querySelector("img");

        button.addEventListener("click", () => {
            item.classList.toggle("active");

            icon.src = item.classList.contains("active") /*Bron: ChatGPT, de js werkte niet dus heeft chatGPT deze regel veranderd. Ik had zelf eerst een if else gebruikt, maar deze werkte niet*/
                ? "images/rodemin.png"
                : "images/rodeplus.png";

          /* if (item.classList.contains("active")) {
             icon.src = "images/rodemin.png";
             } else {
             icon.src = "images/rodeplus.png";
             } */
        });
    });
});


/*-------------------------------------------------*/

const buttons = document.querySelectorAll('.headings-ontdekrituals button');
const figures = document.querySelectorAll('.rituals-images figure');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    
    buttons.forEach(b => b.classList.remove('is-active'));
    figures.forEach(f => f.classList.remove('is-active'));

    button.classList.add('is-active');
    figures[index].classList.add('is-active');
  });
});

