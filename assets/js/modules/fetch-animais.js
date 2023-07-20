import initAnimaNumeros from './anima-numeros.js';

export default function initFecthAnimais() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();

    animaisJson.forEach(animal => {
      createAnimal(animal);
    });
    initAnimaNumeros();
  }

  fetchAnimais(url);

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    replaceContent(div)
  }

  function replaceContent(div) {
    const grid = document.body.querySelector('.numeros-grid');
    grid.appendChild(div);
  }
}


