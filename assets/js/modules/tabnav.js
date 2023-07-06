export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) { // verifica se existe as variáveis
    tabContent[0].classList.add('ativo'); // adiciona ativo ao primeiro item

    // navegação por tab
    function activeTab(index) {
      tabContent.forEach(item => {
        item.classList.remove('ativo', tabContent[0].dataset.anime, tabContent[1].dataset.anime);
      });

      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
    }

    tabMenu.forEach((li, index) => {
      li.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}