const botaoMenu = document.querySelector(".cabecalho__topbar___botaoMenu");

botaoMenu.addEventListener("click", function() {
    let menuLateral = document.querySelector(".cabecalho__sidebar");
    menuLateral.classList.toggle("cabecalho__sidebar--ativo");
});

const botaoLogin = document.querySelector(".cabecalho__topbar___login");

botaoLogin.addEventListener("click", function() {
    let iconeMenu = this.querySelector(".icofont-rounded-down");
    iconeMenu.classList.toggle("icofont-rounded-up");

    let logoutBotao = document.querySelector(".cabecalho__logout");
    logoutBotao.classList.toggle("cabecalho__logout--ativo");
});