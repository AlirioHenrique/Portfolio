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

