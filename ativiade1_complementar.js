function maiorNumero(n1, n2, n3) {
  let maior = undefined;

  if (n1 >= n2 && n1 >= n3) {
    return (maior = n1);
  } else if (n2 >= n1 && n2 >= n3) {
    return (maior = n2);
  } else {
    return (maior = n3);
  }
}
console.log(maiorNumero(11, 55, 6))
