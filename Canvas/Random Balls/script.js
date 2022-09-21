/** @type {HTMLCanvasElement} */

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  createCircles(300);
});
let circlesArray = [];
let colorArray = ["#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "#2980B9"];
const mouse = { x: undefined, y: undefined };
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
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
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.initialRadius = radius;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fill();
  };

  this.update = function () {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.vy = -this.vy;
    }

    this.x += this.vx;
    this.y += this.vy;

    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius <= 40) {
        this.radius += 3;
      }
    } else if (this.radius > this.initialRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "rgb(0, 0, 0, 1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (const circle of circlesArray) {
    circle.update();
  }
}

function createCircles(size) {
  circlesArray = [];
  for (let i = 0; i < size; i++) {
    let radius = getRandom(10, 4);
    let x = getRandom(canvas.width - radius, radius);
    let y = getRandom(canvas.height - radius, radius);
    let vx = getRandom(10, -10);
    let vy = getRandom(10, -10);
    circlesArray.push(new Circle(x, y, vx, vy, radius));
  }
  animate();
}

function getRandom(max, min) {
  return Math.random() * (max - min) + min;
}

createCircles(400);
