const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const counter = document.querySelector("#count");
const loader = document.querySelector(".loader");
const main = document.querySelector("main");
const createBtn = document.querySelector("#welcomeBtn");

let count = 0;

btn.onclick = function (e) {
  e.preventDefault();
  count = input.value;

  input.value = "";
  createBowls();
};

function createBowls() {
  const bowlSection = document.querySelector("section");
  const bowls = document.querySelectorAll("section");

  bowls.forEach((bowl) => {
    bowl.remove();
  });

  showLoader();
  setTimeout(hideLoader, 2000);

  for (let i = 0; i < count; i++) {
    const newBowl = bowlSection.cloneNode(true);
    main.appendChild(newBowl);

    const bowl = newBowl.children[1];
    const liquid = bowl.children[0];
    const water = liquid.children[0];
    //Reverse property on every second element
    if (i % 2 === 1) {
      liquid.style.animationDirection = " reverse";
      bowl.style.animationDirection = " reverse";
    }

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const col = `rgb(${r}, ${g}, ${b})`;
    //giving different colors to new bowls
    liquid.style.backgroundColor = `rgb(${r + 30}, ${g + 30}, ${b + 30})`;
    liquid.style.filter = `drop-shadow(0 0 80px ${col})`;
    water.style.backgroundColor = col;
    water.style.filter = `drop-shadow(0 0 80px ${col})`;
  }

  counter.innerHTML = `You have ${count} Pots`;
}

function showLoader() {
  loader.style.display = "block";

  main.style.display = "none";
  counter.style.display = "none";
  btn.parentElement.style.display = "none";
}

function hideLoader() {
  loader.style.display = "none";
  main.style.display = "grid";
  counter.style.display = "block";
  btn.parentElement.style.display = "block";
}

const box = document.querySelector(".welcome h1");
const text = box.textContent;
box.innerHTML = text
  .split("")
  .map((letter) => `<span>${letter}</span>`)
  .join("");

const letters = document.querySelectorAll(".welcome span");
const spaces = [...letters].filter((letter) => letter.innerHTML === " ");
spaces.forEach((space) => {
  space.innerHTML = "&nbsp";
});
letters.forEach((letter, index) => {
  letter.style.animationDelay = `${index * 0.1}s`;
});

window.onload = () => {
  main.style.display = "none";
  counter.style.display = "none";
  btn.parentElement.style.display = "none";
  letters.forEach((letter) => {
    letter.style.transform = "scale(0)";
    letter.classList.add("appear");
  });
};

createBtn.onclick = () => {
  btn.parentElement.style.display = "block";
  document.querySelector(".welcome").style.display = "none";
};
