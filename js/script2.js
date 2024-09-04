document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu > ul > li > a");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains("submenu")) {
        event.preventDefault(); // Evita o comportamento padrão do link
        submenu.classList.toggle("visible"); // Alterna a classe 'visible'
      }
    });
  });
});
