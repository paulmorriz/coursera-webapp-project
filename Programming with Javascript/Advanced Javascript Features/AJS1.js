//Difference between For Of Loops and For in Loops and Objects
const car = {
    engine:true,
    steering: true,
    speed: "slow",
}
const sportsCar = Object.create(car);//pakai object create(car) supaya
//baru si sportsCar ini inherit semua properti dari car
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log ("------- for-in is unreliable -----");
for (prop in sportsCar) {
    console.log (prop);
}// kalau pakai for in tidak reliable karena dia akan iterating/looping 
//object dan semua prototypenya padahal tujuan kita hanya 
//properti obyek sportsCar  bukan properti car keseluruhan

console.log ("Iterating over objects and its prototype!");

console.log('-------for-of is reliable ------');
for (prop of Object.keys(sportsCar)) {
    console.log (prop + ": " + sportsCar[prop]);
}

console.log("Iteraring over object's own properties only"); 
//kalau pakai for in akan ditampilkan properti obyek sportscar saja
//tapi jangan lupa kita harus pakai built in method Object.keys




