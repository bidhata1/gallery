const slides = document.querySelectorAll(".photo");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = 1;
            slide.style.zIndex = 1;
        } else {
            slide.style.opacity = 0;
            slide.style.zIndex = 0;
        }
    });
}

function nextImage() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevImage() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
