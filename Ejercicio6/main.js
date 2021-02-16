'use strict';

// 6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

let sum = 0;
let cont = 0;

while (sum < 50) {
  sum += parseInt(prompt('Introduce un número para añadir a la suma'));
  cont++;
}
console.log(`La suma total es de ${sum}`);
console.log(`El total de número introducidos es: ${cont}`);
