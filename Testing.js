// Testing JS 3
/*
function sayName(name) {

    console.log(this);
    return name;


}
*/


//sayName("Carl");

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log('${this.greeting} my name is ${name}');
        console.log(this);
    }

};

myObj.sayHello('Carl');