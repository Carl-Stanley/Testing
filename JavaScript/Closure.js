// Closure 
// Definition - A closure is the local variables for a function, kept alive after 
// the function has returned. 
// Closure is when a function isable to remember as access its lexical scope, 
// even when that function is executing outside of its lexical scope. 
// Closely related to scope.

var funct = function funct () {

    var a = 2,
    b = 3;

        
    var funct2 = function funct2() {

        console.log(a + b);
        
    };
    
    setTimeout(funct2,1000);
}



funct();


//funct3();