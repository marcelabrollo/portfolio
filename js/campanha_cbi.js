let currentIndexCBI = 1;

document.addEventListener("DOMContentLoaded", () => {
  // Carrossel CBI
  const imgCBI = document.getElementById("carousel-art-cbi");
  const captionCBI = document.getElementById("caption-art");

  if (imgCBI && captionCBI) {
    const totalSlidesCBI = 2;

    const captionsCBI = {
      1: `Traduction de l’image:<br>CBI de Miami – #Formation<br><strong>Médiation scolaire et inclusion</strong><br><em>Découvrez les stratégies essentielles pour l’inclusion scolaire.</em>`,
      2: `Traduction de l’image:<br>CBI de Miami – #Formation<br><strong>Médiation scolaire et inclusion</strong><br><em>Apprenez à identifier les troubles d’apprentissage.</em>`
    };

    const imageFilesCBI = {
      1: "ART 1.jpg",
      2: "ART 2.jpg"
    };

    function updateCBISlide() {
      imgCBI.src = `images/campanhas/cbi/${imageFilesCBI[currentIndexCBI]}`;
      captionCBI.innerHTML = captionsCBI[currentIndexCBI] || "";
    }

    window.extraNextSlideCBI = function () {
      currentIndexCBI = (currentIndexCBI % totalSlidesCBI) + 1;
      updateCBISlide();
    };

    window.extraPrevSlideCBI = function () {
      currentIndexCBI = (currentIndexCBI - 2 + totalSlidesCBI) % totalSlidesCBI + 1;
      updateCBISlide();
    };

    updateCBISlide();
  }

  // Toggle descrição CBI
  const toggleCBI = document.getElementById("cbi-toggle-description");
  const shortCBI = document.querySelector(".cbi-description--short");
  const fullCBI = document.querySelector(".cbi-description--full");

  if (toggleCBI && shortCBI && fullCBI) {
    fullCBI.style.display = "none";

    toggleCBI.addEventListener("click", () => {
      const isShortVisible = shortCBI.style.display !== "none";

      shortCBI.style.display = isShortVisible ? "none" : "block";
      fullCBI.style.display = isShortVisible ? "block" : "none";

      toggleCBI.textContent = isShortVisible ? "Voir moins" : "Voir plus";
    });
  }
});
