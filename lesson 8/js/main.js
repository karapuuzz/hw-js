// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     user1 = new User(1, 'vasya', 'asdsdf', 'asddfg@gmail.com', 1234567890),
//     user2 = new User(2, 'asddf', 'asdsdf', 'asddfg@gmail.com', 1234564550),
//     user3 = new User(3, 'qweqr', 'asdsdf', 'asddfg@gmail.com', 1435356690),
//     user4 = new User(4, 'dfhg', 'asdsdf', 'asddfg@gmail.com', 3534567890),
//     user5 = new User(5, 'vytjjh', 'asdsdf', 'asddfg@gmail.com', 1577345678),
//     user6 = new User(6, 'hjktmh', 'asdsdf', 'asddfg@gmail.com', 1234567890),
//     user7 = new User(7, 'oplik', 'asdsdf', 'asddfg@gmail.com', 1234567890),
//     user8 = new User(8, 'rbvhdm', 'asdsdf', 'asddfg@gmail.com', 1234567890),
//     user9 = new User(9, 'edfs', 'asdsdf', 'asddfg@gmail.com', 1234567890),
//     user10 = new User(10, 'aaa', 'asdsdf', 'asddfg@gmail.com', 1234567890)
// ]
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let idFilter = users.filter(user => user.id % 2 === 0)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// users.sort((u1, u2) => u1.id - u2.id)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [
//     client1 = new Client(1, 'kolya', 'ivanov', 'koliv@gmail.com', 380687426589, ['chips', 'beer']),
//     client2 = new Client(2, 'ivan', 'petrov', 'ivpetrov@gmail.com', 380687438958, ['milk']),
//     client3 = new Client(3, 'petya', 'shevchuk', 'petya@gmail.com', 380687483506, ['cheese', 'bread', 'candy']),
//     client4 = new Client(4, 'anna', 'mykhailenko', 'annamyk@gmail.com', 380602385489, ['potato', 'butter', 'macaroni', 'ketchup']),
//     client5 = new Client(5, 'dmytro', 'kovalenko', 'koval@gmail.com', 3809834526589, ['pepsi']),
//     client6 = new Client(6, 'olga', 'filipchuk', 'olgafilip@gmail.com', 380687426489, ['pizza', 'juice', 'cake']),
//     client7 = new Client(7, 'edik', 'nalyvaiko', 'ediko@gmail.com', 380687034589, ['beer', 'whisky', 'vodka']),
//     client8 = new Client(8, 'yana', 'stetsenko', 'ys@gmail.com', 380687424589, ['salad']),
//     client9 = new Client(9, 'yurii', 'dmitrov', 'yurko@gmail.com', 380687416589, ['chips', 'sausage']),
//     client10 = new Client(10, 'vasya', 'kokos', 'kokos@gmail.com', 380634426589, ['coconut', 'coconut milk', 'coconut butter'])
// ]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// clients.sort((c1, c2) => c1.order.length - c2.order.length)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         console.log(`
//         Модель: ${this.model}
//         Виробник: ${this.producer}
//         Рік випуску: ${this.year}
//         Максимальна швидкість: ${this.maxSpeed}
//         Об'єм двигуна: ${this.volume}
//         `)
//     };
//     this.increaseMaxSpeed = function(newSpeed) {
//         this.maxSpeed+=newSpeed
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//     this.addDriver = function (driver) {
//         this.driver=driver
//     };
// }
//
// let car1 = new Car('matiz', 'daewoo', 2006, 299, 0.8)
// console.log(car1);
// car1.drive()
// car1.changeYear(1999)
// car1.increaseMaxSpeed(1)
// car1.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume
    }
    drive () {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    };
    info () {
        return`
        Модель: ${this.model}
        Виробник: ${this.producer}
        Рік випуску: ${this.year}
        Максимальна швидкість: ${this.maxSpeed}
        Об'єм двигуна: ${this.volume}
        `
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed+=newSpeed
    };
    changeYear (newValue) {
        this.year = newValue
    };
    addDriver (driver) {
        this.driver=driver
    };
}
let car1 = new Car('matiz', 'daewoo', 2006, 299, 0.8)
console.log(car1.drive());
console.log(car1.info());
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Popelushka (name, age, footSize) {
    this.name=name;
    this.age=age;
    this.footSize=footSize;
}
let arr = [
    new Popelushka('Vika',21,38),
    new Popelushka('Tanya',20,40),
    new Popelushka('Ira',21,37),
    new Popelushka('Katya',19,38),
    new Popelushka('Zosia',22,40),
    new Popelushka('Nastya',23,41),
    new Popelushka('Oksana',21,39),
    new Popelushka('Olya',24,40),
    new Popelushka('Anya',22,42),
    new Popelushka('Masha',21,36)
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoeSize) {
        this.name=name
        this.age=age
        this.shoeSize=shoeSize
    }
}
let prince= new Prince('Dima', 26, 42)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const popelushka of arr) {
    if (popelushka.footSize === prince.shoeSize){
        console.log(`І жили вони з ${popelushka.name} довго та щасливо`)
        break
    } else {
        console.log('Попелюшку так і не знайшли')
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let popelyushkaFind=arr.find(popelushka=>popelushka.footSize===prince.shoeSize);
console.log(popelyushkaFind);