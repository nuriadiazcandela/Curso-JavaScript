'use strict';

// 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

let number = parseInt(prompt('Introduce un número'));
let result = 1;

for (let i = number; i > 0; i--) {
  console.log(i);
  result *= i;
}
console.log(`El factorial de ${number} es ${result}`);
