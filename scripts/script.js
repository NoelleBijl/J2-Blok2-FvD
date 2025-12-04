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

const infoItems = document.querySelectorAll(".info > ul > li");

infoItems.forEach(item => {
    const button = item.querySelector("button");
    const icon = button.querySelector("img");
    const content = item.querySelector("p");

    button.addEventListener("click", () => {
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            icon.src = "images/min.png";
        } else {
            icon.src = "images/plus.png";
        }
    });
});


/*-------------------------------------------------*/
