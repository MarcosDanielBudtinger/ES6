
function test(){
    //eleva o contexto da variavel a e posso utilizar do
    //do if para baixo sem problema
    //como se o a fosse declarado aqui em cima do if
    if(1 < 2){
        var a = 'valor';
    }
    console.log(a);
}

let a = 'var_com_let';

function testWithLet(){
    if (1 < 2){
        let b = 10;
    }
    //aqui não imprime o b porque não esta no mesmo contexto
    console.log(b);
}

//utilizando const
//não altera o valor
const c = 50;

const pessoa = { name: 'Marcos Danie', age: 28};

console.log(pessoa.name);
"Marcos Danie"
pessoa.name = 'Marcos Daniel Budtinger' 
"Marcos Daniel Budtinger"
console.log(pessoa.name);
"Marcos Daniel Budtinger"
console.log(pessoa.age);
28

for(let i = 1; i <= 10; i++){
    console.log(i);
}
