let worksData; // stockage des données
let categoriesData; // stockage des categories
// Fonction de récupération des catégories depuis l'API
function fetchCategory() {
  return fetch("http://localhost:5678/api/categories") // Requête GET à l'URL de l'API pour récupérer les catégories
    .then((response) => response.json()) // Extraire les données JSON de la réponse HTTP
    .then((categories) => {
      categoriesData = categories; // Stocker les catégories extraites dans la variable categoriesData
      return categories; // Renvoyer les catégories extraites
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
  const works = await fetchWorks(); // Attend la résolution de la promesse renvoyée par la fonction fetchWorks() pour obtenir les données des projets
  worksData = works; // Stock les données des projets dans la variable worksData
  const categories = await fetchCategory(); // Attend la résolution de la promesse renvoyée par la fonction fetchCategory() pour obtenir les catégories
  displayProjectAndCategories(categories, works); // Appelle la fonction displayProjectAndCategories pour afficher les catégories et les données des projets
}
function displayProjectAndCategories(categories, works) {
  // Logique de traitement et d'affichage des catégories et des projets
  console.log("Categories:", categories); // Affiche les catégories et works dans la console
  console.log("Works:", works);
}
// Création de la barre noire
const blackBar = document.createElement("div");
blackBar.classList.add("blackBar-style");

// Création de l'icône
const icon = document.createElement("i");
icon.className = "far fa-pen-to-square icon-style";

const text1 = document.createElement("span");
text1.innerText = "Mode édition";
text1.classList.add("text1-style", "transparent-bg1");

const bubble = document.createElement("span");
bubble.innerText = "publier les changements";
bubble.classList.add("bubble-style");

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
imgInstagram.style.width = "20px";
imgInstagram.style.height = "auto";
liInstagram.appendChild(imgInstagram);

ul.appendChild(liProjets);
ul.appendChild(liContact);
ul.appendChild(liLogin);
ul.appendChild(liInstagram);
nav.appendChild(ul);
header.appendChild(nav);
// Code exécuté lorsque le contenu HTML de la page est entièrement chargé
document.addEventListener("DOMContentLoaded", () => {
  const liLogin = document.getElementById("login"); // Sélectionne l'élément de liste avec l'ID "login"
  const spansToHide = document.querySelectorAll(".hide-span"); // Sélectionne tous les éléments avec la classe "hide-span" et les stocke dans un NodeList
  // Vérifie si l'utilisateur est connecté en vérifiant la présence du token dans le stockage local
  if (localStorage.getItem("token")) {
    blackBar.style.display = "flex"; // Affiche l'élément avec l'ID "blackBar" en utilisant la propriété "display" avec la valeur "flex"
    // Remplace le lien "login" par un bouton "logout"
    liLogin.innerHTML = ""; // Supprime tout le contenu HTML de l'élément liLogin
    const linkLogout = document.createElement("a"); // Crée un nouvel élément "a" (lien)
    linkLogout.innerText = "Logout"; // Définit le texte affiché dans le lien
    linkLogout.href = "#"; // Définit l'URL du lien (dans ce cas, il pointe vers un emplacement fictif "#")
    linkLogout.style.textDecoration = "none"; // Supprime la décoration de texte par défaut du lien
    linkLogout.style.color = "inherit"; // Utilise la couleur de texte héritée du parent pour le lien
    // Ajoute un gestionnaire d'événement de clic au lien de déconnexion
    // Lorsque le lien est cliqué, le token est supprimé du stockage local et l'utilisateur est redirigé vers la page "index.html"
    linkLogout.addEventListener("click", () => {
      localStorage.removeItem("token"); // Supprime le token du stockage local
      window.location.href = "./index.html"; // Redirige vers la page "index.html"
    });

    liLogin.appendChild(linkLogout);
    // Ajoute le lien de déconnexion comme enfant de liLogin, remplaçant ainsi le lien de connexion précédent.
    // Masquer les <span>
    spansToHide.forEach((span) => {
      span.style.display = "none";
    }); // Parcourt chaque élément "span" dans la NodeList "spansToHide" et les masque en définissant leur propriété CSS "display" sur "none".
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
    }); // Parcourt chaque élément "span" dans la NodeList "spansToHide" et rétablit leur affichage en définissant leur propriété CSS "display" sur "inline"
    const existingFlexContainer = sectionPortfolio.querySelector("i");
    if (existingFlexContainer) {
      existingFlexContainer.remove();
    } // Vérifie s'il existe un élément "i" dans la section "portfolio" en utilisant querySelector.
    // Si un tel élément existe, il est supprimé du DOM à l'aide de la méthode remove().
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
icon3.classList.add("icon3-style");

const text3 = document.createElement("span");
text3.innerText = "Modifier";
text3.classList.add("text3-style");

img.insertAdjacentElement("afterend", icon3);
icon3.insertAdjacentElement("afterend", text3);

const icon5 = document.createElement("i");
icon5.className = "far fa-pen-to-square";
icon5.classList.add("icon2-style");

const text5 = document.createElement("span");
text5.innerText = "modifier";
text5.classList.add("text2-style");

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

article.appendChild(icon5);
article.appendChild(text5);
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
button2.classList.add("button2-style");
button2.innerHTML = '<i class="far fa-pen-to-square"></i>';

const button2Text = document.createElement("span");
button2Text.innerText = "Modifier";
button2Text.classList.add("button-style");

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
fetch("http://localhost:5678/api/categories")
  .then((response) => response.json()) // Extraire les données JSON de la réponse HTTP
  .then((data) => {
    // La fonction de rappel de la promesse qui manipule les données JSON récupérées
    categories = data; // Assigne les données JSON à la variable "categories"
    // boucle forEach qui itère sur chaque élément "category" dans le tableau "categories"
    categories.forEach((category) => {
      const span = document.createElement("span"); // Crée un nouvel élément <span> pour chaque catégorie
      span.innerText = category.name; // Définit le nom de la catégorie comme contenu textuel de l'élément <span>
      span.classList.add("hide-span"); // Ajoute la classe CSS "hide-span" à l'élément <span>
      divItems.appendChild(span); // Ajoute l'élément <span> en tant qu'enfant de divItems
    });

    // Une fois que les catégories sont chargées, on peut charger les projets
    loadWorks();

    // Vérifie si l'utilisateur est connecté en vérifiant la présence du token dans le stockage local
    const userLoggedIn = localStorage.getItem("token");

    if (userLoggedIn) {
      // Si l'utilisateur est connecté Masquer les catégories
      const categorySpans = divItems.querySelectorAll("span");
      categorySpans.forEach((span) => {
        span.style.display = "none";
      });
      // Si l'utilisateur n'est pas connecté
    } else {
      // Masquer les éléments icon2 et text2
      icon5.style.display = "none";
      text5.style.display = "none";
    }
  })
  .catch((error) => {
    // Gestion des erreurs lors de la récupération des catégories
    console.error("Erreur lors de la récupération des catégories:", error);
  });

sectionPortfolio.appendChild(divItems);
sectionPortfolio.appendChild(divGallery);
// Gestionnaire d'événement pour les clics sur divItems
divItems.addEventListener("click", function (event) {
  // Si l'élément cliqué est un <span>
  if (event.target.tagName === "SPAN") {
    // Supprime la classe "active" de tous les <span> dans divItems
    const spans = divItems.querySelectorAll("span");
    spans.forEach(function (span) {
      span.classList.remove("active");
    });
    // Ajoute la classe "active" à l'élément <span> cliqué
    event.target.classList.add("active");

    const categoryName = event.target.innerText;
    // Récupère le nom de la catégorie à partir du texte de l'élément <span> cliqué

    // Récupére l'identifiant de catégorie correspondant au nom de catégorie
    const category = categories.find(
      // Recherche la catégorie correspondant au nom de catégorie cliqué
      (category) => category.name === categoryName
    );
    if (category) {
      // Récupère l'identifiant de la catégorie correspondante
      const categoryId = category.id;
      // Appelle la fonction displayWorks avec l'identifiant de catégorie pour afficher les projets de cette catégorie
      displayWorks(categoryId);
    }
  }
});
// Affiche toutes les images via la gallery
span1.addEventListener("click", function () {
  // Gestionnaire d'événement pour le clic sur span1
  const spans = divItems.querySelectorAll("span");
  spans.forEach(function (span) {
    span.classList.remove("active");
  }); // Supprime la classe "active" de tous les <span> dans divItems
  span1.classList.add("active"); // Ajoute la classe "active" à span1

  displayWorks(0); // Appelle la fonction displayWorks avec l'indice 0 pour afficher toutes les images
});

function loadWorks() {
  // Chargement des projets à partir de l'API
  fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      works = data; // Attribue les données JSON récupérées à la variable "works"
      displayWorks(0); // Appelle la fonction displayWorks avec l'indice 0 pour afficher les projets
    })
    .catch((error) => {
      console.error("Erreur lors du chargement des projets:", error);
    }); // Affiche un message d'erreur dans la console si une erreur se produit lors du chargement des projets
}
// Affichage des projets
function displayWorks(categoryId) {
  divGallery.innerHTML = ""; // Efface le contenu actuel de divGallery

  const filteredWorks =
    categoryId !== 0
      ? works.filter((work) => work.categoryId === categoryId)
      : works; // Filtre les projets en fonction de l'identifiant de catégorie

  filteredWorks.forEach((work) => {
    // Itère sur chaque projet dans filteredWorks
    // Crée un nouvel élément <figure> pour afficher le projet , <figaption> pour le titre et <img> pour l'image
    const figure = document.createElement("figure");
    const figcaption = document.createElement("figcaption");
    const image = document.createElement("img");

    image.src = work.imageUrl; // Définit l'attribut src de l'élément <img> avec l'URL de l'image du projet et le titre
    figcaption.textContent = work.title;
    figure.appendChild(image); // Ajoute l'élément <img> à l'élément <figure> ainsi figaption
    figure.appendChild(figcaption);
    divGallery.appendChild(figure); // Ajoute l'élément <figure> à divGallery
  });
}
function filterImages(categoryId) {
  // Filtrer les images en fonction de l'identifiant de catégorie
  const figures = divGallery.querySelectorAll("figure"); // Sélectionne tous les éléments <figure> dans divGallery et les stocke dans la variable figures

  figures.forEach(function (figure) {
    // Itère sur chaque élément <figure> dans figures
    figure.style.display = "block";
  }); // Définit la propriété CSS "display" de chaque élément <figure> sur "block"
  // Cela permet d'afficher tous les éléments <figure> en réinitialisant leur affichage
}

// Récupére les images depuis l'API
fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    const projects = data; // Attribue les données JSON récupérées à la variable "projects"

    // Utilise les données récupérées pour afficher les images sur votre site
    const gallery = document.querySelector(".gallery"); // Sélectionne l'élément avec la classe CSS "gallery" et le stocke dans la variable "gallery"
    gallery.innerHTML = ""; // Efface le contenu actuel de la galerie en définissant sa propriété "innerHTML" sur une chaîne vide
    // Cette boucle itère sur chaque projet dans projects
    projects.forEach((project) => {
      const figure = document.createElement("figure"); // Crée un nouvel élément <figure> et <image> pour afficher le projet
      const image = document.createElement("img");
      image.src = project.imageUrl; // Définit l'attribut "src" de l'élément <img> avec l'URL de l'image du projet
      image.alt = project.title; // Définit l'attribut "alt" de l'élément <img> avec le titre du projet
      const figcaption = document.createElement("figcaption"); // Crée un nouvel élément <figcaption> pour afficher le titre du projet
      figcaption.textContent = project.title; // Définit le texte du <figcaption> avec le titre du projet

      figure.appendChild(image); // Ajoute l'élément <img> et <figaption> à l'élément <figure>
      figure.appendChild(figcaption);
      gallery.appendChild(figure); // Ajoute l'élément <figure> à la galerie
    });

    // Une fois que les images sont chargées, appliquer le filtrage par défaut
    filterImages("tous"); // Appelle la fonction filterImages avec l'argument "tous" pour filtrer les images
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données :", // Capture et gère les erreurs qui peuvent se produire lors de la récupération des données
      error
    ); // Affiche un message d'erreur dans la console avec le détail de l'erreur
  });

// Récupére les images du modal depuis l'API
fetch("http://localhost:5678/api/works")
  .then((response) => response.json()) // Convertit la réponse en JSON
  .then((data) => {
    // Le bloc suivant s'exécute lorsque la conversion en JSON est terminée
    const projects = data; // Stocke les données dans la variable "projects"
    const gallery = document.querySelector(".gallery"); // Sélectionne l'élément avec la classe "gallery"
    const galleryWrapper = document.querySelector(".gallery__modal"); // Sélectionne l'élément avec la classe "gallery__modal"
    galleryWrapper.innerHTML = ""; // Efface le contenu de l'élément "galleryWrapper"

    projects.forEach((project, index) => {
      // Le bloc suivant est exécuté pour chaque projet dans le tableau
      const figure = document.createElement("figure"); // Crée un élément <figure>
      const image = document.createElement("img"); // Crée un élément <img>
      image.src = project.imageUrl; // Définit l'attribut src de l'image avec l'URL spécifiée dans les données du projet
      image.alt = project.title; // Définit l'attribut alt de l'image avec le titre du projet
      figure.appendChild(image); // Ajoute l'élément image en tant qu'enfant de l'élément figure

      const imageContainer = document.createElement("div"); // Crée un nouvel élément <div>
      imageContainer.classList.add("image-container"); // Ajoute la classe "image-container" à l'élément div
      imageContainer.appendChild(image); // Ajoute l'élément image en tant qu'enfant de l'élément div

      const deleteIcon = document.createElement("i"); // Crée un nouvel élément <i>
      deleteIcon.classList.add("fa-solid", "fa-trash-can"); // Ajoute les classes "fa-solid" et "fa-trash-can" à l'élément i
      deleteIcon.classList.add("delete-icon"); // Ajoute la classe "delete-icon" à l'élément i
      imageContainer.appendChild(deleteIcon); // Ajoute l'élément deleteIcon en tant qu'enfant de l'élément div
      deleteIcon.addEventListener("click", function (event) {
        // Le bloc suivant est exécuté lorsqu'un clic est détecté sur l'icône de suppression
        event.preventDefault(); // Empêche le comportement par défaut du lien ou du bouton (rechargement de la page)

        const parentFigure = deleteIcon.parentElement.parentElement; // Sélectionne l'élément parent de l'élément parent de l'icône de suppression
        parentFigure.remove(); // Supprime l'élément parent de l'icône de suppression

        const galleryImage = gallery.querySelector(
          `img[src="${project.imageUrl}"]`
        ); // Sélectionne l'image correspondant à l'URL spécifiée dans les données du projet dans la galerie
        if (galleryImage) {
          const galleryFigure = galleryImage.parentElement; // Sélectionne l'élément parent de l'image dans la galerie
          galleryFigure.remove(); // Supprime l'élément parent de l'image dans la galerie
        }
        // Déclaration de la fonction updateModalContent
        function updateModalContent() {
          
        }
        const id = project.id; // Récupère l'ID de l'image que vous souhaitez supprimer
        const apiUrl = `http://localhost:5678/api/works/${id}`; // Construit l'URL de l'API pour supprimer l'image
        const accessToken = localStorage.getItem("token"); // Récupère le token d'accès à partir du stockage local

        fetch(apiUrl, {
          method: "DELETE", // Utilise la méthode HTTP DELETE pour supprimer l'image
          headers: {
            Accept: "application/json", // Définit l'en-tête Accept pour indiquer que l'API doit renvoyer une réponse JSON
            Authorization: `Bearer ${accessToken}`, // Inclut le jeton d'accès dans l'en-tête Authorization pour authentifier la demande
          },
        })
          .then((response) => {
            // Promesse : lorsque la réponse de la requête est disponible
            if (response.ok) {
              // Vérifie si la réponse est réussie
              console.log("L'image a été supprimée avec succès de l'API."); // Affiche un message de succès
              updateModalContent();
            } else {
              console.log("Échec de la suppression de l'image dans l'API."); // Affiche un message d'échec
            }
          })
          .catch((error) => {
            // Gestion des erreurs pour la requête et la chaîne de promesses
            console.error(
              "Une erreur s'est produite lors de la suppression de l'image dans l'API :",
              error
            );
          });
      });

      if (index === 0) {
        // Vérifie si l'index est égal à zéro
        const arrowsIcon = document.createElement("i"); // Crée un nouvel élément <i>
        arrowsIcon.classList.add("fa-solid", "fa-arrows-up-down-left-right"); // Ajoute les classes CSS
        arrowsIcon.classList.add("arrows-icon"); // Ajoute la classe CSS "arrows-icon" à l'élément
        imageContainer.appendChild(arrowsIcon); // Ajoute l'élément <i> en tant qu'enfant de l'élément imageContainer
      }

      figure.appendChild(imageContainer); // Ajoute l'élément imageContainer en tant qu'enfant de l'élément figure

      const editCaption = document.createElement("figcaption"); // Crée un élément <figcaption>
      const editText = document.createElement("span"); // Crée un élément <span>
      editText.textContent = "éditer"; // Définit le texte "éditer" comme contenu de l'élément <span>
      editCaption.appendChild(editText); // Ajoute l'élément <span> en tant qu'enfant de l'élément editCaption

      figure.appendChild(editCaption); // Ajoute l'élément editCaption en tant qu'enfant de l'élément figure

      galleryWrapper.appendChild(figure); // Ajoute l'élément figure en tant qu'enfant de l'élément galleryWrapper
    });

    // Ajout de la modal----------------------------------------------------

    const inputContainer = document.createElement("div"); // Crée un nouvel élément <div>
    inputContainer.classList.add("centered-element"); // Ajoute la classe CSS "centered-element" à l'élément <div>
    modalWrapper.appendChild(inputContainer); // Ajoute l'élément <div> en tant qu'enfant de l'élément modalWrapper

    const blackBar = document.createElement("div");
    blackBar.classList.add("black-bar");
    modalWrapper.insertBefore(blackBar, inputContainer);

    const buttonSubmit = document.createElement("button");
    buttonSubmit.type = "button";
    buttonSubmit.textContent = "Ajouter une photo";
    buttonSubmit.classList.add("modal1button");
    inputContainer.appendChild(buttonSubmit);

    buttonSubmit.addEventListener("click", function (event) {
      // Ajoute un écouteur d'événement "click" au bouton buttonSubmit
      event.preventDefault(); // Empêche le rechargement de la page lorsque le bouton est cliqué

      ouvrirDeuxiemeModale(); // Appelle la fonction ouvrirDeuxiemeModale() pour ouvrir une deuxième modale
      fermerModale(); // Appelle la fonction fermerModale() pour fermer la modale actuelle
    });
    const deleteGalleryText = document.createElement("p");
    deleteGalleryText.textContent = "Supprimer la galerie";
    deleteGalleryText.classList.add("gallerydelete");
    inputContainer.appendChild(deleteGalleryText);

    // Une fois que les images sont chargées, appliquer le filtrage par défaut
    filterImages("tous");
  })
  .catch((error) => {
    // Gestion des erreurs pour la promesse précédente
    console.error(
      "Une erreur s'est produite lors de la récupération des données :",
      error
    ); // Affiche un message d'erreur
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
modal.appendChild(modalWrapper);
document.body.appendChild(modal);
// Gestionnaire d'événement de clic pour le bouton de fermeture
closeButton.addEventListener("click", fermerModale);
// Fonction pour fermer la modale
function fermerModale() {
  modal.style.display = "none"; // Modifie la propriété de style "display" de l'élément modal pour le masquer ("none")
}
// Vérification pour contrôler l'affichage du modal lors du chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  // Fermer le modal
  fermerModale();
  // ouvrirGalerieModal();
});
function ouvrirModale() {}

modalWrapper.appendChild(closeButton); // Ajoute le bouton closeButton en tant qu'enfant de l'élément modalWrapper

modal.appendChild(modalWrapper); // Ajoute l'élément modalWrapper en tant qu'enfant de l'élément modal
document.body.appendChild(modal); // Ajoute l'élément modal en tant qu'enfant de l'élément body du document

// Gestionnaire d'événement de clic pour le bouton de fermeture
closeButton.addEventListener("click", fermerModale); // Ajoute un autre écouteur d'événement "click" au bouton closeButton pour appeler la fonction fermerModale()

// Fonction pour fermer la modale
function fermerModale() {
  modal.style.display = "none"; // Modifie la propriété de style "display" de l'élément modal pour le masquer ("none")
}
modal.addEventListener("click", function (e) {
  // Vérifie si le clic est en dehors du contenu de la modale
  if (e.target === modal) {
    fermerModale(); // Appelle la fonction fermerModale() pour masquer la modale si le clic est en dehors de son contenu
  }
});
// Vérification pour contrôler l'affichage du modal lors du chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  // Fermer le modal au chargement de la page
  fermerModale();
});
button2.addEventListener("click", ouvrirModale); // Ajoute un écouteur d'événement "click" au bouton button2 pour appeler la fonction ouvrirModale() lorsqu'il est cliqué

// Gestionnaire d'événement de clic pour le deuxième bouton de texte
button2Text.addEventListener("click", ouvrirModale);

// Fonction pour ouvrir le modal
function ouvrirModale() {
  modal.style.display = "block"; // Modifie la propriété de style "display" de l'élément modal pour l'afficher ("block")
  modalWrapper.style.display = "block"; // Modifie la propriété de style "display" de l'élément modalWrapper pour l'afficher ("block")
}
// Ajout Formulaire--------------------------------------------------

function createSecondModal() {
  const modal2 = document.createElement("div"); // Crée un élément <div> pour la deuxième modale
  modal2.classList.add("modal2"); // Ajoute la classe CSS "modal2" à l'élément <div> de la deuxième modale

  const modalWrapper2 = document.createElement("div"); // Crée un élément <div> pour le conteneur de la deuxième modale
  modalWrapper2.classList.add("modal__wrapper2"); // Ajoute la classe CSS "modal__wrapper2" à l'élément <div> du conteneur

  const imageInput = document.createElement("input"); // Crée un élément <input>
  imageInput.type = "file"; // Définit le type de l'élément <input> comme "file"
  imageInput.accept = "image/*"; // Définit l'attribut "accept" de l'élément <input> pour accepter les fichiers de type image
  imageInput.style.display = "none"; // Masque l'élément <input> en définissant sa propriété de style "display" à "none"

  const title2 = document.createElement("h3"); // Crée un nouvel élément <h3> pour le titre
  title2.id = "title_modal2"; // Définit l'ID de l'élément <h3> comme "title_modal2"
  title2.textContent = "Ajout photo"; // Définit le contenu textuel de l'élément <h3> comme "Ajout photo"
  modalWrapper2.appendChild(title2); // Ajoute l'élément <h3> en tant qu'enfant de l'élément modalWrapper2

  const backArrowIcon = document.createElement("i"); // Crée un nouvel élément <i> pour l'icône de flèche de retour
  backArrowIcon.classList.add("fa-solid", "fa-arrow-left"); // Ajoute les classes CSS
  backArrowIcon.id = "arrow-icon"; // Définit l'ID de l'élément <i> comme "arrow-icon"
  backArrowIcon.addEventListener("click", function () {
    // Ajoute un écouteur d'événement "click" à l'icône de flèche de retour
    fermerDeuxiemeModale(); // Appelle la fonction fermerDeuxiemeModale() pour fermer la deuxième modale
    ouvrirModale(); // Appeler la fonction pour ouvrir le premier modal
  });
  modalWrapper2.insertBefore(backArrowIcon, modalWrapper2.firstChild); // Insère l'icône de flèche de retour en tant que premier enfant de l'élément modalWrapper2

  const closeButton2 = document.createElement("i"); // Crée un nouvel élément <i> pour le bouton de fermeture de la deuxième modale
  closeButton2.classList.add("fa", "fa-xmark"); // Ajoute les classes CSS
  modalWrapper2.appendChild(closeButton2); // Ajoute l'élément <i> en tant qu'enfant de l'élément modalWrapper2
  // Ajoute un champ pour charger une image
  // Créer un conteneur pour regrouper l'icône et le champ d'entrée
  const imageContainer = document.createElement("div"); // Crée un nouvel élément <div> pour le conteneur de l'élément d'entrée d'image
  imageContainer.classList.add("input-container"); // Ajoute la classe CSS "input-container" à l'élément <div> du conteneur

  const imageLabel = document.createElement("label"); // Crée un élément <label> pour étiqueter l'élément d'entrée d'image

  const imageIcon = document.createElement("i"); // Crée un nouvel élément <i> pour l'icône de l'image
  imageIcon.classList.add("fa-solid", "fa-image"); // Ajoute les classes CSS "fa-solid" et "fa-image" à l'élément <i>
  imageIcon.style.color = "#bababa"; // Définit la couleur de l'icône de l'image en utilisant la propriété de style "color"
  imageLabel.appendChild(imageIcon); // Ajoute l'icône de l'image en tant qu'enfant de l'élément imageLabel

  const addButton = document.createElement("button"); // Crée un nouvel élément <button> pour le bouton d'ajout de photo
  addButton.textContent = "+ Ajouter photo"; // Définit le texte du bouton d'ajout de photo
  imageLabel.appendChild(addButton); // Ajoute le bouton d'ajout de photo en tant qu'enfant de l'élément imageLabel

  addButton.addEventListener("click", function (event) {
    // Ajoute un écouteur d'événement "click" au bouton d'ajout de photo
    event.preventDefault(); // Empêche le comportement par défaut du bouton (rechargement de la page)
    imageInput.click(); // Déclenche un clic sur l'élément imageInput (élément <input type="file">) pour ouvrir la boîte de dialogue de sélection de fichiers
  });

  const imagePreview = document.createElement("img"); // Crée un nouvel élément <img> pour l'aperçu de l'image
  imagePreview.classList.add("image-preview"); // Ajoute la classe CSS
  imageLabel.appendChild(imagePreview); // Ajoute l'aperçu de l'image en tant qu'enfant de l'élément imageLabel

  imageInput.addEventListener("change", function () {
    // Ajoute un écouteur d'événement "change" à l'élément imageInput
    const file = imageInput.files[0]; // Récupère le premier fichier sélectionné dans l'élément imageInput
    if (file) {
      // Vérifie si un fichier a été sélectionné
      const reader = new FileReader(); // Crée une nouvelle instance de FileReader
      reader.addEventListener("load", function () {
        // Ajoute un écouteur d'événement "load" au lecteur FileReader
        imagePreview.src = reader.result; // Affecte le résultat de la lecture du fichier à l'attribut src de l'élément imagePreview, ce qui affiche l'aperçu de l'image
      });
      reader.readAsDataURL(file); // Lit le contenu du fichier sous forme d'URL de données
    } else {
      imagePreview.src = ""; // Réinitialise l'aperçu de l'image si aucun fichier n'est sélectionné
    }
  });

  const fileSizeText = document.createElement("p"); // Crée un nouvel élément <p> pour afficher le texte de la taille de fichier
  fileSizeText.textContent = "jpg, png : 4mo max"; // Définit le contenu textuel
  imageLabel.appendChild(fileSizeText); // Ajoute le paragraphe fileSizeText en tant qu'enfant de l'élément imageLabel

  const inputTitle = document.createElement("h4"); // Crée un nouvel élément <h4> pour le titre du champ de saisie
  inputTitle.textContent = "Titre"; // Définit le contenu textuel
  inputTitle.classList.add("custom-input-title"); // Ajoute la classe CSS
  const customTitleClass = "custom-title"; // Définit une variable customTitleClass avec la valeur "custom-title"
  inputTitle.classList.add(customTitleClass); // Ajoute la classe CSS "custom-title" à l'élément inputTitle

  const titleInput = document.createElement("input"); // Crée un nouvel élément <input> pour le champ de saisie du titre
  titleInput.type = "text"; // Définit le type de l'élément inputTitle comme "text"
  titleInput.placeholder = ""; // Définit le texte d'espace réservé de l'élément titleInput comme une chaîne vide

  const customPlaceholder = "custom-placeholder"; // Définit une variable customPlaceholder avec la valeur "custom-placeholder"
  titleInput.classList.add(customPlaceholder); // Ajoute la classe CSS

  const aboveCategorySelectText = document.createElement("p"); // Crée un nouvel élément <p> pour afficher le texte au-dessus de la sélection de catégorie
  aboveCategorySelectText.textContent = "Catégorie"; // Définit le contenu textuel du paragraphe aboveCategorySelectText comme "Catégorie"
  aboveCategorySelectText.classList.add("above-category-select-text"); // Ajoute la classe CSS
  modalWrapper2.appendChild(aboveCategorySelectText); // Ajoute le paragraphe aboveCategorySelectText en tant qu'enfant de l'élément modalWrapper2

  const customSelectionClass = "custom-selection"; // Définit une variable customSelectionClass avec la valeur "custom-selection"
  const categorySelect = document.createElement("select"); // Crée un nouvel élément <select> pour la sélection de catégorie
  categorySelect.classList.add(customSelectionClass); // Ajoute la classe CSS "custom-selection" à l'élément categorySelect

  const emptyOption = document.createElement("option"); // Crée un nouvel élément <option> pour une option vide dans la sélection de catégorie
  categorySelect.appendChild(emptyOption); // Ajoute l'élément emptyOption en tant qu'enfant de l'élément categorySelect

  fetch("http://localhost:5678/api/categories") // Effectue une requête GET à l'URL spécifiée pour récupérer les catégories
    .then((response) => response.json()) // Récupère la réponse de la requête HTTP et la convertit en JSON
    .then((data) => {
      // Traite les données JSON récupérées
      const categories = data; // Stocke les catégories dans une variable "categories"
      categories.forEach((category) => {
        // Parcourt chaque catégorie
        const option = document.createElement("option"); // Crée un nouvel élément <option>
        option.value = category.id; // Définit la valeur de l'option comme l'ID de la catégorie
        option.textContent = category.name; // Définit le texte de l'option comme le nom de la catégorie
        categorySelect.appendChild(option); // Ajoute l'option en tant qu'enfant de l'élément categorySelect (sélection de catégorie)
      });
    });

  imageContainer.appendChild(imageLabel); // Ajoute l'élément imageLabel en tant qu'enfant de l'élément imageContainer

  modalWrapper2.appendChild(imageContainer); // Ajoute l'élément imageContainer,inputTitle,titleInput,aboveCategorySelectText,categorySelect en tant qu'enfant de l'élément modalWrapper2
  modalWrapper2.appendChild(inputTitle);
  modalWrapper2.appendChild(titleInput);
  modalWrapper2.appendChild(aboveCategorySelectText);
  modalWrapper2.appendChild(categorySelect);

  const buttonSubmit3 = document.createElement("button"); // Crée un nouvel élément <button>
  buttonSubmit3.type = "button"; // Définit le type du bouton
  buttonSubmit3.textContent = "Valider"; // Définit le texte du bouton "Valider"
  buttonSubmit3.classList.add("custom-button"); // Ajoute la classe CSS
  modalWrapper2.appendChild(buttonSubmit3); // Ajoute le bouton en tant qu'enfant de l'élément modalWrapper2

  const blackBar2 = document.createElement("div"); // Crée un élément <div> pour la barre noire
  blackBar2.classList.add("black-bar2"); // Ajoute la classe CSS
  modalWrapper2.insertBefore(blackBar2, buttonSubmit3); // Insère la barre noire avant le bouton dans l'élément modalWrapper2

  modalWrapper2.appendChild(buttonSubmit3);

  function validateForm() {
    //effectue une validation du formulaire en vérifiant si les champs requis sont remplis
    const isTitleFilled = titleInput.value.trim() !== ""; // Vérifie si le champ du titre est rempli en supprimant les espaces vides autour et en vérifiant si la valeur est différente de la chaîne vide
    const isCategoryFilled = categorySelect.value !== ""; // Vérifie si la sélection de catégorie a une valeur différente de la chaîne vide
    const isImageSelected = imageInput.files.length > 0; // Vérifie si au moins un fichier a été sélectionné dans l'élément imageInput

    return isTitleFilled && isCategoryFilled && isImageSelected; // Cette ligne permet de déterminer si le formulaire est valide ou non
  }

  buttonSubmit3.addEventListener("click", function (event) {
    //ajoute un écouteur d'événements "click" au bouton buttonSubmit3. Lorsque le bouton est cliqué
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

    if (validateForm()) {
      //vérifie si le formulaire est valide en appelant la fonction validateForm(). Si le formulaire est valide (tous les champs requis sont remplis)
      buttonSubmit3.classList.add("filled"); // Ajoute la classe "filled" lorsque tous les champs sont remplis

      const formData = new FormData(); // Crée un nouvel objet FormData pour stocker les données du formulaire
      formData.append("image", imageInput.files[0]); // Ajoute le fichier sélectionné dans l'élément imageInput à l'objet FormData sous la clé "image"
      formData.append("title", titleInput.value); // Utilise la valeur du champ de saisie du titre
      formData.append("category", categorySelect.value); // Utilise la valeur sélectionnée dans le menu déroulant de la catégorie
      const accessToken = localStorage.getItem("token"); // Récupère le jeton d'accès à partir du stockage local (localStorage)

      fetch("http://localhost:5678/api/works", {
        // Effectue une requête POST à l'URL spécifiée pour envoyer les données du formulaire
        method: "POST", // Utilise la méthode HTTP POST
        headers: {
          Authorization: `Bearer ${accessToken}`, // Ajoute l'en-tête Authorization avec le jeton d'accès
        },
        body: formData, // Utilise l'objet FormData comme corps de la requête
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Une erreur s'est produite lors de l'envoi du formulaire."
            );
          }
          return response.json(); // Convertit la réponse en JSON
        })
        // Traite la réponse JSON renvoyée par l'API
        // Gérer la réponse de l'API ici
        .then((data) => {
          console.log(data); // Affiche la réponse de l'API dans la console
          alert("Le formulaire a été envoyé avec succès !"); // Affiche une alerte indiquant que le formulaire a été envoyé avec succès

          titleInput.value = ""; // Réinitialise la valeur du champ de saisie du titre à une chaîne vide
          categorySelect.value = ""; // Réinitialise la valeur de la sélection de catégorie à une chaîne vide
          imagePreview.src = ""; // Réinitialise l'aperçu de l'image à une source vide

          const newImage = data; // Récupère la nouvelle image à partir de la réponse JSON renvoyée par l'API
          const figure = document.createElement("figure"); // Crée un nouvel élément <figure> pour représenter la figure de l'image
          const image = document.createElement("img"); // Crée un nouvel élément <img> pour l'image
          image.src = newImage.imageUrl; // Définit l'URL de la nouvelle image comme la source de l'élément <img>
          image.alt = newImage.title; // Définit le titre de la nouvelle image comme l'attribut alt de l'élément <img>

          const imageContainer = document.createElement("div"); // Crée un nouvel élément <div> pour le conteneur de l'image
          imageContainer.classList.add("image-container"); // Ajoute la classe CSS
          imageContainer.setAttribute("data-id", newImage.id); // Ajoute l'attribut de données avec l'identifiant unique de l'image
          imageContainer.appendChild(image); // Ajoute l'élément <img> en tant qu'enfant de l'élément imageContainer
          figure.appendChild(imageContainer); // Ajoute l'élément imageContainer en tant qu'enfant de l'élément figure

          const gallery = document.querySelector(".gallery"); // Sélectionne l'élément avec la classe CSS "gallery"
          gallery.appendChild(figure); // Ajoute l'élément figure en tant qu'enfant de l'élément gallery, ajoutant ainsi la nouvelle image à la galerie

          const galleryModal = document.querySelector(".gallery__modal"); // Sélectionne l'élément avec la classe CSS "gallery__modal"
          const figureModal = figure.cloneNode(true); // Clone l'élément figure pour créer une copie indépendante à utiliser dans la modale de la galerie
          const imageContainerModal =
            figureModal.querySelector(".image-container"); //sélectionne l'élément imageContainer à l'intérieur de la copie de l'élément figure dans la modale de la galerie
            
          const editCaption = document.createElement("figcaption");
          const editText = document.createElement("span");
          editText.textContent = "éditer";
          editCaption.appendChild(editText);
          figureModal.appendChild(editCaption);
          galleryModal.appendChild(figureModal);           

          const deleteIconModal = document.createElement("i"); // Crée un élément <i> pour l'icône de suppression dans la modale de la galerie
          deleteIconModal.classList.add("fa-solid", "fa-trash-can"); // Ajoute les classes CSS
          deleteIconModal.classList.add("delete-icon"); // Ajoute les classes CSS
          imageContainerModal.appendChild(deleteIconModal); // Ajoute l'icône de suppression en tant qu'enfant de l'élément imageContainerModal dans la modale de la galerie

          deleteIconModal.addEventListener("click", function () {
            const imageContainerModalParent =
              deleteIconModal.closest(".image-container"); // Sélectionne l'élément parent de l'icône de suppression avec la classe CSS "image-container" dans la modale de la galerie
            const imageId = imageContainerModalParent.getAttribute("data-id"); // Récupère l'identifiant unique de l'image

            fetch(`http://localhost:5678/api/works/${imageId}`, {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${accessToken}`, // Inclut l'en-tête d'autorisation avec le jeton d'accès
              },
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error(
                    "Une erreur s'est produite lors de la suppression de l'image."
                  ); // Si la réponse n'est pas "ok", lance une erreur
                }

                // Supprime l'élément figure correspondant de la galerie
                const galleryImage = gallery.querySelector(
                  `[data-id="${imageId}"]`
                ); // Sélectionne l'élément figure de la galerie avec l'identifiant unique correspondant
                if (galleryImage) {
                  const galleryFigure = galleryImage.closest("figure"); // Sélectionne l'élément figure parent de l'élément galleryImage
                  galleryFigure.remove(); // Supprime l'élément figure de la galerie
                }

                // Supprime l'élément figure correspondant de la galerie modale
                const galleryModalImage = galleryModal.querySelector(
                  `[data-id="${imageId}"]`
                ); // Sélectionne l'élément figure de la galerie modale avec l'identifiant unique correspondant
                if (galleryModalImage) {
                  const galleryModalFigure =
                    galleryModalImage.closest("figure"); // Sélectionne l'élément figure parent de l'élément galleryModalImage
                  galleryModalFigure.remove(); // Supprime l'élément figure de la galerie modale
                }
              })
              .catch((error) => {
                // Gérer les erreurs de la requête ici
                console.error(error); // Affiche l'erreur dans la console du navigateur
                alert(
                  "Une erreur s'est produite lors de la suppression de l'image."
                ); // Affiche une alerte indiquant qu'une erreur s'est produite lors de la suppression de l'image
              });
          });
          // Crée un élément figcaption pour afficher le titre de l'image
          const figcaption = document.createElement("figcaption");
          figcaption.classList.add("gallery__figcaption");
          figcaption.textContent = newImage.title;
          
          // Ajoute l'élément image et l'élément figcaption à l'élément figure
          figure.appendChild(image);
          figure.appendChild(figcaption);
          // Sélectionne l'élément avec la classe CSS "gallery__modal"
          document.querySelector(".gallery__modal");
          const figcaptionModal = galleryModal.querySelector(
            ".gallery__figcaption"
          ); // Sélectionne l'élément figcaption dans la galerie modale
          if (figcaptionModal) {
            figcaptionModal.remove(); // Vérifie s'il existe déjà un figcaption dans la galerie modale et le supprime le cas échéant
          }
          // Ajoute l'élément figure cloné à la galerie modale
          galleryModal.appendChild(figureModal);
          // Applique le filtre "tous" pour actualiser l'affichage des images
          filterImages("tous");
        })
        .catch((error) => {
          // Gérer les erreurs de la requête ici
          console.error(error); // Affiche l'erreur dans la console du navigateur
          alert("Une erreur s'est produite lors de l'envoi du formulaire."); // Affiche une alerte indiquant qu'une erreur s'est produite lors de l'envoi du formulaire
        });
    } else {
      alert("Veuillez remplir tous les champs et sélectionner une image."); // Affiche une alerte indiquant que tous les champs doivent être remplis et qu'une image doit être sélectionnée
    }
  });

  modal2.appendChild(modalWrapper2); // Ajoute l'élément modalWrapper2 en tant qu'enfant de l'élément modal2

  // Gestionnaire d'événement de clic pour le bouton de fermeture du deuxième modal
  closeButton2.addEventListener("click", fermerDeuxiemeModale);
  // Fonction pour vérifier l'état de remplissage du formulaire et mettre à jour la couleur du bouton
  function updateButtonColor() {
    if (validateForm()) {
      buttonSubmit3.classList.add("filled"); // Ajoute la classe "filled" au bouton si le formulaire est valide
    } else {
      buttonSubmit3.classList.remove("filled"); // Supprime la classe "filled" du bouton si le formulaire n'est pas valide
    }
  }

  // Ajoute les événements de changement dans les champs de texte, catégorie et images
  titleInput.addEventListener("input", updateButtonColor);
  categorySelect.addEventListener("change", updateButtonColor);
  imageInput.addEventListener("change", updateButtonColor);
  // Gestionnaire d'événement de clic pour l'arrière-plan du deuxième modal
  // Vérifie si l'élément cliqué est le modal2 lui-même
  modal2.addEventListener("click", function (e) {
    if (e.target === modal2) {
      fermerDeuxiemeModale();
    }
  });  // Appelle la fonction fermerDeuxiemeModale

  return modal2; // Renvoie la référence à l'élément modal2
}

// Fonction pour créer le deuxième modal
let secondModal = null; // Variable pour stocker la référence à l'élément du deuxième modal
let isSecondModalOpen = false;  // Variable pour suivre l'état d'ouverture du deuxième modal
// Fonction pour ouvrir le deuxième modal
function ouvrirDeuxiemeModale() {
  if (isSecondModalOpen) {
    return; // Si le deuxième modal est déjà ouvert, ne rien faire
  }
 // Créer le deuxième modal s'il n'existe pas encore
  if (!secondModal) {
    secondModal = createSecondModal(); // Appel à une fonction pour créer le contenu du deuxième modal
    document.body.appendChild(secondModal); // Ajouter le deuxième modal au body du document
  }

  secondModal.style.display = "block"; // Afficher le deuxième modal
  isSecondModalOpen = true; // Mettre à jour l'état d'ouverture du deuxième modal
}
// Fonction pour fermer le deuxième modal
function fermerDeuxiemeModale() {
  if (secondModal) {
    secondModal.style.display = "none"; // Masquer le deuxième modal
    isSecondModalOpen = false; // Mettre à jour l'état d'ouverture du deuxième modal
  }
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
inputSubmit.disabled = true;

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
