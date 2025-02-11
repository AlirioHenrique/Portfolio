
// Digitação de texto
const words = ["Futuro desenvolvedor Full-Stack", "Treinador de cavalos"]; 
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
const speed = 100; 
const deleteSpeed = 30; 
const typingElement = document.querySelector('.multiple-text');

function type() {
    if (charIndex < words[wordIndex].length) {
        currentWord += words[wordIndex].charAt(charIndex);
        typingElement.textContent = currentWord;
        charIndex++;
        setTimeout(type, speed);
    } else {
        setTimeout(deleteWord, 1000); 
    }
}

function deleteWord() {
    if (charIndex > 0) {
        currentWord = currentWord.slice(0, -1);
        typingElement.textContent = currentWord;
        charIndex--;
        setTimeout(deleteWord, deleteSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length; 
        setTimeout(type, 500);
    }
}

type(); // Inicia a digitação


const form = document.querySelector('.container-form'); 
const btn = document.querySelector('#button'); 
// Adiciona o evento de envio
form.addEventListener('submit', function(event) {
event.preventDefault(); 

console.log('Formulário enviado'); 
btn.textContent = 'Enviando...';

const serviceID = 'default_service';
const templateID = 'template_hk3h19k';

// Envia o formulário via EmailJS
emailjs.sendForm(serviceID, templateID, form)
    .then(function(response) {
        console.log('Resposta do EmailJS:', response); 
        alert('Mensagem enviada com sucesso!'); 
        btn.textContent = 'Enviar';

    }, function(error) {
        console.log('Erro no envio:', error); 
        alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
        if (error.status) {
            console.log('Status do erro:', error.status); 
        }
        if (error.text) {
            console.log('Texto do erro:', error.text); 
        }
    });
    form.reset();
    
}); 

// Função para ativar o link "Home" quando o nome-titulo for clicado
document.querySelector('.nome-titulo').addEventListener('click', function () {
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    const allLinks = document.querySelectorAll('.nav-link');
    allLinks.forEach(link => link.classList.remove('active'));

    homeLink.classList.add('active');
});

// Função para ativar o link clicado
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
// Seleciona o botão de menu e os links de navegação
const buttonMenu = document.querySelector('.button-menu');
const navBar = document.querySelector('.nav-bar');

document.querySelector('.button-menu').addEventListener('click', function () {
    // Alterna a classe 'show' nos links
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('show');
});
//fechar dropdown
document.addEventListener('click', function (event) {
    const navBar = document.querySelector('.nav-bar');
    const buttonMenu = document.querySelector('.button-menu');

    // Verifica se o clique foi fora do botão e do menu de navegação
    if (!navBar.contains(event.target) && !buttonMenu.contains(event.target)) {
        navBar.classList.remove('show'); // Esconde o dropdown
    }
});


const img = document.querySelector('.img-sobre'); 

img.addEventListener('click', function() {
    img.classList.toggle('zoom'); 
});
document.addEventListener('click', function(event) {
    if (!img.contains(event.target)) {
        img.classList.remove('zoom'); 
    }
});