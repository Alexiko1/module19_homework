const object = {
    name: "Andrei",
    surname: "Ivanov",
    age: 18
  };
    function person(object){
    for (let key in object) {
    console.log(key);
    }
    for (let key in object) {
    console.log(object[key]);
    }
  }
  console.log(person(object));

//Задание 1. Требуется вывести в консоль ключи и объекты только собственных свойств. У Вас выводятся все свойства. 
// Не совсем понятно для меня задание, ниже еще три варианта, надеюсь какой-то из них правильный)

//Вариант 1

const userAndrei = function(a) {
  a = {Имя: 'Andrei',
  Фамилия: 'Ivanov',
  Возраст: '18'}
for (let key in a) {
  console.log(key+ ': ' + a[key]);
}
}
userAndrei();

//Вариант 2

const userAndrei = {
  Имя: 'Andrei',
  Фамилия: 'Ivanov',
  Возраст: '18'
 }
const key1 = 'Имя';
const key2 = 'Фамилия';
const key3 = 'Возраст';
console.log(`${key1}: ${userAndrei[key1]}, ${key2}: ${userAndrei[key2]}, ${key3}: ${userAndrei[key3]}`)

//Вариант 3

const userAndrei = {
  Имя: 'Andrei',
  Фамилия: 'Ivanov',
  Возраст: '18'
 }
Object.getOwnPropertyNames(userAndrei).forEach(function(val) {
  console.log(val + ': ' + userAndrei[val]);
});