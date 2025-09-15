document.addEventListener('DOMContentLoaded', () => {
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let currentIndex = 0;

  function updateCarousel() {
    const imageWidth = carouselImages.clientWidth;

    const offset = -currentIndex * imageWidth;
    carouselImages.style.transform = `translateX(${offset}px)`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  window.addEventListener('resize', updateCarousel);

  // Troca automática a cada 5 segundos
  setInterval(nextImage, 5000);
});
