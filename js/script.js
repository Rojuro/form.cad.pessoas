document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu > ul > li > a");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains("submenu")) {
        event.preventDefault();
        submenu.style.display =
          submenu.style.display === "block" ? "none" : "block";
      }
    });
  });
});
