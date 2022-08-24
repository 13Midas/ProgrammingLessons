
// - Объекты (Object)   ----------------------------------------------------------------

// Синтаксис

// Создание объекта

// let userInfo = new Object();  // синтаксис "конструктор объекта"
// let userInfo = {}; // синтаксис "литерал объекта"

/*
let myId = {
    name: 'Vitaliy', // Свойство объекта (состоит из Ключа(name:) и его Значения('Vitaliy') ) (Ключ еще называют Индентификатором или Именем свойства объкта)
    age: '33', // Последняя висячая запятая, используют для того чтоб быстро менять свойства объекта местами и не получать ошибку.
};

// для того чтоб получить весь объект или его значение пишем ниже:
console.log(myId); 
// или
console.log(myId.name);
*/


// Имена свойств

// Имена из двух и более слов

/*
let myId = {
    name: 'Vitaliy',
    age: 33,
    'like javascript': true,  // свойства состоящие из двух и более слов оборачиваем в кавычки
};

console.log(myId.name);
console.log(myId['like javascript']);
console.log(myId['name']); // такой синтаксис тоже имеет место быть.
*/


// Вычисляемое либо передаваемое имя

// Вычисляем имя
/*
let firstPart = 'likes';
let myId = {
    name: 'Vitaliy',
    age: 33,
    [firstPart + 'javascript']: true,
};
console.log(myId['likes javascript']);
*/

// еще вариант ниже:
/*let firstPart = 'likes';
let myId = {
    name: 'Vitaliy',
    age: 33,
    [firstPart]: true,
};
console.log(myId[firstPart]);
*/

/*
let firstPart = 'likes';
let myId = {
    name: 'Vitaliy',
    age: 33,
    [firstPart]: true,
};
console.log(myId[firstPart]);
// Преимущество квадратных скобок:
let key = 'name';
console.log(myId[key]);
// console.log(myId.key); этот синтаксис будет неверным.
*/

// Зарезервированные слова в именах: (мы не можем использовать специальные слова такие как:
// for, let, if, etc.), в свойствах объекта это возможно!
// Пример ниже:
/*
let myId = {
    let: 'Vitaliy',
    for: 33,
    0: 'someText', // 0 тоже самое что '0' 
};
console.log(myId.let);
console.log(myId.for);
console.log(myId[0]);
console.log(myId['0']);
*/


// Тип данных Symbol

// Создаем символ id с описанием (именем) 'id'
/*
let id = Symbol('id');
let myId = {
    name: 'Vitaliy',
    age: 33,
    [id]: 'Некое значение',
};
console.log(myId);
*/
// Основное применение символов:
// 1. "Скрытые" свойства объектов
//     Символьное свойство не появится в for..in
// 2. Использование системных символов
//    Symbol.iterator, Symbol.toPrimitive и т.д.




// - Объекты и методы массивов ---

// Keys
/*
let user = {
    name: 'John',
    profession: 'killer',
    salary: 10000,
};
console.log(user);


// Получаем Ключи (keys) из объекта

let keys = Object.keys(user); // Object.keys > Объект.метод(тот объект из которого нужно вытащить ключ)
console.log(keys);    // Получаем массив ключей.
*/

// Values
/*
let user = {
    name: 'John',
    profession: 'killer',
    salary: 10000,
};
console.log(user);

// Получаем Значение (values) из объекта

let values = Object.values(user);
console.log(values);   // Получаем массив значений.
*/

// Entries
// Получаем Свойства (Entries) из объекта
/*
let user = {
    name: 'John',
    age: 45,
    profession: 'killer',
    salary: 10000,
};

let entries = Object.entries(user);
console.log(entries);    // Получаем массив из нескольких массивов Свойств объекта.

entries.map(([index, item]) => console.log(index, item));
*/

// Добавляем свойства в объект
/*
let user ={
    name: 'John',
    age: 45,
    profession: 'killer',
    salary: 10000,
}

//user.passport = 'ab771318';  // добавляет свойство в объект
Object.defineProperty(user, 'passport', {   // добавляет свойство в объект но с возможностью вывода или скрытия в консоли
    value: 'ab771318',
    enumerable: true  // если false то выводиться в консоле не будет.
});

console.log(user);
*/


// -- Методы Объектов  ------------

// Копирование объектов
// 1)
/*
let someObj1 = {
    name: 'Snake',
};

// let newObj = someObj1; // копирует но неполноценно, так как изменив что-то в someObj1 изменения затронут так же newObj)

let newObj = Object.assign({}, someObj1); // копирует и создает независимый объект

console.log(newObj);

console.log(newObj === someObj1);  // проверяем равны ли они или независимы друг от дрга. если false то изменение someObj1 не приведет к изменению newObj.
*/

// 2)
/*
let someObj1 = {
    name: 'Snake',
};

let someObj2 = {
    future: 'Dragon',
}

let newObj = Object.assign({}, someObj1, someObj2); // совмещает оба объекта в один newObj.
//let newObj = Object.assign(someObj1, someObj2); // сделав так newObj будет равен someObj1, можно проверить такой записью: console.log(newObj === someObj1).

console.log(newObj);
*/

//  3) глубокое копирование (позволяет копировать объекты содержащие еще объекты и массивы)

let someObj1
