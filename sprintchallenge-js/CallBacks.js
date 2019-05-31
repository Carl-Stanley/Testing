// Callbacks Reviews
// Demonstrate the proper use of a callback funtion by passing a function to another function as a parameter. 
// Functions can be passed as parameters to another function.. 

// Example 1

const functionFeeder = function(callback){
    callback('Hello from inside the Function Feeder');
};

functionFeeder(function(greeting){
    console.log(greeting);
});

// Example 2 

function sayHello(name) {
    console.log(`Hello, ${name}`);
}

function callSayHellowWithLars(callback) {
    const innerName = 'Lars';
    callback(innerName);
} 

callSayHellowWithLars(sayHello);

// Example 3 

// Example as a for loop logging out items in an array 

const elements = ['earth','wind','fire','water'];
const elements1 = ['earth1','wind2','fire3','water4'];
for(i = 0; i < elements.length; i++) {

    console.log(elements[i]);

}

// As a callback function. 

const newforEach = (list,callback) => {

    for(let i = 0; i < list.length; i++){

        callback(list[i],i)

    }

};

/* Orginal way 
newforEach(elements, function(item, index) {
    console.log(item,index);
});

newforEach(elements1, function(item, index) {
    console.log(item,index);
});

*/

// new Interator way.  

const iterator = function(item,index) {
    console.log(item,index);
} 

newforEach(elements,iterator);
newforEach(elements,iterator);

function showFirst(array,callback) {
    callback(array[0]); 
}

function showLength(list,cb) {
    cb(list.length);
}

showFirst(elements,(firstItem) => {
    console.log(firstItem)
})

showLength(elements, (lengthOfList) => {
    console.log(lengthOfList);
})

