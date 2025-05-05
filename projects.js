// projects.js - dinamycally loads some images to the website necessary to copy activities.json as a static variable


let activeLang = navigator.language.slice(0, 2);
const supportedLangs = ['fr'];
if (!supportedLangs.includes(activeLang)) activeLang = 'fr';

const languageLabels = {
  pt: { showMore: 'Mostrar mais', showLess: 'Mostrar menos' },
  en: { showMore: 'Show more', showLess: 'Show less' },
  fr: { showMore: 'Voir plus', showLess: 'Voir moins' },
};



const languageSelector = document.createElement('select');
languageSelector.id = 'language-selector';
languageSelector.className = 'language-selector';
supportedLangs.forEach((lang) => {
  const option = document.createElement('option');
  option.value = lang;
  option.textContent = lang.toUpperCase();
  if (lang === activeLang) option.selected = true;
  languageSelector.appendChild(option);
});

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  if (nav) nav.parentElement.insertBefore(languageSelector, nav);

  languageSelector.addEventListener('change', (e) => {
    activeLang = e.target.value;
    renderProjects(portfolioData);
  });

  // Estilo básico do seletor via JS (caso não esteja no CSS)
  const style = document.createElement('style');
  style.textContent = `
    .language-selector {
      position: absolute;
      top: 3.4rem;
      left: 2rem;
      padding: 0.5rem 1rem;
      background-color: var(--pink);
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 1.6rem;
      font-family: 'Jost', sans-serif;
      cursor: pointer;
    }
    .language-selector:focus {
      outline: 2px solid var(--white);
    }
  `;
  document.head.appendChild(style);
});



function createCarousel(images, activityId) {
  const container = document.createElement("div");
  container.className = "carousel";

  const img = document.createElement("img");
  img.src = `Images/${images[0]}`;
  img.className = "carousel__image";
  img.dataset.index = 0;
  img.id = `carousel-img-${activityId}`;

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "←";
  prevBtn.className = "carousel__button carousel__button--prev";

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "→";
  nextBtn.className = "carousel__button carousel__button--next";

  prevBtn.addEventListener("click", () => {
    let index = parseInt(img.dataset.index);
    index = (index - 1 + images.length) % images.length;
    img.src = `Images/${images[index]}`;
    img.dataset.index = index;
  });

  nextBtn.addEventListener("click", () => {
    let index = parseInt(img.dataset.index);
    index = (index + 1) % images.length;
    img.src = `Images/${images[index]}`;
    img.dataset.index = index;
  });

  container.appendChild(prevBtn);
  container.appendChild(img);
  container.appendChild(nextBtn);

  return container;
}

function renderProjects(data) {
  const container = document.querySelector(".work__boxes");
  container.innerHTML = "";

  Object.entries(data).forEach(([companyKey, company], i) => {
    const box = document.createElement("div");
    box.className = "work__box";
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.gap = "3rem";

    const text = document.createElement("div");
    text.className = "work__text";

    const h3 = document.createElement("h3");
    h3.textContent = companyKey;

    const shortDesc = company[`description_${activeLang}`] || company[`description_en`];
    const fullDesc = company[`description_${activeLang}_full`] || company[`description_en_full`];

    const p = document.createElement("p");
    p.textContent = shortDesc;
    p.className = "description--short";

    const full = document.createElement("p");
    full.textContent = fullDesc;
    full.style.display = "none";
    full.className = "description--full";

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = languageLabels[activeLang].showMore;
    toggleBtn.className = "btn btn--pink toggle-description";
    toggleBtn.addEventListener("click", () => {
      const showing = full.style.display === "block";
      full.style.display = showing ? "none" : "block";
      p.style.display = showing ? "block" : "none";
      toggleBtn.textContent = showing
        ? languageLabels[activeLang].showMore
        : languageLabels[activeLang].showLess;
    });

    text.appendChild(h3);
    text.appendChild(p);
    text.appendChild(full);
    text.appendChild(toggleBtn);
    box.appendChild(text);

    company.activities.forEach((activity, j) => {
      const activityBox = document.createElement("div");
      activityBox.className = "activity__box";

      const h4 = document.createElement("h4");
      h4.textContent = activity.name;

      const carousel = createCarousel(activity.images, `${companyKey.replace(/\s/g, '-')}-${j}`);

      activityBox.appendChild(h4);
      activityBox.appendChild(carousel);
      box.appendChild(activityBox);
    });

    container.appendChild(box);
  });
}






const portfolioData = {
  "Prestige Parfums et Cosmétiques": {
    "description_br_full": "Durante meu estágio na Prestige Perfumes e Cosméticos, tive a oportunidade de atuar em diversos projetos estratégicos e criativos para marcas como Dolce&Gabbana, Issey Miyake e Narciso Rodriguez.\n\nFui responsável por desenvolver e adaptar materiais promocionais e visuais para o mercado brasileiro, incluindo vitrines e ativações em loja em pontos de venda parceiros. Garanti que cada execução refletisse adequadamente a identidade sofisticada das marcas e estivesse em conformidade com as diretrizes globais, gerenciando todo o processo desde o conceito até a entrega final, em colaboração com gráficas e fornecedores.\n\nTambém desenvolvi páginas de marca para Issey Miyake e Narciso Rodriguez no site da Sephora Brasil, além de otimizar páginas de produto com foco em storytelling envolvente e posicionamento de marca. Realizei benchmarking com execuções internacionais e concorrentes para garantir uma adaptação local eficaz, respeitando sempre a identidade e o tom de cada marca.\n\nApoiei ainda as ações de marketing digital, auxiliando na adaptação e no envio de materiais promocionais para campanhas sazonais e lançamentos. Quando necessário, contribuí com a criação de peças visuais e redação publicitária, além de ser responsável por reportar as ativações às equipes globais.\n\nEssa experiência me proporcionou uma compreensão prática e estratégica do universo do marketing e da comunicação no setor de luxo, integrando branding, visual merchandising e marketing digital em um único ecossistema.\n\nAbaixo, você pode conferir alguns dos materiais que desenvolvi durante esse período.",
    "description_br": "Durante meu estágio na Prestige Perfumes e Cosméticos, atuei no desenvolvimento de vitrines, páginas de marca e materiais promocionais para marcas como Dolce&Gabbana, Issey Miyake e Narciso Rodriguez. Trabalhei na adaptação das campanhas globais para o mercado brasileiro, respeitando os guidelines internacionais e integrando estratégias de branding, visual merchandising e marketing digital no setor de luxo. Confira abaixo alguns dos materiais desenvolvidos durante esse período.",
    "description_en_full": "During my internship at Prestige Perfumes and Cosmetics, I had the opportunity to work on several strategic and creative projects for brands such as Dolce&Gabbana, Issey Miyake, and Narciso Rodriguez.\n\nI was responsible for developing and tailoring promotional and visual materials to the Brazilian market, including window displays and in-store animations at partner retail stores. I ensured each execution properly reflected the brands' sophisticated identity and adhered to global guidelines, managing the entire process from concept to final delivery in collaboration with printers and suppliers.\n\nI also developed brand pages for Issey Miyake and Narciso Rodriguez on Sephora Brazil's website and optimized product pages with compelling storytelling and brand positioning emphasis. Benchmarking against international brand executions and competitors was done to ensure successful local adaptation, always taking into account the unique identity and tone of each brand.\n\nI also supported digital marketing efforts, assisting in tailoring and distributing promotional materials for seasonal and product launch campaigns. As needed, I supported visual asset development and copywriting, and was responsible for reporting campaign activations to the global teams.\n\nThis experience allowed me to develop a practical and strategic understanding of the luxury marketing and communication world, bringing together branding, visual merchandising, and digital marketing within one ecosystem.",
    "description_en": "During my internship at Prestige Perfumes and Cosmetics, I worked on the development of window displays, brand pages, and promotional materials for brands like Dolce&Gabbana, Issey Miyake, and Narciso Rodriguez. I adapted global campaigns to the Brazilian market, ensuring alignment with international guidelines and integrating branding, visual merchandising, and digital marketing strategies in the luxury sector. Check out some of the materials I created during this period below.",
    "description_fr_full": "J'ai été en charge de la création et de l'adaptation de supports visuels et promotionnels pour le marché brésilien, notamment des vitrines et animations en point de vente. Chaque exécution devait refléter fidèlement l’univers des marques tout en respectant les guidelines internationaux, de la conception à la production, en lien direct avec les imprimeurs et les équipes locales.\n\nJ'ai également développé des pages de marque pour Issey Miyake et Narciso Rodriguez sur le site de Sephora Brésil, et optimisé les pages produit en intégrant un storytelling cohérent et un positionnement clair. J’ai réalisé un benchmark des marques concurrentes et analysé des exemples internationaux pour assurer une adaptation pertinente au marché local.\n\nEn parallèle, j'ai contribué aux campagnes de marketing digital, en adaptant les contenus pour des activations saisonnières ou lancements produit, en participant à la rédaction de contenus et à la création d’assets visuels lorsque nécessaire. J’ai également assuré le reporting des activations aux équipes centrales.\n\nCette expérience m’a permis d’acquérir une vision globale et concrète du marketing dans le secteur du luxe, en alliant branding, visual merchandising et marketing digital dans une logique cohérente et orientée résultat.\n\nCi-dessous, vous pouvez découvrir quelques-uns des supports réalisés durant cette expérience.",
    "description_fr": "Lors de mon stage chez Prestige Parfums et Cosmétiques, j'ai participé à la création de vitrines, pages de marque et supports promotionnels pour des marques comme Dolce&Gabbana, Issey Miyake et Narciso Rodriguez. J'ai adapté les campagnes internationales au marché brésilien, en respectant les guidelines globaux et en combinant branding, merchandising visuel et marketing digital dans l'univers du luxe. Découvrez ci-dessous quelques exemples des supports que j’ai réalisés pendant cette expérience.",
    "activities": [
      {
        "name": "Vitrines",
        "images": [
          "Imagem35 (1).jpg", "Imagem36.jpg", "WhatsApp Image 2023-04-18 at 21.04.29.jpg",
          "WhatsApp Image 2023-04-18 at 21.04.28 (1).jpg", "WhatsApp Image 2023-04-18 at 21.04.28.jpg",
          "Imagem34 (1).jpg", "IMG-20230410-WA0002.jpg", "Imagem33 (2).jpg",
          "IMG-20230410-WA0024.jpg", "Imagem6 (1).jpg", "Imagem10 (1).png",
          "Imagem12 (1).jpg", "image (3).png", "image (2).png"
        ]
      },
      {
        "name": "Pages de marques",
        "images": [
          "120805.png", "120950.png"
        ]
      },
      {
        "name": "Matériel numérique",
        "images": [
          "Imagem52.png", "Imagem51.png", "Imagem49.png", "Imagem50.png", "Imagem53.png"
        ]
      }
    ]
  }
};

renderProjects(portfolioData);
