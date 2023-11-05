alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 15;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número de 1 a 30!");

  // se chute for igual número secreto
  if (chute == numeroSecreto) {
    alert(
      `Parabéns, você acertou em ${tentativas} tentativas! O número secreto é o ${numeroSecreto}!`
    );
    // break;
    alert("Pressione a tecla F5 para recomeçar!");
  } else {
    if (chute > numeroSecreto) {
      alert(`Tente outra vez, ${chute} é maior que o número secreto!`);
    } else {
      alert(`Tente outra vez, ${chute} é menor que o número secreto!`);
    }
    // tentativas = tentativas + 1 vai fora do else para somar a tent do acerto tbm
    tentativas++;
  }
  console.log(tentativas);
}
