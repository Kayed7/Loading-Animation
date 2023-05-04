const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const numStars = 100;
const stars = [];

for (let i = 0; i < numStars; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 2;
  const alpha = Math.random() * 0.8 + 0.2;

  stars.push({ x, y, size, alpha });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < numStars; i++) {
    const star = stars[i];

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
function animate() {
  for (let i = 0; i < numStars; i++) {
    const star = stars[i];

    star.x += (Math.random() - 0.5) * 0.1;
    star.y += (Math.random() - 0.5) * 0.1;
    star.alpha += (Math.random() - 0.5) * 0.05;

    if (star.alpha < 0.2) {
      star.alpha = 0.2;
    }

    if (star.alpha > 1) {
      star.alpha = 1;
    }

    if (star.x < 0 || star.x > canvas.width) {
      star.x = Math.random() * canvas.width;
    }

    if (star.y < 0 || star.y > canvas.height) {
      star.y = Math.random() * canvas.height;
    }
  }

  requestAnimationFrame(animate);
}

animate();
