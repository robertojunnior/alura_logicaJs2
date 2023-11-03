alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 15;
let chute = prompt("Escolha um número de 1 a 30!");

// se chute for igual número secreto
if (chute == numeroSecreto) {
  alert(`Parabéns, você acertou! O ${numeroSecreto} é o número secreto!`);
} else if (chute < numeroSecreto) {
  alert("Tente outra vez, seu chute foi menor que o número secreto!");
} else {
  alert("Tente outra vez, seu chute foi maior que o número secreto!");
}
