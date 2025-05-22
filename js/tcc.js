let currentIndexTCC = 1;

document.addEventListener("DOMContentLoaded", () => {
  const imgTCC = document.getElementById("carousel-art-tcc");
  const captionTCC = document.getElementById("caption-art-tcc");

  if (imgTCC && captionTCC) {
    const totalSlidesTCC = 8;

    const captionsTCC = {
      1: "Campagne 1 – Réseaux sociaux",
      2: "Campagne 2 – Landing page",
      3: "Campagne 3 – Réseaux sociaux (event)",
      4: "Plateforme – Provador virtuel APP",
      5: "Coffret cadeau – Packaging",
      6: "Campagne 4 – Réseaux sociaux",
      7: "Campagne 2 – Landing page",
      8: "Campagne 5 – Réseaux sociaux Black Friday"
    };

    function updateTCCSlide() {
      imgTCC.src = `images/projetos academicos/tcc/${currentIndexTCC}.jpg`;
      captionTCC.innerHTML = captionsTCC[currentIndexTCC] || "";
    }

    window.extraNextSlideTCC = function () {
      currentIndexTCC = (currentIndexTCC % totalSlidesTCC) + 1;
      updateTCCSlide();
    };

    window.extraPrevSlideTCC = function () {
      currentIndexTCC = (currentIndexTCC - 2 + totalSlidesTCC) % totalSlidesTCC + 1;
      updateTCCSlide();
    };

    updateTCCSlide();
  }
});
