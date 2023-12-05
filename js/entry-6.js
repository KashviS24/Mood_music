let currentIndex = 0;
    const totalSlides = document.querySelectorAll('.carousel img').length;
    const carousel = document.getElementById('carousel');

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function updateCarousel() {
        const translateValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }

    // Automatic scrolling every 3 seconds
    setInterval(nextSlide, 3000);