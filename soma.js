function ePrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const primos = [];
  for (let i = 1; i <= 100; i++) {
    if (ePrimo(i)) {
      primos.push(i);
    }
  }
  
  let indiceAtual = 0;
  let somaParcial = 0;
  
  function somarProximoPrimo() {
    let resultado = document.getElementById("resultado");
  
    if (indiceAtual < primos.length) {
      somaParcial += primos[indiceAtual];
      resultado.textContent = `Soma parcial: ${somaParcial}`;
      indiceAtual++;
    }
  
    if (indiceAtual >= primos.length) {
      resultado.textContent = `Soma total: ${somaParcial}`;
      indiceAtual = 0;
      somaParcial = 0;
    }
  
    console.log(somaParcial)
    console.log(indiceAtual)
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const botaoSoma = document.getElementById('soma');
    botaoSoma.addEventListener('click', somarProximoPrimo);
  });
  
  setTimeout(() => {
    botaoSoma = false;}, 
    10000
  );