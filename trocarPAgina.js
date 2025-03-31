function changePage(page) {
    window.location.href = page;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.botoesHead');
  
    buttons[0].addEventListener('click', () => changePage('./index.html'));
    buttons[1].addEventListener('click', () => changePage('./gerador.html'));
    buttons[2].addEventListener('click', () => changePage('./lista.html'));
    buttons[3].addEventListener('click', () => changePage('./parouimpar.html'));
  });