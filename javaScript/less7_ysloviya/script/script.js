"use strict";

if (4 == 9) {
    console.log('OK!');
} else  {
    console.log('Error!');
}


/*
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

// тернарный оператор

(num === 50) ? console.log('Ok!') : console.log('Error');
*/

const num =50;

switch (num) {
    case 49:
        console.log('Неверно(');
        break;
    case 100:
        console.log('Неверно(');
        break;
    case 51:
        console.log('В точку!');
        break;
    default:
        console.log('Попробуй еще');
        break;
}

//Логические операторы
/*
const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Я сыт!');
}
*/

/*
const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries );

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'asdasdasd');

if (hamburger === 3 && cola === 1 && fries) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим!');
}
*/

const hamburger = 3;
const fries = 3;
const cola = 0;
const naggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && naggets) {
    console.log('Все Довольны!');
} else {
    console.log('Мы уходим!');
}

console.log(hamburger === 3 && cola === 2);
console.log(fries === 3 && naggets);

console.log(hamburger || cola || fries);

let sameReport, johnreport, alexReport, mariaReport = 'Done';

console.log(sameReport || johnreport || alexReport || mariaReport);

console.log(!0);


console.log( 5 === 5 && 3 > 1 || 5);