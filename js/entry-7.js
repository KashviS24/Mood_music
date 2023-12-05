document.addEventListener("DOMContentLoaded", function () {
    moveSnake("snake1");
    moveSnake("snake2");
    moveSnake("snake3");
    moveSnake("snake4");
});

function moveSnake(snakeId) {
    const snake = document.getElementById(snakeId);

    // Set random initial position
    snake.style.left = "0";
    snake.style.top = Math.random() * window.innerHeight + "px";

    // Set random animation duration and delay
    snake.style.animationDuration = Math.random() * 8 + 4 + "s";
    snake.style.animationDelay = Math.random() * 2 + "s";

    // Set unique animation path for each snake
    createKeyframes(snakeId);
    snake.style.animationName = snakeId;
}

function createKeyframes(snakeId) {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
        @keyframes ${snakeId} {
            0% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(50vw, ${Math.random() * 50 - 25}vh);
            }
            50% {
                transform: translate(100vw, 0);
            }
            75% {
                transform: translate(50vw, ${Math.random() * 50 - 25}vh);
            }
            100% {
                transform: translate(0, 0);
            }
        }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}