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

const main = document.createElement('main');
const section = document.createElement('section');
section.className = 'log_in';
section.id = 'contact';
const h2 = document.createElement('h2');
h2.textContent = 'Log In';
const form = document.createElement('form');
form.action = '#';
form.method = 'post';
const label1 = document.createElement('label');
label1.htmlFor = 'email';
label1.textContent = 'Email';
const input1 = document.createElement('input');
input1.type = 'email';
input1.name = 'email';
input1.id = 'email';
const label2 = document.createElement('label');
label2.htmlFor = 'password';
label2.textContent = 'Password';
const input2 = document.createElement('input');
input2.type = 'password';
input2.name = '';
input2.id = 'password';
input2.autocomplete = 'off';
const input3 = document.createElement('input');
input3.type = 'submit';
input3.value = 'Se connecter';
const p = document.createElement('p');
p.textContent = 'Mot de passe oublié';
const errorSpan = document.createElement('span');
errorSpan.className = 'error';
form.appendChild(label1);
form.appendChild(input1);
form.appendChild(label2);
form.appendChild(input2);
form.appendChild(input3);
section.appendChild(h2);
section.appendChild(form);
section.appendChild(p);
section.appendChild(errorSpan);
main.appendChild(section);

const footer = document.createElement('footer');
footer.className = 'login';
const footerNav = document.createElement('nav');
const footerUl = document.createElement('ul');
const footerLi = document.createElement('li');
footerLi.textContent = 'Mentions Légales';
footerLi.style.marginRight = "50px";


footerUl.appendChild(footerLi);
footerNav.appendChild(footerUl);
footer.appendChild(footerNav);

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);


// ------- Requéte API ---------------------------
//déclare une fonction nommée requestLogin.
//La fonction utilise le mot-clé return pour renvoyer une promesse résultant de l'appel à fetch.
function requestLogin() {
    return fetch("http://localhost:5678/api/users/login", {
        // indique que la requête doit être effectuée avec la méthode HTTP POST
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },  // L'en-tête Content-type indique que les données sont au format JSON
        //L'objet body est défini avec JSON.stringify, qui convertit un objet JavaScript en une chaîne JSON.
        body: JSON.stringify({
            "email": stockInputEmail, // Ajoute l'adresse e-mail stockée dans la variable stockInputEmail au corps de la requête
            "password": stockInputPassword, // Ajoute le mot de passe stocké dans la variable stockInputPassword au corps de la requête
        })
    });
};
// ---- Récupération du dom -----------------------------------------
const inputPassword = document.querySelector('input[type="password"]');
const inputEmail = document.querySelector('input[type="email"]');
const submit = document.querySelector('input[type="submit"]');
const errorDisplay = document.querySelector('.error');
const login = document.getElementById("login")
//------ Variable de stockage valeur 

let stockInputPassword = inputPassword.value;
let stockInputEmail = inputEmail.value;
//--------- Evénement click formulaire + check 

submit.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
    // Stocke les valeurs des champs d'e-mail et de mot de passe dans les variables correspondantes
    stockInputEmail = inputEmail.value;
    stockInputPassword = inputPassword.value;
    // Appelle la fonction requestLogin pour effectuer la requête de connexion
    requestLogin()
        .then((response) => response.json()) // Convertit la réponse en JSON
        .then(login => {
            console.log(login); // Affiche les données de connexion dans la console
            if (login.token) {
                // Si le token est présent dans les données de connexion, cela signifie que l'authentification a réussi
                localStorage.setItem('token', login.token); // Stocke le token dans le stockage local
                isUserLogged = true; // Définit la variable isUserLogged à true
                window.location.href = "./index.html"; // Redirige vers la page index.html
                console.log("Utilisateur connecté"); // Affiche un message de connection
            } else {
                //token n'est pas trouvé, l'authentification a échoué
                console.error("Le token n'a pas été trouvé");
                errorDisplay.innerHTML = "Identifiant ou Mot de passe incorrect"; // Affiche un message d'erreur
                inputEmail.insertAdjacentElement("beforebegin", errorDisplay); // Insère le message d'erreur avant le champ d'e-mail 
            };
        });
});


// ------ Récupération des données --------------
 // La fonction de rappel est exécutée lorsque l'utilisateur saisit ou modifie quelque chose dans le champ 
inputEmail.addEventListener('input', (e) => {
    console.log(e.target.value); // Affiche la valeur actuelle de l'élément inputEmail dans la console

});
inputPassword.addEventListener('input', (e) => {
    console.log(e.target.value); // Affiche la valeur actuelle de l'élément inputPassword dans la console
});
