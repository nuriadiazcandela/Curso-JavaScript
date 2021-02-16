'use strict';

// 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad

let number = parseInt(prompt('Introduce un número'));
let divisores = 0;

if (number === 1) console.log('El número no es válido');
else {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      console.log(`El ${number} no es primo`);
      divisores++;
      break;
    }
  }
}
if (divisores === 0) console.log(`El ${number} es primo`);
