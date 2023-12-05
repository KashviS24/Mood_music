document.addEventListener("DOMContentLoaded", function () {
    const numberOfDrops = 100; /* Adjust the number of raindrops as needed */

    for (let i = 0; i < numberOfDrops; i++) {
        createRaindrop();
    }

    function createRaindrop() {
        const raindrop = document.createElement("div");
        raindrop.classList.add("raindrop");
        raindrop.style.left = `${Math.random() * window.innerWidth}px`;
        raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`; /* Adjust animation duration */
        raindrop.style.animationDelay = `${Math.random() * 1}s`; /* Adjust animation delay */
        document.body.appendChild(raindrop);
    }
});