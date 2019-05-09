let first_name = 'Marcos';
let last_name = 'Daniel';

//let obj = {
//    first_name: first_name,
//    last_name: last_name
//}
//Attributing WITH ES6
let obj = {
    first_name,
    last_name,
    method(param1, param2){

    }
}

function funcao({first_name, last_name}){
    console.log(first_name, last_name);
}

funcao(obj);