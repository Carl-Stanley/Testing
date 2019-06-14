// Function Declaration - Hoisted 

function doSOmething() {

    console.log('Test1');

}



// Function Expression - Needed for callbacks. 
// Not hoisted
var something = function() {
    console.log('Test2');
}

doSOmething();

something();

 
