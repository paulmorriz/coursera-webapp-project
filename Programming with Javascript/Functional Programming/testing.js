

let counter = 3;
function example() {
    console.log(counter);
    counter = counter -1;
    if (counter === 0) return;
    
}

example();


function myDay() {
    console.log('Morning');
    console.log('Afternoon');
    console.log('Evening');
    
}

myDay();


function getTotal(a,b) {
    return a+b  
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

getTotal ();



function getDistance(mph, h) {
    return mph*h
}
var mph = 60;
var h = 2;
var distance = getDistance (mph, h);

console.log(distance);


function addTwoNums (a, b) {
    console.log (a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() {return 42};

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())