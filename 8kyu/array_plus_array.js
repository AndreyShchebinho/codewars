// I'm new to coding and now I want to get the sum of two arrays... 
// Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// Я новичок в программировании и теперь хочу получить сумму двух массивов... 
// Фактически сумму всех их элементов. Я буду признателен за вашу помощь.
// P.S. Каждый массив содержит только целые числа. Выходные данные тоже являются числом.

function arrayPlusArray(arr1, arr2) {
    let sum1 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i]
    }
    let sum2 = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i]
    }
    return sum1 + sum2;
}   

console.log(arrayPlusArray([2, 3, 5], [1, 2, 6]));


// function sumMix(x){
// let sum = 0;
// for (let i = 0; i < x.length; i++) {
//     sum += Number(x[i])
// }
// return sum;
// }

// console.log(sumMix(['3', 5, 8, '1']));