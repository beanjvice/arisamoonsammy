let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('actice', i === index);
    });
}

function nextSlide () {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

if (slides.length > 0) {
    showSlide(currentSlide)
    setInterval(nextSlide, 3000);
}