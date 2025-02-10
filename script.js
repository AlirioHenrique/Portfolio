document.addEventListener('DOMContentLoaded', function() {
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
    const btn = document.querySelector('button'); 
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
            btn.textContent = 'Send Email'; 
            alert('Mensagem enviada com sucesso!'); 
        }, function(error) {
            console.log('Erro no envio:', error); 
            btn.textContent = 'Send Email'; 
            alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
            if (error.status) {
                console.log('Status do erro:', error.status); 
            }
            if (error.text) {
                console.log('Texto do erro:', error.text); 
            }
        });
    }); 

    

  

    // Ativação de links no menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            localStorage.setItem('activeLink', this.getAttribute('href'));
        });
    });
    document.querySelector('.nome-titulo').addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('.nav-link[href="#home"]').classList.add('active');
        localStorage.setItem('activeLink', '#home');
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

    // Fecha o menu de navegação quando clicado fora dele
    document.addEventListener("click", function (event) {
        const buttonMenu = document.querySelector(".button-menu");
        const menuContent = document.querySelector("#navbarNav");
        const links = document.querySelectorAll('a');  // Defina os links corretamente aqui
        if (!buttonMenu.contains(event.target) && !menuContent.contains(event.target)) {
            menuContent.classList.remove("show"); 
            buttonMenu.blur(); 
        }
        if (!Array.from(links).some(link => link.contains(event.target))) {
            buttonMenu.blur(); 
        }
    });
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