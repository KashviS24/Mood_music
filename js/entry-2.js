document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector('text');

    function moveText() {
        // Move the text along the x-axis using the sine function
        const x = 50 + Math.sin(performance.now() / 1000) * 40; // Adjust the amplitude (40 in this case)
        textElement.style.transform = `translateX(${x}vw)`;

        requestAnimationFrame(moveText);
    }

    moveText();
});