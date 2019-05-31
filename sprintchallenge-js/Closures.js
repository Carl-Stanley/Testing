// Closures Review.  
// Closure function accessing item outside of function, but not visa versa. 

// example 1 

const foo = 'bar'

function returnFoo () {

    return foo;

}

returnFoo();

