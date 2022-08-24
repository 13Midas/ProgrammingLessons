//debugger
function testFunction() {
    const x = 5;
    const y = 10;
    console.log(x + y);
}

function hello() {
    console.log('hello');
    testFunction();
}

function testFunction2() {
    function correct() {
        console.log('it is correct');
    }
    correct();
    console.log('bye-bye');
}

hello();
testFunction2();
