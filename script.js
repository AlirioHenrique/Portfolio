
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


const navLinks = document.querySelectorAll('.nav-link');
let activeLink = localStorage.getItem('activeLink') || ''; // Mantém o link ativo

// Ativação de links no menu
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const href = this.getAttribute('href');
        
        if (href !== activeLink) {
            navLinks.forEach(link => link.classList.remove('active')); 
            this.classList.add('active'); 
            activeLink = href;
            localStorage.setItem('activeLink', href); 
        }
    });
});

// Ativa o link "home" ao clicar no nome do título
document.querySelector('.nome-titulo').addEventListener('click', function () {
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    
    if (activeLink !== '#home') {
        navLinks.forEach(link => link.classList.remove('active'));
        homeLink.classList.add('active');
        activeLink = '#home';
        localStorage.setItem('activeLink', '#home');
    }
});

// Verifica o link ativo ao carregar a página
window.addEventListener('load', function() {
    if (activeLink) {
        const linkToActivate = document.querySelector(`a[href="${activeLink}"]`);
        if (linkToActivate) {
            linkToActivate.classList.add('active');
        }
    }
});

// Fecha o menu de navegação quando clicado fora dele
document.addEventListener("click", function(event) {
    const buttonMenu = document.querySelector(".button-menu");
    const menuContent = document.querySelector("#navbarNav");

    if (!buttonMenu.contains(event.target) && !menuContent.contains(event.target)) {
        menuContent.classList.remove("show");
        buttonMenu.blur();
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