// Array Methods Review
// .map .reduce .filter

// .map 
/* 

returns a new array of elements. 
calls back each element, index and returns each in turn. 
Calls back each element, index and returns each in turn. 
used for manipulating or reshaping data with altering array. 

*/

// .map example. 
const data = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
  ];

// Give as an array of objects of only city and state info. 

// Vanilla JS way. 

const cityStates = [];
for(let i = 0; i < data.length; i++) {
  let mappedObj = {};
  mappedObj.city = data[i].city;
  mappedObj.state = data[i].state;
  cityStates.push(mappedObj);
  mappedObj = {};
}

// .Map way 


const mapCityStates = data.map((state) => {

    return{'city': state.city,'state': state.state};

});

console.log(mapCityStates);

// .Filter - returns a new array of elements. filters based upon a condition. 

const filterCityStates = data.filter((state) => {

    return state.population >= 650000;

});

console.log(filterCityStates);

//.reduce way - Add up entire value in data set.  

//.reduce returms a new array of elements. 
// takes a callback with is a reducer function. 
// Reducer function takes a previous value and a next value, known as accumulator and currentValue 
// Used for manipulating or reshaping data into a single value. 

const ReduceStatePopulations = data.reduce((total,state) => {

    return total += state.population;

}, 0);

console.log(ReduceStatePopulations);

