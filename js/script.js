// Fonction de récupération des catégories depuis l'API
function fetchCategory() {
  return fetch("http://localhost:5678/api/categories")
    .then((response) => response.json())
    .then((categories) => {
      categoriesData = categories;
      return categories;
    });
}

// Fonction de récupération des travaux depuis l'API
function fetchWorks() {
  return fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((works) => {
      worksData = works;
      return works;
    });
}

// Fonction asynchrone pour attendre la récupération des données
async function fetchData() {
  const works = await fetchWorks();
  worksData = works;
  const categories = await fetchCategory();
  displayProjectAndCategories(categories, works);
};

// Création de la barre noire
const blackBar = document.createElement("div");
blackBar.style.backgroundColor = "black";
blackBar.style.height = "70px";
blackBar.style.width = "100%";
blackBar.style.position = "fixed";
blackBar.style.display = "flex";
blackBar.style.justifyContent = "center";
blackBar.style.alignItems = "center";
blackBar.style.fontFamily = "'Work Sans'";
blackBar.style.zIndex = "999";


// Création de l'icône
const icon = document.createElement("i");
icon.className = "far fa-pen-to-square transparent-bg";
icon.style.color = "#ffffff"; 
icon.style.marginRight = "15px";
icon.style.fontSize = "22px";
const text1 = document.createElement("span");
text1.innerText = "Mode édition";
text1.className = "transparent-bg";
text1.style.color = "#ffffff";
text1.style.marginRight = "25px";
const bubble = document.createElement("span");
bubble.innerText = "publier les changements";
bubble.style.borderRadius = "50px";
bubble.style.backgroundColor = "white";
bubble.style.padding = "12px";
bubble.style.width = "220px";
bubble.style.display = "inline-block";
bubble.style.textAlign = "center";
bubble.style.fontWeight = "600";


// Ajout des éléments à la barre noire
blackBar.appendChild(icon);
blackBar.appendChild(text1);
blackBar.appendChild(bubble);
document.body.appendChild(blackBar);


// Création de l'en-tête
const header = document.createElement("header");
const h1 = document.createElement("h1");
header.style.marginTop = "-100px";
h1.innerText = "Sophie Bluel";
const span = document.createElement("span");
span.innerText = "Architecte d'intérieur";
h1.appendChild(span);
header.appendChild(h1);

// Récupération de l'élément parent de l'en-tête
const parentElement = document.body; 

// Insérer la barre noire avant l'en-tête
parentElement.insertAdjacentElement("beforebegin", blackBar);

// Insérer l'en-tête après la barre noire
blackBar.insertAdjacentElement("afterend", header);

const nav = document.createElement("nav");
const ul = document.createElement("ul");
const liProjets = document.createElement("li");
liProjets.innerText = "projets";
const liContact = document.createElement("li");
liContact.innerText = "contact";
const liLogin = document.createElement("li");
liLogin.id = "login";
const liInstagram = document.createElement("li");
const imgInstagram = document.createElement("img");
imgInstagram.src = "./assets/icons/instagram.png";
imgInstagram.alt = "Instagram";
imgInstagram.style.width = '20px';
imgInstagram.style.height = 'auto'
liInstagram.appendChild(imgInstagram);

ul.appendChild(liProjets);
ul.appendChild(liContact);
ul.appendChild(liLogin);
ul.appendChild(liInstagram);
nav.appendChild(ul);
header.appendChild(nav);

document.addEventListener("DOMContentLoaded", () => {
  const liLogin = document.getElementById("login");
  const spansToHide = document.querySelectorAll(".hide-span");
  // Vérifie si l'utilisateur est connecté en vérifiant la présence du token dans le stockage local
  if (localStorage.getItem('token')) {
    blackBar.style.display = "flex";
    // Remplace le lien "login" par un bouton "logout"
    liLogin.innerHTML = '';
    const linkLogout = document.createElement("a");
    linkLogout.innerText = "Logout";
    linkLogout.href = "#";
    linkLogout.style.textDecoration = "none";
    linkLogout.style.color = "inherit";
    linkLogout.addEventListener("click", () => {
      localStorage.removeItem('token');
      window.location.href = "./index.html";
    });

    liLogin.appendChild(linkLogout);
    // Masquer les <span>
    spansToHide.forEach((span) => {
      span.style.display = "none";
    });
  } else {
    blackBar.style.display = "none";
    // L'utilisateur n'est pas connecté, affiche le lien "login"
    const loginLink = document.createElement("a");
    loginLink.innerText = "Login";
    loginLink.href = "./login.html";
    loginLink.style.textDecoration = "none";
    loginLink.style.color = "inherit";
    loginLink.classList.add("link-style"); 
    liLogin.appendChild(loginLink);
    // Afficher les <span>
    spansToHide.forEach((span) => {
      span.style.display = "inline"; // Ou "block" selon le style souhaité
    });
    const existingFlexContainer = sectionPortfolio.querySelector("i");
    if (existingFlexContainer) {
      existingFlexContainer.remove();
    }
    const existingFlexContainer2 = sectionPortfolio.querySelector("span");
    if (existingFlexContainer2) {
      existingFlexContainer2.remove();
    }
    const existingFlexContainer3 = sectionIntroduction.querySelector("i");
    if (existingFlexContainer3) {
      existingFlexContainer3.remove();
    }
    const existingFlexContainer4 = sectionIntroduction.querySelector("span");
    if (existingFlexContainer4) {
      existingFlexContainer4.remove();
    }
  }
});


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


const icon3 = document.createElement("i");
icon3.className = "far fa-pen-to-square";
icon3.style.color = "#1D6154";
icon3.style.marginRight = "10px";
icon3.style.marginLeft = "60px";
icon3.style.marginTop = "15px";
icon3.style.fontSize = "22px";

const text3 = document.createElement("span");
text3.innerText = "Modifier";
text3.style.color = "#1D6154";
text3.style.textTransform = "lowercase";
text3.style.cursor = "pointer";
text3.style.color = "#1D6154";
text3.style.fontSize = "16px";

img.insertAdjacentElement('afterend', icon3);
icon3.insertAdjacentElement('afterend', text3);


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


const flexContainer = document.createElement("div");
flexContainer.style.display = "flex";
flexContainer.style.alignItems = "center";
flexContainer.style.justifyContent = "center";

const h2Portfolio = document.createElement("h2");
h2Portfolio.innerText = "Mes Projets";


const button2 = document.createElement("button");
button2.style.backgroundColor = "transparent";
button2.style.border = "none";
button2.style.cursor = "pointer";
button2.style.marginRight = "10px";
button2.style.marginLeft = "40px";
button2.style.padding = "0";
button2.style.fontSize = "22px";
button2.innerHTML = '<i class="far fa-pen-to-square" style="color: #1D6154;"></i>';

const button2Text = document.createElement("span");
button2Text.innerText = "Modifier";
button2Text.style.color = "#1D6154";
button2Text.style.fontSize = "14px";
button2Text.style.marginLeft = "10px";
button2Text.style.textTransform = "lowercase";
button2Text.style.cursor = "pointer";
button2Text.style.color = "#1D6154";
button2Text.style.fontSize = "16px";

button2.appendChild(button2Text);

flexContainer.appendChild(h2Portfolio);
flexContainer.appendChild(button2);

sectionPortfolio.appendChild(flexContainer);

const divGallery = document.createElement("div");
divGallery.className = "gallery";

const divItems = document.createElement("div");
divItems.className = "items";

const span1 = document.createElement("span");
span1.innerText = "Tous";
span1.classList.add("hide-span");

divItems.appendChild(span1);

let categories = [];
let works = [];

// Récupération des catégories à partir de l'API
fetch('http://localhost:5678/api/categories')
  .then(response => response.json())
  .then(data => {
    categories = data;

    categories.forEach(category => {
      const span = document.createElement("span");
      span.innerText = category.name;
      span.classList.add("hide-span");
      divItems.appendChild(span);
    });

    // Une fois que les catégories sont chargées, on peut charger les projets
    loadWorks();

    // Vérifier si l'utilisateur est connecté en vérifiant la présence du token dans le stockage local
    const userLoggedIn = localStorage.getItem('token');

    if (userLoggedIn) {
      // Masquer les catégories
      const categorySpans = divItems.querySelectorAll("span");
      categorySpans.forEach(span => {
        span.style.display = "none";
      });
    }
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des catégories:', error);
  });

sectionPortfolio.appendChild(divItems);
sectionPortfolio.appendChild(divGallery);

divItems.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    const spans = divItems.querySelectorAll("span");
    spans.forEach(function (span) {
      span.classList.remove("active");
    });
    event.target.classList.add("active");

    const categoryName = event.target.innerText;

    // Récupérer l'identifiant de catégorie correspondant au nom de catégorie
    const category = categories.find(category => category.name === categoryName);
    if (category) {
      const categoryId = category.id;
      displayWorks(categoryId);
    }
  }
});
// Affiche toutes les images via la gallery
span1.addEventListener("click", function() {
  const spans = divItems.querySelectorAll("span");
  spans.forEach(function(span) {
    span.classList.remove("active");
  });
  span1.classList.add("active");

  displayWorks(0);
});


function loadWorks() {
  // Chargement des projets à partir de l'API
  fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(data => {
      works = data;
      displayWorks(0);
    })
    .catch(error => {
      console.error('Erreur lors du chargement des projets:', error);
    });
}

function displayWorks(categoryId) {
  divGallery.innerHTML = "";

  const filteredWorks = categoryId !== 0 ? works.filter((work) => work.categoryId === categoryId) : works;

  filteredWorks.forEach((work) => {
    const figure = document.createElement("figure");
    const figcaption = document.createElement("figcaption");
    const image = document.createElement("img");

    image.src = work.imageUrl;
    figcaption.textContent = work.title;
    figure.appendChild(image);
    figure.appendChild(figcaption);
    divGallery.appendChild(figure);
  });
}
function filterImages(categoryId) {
  const figures = divGallery.querySelectorAll("figure");

  figures.forEach(function (figure) {
    figure.style.display = "block";
  });
}


// Récupére les images depuis l'API
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    const projects = data;

    // Utilise les données récupérées pour afficher les images sur votre site
    const gallery = document.querySelector('.gallery',);
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

// Récupére les images du modal depuis l'API
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    const projects = data;
    const gallery = document.querySelector('.gallery',);
  const galleryWrapper = document.querySelector('.gallery__modal');
    galleryWrapper.innerHTML = '';

    projects.forEach((project, index) => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = project.imageUrl;
      image.alt = project.title;
      figure.appendChild(image);

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
      imageContainer.appendChild(image);

      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fa-solid", "fa-trash-can");
      deleteIcon.classList.add("delete-icon");
      imageContainer.appendChild(deleteIcon);
      deleteIcon.addEventListener("click", function() {
        // Code pour supprimer l'image ici
        // vous pouvez supprimer l'élément parent de l'icône (imageContainer)
        const parentFigure = deleteIcon.parentElement.parentElement;
        parentFigure.remove();

        const galleryImage = gallery.querySelector(`img[src="${project.imageUrl}"]`);
        if (galleryImage) {
          const galleryFigure = galleryImage.parentElement;
          galleryFigure.remove();
        }
      });
      
      
  if (index === 0) {
    const arrowsIcon = document.createElement("i");
    arrowsIcon.classList.add("fa-solid", "fa-arrows-up-down-left-right");
    arrowsIcon.classList.add("arrows-icon");
    imageContainer.appendChild(arrowsIcon);
    
  }


  figure.appendChild(imageContainer);

  const editCaption = document.createElement("figcaption");
  const editText = document.createElement("span");
  editText.textContent = "éditer";
  editCaption.appendChild(editText);
  


  figure.appendChild(editCaption);

      galleryWrapper.appendChild(figure);
      
      
    });
    

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("centered-element");
    modalWrapper.appendChild(inputContainer);
    
    const inputSubmit = document.createElement("input");
    inputSubmit.type = "submit2";
    inputSubmit.value = "Ajouter une photo";
    inputContainer.appendChild(inputSubmit);
    
    const deleteGalleryText = document.createElement("p");
    deleteGalleryText.textContent = "Supprimer la galerie";
    deleteGalleryText.style.color = "red";
    inputContainer.appendChild(deleteGalleryText);
    
    // Une fois que les images sont chargées, appliquer le filtrage par défaut
    filterImages("tous");
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des données :', error);
  });

  sectionPortfolio.appendChild(divGallery);
  main.appendChild(sectionPortfolio);

  // Création de la modale
const modal = document.createElement("div");
modal.classList.add("modal");

// Création du wrapper
const modalWrapper = document.createElement("div");
modalWrapper.classList.add("modal__wrapper");

// Ajout du contenu à la modale
const title = document.createElement("h3");
title.id = "title_modal";
title.textContent = "Galerie photo";
icon.style.color = "#ffffff"; 

modalWrapper.appendChild(title);

// Ajout du bouton de fermeture
const closeButton = document.createElement("i");
closeButton.classList.add("fa", "fa-xmark");
modalWrapper.appendChild(closeButton);

// Ajout du wrapper de la galerie d'images
const galleryWrapper = document.createElement("div");
galleryWrapper.classList.add("gallery__modal");
// Ajout des images à la galerie 
modalWrapper.appendChild(galleryWrapper);

// Ajout de la modale au document

modalWrapper.appendChild(closeButton);

modal.appendChild(modalWrapper);
document.body.appendChild(modal);

// Gestionnaire d'événement de clic pour le bouton de fermeture
closeButton.addEventListener("click", fermerModale);

// Fonction pour fermer la modale
function fermerModale() {
  modal.style.display = "none";
}
modal.addEventListener("click", function(e) {
  // Vérifie si le clic est en dehors du contenu de la modale
  if (e.target === modal) {
    fermerModale();
  }
});
// Vérification pour contrôler l'affichage du modal lors du chargement de la page
document.addEventListener("DOMContentLoaded", function() {
  // Fermer le modal au chargement de la page
  fermerModale();
});
button2.addEventListener("click", ouvrirModale);

// Gestionnaire d'événement de clic pour le deuxième bouton de texte
button2Text.addEventListener("click", ouvrirModale);

// Fonction pour ouvrir le modal
function ouvrirModale() {
  modal.style.display = "block";
  modalWrapper.style.display = "block";
  
}

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
liMentionsLegales.style.marginRight = "50px";


ulFooter.appendChild(liMentionsLegales);
navFooter.appendChild(ulFooter);
footer.appendChild(navFooter);

// Ajout des éléments au document
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);


