function updateDigitalClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const digitalClock = document.getElementById('digitalClock');
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the digital clock every second
setInterval(updateDigitalClock, 1000);

// Initial update
updateDigitalClock();

function resizeTextarea(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight) + "px";
}