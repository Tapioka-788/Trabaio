const caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z', '0', '1', '2', '3', '4', '5','6', '7', '8', '9'];
// Caracteres possíveis para gerar a senha

function gerarSenha() {
  const resultado = document.getElementById('senha');
  let senha = "";
  for (let i = 0; i < 16; i++) {
    senha += caracteres[Math.floor(Math.random() * caracteres.length)];
    //sorteia 8 caracteres aleatórios da lista de caracteres
  }
  resultado.textContent = senha;
  return senha;
}

document.addEventListener('DOMContentLoaded', () => {
  const botaoGerar = document.getElementById('gerar');
  botaoGerar.addEventListener('click', gerarSenha);
  console.log(senha)
});