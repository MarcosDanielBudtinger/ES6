
let interpolationTest = 'Text the example';

console.log(interpolationTest);

var textOne = `
    <p>Test with interpolation - Text One</p>
    <p>Test with interpolation - Text One</p>
`+interpolationTest;

console.log(textOne);

var textTwo = `
    <p>Test with interpolation - Text Two</p>
    <p>Test with interpolation - Text two
        `+interpolationTest+`</p>
`;

console.log(textTwo);

//With ES6
let textThree = `
    <p>Test with interpolation - - Text Three</p>
    ${interpolationTest}
    <p>Test with interpolation - Text Three</p>
`;

console.log(textThree);

let sobrenome = `Budtinger`;

let nome = `Marcos Daniel ${sobrenome}`;

console.log(nome);