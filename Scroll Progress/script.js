// Progress Bar and Go to top

const scrollBar = document.querySelector(".scroll-progress");
const scrollToTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const totalScroll = scrollHeight - clientHeight;
  const progress = (scrollTop / totalScroll) * 100;
  scrollBar.style.width = `${progress}%`;
  if (scrollTop > clientHeight) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

scrollToTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

// Grid

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  project.addEventListener("mouseover", () => {
    project.classList.add("active");
  });

  project.addEventListener("mouseout", () => {
    project.classList.remove("active");
  });
});

// Divide text into span
const text = document.querySelector(".projects h1");
const content = text.innerHTML
  .split("")
  .map((letter) => `<span>${letter}</span>`)
  .join("");

text.innerHTML = content;
const letters = document.querySelectorAll(".projects h1 span");

// Appear animation text effect

letters.forEach((letter, index) => {
  letter.style.animationDelay = `${index * 0.1}s`;
});

window.addEventListener("load", () => {
  letters.forEach((letter) => {
    letter.classList.add("appear");
  });
});

// Rubberband text effect

letters.forEach((letter) => {
  letter.addEventListener("mouseover", () => {
    letter.style.transform = "scale(1)";
    letter.classList.remove("appear");
    letter.classList.add("rubberband");
    letter.style.animationDelay = "0.1s";

    setTimeout(() => {
      letter.classList.remove("rubberband");
    }, 1000);
  });
});

// Adding spaces
const spaces = [...letters].filter((letter) => letter.innerHTML === " ");
spaces.forEach((space) => {
  space.innerHTML = "&nbsp";
  space.nextElementSibling.style.color = "red";
});
