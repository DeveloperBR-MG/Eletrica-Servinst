// Animação de fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.fade-in').forEach((section) => {
  observer.observe(section);
});

// Enviar mensagem para WhatsApp
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Montar mensagem formatada
    const textoWhatsApp = `Olá!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;
    
    // Número de WhatsApp (sem caracteres especiais)
    const numeroWhatsApp = '31990728853';
    
    // Criar URL do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
    
    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Limpar formulário
    contactForm.reset();
  });
}
