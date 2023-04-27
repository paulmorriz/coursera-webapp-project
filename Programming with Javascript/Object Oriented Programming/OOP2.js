//inheritance ex

var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
} //var bird adalah prototypenya/base codenya yang akan menginherit properties

var eagle1 = Object.create(bird); //ini adalah object create method di mana prototype dipass ke var eagle1
console.log ("eagle1: ", eagle1);

console.log ("eagle1 has wings:", eagle1.hasWings);
console.log ("eagle1 can fly:", eagle1.canFly);
console.log ("eagle1 has feathers:", eagle1.hasFeathers);

var eagle2 = Object.create(bird); 
//Because I ran the object .create method on it 
//and I save everything to the eagle2 variable. 
//It's important to understand that the eagle2 object 
//also has access to the property stored on the bird object as its prototype.
console.log("eagle2 has wings:", eagle2.hasWings);

var penguin1 = Object.create(bird);
penguin1.canFLy = false; //di sini penguin tidak bisa terbang tapi tidak affect prototype/base code
//atau eagle1 dan eagle2
console.log("penguin1:", penguin1);
console.log("penguin1 has feathers:", penguin1.hasFeathers);
console.log("penguin1 can fly:", penguin1.canFly);

//walaupun Object.create() method sebagai constructor bisa dipakai untuk inheritance
//alangkah baiknya untuk kasus kompleks menggunakan class syntax