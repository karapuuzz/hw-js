// - Знайти та вивести довижину настипних стрінгових значень
let str1 = 'hello world'
let str2 = 'lorem ipsum'
let str3 = 'javascript is cool'

let length = (x) => x.length
console.log(length(str1));
console.log(length(str2));
console.log(length(str3));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let UpperCase = (x) => x.toUpperCase();
console.log(UpperCase(str1));
console.log(UpperCase(str2));
console.log(UpperCase(str3));

// - Перевести до нижнього регістру настипні стрінгові значення
let UpStr1 = 'HELLO WORLD'
let LowerCase1 = UpStr1.toLowerCase()
console.log(LowerCase1);
let UpStr2 = 'LOREM IPSUM'
let LowerCase2 = UpStr2.toLowerCase()
console.log(LowerCase2);
let UpStr3 = 'JAVASCRIPT IS COOL'
let LowerCase3 = UpStr3.toLowerCase()
console.log(LowerCase3);

// - Є "брудна" стрінга. Почистити її від зайвих пробілів.

let dirtStr = ' dirty string   '
let cleanStr = dirtStr.substring(1, 13)
console.log(cleanStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let str = 'Ревуть воли як ясла повні';
let stringToArray = str.split(' ');
console.log(stringToArray);

// ['Ревуть', 'воли', 'як', 'ясла', 'повні']

//
// - є масив чисел  за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let numToStr = arr.map(value => String(value))
console.log(numToStr);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        nums.sort((num1, num2) => num1 - num2)
    }
    if (direction === 'descending') {
        nums.sort((num1, num2) => num2 - num1)
    }
}

sortNums(nums, 'ascending')
console.log(nums); // [3,11,21]
sortNums(nums, 'descending')
console.log(nums); // [21,11,3]

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(course => course.monthDuration > 4)
console.log(filter);


// описати колоду карт
let cards = [
    {cardSuit: 'clubs', value: 'Ace', color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'Jack', color: 'black'},
    {cardSuit: 'clubs', value: 'Queen', color: 'black'},
    {cardSuit: 'clubs', value: 'King', color: 'black'},

    {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
    {cardSuit: 'diamonds', value: 6, color: 'red'},
    {cardSuit: 'diamonds', value: 7, color: 'red'},
    {cardSuit: 'diamonds', value: 8, color: 'red'},
    {cardSuit: 'diamonds', value: 9, color: 'red'},
    {cardSuit: 'diamonds', value: 10, color: 'red'},
    {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'King', color: 'red'},

    {cardSuit: 'hearts', value: 'Ace', color: 'red'},
    {cardSuit: 'hearts', value: 6, color: 'red'},
    {cardSuit: 'hearts', value: 7, color: 'red'},
    {cardSuit: 'hearts', value: 8, color: 'red'},
    {cardSuit: 'hearts', value: 9, color: 'red'},
    {cardSuit: 'hearts', value: 10, color: 'red'},
    {cardSuit: 'hearts', value: 'Jack', color: 'red'},
    {cardSuit: 'hearts', value: 'Queen', color: 'red'},
    {cardSuit: 'hearts', value: 'King', color: 'red'},

    {cardSuit: 'spades', value: 'Ace', color: 'black'},
    {cardSuit: 'spades', value: 6, color: 'black'},
    {cardSuit: 'spades', value: 7, color: 'black'},
    {cardSuit: 'spades', value: 8, color: 'black'},
    {cardSuit: 'spades', value: 9, color: 'black'},
    {cardSuit: 'spades', value: 10, color: 'black'},
    {cardSuit: 'spades', value: 'Jack', color: 'black'},
    {cardSuit: 'spades', value: 'Queen', color: 'black'},
    {cardSuit: 'spades', value: 'King', color: 'black'},

];
// - знайти піковий туз
let spadeAce = cards.find(card => card.cardSuit === 'spades' && card.value === "Ace")
console.log(spadeAce);
// - всі шістки
let allSix = cards.filter(card => card.value === 6)
console.log(allSix);
// - всі червоні карти
let allRed = cards.filter(card => card.color === 'red')
console.log(allRed);
// - всі буби
let allDiamond = cards.filter(card => card.cardSuit === 'diamonds')
console.log(allSix);
// - всі трефи від 9 та більше
let allClubsUnderNine = cards.filter(card=> card.value >= 9 || card.value === 'Jack' || card.value === 'Queen' || card.value === 'King' || card.value === 'Ace' && card.cardSuit === 'clubs')
console.log(allClubsUnderNine);
//

//


//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }