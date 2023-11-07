/*Desafio 3 - Contagem regressiva*/
let contador3 = Number(
  prompt(
    "Olá, bem vindo ao contador regressivo, digite um número abaixo de 20:"
  )
);
while (0 <= contador3) {
  console.log(`Contagem regressiva de ${contador3} até 0.`);
  contador3--;
}
