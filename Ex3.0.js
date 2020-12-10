var n1 = 6;
var n2 = 2;
var operacao = 2;
switch (operacao) {
  case 1:
    console.log(`Multiplicação ${n1}*${n2}:\n` + n1 * n2);
    break;

  case 2:
    console.log('Subtração'+n1-n2);
    break;

  case 3:
    console.log('Divisão' + n1 / n2);
    break;

  default:
    console.log('Opção inválida!');
}
