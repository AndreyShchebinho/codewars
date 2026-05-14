    // Write a function that adds a named property to an object. It must be possible to set the property to a new value. 
    // If the property already exists on the object, and error should be thrown.
    // Напишите функцию, которая добавляет именованное свойство к объекту. 
    // Должна быть возможность установить для свойства новое значение. Если свойство уже существует в объекте, должна быть выдана ошибка.
    // Для решения этой задачи потребуется познакомиться с оператором throw. 
    // Он используется для генерации ошибок (исключений, exceptions). Понадобится подобная конструкция: throw new Error('Error message').

function addProperty(obj, prop, value) {
  // Проверяем, существует ли уже свойство в объекте (не унаследованное)
  if (Object.hasOwn(obj, prop)) {
    throw new Error(`Свойство "${prop}" уже существует в объекте`);
  }

  // Добавляем новое свойство с возможностью перезаписи
  obj[prop] = value;
}
