//Functional programming

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log (toPay);



//Object Oriented Programming example 1

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log ('totalPrice:', calculation);
    }
}

purchase1.totalPrice();

//Object Oriented Programming example 2

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log ('totalPrice:', calculation);
    }
}

purchase2.totalPrice();

//Object Oriented Programming using this keyword. Karena fungsi dan methodnya sama/identik di 
//Purchase1 dan Purchase2 kita bisa mengganti keyword Purchase1&2 dengan this / nama alias dari obyek
//ini akan return hasil yang sama >>improved reduced waste reusing existing code tapi
//ini tetap ada repetisi, oleh sebab itu kita butuh template untuk efisiensi dalam 
//kode pemrograman. Kita akan belajar menggunakan class


var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log ('totalPrice:', calculation);
    }
}

purchase1.totalPrice();


var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log ('totalPrice:', calculation);
    }
}

purchase2.totalPrice();

//Class

// class Car {
//     constructor (color, speed) {
//         this.color = color;
//         this.speed = speed;
//     } 
//     turboOn(){
//         console.log("turbo is on");
//     }
// }
// Car.turboOn();


//Inheritance, Encapsulation, Abstraction, Polymorphism

//I. Inheritance
// In essence, it's a very simple concept. It works like this: 
// There is a base class of a "thing".
// There is one or more sub-classes of "things" that inherit the properties 
// of the base class (sometimes also referred to as the "super-class")
// There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.
// Note that each sub-class inherits from its super-class. 
//In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.

// class Animal { /* ...class code here... */ }
// class Bird extends Animal { /* ...class code here... */ }
// class Eagle extends Bird { /* ...class code here... */ }


// There is a base class of "Animal".
// There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".
// Next, there is another class, inheriting from "Bird", and this class is "Eagle".
// Thus, in the above example, I'm modelling objects from the real world by constructing relationships between Animal, Bird, and Eagle. Each of them are separate classes, meaning, each of them are separate blueprints for specific object instances that can be constructed as needed.
// To setup the inheritance relation between classes in JavaScript, I can use the extends keyword, as in class B extends A.


//II. Encapsulation
//In the simplest terms, encapsulation has to do with making a code implementation 
//"hidden" from other users, 
//in the sense that they don't have to know how my code works in order to "consume" the code.

"abc".toUpperCase();

//I don't really need to worry or even waste time thinking about 
//how the toUpperCase() method works. All I want is to use it, since I know 
//it's available to me. Even if the underlying syntax - that is, 
//the implementation of the toUpperCase() method changes - 
//as long as it doesn't break my code, I don't have to worry about 
//what it does in the background, or even how it does it.


//III. Abstraction

// An abstraction is about extracting the concept of what you're trying to do, 
//rather than dealing with a specific manifestation of that concept. 

// Encapsulation is about you not having access to, or not being concerned with,
// how some implementation works internally.

//IV. Polymorphism

//Polymorphism is a word derived from the Greek language meaning "multiple forms". 
//An alternative translation might be: "something that can take on many shapes".



const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

console.log (bicycle.bell());
console.log (door.bell());

//At this point, one can conclude that 
//the exact same name of the method can have the exact opposite 
//intent, based on what object it is used for

//if we add this to the code above

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle);
ringTheBell(door);

//Now I have declared a ringTheBell() function. It accepts a thing parameter - 
//which I expect to be an object, 
//namely, either the bicycle object or the door object.
//You've now seen an example of 
//the exact same function producing different results, based on the context in which it is used.


//To reiterate, polymorphism is useful because it allows developers 
//to build objects that can have the exact same functionality, namely, 
//functions with the exact same name, which behave exactly the same. 
//However, at the same time, you can override some parts of the 
//shared functionality or even the complete functionality, 
//in some other parts of the OOP structure.

//Here's an example of polymorphism using classes in JavaScript:

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

//The Penguin and Eagle sub-classes both inherit from the Bird super-class. 
//The Eagle sub-class inherits the useWings() method from the Bird class, 
//but extends it with an additional console log. 
//The Penguin sub-class doesn't inherit the useWings() class - instead, 
//it has its own implementation, although the Penguin class itself does extend the Bird class.

//Constructor

new date();