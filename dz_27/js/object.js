//Создать объект, описывающий автомобиль

let Zhiguli = {
	model: "VAZ-2101",
	year: "1988",
	"average speed": 50,
}

//Функция для вывода на экран информации об автомобиле;

function carInfo(x) {
	for (let key in x) {
		console.log(key);
		console.log(x[key]);
	}
}
carInfo(Zhiguli);

//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.

function getTripTime(x) {
	let s = +prompt('Введите расстояние: ', 0);
	let avtime = s / x["average speed"];
	let restTime = Math.floor(avtime / 4);
	let triptime = Math.floor(avtime + restTime);
	return alert(`Время преодоления ${s} км со средней скоростью ${x["average speed"]} км/ч равно ${triptime} ч`);
}
getTripTime(Zhiguli);

//2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

let firstFraction = {
	numerator: 35,
	denominator: 10,
}
let secondFraction = {
	numerator: 15,
	denominator: 10,
}

// Функция сложения 2-х объектов-дробей;

let fractionSum = (x, y) => (x.numerator / x.denominator) + (y.numerator / y.denominator);
console.log("fractionSum", fractionSum(firstFraction, secondFraction));

// Функция вычитания 2-х объектов-дробей;

let fractionSubtraction = (x, y) => (x.numerator / x.denominator) - (y.numerator / y.denominator);
console.log("fractionSubtraction", fractionSubtraction(firstFraction, secondFraction));

// Функция умножения 2-х объектов-дробей;

let fractionDivision = (x, y) => (x.numerator / x.denominator) / (y.numerator / y.denominator);
console.log("fractionDivision", fractionDivision(firstFraction, secondFraction));

// Функция деления 2-х объектов-дробей;

let fractionMultiply = (x, y) => (x.numerator / x.denominator) * (y.numerator / y.denominator);
console.log("fractionMultiply", fractionMultiply(firstFraction, secondFraction));

//Функция сокращения объекта-дроби:

function getReduction (x) {
	let n = x.numerator;
	let d = x.denominator;
	let result;
	for (let i = 2; i < n; i++) {
			if (n % i === 0 && d % i === 0) {
			x.numerator = x.numerator / i;
			console.log("x.numerator", x.numerator);
			x.denominator = x.denominator / i;
			console.log("x.denominator", x.denominator);
		}
	}
}

getReduction(firstFraction);
carInfo(firstFraction);

//3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

// Функция вывода времени на экран: 
let currentDate = new Date();
document.getElementById('block-1').innerHTML = currentDate;

// Функция изменения времени на переданное количество секунд:
let setSeconds = +prompt('Сколько секунд прибавить?', 0);
currentDate.setSeconds(currentDate.getSeconds() + setSeconds);
document.getElementById('block-2').innerHTML = `Увеличено на ${setSeconds} сек: ${currentDate}`;

// Функция изменения времени на переданное количество минут:
currentDate = new Date();
let setMinutes = +prompt('Сколько минут прибавить?', 0);
currentDate.setMinutes(currentDate.getMinutes() + setMinutes);
document.getElementById('block-3').innerHTML = `Увеличено на ${setMinutes} мин: ${currentDate}`;

// Функция изменения времени на переданное количество часов:
currentDate = new Date();
let setHours = +prompt('Сколько часов прибавить?', 0);
currentDate.setHours(currentDate.getHours() + setHours);
document.getElementById('block-4').innerHTML = `Увеличено на ${setHours} ч: ${currentDate}`;