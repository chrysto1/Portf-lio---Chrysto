const text = "JOÃO CHRYSTIAN";
const typingElement = document.querySelector(".hero-title.typing");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    if (typingElement) {
      // Mostrar texto digitado até agora + cursor
      const typedText = text.substring(0, index + 1);
      typingElement.innerHTML = `<span class="text-static">${typedText}</span><span class="cursor">|</span>`;
    }
    index++;
    setTimeout(typeEffect, 100);
  } else {
    if (typingElement) {
      typingElement.innerHTML = `<span class="text-static">${text}</span><span class="cursor blink">|</span>`;
    }
  }
}

window.onload = () => {
  typeEffect();
};

// CSS para o cursor e texto
const style = document.createElement('style');
style.innerHTML = `
.text-static {
  color: #ffffff;
  font-weight: 300;
}
.cursor {
  color: #ffffff;
  font-weight: 300;
}
.cursor.blink {
  animation: blink 0.8s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}`;
document.head.appendChild(style);

// SCROLL REVEAL ANIMATIONS
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
  
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const elementVisible = 150;
    
    // Elemento entra na viewport (scroll para baixo)
    if (elementTop < window.innerHeight - elementVisible && elementBottom > elementVisible) {
      element.classList.add('revealed');
    }
    // Elemento sai da viewport (scroll para cima ou para baixo)
    else if (elementTop > window.innerHeight || elementBottom < 0) {
      element.classList.remove('revealed');
    }
  });
  
  // Verificar se a seção home está visível para reiniciar animação de digitação
  const homeSection = document.getElementById('home');
  if (homeSection) {
    const homeSectionTop = homeSection.getBoundingClientRect().top;
    const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
    
    // Se a seção home está visível e não está com animação ativa
    if (homeSectionTop < window.innerHeight * 0.8 && homeSectionBottom > window.innerHeight * 0.2) {
      if (!homeSection.hasAttribute('data-typing-active')) {
        homeSection.setAttribute('data-typing-active', 'true');
        restartTypingAnimation();
      }
    } else {
      // Remove o atributo quando sai da viewport
      homeSection.removeAttribute('data-typing-active');
    }
  }
}

// Função para reiniciar a animação de digitação
function restartTypingAnimation() {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    // Limpar conteúdo atual
    heroTitle.innerHTML = '';
    
    // Reiniciar animação
    let i = 0;
    const text = "JOÃO CHRYSTIAN";
    
    function typeEffect() {
      if (i < text.length) {
        // Mostrar texto digitado até agora + cursor
        const typedText = text.substring(0, i + 1);
        heroTitle.innerHTML = `<span class="text-static">${typedText}</span><span class="cursor">|</span>`;
        i++;
        setTimeout(typeEffect, 100);
      } else {
        // Adicionar cursor piscante após completar
        heroTitle.innerHTML = `<span class="text-static">${text}</span><span class="cursor blink">|</span>`;
      }
    }
    
    typeEffect();
  }
}

// Adiciona o evento de scroll
window.addEventListener('scroll', revealOnScroll);

// Executa uma vez no carregamento da página
window.addEventListener('load', revealOnScroll);

// MOBILE MENU FUNCTIONALITY
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle menu
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
    mobileMenuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Adiciona delay escalonado para os stat-items
window.addEventListener('load', () => {
  const statItems = document.querySelectorAll('.stat-item');
  statItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
  });
});
