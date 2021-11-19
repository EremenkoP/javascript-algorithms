/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    rez = str.toLowerCase().split(' ');
    for (let i = 0; i < rez.length; i++) {
      rez[i] = rez[i].slice(0,1).toUpperCase() + rez[i].slice(1);
    }
  return rez.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"