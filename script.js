function logoClick() {
  // Quando clicar no logo, volta para o topo da página
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMenu() {
  const menu = document.querySelector("nav.menu");
  const toggle = document.querySelector(".menu-toggle");
  
  // Adiciona/remove a classe "active"
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
}
