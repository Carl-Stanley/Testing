// Constructors and Prototypes.


// Constructors are known as object creator functions. 
// Their purpose is to receive an Object and produce a new object. 
// Instantiated with new keyword. 
// .this becomes the object whiich will be returned by new. 



// example 1 - Constructor 

function Animal(object) {
    this.name = object.name;
} 

// example 2 - Constructor function

function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.speak = function () {
        return `Hello, my name is ${this.name}`;
    };
}

const fred = new Person({
    age: 32,
    name: 'Fred',
    homeTown: 'Bedrock'
})

console.log(fred.speak());
console.log(fred);

// The Object Prototype - The mechanism by which all objects can inherit properties from one another. 
// Allows one to deliberately modify an object's properties 
// Helps avoid memory problems. 
// Allows one to extend an object's properties to another object. 

// Origin Person renamed. 

function Person2(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    }

// Prototype 2
Person2.prototype.speak = function () {
    return `Hello, my name is ${this.name}`;
};

const freddy = new Person2({
    age: 32,
    name: 'Freddy',
    homeTown: 'Chicago'
})

console.log(freddy.speak());
console.log(freddy);

// Protoypal Inheritance. 


function Child(childAttributes) {
    Person.call(this.childAttributes); // Binding this to person
    this.isChild = childAttributes.isChild; // This will be a special attribute to child. 
}

Child.prototype = Object.create(Person.prototype);

console.log(Child);

// Errors out. 
/* 
const pebbles = new Child({
    age: 3,
    name: 'pebbles',
    homeTown: 'Bedrock'
});
*/
//console.log(pebbles);

// Example training kit. 
// fruit constructor type, name, isRipe, calories

function fruit(fruitAttributes){
    this.type = fruitAttributes.type;
    this.name = fruitAttributes.name;
    this.isRipe = fruitAttributes.isRipe;
    this.calories = fruitAttributes.calories;
}

banana = new fruit({
    type: 'tree',
    name: 'banana',
    isRipe: true,
    calories: 100
});

console.log(banana);

fruit.prototype.shipped =  function(destination) {
    console.log(`${this.name} was shipped via ${destination}.`)
};

fruit.prototype.calculateCals = function() {
    console.log(`Calories in ${this.name} are ${this.calories * 200}`);
};

console.log(banana.shipped('Hawaii'));
console.log(banana.calculateCals());