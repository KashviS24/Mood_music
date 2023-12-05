document.addEventListener("DOMContentLoaded", function () {
    const sentences = [
        "Maybe I'll never know your name",
        "But still, I'm filled with fascination",
        "and as the platform falls away",
        "I wonder where I will go"
    ];

    sentences.forEach(function (sentence, index) {
        createSnake(sentence, index);
    });

    function createSnake(sentence, index) {
        const snake = document.createElement("div");
        snake.classList.add("snake");
        snake.textContent = sentence;
        document.body.appendChild(snake);

        // Set random initial position
        snake.style.left = Math.random() * window.innerWidth + "px";
        snake.style.top = Math.random() * window.innerHeight + "px";

        // Set random animation duration and delay
        snake.style.animationDuration = Math.random() * 6 + 4 + "s";
        snake.style.animationDelay = Math.random() * 2 + "s";

        // Set unique animation direction for each snake
        snake.style.animationName = "snakeAnimation" + index;
        createKeyframes(index);
    }

    function createKeyframes(index) {
        const styleSheet = document.styleSheets[0];
        const keyframes = `
            @keyframes snakeAnimation${index} {
                0% {
                    transform: translateY(0) translateX(0);
                }
                25% {
                    transform: translateY(-20px) translateX(20px);
                }
                50% {
                    transform: translateY(0) translateX(0);
                }
                75% {
                    transform: translateY(20px) translateX(-20px);
                }
                100% {
                    transform: translateY(0) translateX(0);
                }
            }
        `;
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
});