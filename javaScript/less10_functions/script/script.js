"use strict";

let num =20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World!") ;
console.log(num);
/*
function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 5));
console.log(calc(6, 9));
console.log(calc(2, 7));
*/
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log("Hello");
};

logger();


// const calc = (a, b) => a + b;
const alc = (a, b) => {
    console.log('1');
    return a + b;
};

//ДОПОЛНИТЕЛЬНО

/*
const usdCurr = 35;
const eurCurr = 36;

function convert(amount, curr) {
    console.log(curr * amount);
}
convert(600, usdCurr);
convert(600, eurCurr);
*/

const usdCurr = 35;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}
const res = convert(600, usdCurr);
promotion(res);

function test() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) { return; }
    }
    console.log('done');
}

test();

/*function doNothing() {};
console.log(doNothing() === undefined);
*/