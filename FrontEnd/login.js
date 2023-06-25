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

function requestLogin() {
    return fetch("http://localhost:5678/api/users/login", {
        // indique que la requête doit être effectuée avec la méthode HTTP POST
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "email": stockInputEmail,
            "password": stockInputPassword,
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
    e.preventDefault();
    stockInputEmail = inputEmail.value;
    stockInputPassword = inputPassword.value;
    requestLogin()
        .then((response) => response.json())
        .then(login => {
            console.log(login);
            if (login.token) {
                localStorage.setItem('token', login.token);
                isUserLogged = true;
                window.location.href = "./index.html";
                console.log("Utilisateur connecté");
            } else {
                console.error("Le token n'a pas été trouvé");
                errorDisplay.innerHTML = "Identifiant ou Mot de passe incorrect";
            };
        });
});


// ------ Récupération des données --------------

inputEmail.addEventListener('input', (e) => {
    console.log(e.target.value);

});
inputPassword.addEventListener('input', (e) => {
    console.log(e.target.value);
});
