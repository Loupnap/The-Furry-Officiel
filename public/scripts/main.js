// This file is intentionally left blank.

let currentIndex = 0;

function showNextImage() {
    const carouselContainer = document.querySelector('.carousel-container');
    const images = document.querySelectorAll('.carousel-slide img');
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 3000);