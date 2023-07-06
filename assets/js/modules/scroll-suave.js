export default function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = this.getAttribute('href'); // pega o valor de href (retorna string)
      const section = document.querySelector(href); // seleciona dinamicamente a partir do href

      section.scrollIntoView({ // coloque o element na minha visão...
        behavior: 'smooth',
      });

      // Opção alternativa número 1:
      // const sectionTop = section.offsetTop + 10;
      // window.scrollTo({
      //   top: sectionTop,
      //   behavior: 'smooth'
      // });
    }

    linksInternos.forEach(link => {
      link.addEventListener('click', scrollToSection);
    })
  }
}