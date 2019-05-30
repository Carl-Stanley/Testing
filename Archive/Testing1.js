// Class Person 
class Person {
    constructor(name,age,location){
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    } 
}


// Class Student
class Student extends Person {
    constructor(previousBackground,className,favSubjects) {
        super();
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listsSubjects() {

        console.log(this.favSubjects);

    }

    PRAssignment(student,subject) {

        console.log(`${student} has submitted a PR for ${subject}`);
    }

    sprintChallenge(student,subject) {

        console.log(`${student} has begun sprint challenge on ${subject}`);

    }

}

const fred = new Student({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  previousBackground: 'Bike Messenger',
  className: 'WebPT07',
  favSubjects: ['Video Gaming 101','Astronomy 101','JavaScript']
});

console.log(fred);
console.log(fred.name);