let titulo = document.querySelector("h1");
titulo.innerHTML = "Jodo do número Secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha o número entre 1 e 10.";

function exibirTextoNaTela() {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
exibirTextoNaTela();

function verificarChute() {
  console.log("O botão foi clicado!");
}
