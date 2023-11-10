let titulo = document.querySelector("h1");
titulo.innerHTML = "Desafio hora pratica 2 - Funções.";

// 1 - Criar uma função que exibe "Olá, mundo!" no console.
function saudacao() {
  console.log("Olá Mundo!");
}
saudacao();

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
  console.log(`Olá, ${nome}`);
}
exibirNome("João.");

// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let entradaNumero = parseInt(prompt("Escolha um número para demonstrar o dobro:"));

function numeroDobro(numero) {
  return numero * 2;
}

let resultadoDobro = numeroDobro(entradaNumero);
console.log(`O dobro de ${entradaNumero} é ${resultadoDobro}.`);

// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
let entradaNumero1 = parseInt(prompt("Escolha um número para tirar a média entre 1 e 10:"));
let entradaNumero2 = parseInt(prompt("Escolha outro número entre 1 e 10:"));
let entradaNumero3 = parseInt(prompt("Escolha um último número entre 1 e 10:"));

function mediaNumeros(numero1, numero2, numero3) {
  return (numero1 + numero2 + numero3) / 3;
}

let media = mediaNumeros(entradaNumero1, entradaNumero2, entradaNumero3);
console.log(`A média entre ${entradaNumero1}, ${entradaNumero2} e ${entradaNumero3} é ${media.toFixed(2)}.`);

// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
