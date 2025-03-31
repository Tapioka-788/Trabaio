
const tarefas = [
    {
      tarefinha: 'Estudar As Aulas da Marielle',
    },
    {
      tarefinha: 'Estudar As Aulas da Rosemeri',
    },
    {
      tarefinha: 'Estudar As Aulas do Artur',
    },
  ];
  
  function criarComp() {
    let shower = document.getElementById('shower');
    for (let i = 0; i < tarefas.length; i++) {
      let div = document.createElement('div');
        div.className = 'comp';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.width = '26vw';
        div.style.height = '4vw';
        div.style.margin = '0.5vh 0';
        div.style.paddingLeft = '0.5vw';
        div.style.backgroundColor = '#c2b2ff';
        div.style.borderRadius = '1vw';
  
      let caixinha = document.createElement('input');
      caixinha.type = 'checkbox';
      caixinha.className = 'caixinha';
  
      let tarefinha = document.createElement('h2');
      tarefinha.className = 'tarefinha';
      tarefinha.textContent = tarefas[i].tarefinha;
  
      div.appendChild(caixinha);
      div.appendChild(tarefinha);
      
      shower.appendChild(div);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    criarComp();
  });