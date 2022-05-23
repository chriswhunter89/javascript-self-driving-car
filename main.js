const canvas = document.getElementById("myCanvas");
canvas.width = 200;

// contains all methods we need to draw on canvas
const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

animate();

function animate() {
  car.update();
  canvas.height = window.innerHeight;
  car.draw(ctx);
  requestAnimationFrame(animate); // Requests animate function repeatedly to give the illusion of movement
}
