// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleArea = (a, b) => a * b;
console.log(rectangleArea(10, 23));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (pi, r) => 2 * pi * r;
console.log(circleArea(3.14, prompt('radius?')))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (pi, r, h) => (2 * pi * r) * h
console.log(circleArea(3.14, prompt('radius?'), prompt('height?')))
// - створити функцію яка приймає масив та виводить кожен його елемент
arrayLoop([3, 2, 1]);

function arrayLoop(array) {
    for (const item of array) {
        console.log(item);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`)
}

paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea earum esse minus, nesciunt nisi porro quae quas ratione? Nihil, nostrum veritatis! Aperiam at dolorem explicabo facilis fugit inventore, sed. At!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(text) {
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
     </ul>`)
}

ul('функціональне ліжко')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let elements = [11,false,23,'c',]
function elementsPrint(arr){
    for (const item of arr) {
console.log(item)
    }
}
elementsPrint(elements)
// - створити функцію яка приймає масив об`єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об`єкту окремий блок.

let users = [
    {id: '813792', name: 'vasya', age: 31},
    {id: '103862', name: 'petya', age: 30},
    {id: '451937', name: 'kolya', age: 29}
];
function arrayPrint(usersArray) {
    for (const user of usersArray) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
arrayPrint(users)

// - створити функцію яка повертає найменьше число з масиву
let num = [2,56,34,-2,0]
function findMin(array) {
   let min=array[0]
    for (let item of array) {
        if (min>item){
            min=item
        }
    }
    return min
}

console.log(findMin(num));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumNumeric(array) {
    let res=0;
    for (let i=0; i< arguments.length; i++) {
        const num = arguments[i];
        res += num;
    }
    return res
}

console.log(sumNumeric(2,56,34,0));


