let array = [1,2,3,4,5,6];

for(let i in array){
    console.log(i, array[i]);
}

let obj = {
    first_name: 'Marcos',
    last_name: 'Daniel'
};

for(let i in obj){
    console.log(obj);
    //console.log(i, obj[i]);
    //console
}

//with array more easy work with of
for(let value of array){
    console.log(value);
}

//example array the objects
let newArray = [
    {name: 'Marcos', age: 29}, {name: 'João', age: 30}, 
    {name: 'Maria', age: 19}, {name: 'Carlos', age:21}
];

for(let person of newArray){
    console.log(person);
    //console.log(obj);
}

//case need the index
for(let [index, value] of newArray.entries()){
    console.log(index, value);
}

let keys = Object.keys(obj);
for(let key of keys){
    console.log(obj[key]);
}

