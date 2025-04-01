const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandomRainbowColor() {
  const colors = ['#FF6961', '#FAC898', '#FDFD96', '#77DD77', '#AEC6CF', '#B39EB5'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function drawHeart(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 4, x, y + size);
  ctx.bezierCurveTo(x + size, y + size / 4, x + size / 2, y - size / 2, x, y);
  ctx.closePath();

  const color = getRandomRainbowColor();
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 20;
  ctx.fill();
}

function createRandomHeart() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 40 + 20; 
  drawHeart(x, y, size);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  
  if (Math.random() < 1) {
    createRandomHeart();
  }

  requestAnimationFrame(animate);
}

animate();
