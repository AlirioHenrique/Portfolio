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

    type(); 

    // Função para envio de email
    function sendEmail(event) {
        event.preventDefault(); // Evita que o formulário seja enviado da forma tradicional

        // Coleta os dados do formulário
        var form = document.querySelector(".container-form");

        // Verifica os dados do formulário antes de enviar
        var formData = new FormData(form);
        formData.forEach(function(value, key) {
            console.log(key + ": " + value);  // Isso vai imprimir os dados no console
        });
    
        // Envia os dados do formulário para o EmailJS
        emailjs.sendForm("service_g5mcseq", "template_hk3h19k", form)
        .then(function(response) {
            alert("Mensagem enviada com sucesso!"); // Exibe uma mensagem de sucesso
            console.log("Success:", response);
        }, function(error) {
            alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
            console.log("Error:", error); // Exibe detalhes do erro
            if (error.status) {
                console.log("Status do erro:", error.status);
            }
            if (error.text) {
                console.log("Texto do erro:", error.text);
            }
        });
    }

    // Adiciona o evento de envio
    document.querySelector(".container-form").addEventListener("submit", sendEmail);

    // Ativação de links no menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
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
