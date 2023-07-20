export default function initFecthBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(body => {
      const btcPreco = document.querySelector('.btc-preco');
      const total = (100 / body.BRL.sell).toFixed(4);
      btcPreco.innerText = total;
    }).catch(erro => {
      console.log(Error(erro));
    });
}



