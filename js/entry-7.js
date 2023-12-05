document.addEventListener("DOMContentLoaded", function () {
    const sentences = [
        "Maybe I'll never know your name",
        "But still, I'm filled with fascination",
        "and as the platform falls away",
        "I wonder where I will go.",
        "Maybe, you like coffee with a cigarette",
        "in the morning, as you watch the sun rise",
        "and hold your friends and lovers close",
        "silently, I wanna know.",
        "'Cause I don't know who you are",
        "But maybe we, in another life",
        "From one another on an empty train",
        "Getting lost in thought"
    ];

    sentences.forEach(function (sentence, index) {
        createSnake(sentence, index);
    });

    function createSnake(sentence, index) {
        const snake = document.createElement("div");
        snake.classList.add("snake");
        snake.textContent = sentence;
        document.body.appendChild(snake);

        // Set initial position and direction
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let angle = Math.random() * 360;
        let speed = 1 + Math.random() * 2;

        // Set unique animation for each snake
        snake.style.animation = `snakeAnimation${index} ${8 + Math.random() * 4}s linear infinite`;

        // Move the snake
        function moveSnake() {
            const radians = angle * (Math.PI / 180);
            x += Math.cos(radians) * speed;
            y += Math.sin(radians) * speed;

            // Bounce off the walls
            if (x < 0 || x > window.innerWidth) {
                angle = 180 - angle;
            }
            if (y < 0 || y > window.innerHeight) {
                angle = 360 - angle;
            }

            // Set the snake's position
            snake.style.left = x + "px";
            snake.style.top = y + "px";

            requestAnimationFrame(moveSnake);
        }

        // Start moving the snake
        moveSnake();
    }
});