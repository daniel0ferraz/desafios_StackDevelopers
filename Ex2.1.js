function Saber(n1, n2) {
  let maior = undefined;
  let menor = undefined;
  if (n1 >= n2) {
    maior = n1;
    menor = n2;
    console.log(`Maior ${maior}, Menor ${menor}`);
  } else {
    maior = n2;
    menor = n1;
    console.log(`Maior ${maior}, Menor ${menor}`);
  }
}
Saber(21, 3);

// continuação

var p1 = 80.4;
var p2 = 79.99;
var p3 = 100.5;

if (p1 < p2 && p1 > p3) {
  console.log('P1 é mais barato');
} else if (p2 < p1 && p2 < p3) {
  console.log('P2 é mais barato');
} else if (p3 < p1 && p3 < p2) {
  console.log('P3 é mais barato');
}

