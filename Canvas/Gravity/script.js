/** @type {HTMLCanvasElement} */

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const startBtn = document.querySelector("#start");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
});
let circlesArray = [];
let colorArray = ["#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "#2980B9"];
const mouse = { x: undefined, y: undefined };
startBtn.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  startBtn.style.display = 'none';

  createCircles(50);

});

function randomCol() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green} , ${blue})`;
}

function Circle(x, y, vx, vy, radius) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.radius = radius;
  this.color = randomCol();
  this.initialRadius = radius;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fill();
  };

  this.update = function () {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {

      this.vx = -this.vx;

    }
    if (this.y + this.vy + this.radius >= canvas.height || this.y + this.vy <= this.radius) {
      this.vy = (this.vy * 0.9) * -1;
      if (Math.abs(this.vy) < 1) {
        this.vy = 0;
        this.vx = 0;
      }
    } else {
      this.vy += 1;
    }


    this.y += this.vy;
    this.x += this.vx;
    this.draw();
  };
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "rgb(0, 0, 0, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (const circle of circlesArray) {
    circle.update();
  }
}

function createCircles(size) {
  circlesArray = [];
  for (let i = 0; i < size; i++) {
    let radius = getRandom(50, 10);
    let x = getRandom(mouse.x + 300, mouse.x - 300);
    let y = getRandom(mouse.y + 50, mouse.y - 50);
    let vx = getRandom(15, -15);
    let vy = getRandom(20, -60);
    circlesArray.push(new Circle(x, y, vx, vy, radius));
  }
  animate();
}

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}





