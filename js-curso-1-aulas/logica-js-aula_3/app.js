alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número de 1 a ${numeroMaximo}!`);

  // se chute for igual número secreto
  if (chute == numeroSecreto) {
    break;
    // encerramos o acerto aqui para após o loop criar outra condição se acertar de primeira
  } else {
    if (chute > numeroSecreto) {
      alert(`Tente outra vez, ${chute} é maior que o número secreto!`);
    } else {
      alert(`Tente outra vez, ${chute} é menor que o número secreto!`);
    }
    // tentativas = tentativas + 1, vai fora do else para somar a tent do acerto tbm
    tentativas++;
  }
  console.log(tentativas);
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // operador ternário
if (palavraTentativa == "tentativa") {
  alert(
    `Parabéns, você acertou na ${palavraTentativa} de n° ${tentativas}! O número secreto é o ${numeroSecreto}!`
  );
} else {
  alert(
    `Parabéns, você acertou em ${tentativas} ${palavraTentativa}! O número secreto é o ${numeroSecreto}!`
  );
}
alert("Pressione F5 para recomeçar!");
