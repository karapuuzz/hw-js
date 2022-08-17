// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let ten = [1, 3, 5, 7, 9, true, false, "okten", "top", "js"]
console.log(ten)
console.log(ten[0])
console.log(ten[1])
console.log(ten[2])
console.log(ten[3])
console.log(ten[4])
console.log(ten[5])
console.log(ten[6])
console.log(ten[7])
console.log(ten[8])
console.log(ten[9])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let firstbook = {
    title: "three little pig",
    pageCount: 20,
    genre: "tale"
}
let secondbook = {
    title: "cinderella",
    pageCount: 64,
    genre: "tale"
}
let thirdbook = {
    title: "Peter pan",
    pageCount: 72,
    genre: "tale"
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book1 = {
    title: "three little pig",
    pageCount: 20,
    genre: "tale",
    authors: [
        {
            name: 'James',
            age: 43
        }
    ]
}
let book2 = {
    title: "cinderella",
    pageCount: 64,
    genre: "tale",
    authors: [
        {
            name: 'Brothers Grimm',
            age: 38
        }
    ]

}
let book3 = {
    title: "Peter pan",
    pageCount: 72,
    genre: "tale",
    authors: [
        {
            name: 'James',
            age: 51
        }
    ]

}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'vasya', username: 'vasyatop123', password: '12345678'},
    {name: 'kolya', username: '$kolyaboss$', password: 'kolya1999'},
    {name: 'petya', username: 'petro228', password: '0987654321'},
    {name: 'max', username: 'oilmax', password: '123max45'},
    {name: 'sasha', username: 's_a_s_h_a', password: 'alex5678'},
    {name: 'olya', username: 'olgapolyakova', password: 'olya2019'},
    {name: 'masha', username: 'mariakotik', password: '1234567890'},
    {name: 'anna', username: 'anytik', password: '11111111'},
    {name: 'tanya', username: 'tanos', password: '11223344'},
    {name: 'oksana', username: 'okgoogle', password: '34567890'},
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);