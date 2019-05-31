// The This keyword. 

//Principle 1: Window/Global Object Binding 
//When in the global scope, the value of “this” will be the window/console Object;

function sayName(name) {
  console.log(this);
  return name;
}
sayName("D'Artagnan");

// Principle 2: Implicit Binding 

// Whenever a function is called by a preceding dot, the object before that dot is this.

const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};

myObj.sayHello('Ryan');

// Principle 3: New binding  

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

  // Principle 4: Explicit binding 
 // Whenever JavaScript’s call,apply or bind method is used, this is explicitly defined.

 jerry.speak.call(newman);
 newman.speak.apply(jerry);
 jerry.speak.bind(newman);

 
