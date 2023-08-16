const snake = document.querySelector('.snake');

function animateSnake() {
  let x = 0;
  let y = 0;
  let snakeSpeed = 2;

  function moveSnake() {
    x += snakeSpeed;
    y += snakeSpeed;
    snake.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(moveSnake);
  }

  requestAnimationFrame(moveSnake);
}

animateSnake();
