'use strict';
//Ejercicios repaso clase 14

// 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

let yourName = prompt('¿Cómo te llamas?');
let age = parseInt(prompt('¿Cuantos años tienes?'));

console.log(`Hola ${yourName}, tienes ${age} años y el año que viene tendrás ${age + 1} años`);
