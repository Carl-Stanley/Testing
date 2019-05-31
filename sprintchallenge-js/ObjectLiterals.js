// Object Literals 

// Object example 

const objName = {
    name: "value"
}

//console.log(objName);

const person = {
    name: "John Doe",
    age: 25,
    location: "Merica",
    School: "Lambda",
    "code man": "XXX XXX XXXX"
}

/*
console.log(person);
console.log(person.School);
console.log(person.name);
console.log(person.age);
console.log(person.location);
*/
//Bracket notation - person for prop with spaces
//console.log(person["location"]);
//console.log(person["code man"]);
// MDN Objects https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// Object methods

const student = {
    name: "Jane",
    age: 24,
    location: "USA",
    study: function(topic){

        console.log(`${this.name} likes to study ${topic}`);
    }
}

// Dot notation on an object method. 
//student.study("Astronomy");
// bracket notation on an object method. 
//student['study']('Code');

// Create a method outside of an object. 

student.play = function(activity) {
    console.log(`${this.name} loves to ${activity}`);
}

//student.play("run");

// Object Properties 
//console.log(Object.entries(student));
//console.log(Object.entries(student)[1]);
//console.log(Object.keys(student));
//console.log(Object.values(student));