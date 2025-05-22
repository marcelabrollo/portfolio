let currentIndexTERAPIA = 1;

document.addEventListener("DOMContentLoaded", () => {
  const imgTERAPIA = document.getElementById("carousel-art-terapia");
  const captionTERAPIA = document.getElementById("caption-art-terapia");

  if (!imgTERAPIA || !captionTERAPIA) return;

  const totalSlidesTERAPIA = 9;

  const slidesTERAPIA = {
    1: { src: "1.jpg", caption: `Traduction de l’image :<br>Stories – #Compétences<br><strong>Découvrez les compétences que vous pouvez développer.</strong>` },
    2: { src: "2.jpg", caption: `Traduction de l’image :<br>Stories – #Créativité<br><strong>Brainstorm, réflexion rapide, création de solutions, idées nouvelles.</strong>` },
    3: { src: "3.jpg", caption: `Traduction de l’image :<br>Stories – #Communication<br><strong>Écoute active, expression claire, assertivité, feedback constructif.</strong>` },
    4: { src: "4.jpg", caption: `Traduction de l’image :<br>Stories – #Négociation<br><strong>Empathie, contrôle émotionnel, résolution de conflits, coopération.</strong>` },
    5: { src: "5.jpg", caption: `Traduction de l’image :<br>Stories – #Planification<br><strong>Objectifs, métriques, échéances, suivi.</strong>` },
    6: { src: "15.jpg", caption: `Traduction de l’image :<br><strong>Pratiquez votre communication au quotidien.</strong><br><em>Entraînez-vous à parler, débattre et vous exprimer avec confiance.</em>` },
    7: { src: "dicas.jpg", caption: `Traduction de l’image :<br>#Conseils<br><strong>Choisissez bien vos interlocuteurs, exprimez-vous avec clarté et bienveillance.</strong><br>` },
    8: { src: "caminhada_000.jpg", caption: `Traduction de l’image :<br><strong>Pas besoin de se presser, chaque processus a son propre rythme.</strong><br><em>Avancez à votre propre cadence.</em>` },
    9: { src: "MEME.jpg", caption: `Traduction de l’image :<br><strong>Quand quelqu’un comprend enfin ce que vous vouliez dire.</strong><br><em>Merci!</em>` }
  };

  function updateTERAPIASlide() {
    const slide = slidesTERAPIA[currentIndexTERAPIA];
    imgTERAPIA.src = `images/campanhas/terapia/${slide.src}`;
    captionTERAPIA.innerHTML = slide.caption || "";
  }

  window.extraNextSlideTERAPIA = function () {
    currentIndexTERAPIA = (currentIndexTERAPIA % totalSlidesTERAPIA) + 1;
    updateTERAPIASlide();
  };

  window.extraPrevSlideTERAPIA = function () {
    currentIndexTERAPIA = (currentIndexTERAPIA - 2 + totalSlidesTERAPIA) % totalSlidesTERAPIA + 1;
    updateTERAPIASlide();
  };

  updateTERAPIASlide();
});
