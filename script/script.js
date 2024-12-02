let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.banner');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const bannerContainer = document.querySelector('.banner-container');
    bannerContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Inicializa o carrossel
showSlide(currentSlide);

// Atualiza o valor do orçamento automaticamente
document.getElementById('servico-select').addEventListener('change', function() {
    const valor = this.value;
    const valorDisplay = document.getElementById('orcamento-valor');
    valorDisplay.textContent = `Valor aproximado: R$ ${valor}`;
});

document.getElementById('orcamento-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert("Obrigado por solicitar um orçamento! Responderei em breve.");
    this.reset(); // Limpa o formulário após o envio
});

document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert("Obrigado por entrar em contato! Responderei em breve.");
    this.reset(); // Limpa o formulário após o envio
});