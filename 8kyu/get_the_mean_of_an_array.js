// It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
// All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

// Конец учебного года, роковой момент вашего школьного отчета. Необходимо рассчитать средние значения. 
// Все студенты приходят к вам и умоляют вычислить для них средний балл. Легкий ! Вам просто нужно написать сценарий.
// Возвращает среднее значение данного массива, округленное до ближайшего целого числа.
// Массив никогда не будет пустым.

function getAverage(marks){
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i]
  }
  return Math.floor(sum / marks.length)
}

console.log(getAverage([2, 2, 2, 7, 5]));

