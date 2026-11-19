
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    const aberto = menu.classList.contains("ativo");

    menuToggle.textContent = aberto ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

const links = document.querySelectorAll(".menu a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});
