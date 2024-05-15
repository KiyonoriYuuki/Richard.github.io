document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel__tracker-container ul');
    if (!carouselContainer) {
        console.error("Carousel element not found");
        return;
    }

    const slides = Array.from(carouselContainer.children);
    const nextButton = document.querySelector('.carousel__button--right');
    const prevButton = document.querySelector('.carousel__button--left');
    const navIndicators = document.querySelectorAll('.carousel__indicator');

    // Ensure all slides except the first are hidden initially
    slides.forEach((slide, index) => {
        if (index !== 0) {
            slide.classList.add('hidden');
        }
    });

    const updateSlide = (currentSlide, targetSlide) => {
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
        currentSlide.classList.add('hidden');
        targetSlide.classList.remove('hidden');
    };

    const updateIndicators = (currentIndicator, targetIndicator) => {
        currentIndicator.classList.remove('current-slide');
        targetIndicator.classList.add('current-slide');
    };

    // Add functionality for next button
    nextButton.addEventListener('click', () => {
        const currentSlide = carouselContainer.querySelector('.current-slide');
        const currentIndicator = document.querySelector('.carousel__nav .current-slide');
        const nextSlide = currentSlide.nextElementSibling || slides[0];
        const nextIndicator = currentIndicator.nextElementSibling || navIndicators[0];

        updateSlide(currentSlide, nextSlide);
        updateIndicators(currentIndicator, nextIndicator);
    });

    // Add functionality for previous button
    prevButton.addEventListener('click', () => {
        const currentSlide = carouselContainer.querySelector('.current-slide');
        const currentIndicator = document.querySelector('.carousel__nav .current-slide');
        const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
        const prevIndicator = currentIndicator.previousElementSibling || navIndicators[navIndicators.length - 1];

        updateSlide(currentSlide, prevSlide);
        updateIndicators(currentIndicator, prevIndicator);
    });

    // Add functionality for navigation indicators
    navIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            const currentSlide = carouselContainer.querySelector('.current-slide');
            const currentIndicator = document.querySelector('.carousel__nav .current-slide');
            const targetSlide = slides[index];
            const targetIndicator = navIndicators[index];

            updateSlide(currentSlide, targetSlide);
            updateIndicators(currentIndicator, targetIndicator);
        });
    });
});
