let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio.";

function botaoConsole() {
  console.log("O botão foi clicado!");
}

function botaoAlert() {
  alert("Eu amo estudar JavaScript na Alura!");
}

function botaoPrompt() {
  let cidade = prompt("Escreva o nome de uma cidade do Brasil:");
  alert(`Estive em ${cidade} e lembrei de você!`);
}

function botaoSoma() {
  alert("Olá, digite a seguir 2 números para realizarmos uma soma:");
  let numero1 = parseInt(prompt("Digite o primeiro número:"));
  let numero2 = parseInt(prompt("Digite outro número:"));
  let soma = numero1 + numero2;
  alert(`O resultado da soma dos dois números é ${soma}.`);
}
