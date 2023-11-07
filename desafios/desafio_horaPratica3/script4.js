/*Desafio 4 - Contagem progressiva */
let contador4 = Number(
  prompt("Olá, bem vindo ao contador progressivo, digite um número até de 20:")
);
while (contador4 <= 20) {
  console.log(`Contagem progressiva de ${contador4} até 20.`);
  contador4++;
}

// Exemplo = Resposta Post Fórum
// Solicita ao usuário que digite um número e armazena o valor na variável numeroMaximo.
let numeroMaximo = prompt("Digite um número para a contagem progressiva:");

// Inicializa a variável contador com o valor 0, que será usada para controlar a contagem.
let contador = 0;

// Inicia um loop while que continua enquanto o valor de contador for menor ou igual a numeroMaximo.
while (contador <= numeroMaximo) {
  // Exibe o valor atual de contador no console.
  console.log(contador);

  // Incrementa o valor de contador em 1 a cada iteração do loop.
  contador++;
}
