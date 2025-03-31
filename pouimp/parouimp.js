const botao = document.getElementById('descobrir');
  const numeroInput = document.getElementById('numero');
  const resultado = document.getElementById('resultado');

  function verificarParImpar() {
    const numero = parseInt(numeroInput.value);

    if (isNaN(numero)) {
      alert("Por favor, digite um número válido.");
      return;
    }

    if (numero % 2 === 0) {
      resultado.textContent = `${numero} é um número PAR.`;
    } else {
      resultado.textContent = `${numero} é um número ÍMPAR.`;
    }
  }

  botao.addEventListener('click', verificarParImpar);