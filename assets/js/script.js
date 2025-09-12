const text = "Me chamo João Chrystian";
const typingElement = document.querySelector(".typing");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 120); // velocidade da digitação
  } else {
    // quando terminar de digitar, ativa animação do cursor piscando
    typingElement.style.borderRight = "3px solid #f5f5f5";
    typingElement.style.animation = "blink 0.8s step-end infinite";
  }
}

window.onload = () => {
  // cursor visível mas fixo enquanto digita
  typingElement.style.borderRight = "3px solid #f5f5f5";
  typeEffect();
};

// animação do cursor piscando (só ativa no fim)
const style = document.createElement("style");
style.innerHTML = `
@keyframes blink {
  50% { border-color: transparent; }
}`;
document.head.appendChild(style);
