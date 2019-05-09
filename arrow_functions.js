

let array = [1,2,3,4,5,6];

//let newArray = array.map(function (value){
//    return value * 10;
//});

//with one parameter with implicit return
let newArray = array.map(value => value * 10);

for(let [index, value] of newArray.entries()){
    console.log(index, value);
}

//console.log(newArray);

//with more one parameter but with implicit return 
let otherArray = array.map((value, index) => value * 10 );

console.log(otherArray);

//with more one parameter and explicit return if want other operations
//with values
let other = array.map((value, index) => {
    return value * 10;
});

console.log(other);

//example ternari expression

other.map(value => value > 10 ? 0 : 2);

//define function with variable
let variable = (param1, param2) => param1 + param2;

//with setTimeOut
setTimeout(() => {
    //code
},1000);

setTimeout(() => execucao, 1000);