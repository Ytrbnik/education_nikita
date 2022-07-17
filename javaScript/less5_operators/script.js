"use strict";


let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(5%2);

console.log(2*4 == '8');
console.log(2*4 === '8');

// && работет с двумя или более являються правдивыми выражениями
// || или рабтает когда один из вариантов будет правдивым

const isChecked = false,
      isClose = false;

// console.log(isChecked && isClose);
console.log(isChecked || !isClose);