document.addEventListener('DOMContentLoaded', function() {
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

    type(); 
});

document.addEventListener("click", function (event) {
    const buttonMenu = document.querySelector(".button-menu");
    const menuContent = document.querySelector("#navbarNav");
    if (!buttonMenu.contains(event.target) && !menuContent.contains(event.target)) {
        menuContent.classList.remove("show"); 
        buttonMenu.blur(); 

    }
    if (!Array.from(links).some(link => link.contains(event.target))) {
        buttonMenu.blur(); 
    }
});

const navbar = document.querySelector('.custom-navbar');
const linkSobre = document.querySelector('.nav-link[href="#sobre"]'); 
const navLinks = document.querySelectorAll('.nav-link'); 

//ativar o link clicado
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        localStorage.setItem('activeLink', this.getAttribute('href'));
    });
});
// Verifica se há um link ativo salvo no localStorage
window.addEventListener('load', function() {
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
        const linkToActivate = document.querySelector(`a[href="${activeLink}"]`);
        if (linkToActivate) {
            linkToActivate.classList.add('active');
        }
    }
});

// Função chamada quando o formulário é enviado
function sendEmail(event) {
    event.preventDefault(); // Evita que o formulário seja enviado da forma tradicional

    // Coleta os dados do formulário
    var form = document.querySelector(".container-form");

    // Envia os dados do formulário para o EmailJS
    emailjs.sendForm("service_g5mcseq", "template_hk3h19k", form)
        .then(function(response) {
            alert("Mensagem enviada com sucesso!"); // Exibe uma mensagem de sucesso
            console.log("Success:", response);
        }, function(error) {
            alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
            console.log("Error:", error);
        });
}

// Agora, adicione o evento de envio
document.querySelector(".container-form").addEventListener("submit", sendEmail);

// Aqui permanece o código de ativação de links
document.addEventListener('DOMContentLoaded', function() {
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

    type(); 
});

document.addEventListener("click", function (event) {
    const buttonMenu = document.querySelector(".button-menu");
    const menuContent = document.querySelector("#navbarNav");
    if (!buttonMenu.contains(event.target) && !menuContent.contains(event.target)) {
        menuContent.classList.remove("show"); 
        buttonMenu.blur(); 
    }
    if (!Array.from(links).some(link => link.contains(event.target))) {
        buttonMenu.blur(); 
    }
});

// Função chamada quando o formulário é enviado
document.querySelector(".container-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Teste de envio de e-mail
    emailjs.send("service_g5mcseq", "template_hk3h19k", {
        "user_name": "Teste",
        "user_email": "teste@teste.com",
        "message": "Este é um teste!"
    }).then(function(response) {
        console.log("Success:", response);  // Se o envio for bem-sucedido
        alert("Mensagem enviada com sucesso!");
    }, function(error) {
        console.error("Erro:", error);  // Se ocorrer algum erro
        alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    });
});
