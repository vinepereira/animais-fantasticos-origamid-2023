function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) { // verifica se existe as variáveis
    tabContent[0].classList.add('ativo'); // adiciona ativo ao primeiro item

    // navegação por tab
    function activeTab(index) {
      tabContent.forEach(item => {
        item.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((li, index) => {
      li.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}
initTabNav();


// accordion FAQ
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const ativoClass = 'ativo';
  if (accordionList.length) {
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);

    function activeAccordion() {
      this.classList.toggle(ativoClass);
      this.nextElementSibling.classList.toggle(ativoClass);
    }

    accordionList.forEach(dt => {
      dt.addEventListener('click', activeAccordion);
    })
  }
}
initAccordion();

function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

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
initScrollSmooth();

function initAnimaScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const calculaTela = window.innerHeight * 0.6;

  if (sections.length) {
    function animaScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - calculaTela) < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        }
      })
    }
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimaScroll();