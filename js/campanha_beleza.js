document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("beauty-toggle-description");
  const shortDesc = document.querySelector(".beauty-description--short");
  const fullDesc = document.querySelector(".beauty-description--full");

  if (!toggleBtn || !shortDesc || !fullDesc) return;

  // Começa com a descrição curta visível
  fullDesc.style.display = "none";

  toggleBtn.addEventListener("click", () => {
    const isShortVisible = shortDesc.style.display !== "none";

    shortDesc.style.display = isShortVisible ? "none" : "block";
    fullDesc.style.display = isShortVisible ? "block" : "none";

    toggleBtn.textContent = isShortVisible ? "Voir moins" : "Voir plus";
  });
});



let currentIndex = 0
document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("carousel-art-beauty");
  const caption = document.getElementById("extra-carousel-caption");

  if (!img || !caption) return; // Proteção se o carrossel não estiver na página

  const totalSlides = 2;
  let currentIndex = 1;

  const captions = {
    1: "Traduction de l’image: Personne ne décide à ta place. Ta beauté, tes règles.",
    2: "Traduction de l’image: Toutes les courbes sont belles. Ta beauté, tes règles."
  };

  function updateSlide() {
    img.src = `images/campanhas/beleza/cuidado${currentIndex}.png`;
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
