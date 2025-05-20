document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("extra-carousel-img");
  const caption = document.getElementById("extra-carousel-caption");

  if (!img || !caption) return; // Proteção se o carrossel não estiver na página

  const totalSlides = 2;
  let currentIndex = 1;

  const captions = {
    1: "Traduction de l’image: Personne ne décide à ta place. Ta beauté, tes règles.",
    2: "Traduction de l’image: Toutes les courbes sont belles. Ta beauté, tes règles."
  };

  function updateSlide() {
    img.src = `extras_images/cuidado${currentIndex}.png`;
    caption.textContent = captions[currentIndex] || "";
  }

  window.extraNextSlide = function () {
    currentIndex = (currentIndex % totalSlides) + 1;
    updateSlide();
  };

  window.extraPrevSlide = function () {
    currentIndex = (currentIndex - 2 + totalSlides) % totalSlides + 1;
    updateSlide();
  };

  updateSlide();
});
