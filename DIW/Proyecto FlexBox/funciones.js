function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function toggleText() {
    const moreText = document.querySelector('.more-text');
   moreText.classList.toggle('open');
    
   // Cambiar el texto del botón dependiendo de si el contenido está expandido o no
   const readMoreBtn = document.querySelector('.btn-read-more');
   if (moreText.classList.contains('open')) {
     readMoreBtn.textContent = "Leer menos";
   } else {
     readMoreBtn.textContent = "Leer más...";
   }
}

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

  inputs.forEach(input => {
      input.addEventListener('input', () => {
          if (!input.classList.contains('touched')) {
              input.classList.add('touched');
          }
      });
  });
});