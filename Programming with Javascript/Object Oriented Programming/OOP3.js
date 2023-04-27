//Creating classes

/*
class Train {
    constructor(color, lightsOn) {//the constructor acts as function and the parameter is inside 
        //the opening and closing parenthesis
        this.color = color;//this keyword represent the future objevt instance of the train class
        this.lightsOn = lightsOn;
    }
}
        
        var myFirstTrain = new Train("red", false);
        var mySecondTrain = new Train("blue", false);
        var myThirdTrain = new Train("blue", false);
        console.log(myFirstTrain);
    */


        //We can also add methods to classes and these methods will then be shared by all future instance 
        //objects of my train class

        class Train {
            constructor(color, lightsOn) {
                this.color = color;
                this.lightsOn = lightsOn;
            }
            toggleLights() {
                this.lightsOn = !this.lightsOn;
            }
            lightsStatus() {
                console.log('Lights on?', this.lightsOn);
            }
            getSelf() {
                console.log(this);
            }
            getPrototype() {
                var proto = Object.getPrototypeOf(this);
                console.log(proto);
            }
        
        }
        var train1 = new Train("red", false);
        var train2 = new Train("blue", false);
        var train3 = new Train("blue", false);
        var train4 = new Train("red", false);


console.log (train3);




class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}


//BUILDING OOP QUIZ

// Task 1: Code a Person class
class Person {
    constructor(name ="Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class

class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = 10;
    }
    goToWork() {
        this.xp += 10;
    }
}


// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}

console.log(intern())
console.log(manager())