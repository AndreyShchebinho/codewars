// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
// Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
// Верните свой ответ в виде числа.

function sumMix(x){
let sum = 0;
for (let i = 0; i < x.length; i++) {
    sum += Number(x[i])
}
return sum;
}

console.log(sumMix(['3', 5, 8, '1']));



