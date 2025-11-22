let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const items = document.querySelectorAll(".timeline-item");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide () {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

if (slides.length > 0) {
    showSlide(currentSlide)
    setInterval(nextSlide, 5000);
}

function showItemsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    const items = document.querySelectorAll(".timeline-item");

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add("show");
        }
    });
}

document.querySelectorAll('.company-tab').forEach(tab => {
    tab.addEventListener('click', function() {

        document.querySelectorAll('.company-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.timeline-item').forEach(item => {
            item.style.display = 'none';
            item.classList.remove('show');
        });

        const company = this.getAttribute('data-company');
        const selected = document.querySelector(`.timeline-item[data-company="${company}"]`);
        if (selected) {
            selected.style.display = '';

            void selected.offsetWidth;
            setTimeout(() => {
                selected.classList.add('show');
            }, 10);

        }
    });
});

new Swiper('.card-wrapper', {
direction: 'horizontal',
  loop: true,
  spaceBetween: 30, 
  grabCursor: true,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});

window.addEventListener("scroll", showItemsOnScroll);
window.addEventListener("load", showItemsOnScroll);


