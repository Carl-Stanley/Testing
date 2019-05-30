// Functions Review

// Standard Function 
// Hoisted. 
function add(num1, num2){

    return num1 + num2;

}

console.log(add(1,2));


// Function Expression 
// Not hoisted 
let multiply = function(num1,num2){

    return num1 * num2;

}

console.log(multiply(1,4));

// Arrow Functions. Function expressions with a different syntax. 
// Non Binding This keyword
// Don't use for Event Handlers, obj meth, Prototype meth 


let subtract = (num1,num2) => {

    return num1 -num2;
}

console.log(subtract(5,4));

// Can be shortened to 
// let subtract = (num1,num2) => return num1 - num2;

// Imediately invoked function expression. 

let talk = (function(){
    return "I was invoked immediately!";
})(); 

//console.log(talk()); won't work

console.log(talk);