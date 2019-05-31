
// Window Bounded
function sayHello () {

    console.log(this);

}

sayHello();

// Implicit. Blinding 
let obj1 = {

    tellMeTheContext: function () {

        console.log(this);

    }

}

obj1.tellMeTheContext();4

// Explicit Binding .call .apply .bind
// .call comma seperated items - call takes args. 
// .apply used for arrays. array of items. Takes context and an array of arguments. 
// .bind // WIll bind that function. 

sayHello.call(obj1);

sayHello.apply(obj1,["carl","Stanley"]);

let newlyBoundFunc = sayHello.bind(obj1);

