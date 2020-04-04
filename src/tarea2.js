/*
Ejercicio 1
Necesitamos buscar a la persona con menor edad en la familia.
La edad maxima es de 125
O sea, quién es el/la más joven de la familia.
Solo necesito saber la edad
La lista es [70, 50,4,3,2,1, 90, 80]
*/

let familiaLista = [70, 50, 4, 3, 2, 1, 90, 80];

let edadMinima = 125;

for (let edad of familiaLista) {
  if (edad < edadMinima) {
    edadMinima = edad;
  }
}

console.log("La persona con mejor edad tiene " + edadMinima);

/*
Ejercicio 2
Necesitamos saber si el número 30 existe en la lista
Si el número existe mostrar por consola: Eureka, existo.
Si el número no existe mostrar por consola: Doh!
La lista es [1, 30, 5, 8]
*/

let lista = [1, 30, 5, 8];

let existe = false;

for (let brillante of lista) {
  if (brillante == 30) {
    existe = true;
  }
}

if (existe) {
  console.log("Eureka, existo");
} else {
  console.log("Doh!");
}

/*
Ejercicio 3 (Solo si tienen tiempo y ganas)
Necesitamos saber cuantas veces se repite el número 5 en la lista.
Mostrar por consola cuantas veces en total aparece en la lista.
Si no aparece mostrar 0
La Lista es [10,5, 3, 5, 0, 5]
*/

let array = [10, 5, 3, 5, 0, 5];

let repite = 0;

for (let numero of array) {
  if (numero == 5) {
    repite = repite + 1;
  }
}

console.log("Se repite el numero 5 " + repite + " veces");
