function fetchCategory() {
  return fetch("http://localhost:5678/api/categories")
    .then((response) => response.json())
    .then((categories) => {
      categoriesData = categories;
      return categories;
    });
}
function fetchWorks() {
  return fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((works) => {
      worksData = works;
      return works;
    });
}

// --- fonction asynchrome afin d'attendre la récupération des données
async function fetchData() {
  const works = await fetchWorks();
  worksData = works;
  const categories = await fetchCategory();
  displayProjectAndCategories(categories, works);
}

// Création de l'en-tête
const header = document.createElement("header");
const h1 = document.createElement("h1");
h1.innerText = "Sophie Bluel";
const span = document.createElement("span");
span.innerText = "Architecte d'intérieur";
h1.appendChild(span);
header.appendChild(h1);

const nav = document.createElement("nav");
const ul = document.createElement("ul");
const liProjets = document.createElement("li");
liProjets.innerText = "projets";
const liContact = document.createElement("li");
liContact.innerText = "contact";
const liLogin = document.createElement("li");
const link = document.createElement("a");
link.innerText = "login";
link.href = "./login.html";
link.style.textDecoration = "none"; 
link.style.color = "inherit";
const liInstagram = document.createElement("li");
const imgInstagram = document.createElement("img");
imgInstagram.src = "./assets/icons/instagram.png";
imgInstagram.alt = "Instagram";
imgInstagram.style.width = '20px';
imgInstagram.style.height = 'auto'
liInstagram.appendChild(imgInstagram);

liLogin.appendChild(link);
ul.appendChild(liProjets);
ul.appendChild(liContact);
ul.appendChild(liLogin);
ul.appendChild(liInstagram);
nav.appendChild(ul);
header.appendChild(nav);

// Création du contenu principal
const main = document.createElement("main");

// Section introduction
const sectionIntroduction = document.createElement("section");
sectionIntroduction.id = "introduction";

const figure = document.createElement("figure");
const img = document.createElement("img");
img.src = "./assets/images/sophie-bluel.png";
img.alt = "sophie-bluel";
figure.appendChild(img);
sectionIntroduction.appendChild(figure);

const article = document.createElement("article");
const h2Introduction = document.createElement("h2");
h2Introduction.innerText = "Designer d'espace";
const p1Introduction = document.createElement("p");
p1Introduction.innerText =
  "Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier.";
const p2Introduction = document.createElement("p");
p2Introduction.innerText =
  "Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les couleurs dans le respect de l’esprit des lieux et le choix adapté des matériaux. Le suivi du chantier sera assuré dans le souci du détail, le respect du planning et du budget.";
const p3Introduction = document.createElement("p");
p3Introduction.innerText =
  "En cas de besoin, une équipe pluridisciplinaire peut-être constituée : architecte DPLG, décorateur(trice)";

article.appendChild(h2Introduction);
article.appendChild(p1Introduction);
article.appendChild(p2Introduction);
article.appendChild(p3Introduction);
sectionIntroduction.appendChild(article);

main.appendChild(sectionIntroduction);

// Section portfolio
const sectionPortfolio = document.createElement("section");
sectionPortfolio.id = "portfolio";

const h2Portfolio = document.createElement("h2");
h2Portfolio.innerText = "Mes Projets";
sectionPortfolio.appendChild(h2Portfolio);

const divGallery = document.createElement("div");
divGallery.className = "gallery";

const divItems = document.createElement("div");
divItems.className = "items";

const span1 = document.createElement("span");
span1.innerText = "Tous";

const span2 = document.createElement("span");
span2.innerText = "Objets";

const span3 = document.createElement("span");
span3.innerText = "Appartements";

const span4 = document.createElement("span");
span4.innerText = "Hôtels & restaurants";

divItems.appendChild(span1);
divItems.appendChild(span2);
divItems.appendChild(span3);
divItems.appendChild(span4);
sectionPortfolio.appendChild(divItems);

// Ajoute une classe active au span cliqué
divItems.addEventListener("click", function (event) {
  // Vérifie si l'élément cliqué est un span
  if (event.target.tagName === "SPAN") {
    // Supprime la classe active de tous les spans
    const spans = divItems.querySelectorAll("span");
    spans.forEach(function (span) {
      span.classList.remove("active");
    });
    // Ajoute la classe active au span cliqué
    event.target.classList.add("active");
  }
});

// ...

// Fonction de filtrage des images
function filterImages(category) {
  const figures = divGallery.querySelectorAll("figure");

  // Parcours de toutes les figures pour afficher ou masquer les images
  figures.forEach(function (figure) {
    const img = figure.querySelector("img");
    const alt = img.alt.toLowerCase();

    // Affiche les images correspondant à la catégorie sélectionnée
    if (category === "tous" || alt.includes(category)) {
      figure.style.display = "block";
    } else {
      figure.style.display = "none";
    }
  });
}

// Ajoutez un gestionnaire d'événement au conteneur des spans
divItems.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    const spans = divItems.querySelectorAll("span");
    spans.forEach(function (span) {
      span.classList.remove("active");
    });

    event.target.classList.add("active");

    // Obtenez la catégorie du span cliqué
    const category = event.target.innerText.toLowerCase();

    // Filtrez les images en fonction de la catégorie
    filterImages(category);
  }
});

// Fonction de filtrage des images

function filterImages(category) {
  const figures = divGallery.querySelectorAll("figure");

  figures.forEach(function (figure) {
    const img = figure.querySelector("img");
    const alt = img.alt.toLowerCase();

    // Affiche les images correspondant à la catégorie sélectionnée
    if (
      category === "tous" ||
      (category === "objets" &&
        (alt === "abajour tahina" || alt === "structures thermopolis")) ||
      (category === "appartements" &&
        (alt === "appartement paris v" ||
          alt === "appartement paris x" ||
          alt === "appartement paris xviii")) ||
      (category === "hôtels & restaurants" &&
        (alt === "restaurant sushisen - londres" ||
          alt === "villa “la balisiere” - port louis" ||
          alt === "bar “lullaby” - paris" ||
          alt === "hotel first arte - new delhi"))
    ) {
      figure.style.display = "block";
    } else {
      figure.style.display = "none";
    }
  });
}

// Récupére les images depuis l'API
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    const projects = data;

    // Utilise les données récupérées pour afficher les images sur votre site
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';

    projects.forEach(project => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = project.imageUrl;
      image.alt = project.title;
      const figcaption = document.createElement("figcaption");
      figcaption.textContent = project.title;

      figure.appendChild(image);
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
    });

    // Une fois que les images sont chargées, appliquer le filtrage par défaut
    filterImages("tous");
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des données :', error);
  });

// Ajouter un gestionnaire d'événement au conteneur des spans
divItems.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    const spans = divItems.querySelectorAll("span");
    spans.forEach(function (span) {
      span.classList.remove("active");
    });

    event.target.classList.add("active");

    const category = event.target.innerText.toLowerCase();

    // Appliquer le filtrage des images en fonction de la catégorie sélectionnée
    filterImages(category);
  }
});

sectionPortfolio.appendChild(divGallery);
main.appendChild(sectionPortfolio);

// Section contact----------------------------------------------------------------------------
const sectionContact = document.createElement("section");
sectionContact.id = "contact";

const h2Contact = document.createElement("h2");
h2Contact.innerText = "Contact";
sectionContact.appendChild(h2Contact);

const pContact = document.createElement("p");
pContact.innerText = "Vous avez un projet ? Discutons-en !";
sectionContact.appendChild(pContact);

const formContact = document.createElement("form");
formContact.action = "#";
formContact.method = "post";

const labelName = document.createElement("label");
labelName.innerText = "Nom";
const inputName = document.createElement("input");
inputName.type = "text";
inputName.name = "name";
inputName.id = "name";

const labelEmail = document.createElement("label");
labelEmail.innerText = "Email";
const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "email";
inputEmail.id = "email";

const labelMessage = document.createElement("label");
labelMessage.innerText = "Message";
const textareaMessage = document.createElement("textarea");
textareaMessage.name = "message";
textareaMessage.id = "message";
textareaMessage.cols = "30";
textareaMessage.rows = "10";

const inputSubmit = document.createElement("input");
inputSubmit.type = "submit";
inputSubmit.value = "Envoyer";

formContact.appendChild(labelName);
formContact.appendChild(inputName);
formContact.appendChild(labelEmail);
formContact.appendChild(inputEmail);
formContact.appendChild(labelMessage);
formContact.appendChild(textareaMessage);
formContact.appendChild(inputSubmit);

sectionContact.appendChild(formContact);
main.appendChild(sectionContact);

// Création du pied de page
const footer = document.createElement("footer");
const navFooter = document.createElement("nav");
const ulFooter = document.createElement("ul");
const liMentionsLegales = document.createElement("li");
liMentionsLegales.innerText = "Mentions Légales";

ulFooter.appendChild(liMentionsLegales);
navFooter.appendChild(ulFooter);
footer.appendChild(navFooter);

// Ajout des éléments au document
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);
