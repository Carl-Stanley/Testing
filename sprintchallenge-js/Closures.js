// Closures Review.  
// Closure function accessing item outside of function, but not visa versa. 
// Items within can reach outside, but items outside cannot access inside elements. 
// example 1 
// Closures allow holding onto memory or other events for future refefence. 
const foo = 'bar'

function returnFoo () {

    return foo;

}

console.log(returnFoo());


// Explample 2 

const lastName = 'Bond';
function greet() {
    
    const firstName = 'James';
    const reply = `The name's ${firstName} ${lastName}.`;
    return reply;

}

console.log(greet());

// Codepen example 
// Counter function holds onto imcrmented value, stores in memory. 
const counter = ()  => {
    // Return a function that when invoked increments and returns a counter variable. 
    // example: const  newCounter = counter();
    // newCounter(); // 1
    // newCounter(); // 2

    let count = 0;
    return function() {
        
        //count = count + 1;

        return ++count;
    }


}

const newCounter = counter();

console.log(newCounter());

console.log(newCounter());

console.log(newCounter());
