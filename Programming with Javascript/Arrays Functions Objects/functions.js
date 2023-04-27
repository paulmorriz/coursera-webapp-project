

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
    
}
house.windows =10;
console.log (house);


var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

var fruits = [];
fruits.push("apple");
fruits.push('pear');


fruits.pop();
console.log(fruits);

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

arrayBuilder('apple', 'pear', 'plum');

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var decimal =Math.random()
console.log(decimal);
console.log(decimal * 10);


var clothes = [];
clothes.push("T Shirt");
clothes.push("Blue Jeans");
clothes.push("Flannel");
clothes.push("Jacket");
clothes.push("Trucker Hat");
clothes.pop();
clothes.push("Hoodies");
console.log(clothes [2]);

var favcar = {}
favcar.color="silver";
favcar.convertible=true;
console.log(favcar)



var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);


var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

