
function test (param1, param2 = 'padrao'){
    if(param2 === 'padrao'){
        //code
    }
    console.log(param1);
    console.log(param2);
}

test('valor');

function testWithThreeParams (param1 = 'one', param2 = 'two', param3 = 'three'){
    if(param1 === 'one'){
        //code
    }
    console.log(param1);
    console.log(param2);
    console.log(param3);
}

testWithThreeParams();
testWithThreeParams('first');

function testWithBoolean(param1 = 'Default Value', isValid = true){
    console.log(param1);
    console.log(isValid);
}

testWithBoolean(1, false);
testWithBoolean();