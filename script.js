const slides = document.querySelector(".slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideImages = document.querySelectorAll(".slides img");

let currentSlide = 0;

// Atualiza o carrossel com base no slide atual
function updateCarousel() {
    const slideWidth = 1500; // Largura fixa das imagens
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Gerencia o estado dos botões
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slideImages.length - 1;
}

// Clique no botão "anterior"
prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
});

// Clique no botão "próximo"
nextBtn.addEventListener("click", () => {
    if (currentSlide < slideImages.length - 1) {
        currentSlide++;
        updateCarousel();
    }
});

// Atualiza o carrossel ao carregar a página
updateCarousel();
