document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel__tracker-container');
    const carouselTrack = carouselContainer.querySelector('ul.carousel__track');
    const slides = Array.from(carouselTrack.children);
    const nextButton = document.querySelector('.carousel__button--right');
    const prevButton = document.querySelector('.carousel__button--left');
    const navIndicators = document.querySelectorAll('.carousel__indicator');

    let currentIndex = 0;

    const updateSlide = (newIndex) => {
        carouselTrack.style.transform = `translateX(-${newIndex * 100}%)`;
        slides[currentIndex].classList.remove('current-slide');
        slides[newIndex].classList.add('current-slide');
        navIndicators[currentIndex].classList.remove('current-slide');
        navIndicators[newIndex].classList.add('current-slide');
        currentIndex = newIndex;
    };

    nextButton.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % slides.length;
        updateSlide(newIndex);
    });

    prevButton.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(newIndex);
    });

    navIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            updateSlide(index);
        });
    });
});
