//api intl


let date = new Date();

//BCP 47
let out = new Intl.DateTimeFormat('pt-BR').format(date);
console.log(out);
let outTwo = new Intl.DateTimeFormat('en-US').format(date);
console.log(outTwo);

let outBRMonth = new Intl.DateTimeFormat('pt-BR', {month: 'long', day: 'numeric', year: 'numeric'}).format(date);
console.log(outBRMonth);

//reference
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat

let number = new Intl.NumberFormat('pt-BR').format(2.22);

console.log(number);

let numberTwo = new Intl.NumberFormat('pt-BR').format(2000.22);

console.log(numberTwo);

let numberThree = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(2000);
console.log(numberThree);
//out 2.000,00

let numberFour = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(2000.2);
console.log(numberFour);
//out 2.000,20

let numberSix = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(2000.3333333333);
console.log(numberSix);
//out 2.000,33

let currencyBR = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2, currency: 'BRL', style: 'currency'}).format(2000.3333333333);
console.log(currencyBR);
//out R$ 2.000,33

let currencyEUR = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2, currency: 'EUR', style: 'currency'}).format(2000.3333333333);
console.log(currencyEUR);
//out € 2.000,33

//Reference
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat