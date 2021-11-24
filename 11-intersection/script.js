/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    arrRez = [];
        for (i = 0; i < arr1.length; i++){
            if (arr2.includes(arr1[i])) {
                arrRez.push(arr1[i]);
            };
            for (j = 0; j<arrRez.length; j++) {
                if ((arrRez[i] == arrRez[j]) && (i!==j)) {
                    arrRez.splice(i, 1);
                }
            }
        };
    return arrRez;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []