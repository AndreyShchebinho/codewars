// Terminal game move function
// In this game, the hero moves from left to right. 
// The player rolls the die and moves the number of spaces indicated by the die two times.

// Create a function for the terminal game that takes the current 
// position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

// Функция перемещения терминала в игре
// В этой игре герой движется слева направо. Игрок бросает кубик и дважды перемещает 
// указанное на кубике число клеток.

// Создайте функцию для терминальной игры, которая принимает текущую позицию героя и делает бросок (1-6) и 
// возвращает новую позицию.

// Пример:
// move(3, 6) должно равняться 15

function move (position, roll) {
  return position + roll * 2;
}

console.log(move(3, 6));

