let worksData; // stockage des données (projets)
let categoriesData; // stockage des categories
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
}
function displayProjectAndCategories(categories, works) {
  // Logique de traitement et d'affichage des catégories et des projets
  console.log("Categories:", categories);
  console.log("Works:", works);
  // Vous pouvez utiliser ces données pour générer dynamiquement du contenu HTML, mettre à jour l'interface utilisateur, etc.
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

document.addEventListener("DOMContentLoaded", () => {
  const liLogin = document.getElementById("login");
  const spansToHide = document.querySelectorAll(".hide-span");
  // Vérifie si l'utilisateur est connecté en vérifiant la présence du token dans le stockage local
  if (localStorage.getItem("token")) {
    blackBar.style.display = "flex";
    // Remplace le lien "login" par un bouton "logout"
    liLogin.innerHTML = "";
    const linkLogout = document.createElement("a");
    linkLogout.innerText = "Logout";
    linkLogout.href = "#";
    linkLogout.style.textDecoration = "none";
    linkLogout.style.color = "inherit";
    linkLogout.addEventListener("click", () => {
      localStorage.removeItem("token");
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
  .then((response) => response.json())
  .then((data) => {
    categories = data;

    categories.forEach((category) => {
      const span = document.createElement("span");
      span.innerText = category.name;
      span.classList.add("hide-span");
      divItems.appendChild(span);
    });

    // Une fois que les catégories sont chargées, on peut charger les projets
    loadWorks();

    // Vérifie si l'utilisateur est connecté en vérifiant la présence du token dans le stockage local
    const userLoggedIn = localStorage.getItem("token");

    if (userLoggedIn) {
      // Masquer les catégories
      const categorySpans = divItems.querySelectorAll("span");
      categorySpans.forEach((span) => {
        span.style.display = "none";
      });
      // Masquer les éléments icon2 et text2
    } else {
      icon5.style.display = "none";
      text5.style.display = "none";
    }
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des catégories:", error);
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
    const category = categories.find(
      (category) => category.name === categoryName
    );
    if (category) {
      const categoryId = category.id;
      displayWorks(categoryId);
    }
  }
});
// Affiche toutes les images via la gallery
span1.addEventListener("click", function () {
  const spans = divItems.querySelectorAll("span");
  spans.forEach(function (span) {
    span.classList.remove("active");
  });
  span1.classList.add("active");

  displayWorks(0);
});

function loadWorks() {
  // Chargement des projets à partir de l'API
  fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      works = data;
      displayWorks(0);
    })
    .catch((error) => {
      console.error("Erreur lors du chargement des projets:", error);
    });
}

function displayWorks(categoryId) {
  divGallery.innerHTML = "";

  const filteredWorks =
    categoryId !== 0
      ? works.filter((work) => work.categoryId === categoryId)
      : works;

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
fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    const projects = data;

    // Utilise les données récupérées pour afficher les images sur votre site
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    projects.forEach((project) => {
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
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données :",
      error
    );
  });

// Récupére les images du modal depuis l'API

fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    const projects = data;
    const gallery = document.querySelector(".gallery");
    const galleryWrapper = document.querySelector(".gallery__modal");
    galleryWrapper.innerHTML = "";

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
      deleteIcon.addEventListener("click", function (event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien ou du bouton (rechargement de la page)

  const parentFigure = deleteIcon.parentElement.parentElement;
  parentFigure.remove();

  const galleryImage = gallery.querySelector(`img[src="${project.imageUrl}"]`);
  if (galleryImage) {
    const galleryFigure = galleryImage.parentElement;
    galleryFigure.remove();
  }

        const id = project.id; // Remplacez par l'ID de l'image que vous supprimez
        const apiUrl = `http://localhost:5678/api/works/${id}`;
        const accessToken = localStorage.getItem("token"); // Remplacez par votre jeton d'accès

        fetch(apiUrl, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              console.log("L'image a été supprimée avec succès de l'API.");
              // updateModalContent();
            } else {
              console.log("Échec de la suppression de l'image dans l'API.");
            }
          })
          .catch((error) => {
            console.error(
              "Une erreur s'est produite lors de la suppression de l'image dans l'API :",
              error
            );
          });
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

    // Ajout de la modal----------------------------------------------------

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("centered-element");
    modalWrapper.appendChild(inputContainer);

    const blackBar = document.createElement("div");
    blackBar.classList.add("black-bar");
    modalWrapper.insertBefore(blackBar, inputContainer);

    const buttonSubmit = document.createElement("button");
    buttonSubmit.type = "button";
    buttonSubmit.textContent = "Ajouter une photo";
    buttonSubmit.classList.add("modal1button");
    inputContainer.appendChild(buttonSubmit);

    buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  ouvrirDeuxiemeModale();
  fermerModale();
});
    const deleteGalleryText = document.createElement("p");
    deleteGalleryText.textContent = "Supprimer la galerie";
    deleteGalleryText.classList.add("gallerydelete");
    inputContainer.appendChild(deleteGalleryText);

    // Une fois que les images sont chargées, appliquer le filtrage par défaut
    filterImages("tous");
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données :",
      error
    );
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
  modal.style.display = "none";
}
// Vérification pour contrôler l'affichage du modal lors du chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  // Fermer le modal au chargement de la page
  fermerModale();
  // ouvrirGalerieModal();
});
function ouvrirModale() {}

modalWrapper.appendChild(closeButton);

modal.appendChild(modalWrapper);
document.body.appendChild(modal);

// Gestionnaire d'événement de clic pour le bouton de fermeture
closeButton.addEventListener("click", fermerModale);

// Fonction pour fermer la modale
function fermerModale() {
  modal.style.display = "none";
}
modal.addEventListener("click", function (e) {
  // Vérifie si le clic est en dehors du contenu de la modale
  if (e.target === modal) {
    fermerModale();
  }
});
// Vérification pour contrôler l'affichage du modal lors du chargement de la page
document.addEventListener("DOMContentLoaded", function () {
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
// Ajout Formulaire--------------------------------------------------

function createSecondModal() {
  const modal2 = document.createElement("div");
  modal2.classList.add("modal2");

  const modalWrapper2 = document.createElement("div");
  modalWrapper2.classList.add("modal__wrapper2");

  const imageInput = document.createElement("input");
  imageInput.type = "file";
  imageInput.accept = "image/*";
  imageInput.style.display = "none";

  const title2 = document.createElement("h3");
  title2.id = "title_modal2";
  title2.textContent = "Ajout photo";
  modalWrapper2.appendChild(title2);

  const backArrowIcon = document.createElement("i");
  backArrowIcon.classList.add("fa-solid", "fa-arrow-left");
  backArrowIcon.id = "arrow-icon";
  backArrowIcon.addEventListener("click", function () {
    fermerDeuxiemeModale();
    ouvrirModale(); // Appeler la fonction pour ouvrir le premier modal
  });
  modalWrapper2.insertBefore(backArrowIcon, modalWrapper2.firstChild);

  const closeButton2 = document.createElement("i");
  closeButton2.classList.add("fa", "fa-xmark");
  modalWrapper2.appendChild(closeButton2);
  // Ajoute un champ pour charger une image
  // Créer un conteneur pour regrouper l'icône et le champ d'entrée
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("input-container");

  const imageLabel = document.createElement("label");

  const imageIcon = document.createElement("i");
  imageIcon.classList.add("fa-solid", "fa-image");
  imageIcon.style.color = "#bababa";
  imageLabel.appendChild(imageIcon);

  const addButton = document.createElement("button");
  addButton.textContent = "+ Ajouter photo";
  imageLabel.appendChild(addButton);

  addButton.addEventListener("click", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut du bouton (rechargement de la page)
    imageInput.click();
  });

  const imagePreview = document.createElement("img");
  imagePreview.classList.add("image-preview");
  imageLabel.appendChild(imagePreview);

  imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", function () {
        imagePreview.src = reader.result;
      });
      reader.readAsDataURL(file);
    } else {
      imagePreview.src = ""; // Réinitialise l'aperçu de l'image si aucun fichier n'est sélectionné
    }
  });

  const fileSizeText = document.createElement("p");
  fileSizeText.textContent = "jpg, png : 4mo max";
  imageLabel.appendChild(fileSizeText);

  const inputTitle = document.createElement("h4");
  inputTitle.textContent = "Titre";
  inputTitle.classList.add("custom-input-title");
  const customTitleClass = "custom-title";
  inputTitle.classList.add(customTitleClass);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "";

  const customPlaceholder = "custom-placeholder";
  titleInput.classList.add(customPlaceholder);

  const aboveCategorySelectText = document.createElement("p");
  aboveCategorySelectText.textContent = "Catégorie";
  aboveCategorySelectText.classList.add("above-category-select-text");
  modalWrapper2.appendChild(aboveCategorySelectText);

  const customSelectionClass = "custom-selection";
  const categorySelect = document.createElement("select");
  categorySelect.classList.add(customSelectionClass);

  const emptyOption = document.createElement("option");
  categorySelect.appendChild(emptyOption);

  fetch("http://localhost:5678/api/categories")
    .then((response) => response.json())
    .then((data) => {
      const categories = data;
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option);
      });
    });

  imageContainer.appendChild(imageLabel);

  modalWrapper2.appendChild(imageContainer);
  modalWrapper2.appendChild(inputTitle);
  modalWrapper2.appendChild(titleInput);
  modalWrapper2.appendChild(aboveCategorySelectText);
  modalWrapper2.appendChild(categorySelect);

  const buttonSubmit3 = document.createElement("button");
  buttonSubmit3.type = "button";
  buttonSubmit3.textContent = "Valider";
  buttonSubmit3.classList.add("custom-button");
  modalWrapper2.appendChild(buttonSubmit3);

  const blackBar2 = document.createElement("div");
  blackBar2.classList.add("black-bar2");
  modalWrapper2.insertBefore(blackBar2, buttonSubmit3);

  modalWrapper2.appendChild(buttonSubmit3);

  function validateForm() {
    const isTitleFilled = titleInput.value.trim() !== "";
    const isCategoryFilled = categorySelect.value !== "";
    const isImageSelected = imageInput.files.length > 0;

    return isTitleFilled && isCategoryFilled && isImageSelected;
  }

  buttonSubmit3.addEventListener("click", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

    if (validateForm()) {
      buttonSubmit3.classList.add("filled"); // Ajoute la classe "filled" lorsque tous les champs sont remplis

      const formData = new FormData();
      formData.append("image", imageInput.files[0]);
      formData.append("title", titleInput.value); // Utilise la valeur du champ de saisie du titre
      formData.append("category", categorySelect.value); // Utilise la valeur sélectionnée dans le menu déroulant de la catégorie
      const accessToken = localStorage.getItem("token");

      fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Une erreur s'est produite lors de l'envoi du formulaire."
            );
          }
          return response.json();
        })
        .then((data) => {
          // Gérer la réponse de l'API ici
          console.log(data);
          alert("Le formulaire a été envoyé avec succès !");

          imageInput.value = "";
          titleInput.value = "";
          categorySelect.value = "";
          // imagePreview.value = "";
      
          // Une fois que l'image a été ajoutée avec succès, vous pouvez mettre à jour l'affichage sans recharger la page.
          const newImage = data; // Supposons que la réponse de l'API contienne les informations sur la nouvelle image ajoutée.

          // Créez un nouvel élément figure pour représenter la nouvelle image.
          const figure = document.createElement("figure");
          const image = document.createElement("img");
          image.src = newImage.imageUrl;
          image.alt = newImage.title;
          const figcaption = document.createElement("figcaption");
          figcaption.textContent = newImage.title;

          figure.appendChild(image);
          figure.appendChild(figcaption);

          // Ajoute le nouvel élément figure à votre galerie existante.
          const gallery = document.querySelector(".gallery");
          gallery.appendChild(figure);

          const galleryModal = document.querySelector(".gallery__modal");
          galleryModal.appendChild(figure.cloneNode(true));

          // Applique le filtrage approprié ou d'autres mises à jour nécessaires à l'affichage.
          filterImages("tous");
        })
        .catch((error) => {
          // Gérer les erreurs de la requête ici
          console.error(error);
          alert("Une erreur s'est produite lors de l'envoi du formulaire.");
        });
    } else {
      alert("Veuillez remplir tous les champs et sélectionner une image.");
    }
  });

  modal2.appendChild(modalWrapper2);

  // Gestionnaire d'événement de clic pour le bouton de fermeture du deuxième modal
  closeButton2.addEventListener("click", fermerDeuxiemeModale);
  // Fonction pour vérifier l'état de remplissage du formulaire et mettre à jour la couleur du bouton
  function updateButtonColor() {
    if (validateForm()) {
      buttonSubmit3.classList.add("filled");
    } else {
      buttonSubmit3.classList.remove("filled");
    }
  }

  // Écouter les événements de changement dans les champs de texte, catégorie et images
  titleInput.addEventListener("input", updateButtonColor);
  categorySelect.addEventListener("change", updateButtonColor);
  imageInput.addEventListener("change", updateButtonColor);
  // Gestionnaire d'événement de clic pour l'arrière-plan du deuxième modal
  modal2.addEventListener("click", function (e) {
    if (e.target === modal2) {
      fermerDeuxiemeModale();
    }
  });

  return modal2;
}

// Fonction pour créer le deuxième modal
let secondModal = null;
let isSecondModalOpen = false;

// function ouvrirDeuxiemeModale() {
//   if (!isSecondModalOpen) {
//     // Ouvrir le deuxième modal uniquement s'il n'est pas déjà ouvert
//     secondModal.style.display = "block";
//     isSecondModalOpen = true; // Définir la variable pour indiquer que le deuxième modal est ouvert
//   }
// }

function ouvrirDeuxiemeModale() {
  if (isSecondModalOpen) {
    return; // Si le deuxième modal est déjà ouvert, ne rien faire
  }

  if (!secondModal) {
    secondModal = createSecondModal();
    document.body.appendChild(secondModal);
  }

  secondModal.style.display = "block";
  isSecondModalOpen = true;
}

function fermerDeuxiemeModale() {
  if (secondModal) {
    secondModal.style.display = "none";
    isSecondModalOpen = false;
  }
}
// document.addEventListener("DOMContentLoaded", function () {
//   // Fermer le deuxième modal au chargement de la page
//   fermerDeuxiemeModale();
// });

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
