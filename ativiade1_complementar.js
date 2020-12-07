maiorNumero();
function maiorNumero() {
  let n1 = 33;
  let n2 = 612;
  let n3 = 107;
  let maior = undefined;

  if (n1 >= n2 && n1 >= n3) {
    maior = n1;
    console.log(`${maior}`);
  } else if (n2 >= n1 && n2 >= n3) {
    maior = n2;
    console.log(`${maior}`);
  } else {
    maior = n3;
    console.log(`${maior}`);
  }
}
