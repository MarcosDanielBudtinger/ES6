//with js
function funcao(param1, param2){
    var args = Array.prototype.slice.call(arguments, funcao.length);
    console.log(args);
}

funcao(1,2,3,4,5,6);

//WITH ES6
function funcWithEs6(param1, param2, ...otherParams){
    console.log(otherParams);
}

funcWithEs6(1,2,3,4,5,6);

//with arrays
let array1 = [1,2,3,4];

let array2 = [5,6,7,8, ...array1];

console.log(array2);

//work with strings
let name = 'Marcos Daniel';

let nameArray = [...name];
console.log(nameArray);
