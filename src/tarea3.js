/*
Escribir una función que se llame min y que 
devuelva o retorne el valor minimo entre dos 
numeros cualquiera. Ejemplo: minimo(5,3) = 3
*/

const min = (x, y) => {
  if (x < y) {
    return x;
  } else {
    return y;
  }
};

console.log(min(5, 3));

/*
Escribir una función que se llame cuadrado y que devuelve
 o retorne el cuadrado de un número. Ejemplo: cuadrado(6) = 36
*/

const cuadrado = x => {
  return x * x;
};

console.log(cuadrado(6));
