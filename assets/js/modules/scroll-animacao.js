export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const calculaTela = window.innerHeight * 0.6;

  if (sections.length) {
    function animaScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const calcSectionWindow = (sectionTop - calculaTela) < 0;
        if (calcSectionWindow) {
          section.classList.add(section.dataset.anime, 'ativo');
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}