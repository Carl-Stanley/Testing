// Testing JS 3

// Global 

function sayName(name) {

    console.log(this);
    return name;


}

sayName("Carl");


// Implicit Binding 

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log('${this.greeting} my name is ${name}');
        console.log(this);
    }

};

myObj.sayHello('Carl');



//  New Binding 

function CordialPerson(greeter) {

    this.greeting = 'Hello';
    
    this.greeter = greeter;
    
    this.speak = function() {

        console.log(this.greeting + " " + this.greeter);
        
        console.log(this); // Referring to object details. 
    
    };

    
}

const jerry = new CordialPerson('Newman');

const newman = new CordialPerson('Jerry');

console.log('Implicit\n');

console.log('Jerry Speaks\n');
jerry.speak();
console.log('\n');
console.log('Newman Speaks\n');
newman.speak();
console.log('\n');

// explicit binding

console.log('explicit 1\n');

console.log('Jerry Speaks - Call Newman \n'); 
   jerry.speak.call(newman);
   console.log('\n');
console.log('Newman Speaks - Apply Jerry \n'); 
   newman.speak.apply(jerry);
   console.log('\n');
console.log('explicit 2\n');

console.log('Newman Speaks\n'); 
   newman.speak();
   console.log('\n');
console.log('Newman Speaks\n'); 
   jerry.speak();
   console.log('\n');

   