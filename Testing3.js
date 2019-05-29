// JS 3 Testing -- Classes

// Declare the class 

class Rectangle {
    constructor (height,width) {
        this.height = height;
        this.width = width;
    }
}

// Instantiate instance of class. 

const newRect = new Rectangle(400,800);

console.log(newRect.height + " " + newRect.width);


// Another Class Example



class Animal {
    constructor(name) {
        this.name = name;
        this.genus = "genus";
    }

    

    speak() {
        console.log(this.name + ' makes a noise');
    }
}

const Manimal = new Animal("hybrid");

Manimal.speak();

// Extend a class

class Dog extends Animal { // Entends keyword - Do will inherit all of class Animal's properties. 
    constructor(name) {
        super(name); // Super function binds Dog and Animal together. Formerly would use .call 
    } // Without Super it won't work 
    speak() {
        console.log(this.name + ' barks');
    }
}

const GermanShep = new Dog("Shepard");

GermanShep.speak();
console.log(GermanShep.genus);
