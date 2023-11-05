alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 15;
let chute;
console.log(numeroSecreto);

// enquanto
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número de 1 a 30!");

  // se chute for igual número secreto
  if (chute == numeroSecreto) {
    alert(`Parabéns, você acertou! O número secreto é o ${numeroSecreto}!`);
  } else if (chute < numeroSecreto) {
    alert(`Tente outra vez, ${chute} é menor que o número secreto!`);
  } else {
    alert(`Tente outra vez, ${chute} é maior que o número secreto!`);
  }
}
