//правила и типы названия переменных
// bad
const a = 5000;
const b = 4000;

////

console.log("Ширина кузова автомобиля: " + a + ', длинна: ' + b);

// ok
const width = 5000;
const Length = 4000;

////

console.log("Ширина кузова автомобиля: " + a + ', длинна: ' + b);


// good
const vehiclBodyWidth = 5000;
const vehiclBodyLength = 4000;

////

console.log("Ширина кузова автомобиля: " + vehiclBodyWidth + ', длинна: ' + vehiclBodyLength);

// ['vrvrvr', 'asdasdasda', 'asss'].map(a => )

// Request
// data
// Response

// snake_case
//Один из вариантов названия папок и файлов

// UPPER_SNAKE_CASE
//оБОЗНАЧАЮТ ТО ЧТО ХОТЯТ ВИДЕТЬ В ВИДЕ КОНСТАНТ

const COLOR_RED ='#F00';

//так же константы
const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
//ЗДЕСЬ БУДЕТ ВАШ КЛЮЧЬ, ЭТОТ КЛЮЧЬ МОЖЕТ НЕ РАБОТАТЬ
const _apiKey = 'apikey=dsld,99adasdlasd0-asda';


//Kebab-case
//Название папок и файлов

//PascalCase
//Для навзания класов в js
