// - Є змінна х, якій ви надаєте довільне числове значення.
let x = +prompt('Довільне цифрове значення (але не 0)')
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Не вірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Час (від 0 до 59)')
if (time >= 0 && time < 15) {
    console.log('1 частина')
} else if (time >= 15 && time < 30) {
    console.log('2 частина')
} else if (time >= 30 && time < 45) {
    console.log('3 частина')
} else if (time >= 45 && time <= 59) {
    console.log('4 частина')
} else {
    console.log('???')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Дата')
if (day >= 1 && day < 11) {
    console.log('1 декада')
} else if (day >= 11 && day < 21) {
    console.log('2 декада')
} else if (day >= 21 && day <= 31) {
    console.log('3 декада')
} else {
    console.log('???')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = prompt('Порядковий номер дня тижня')
switch (week) {
    case "1":
        console.log('monday')
        break;
    case "2":
        console.log('tuesday')
        break;
    case "3":
        console.log('wednesday')
        break;
    case "4":
        console.log('thursday')
        break;

    case "5":
        console.log('friday')
        break;
    case "6":
        console.log('saturday')
        break;
    case "7":
        console.log('sunday')
        break;
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let first = +prompt('Перше число')
let second = +prompt('Друге число')
if (first > second) {
    console.log(first)
} else if (second > first) {
    console.log(second)
} else {
    console.log('Числа однакові')
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let xf = NaN || 'Default';
console.log(xf)