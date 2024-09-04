// JavaScript (script.js):
// Vamos adicionar uma função para abrir o submenu ao clicar no item principal.

document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu > ul > li > a');

  menuItems.forEach(item => {
      item.addEventListener('click', function(event) {
          const submenu = this.nextElementSibling;
          if (submenu && submenu.classList.contains('submenu')) {
              event.preventDefault();
              submenu.classList.toggle('visible');
          }
      });
  });
});
