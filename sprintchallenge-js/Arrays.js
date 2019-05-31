// Arrays Review
// Very fast at retrieving info. 
// methods in JS array prototype. 
// All Indexes in an array are numerical. 

var array1 = [1,2,3,4,5,6,7];


for(item in array1){
    console.log(array1[item]);
}



array1.push(10); // add item to end. 

for(item in array1){
    console.log(array1[item]);
}


array1.unshift(11); // add item to front. 

for(item in array1){
    console.log(array1[item]);
}

// Remove last items. 

array1.pop();

for(item in array1){
     console.log(array1[item]);
}


array1.shift(); // remove item from front of array

for(item in array1){
    console.log(array1[item]);
}

// Slice and Splice 

array1.splice(1,5); // remove item at index 1 and remove 5 items.

for(item in array1){
    console.log(array1[item]);
}

// update an item 

array1[0] = 9;

for(item in array1){
    console.log(array1[item]);
}



