// Main 
import React, { Component } from 'react';

/* 
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
xmlhttp.open("GET", "http://localhost:3000/mainContent", true);
xmlhttp.send();

newFunction();
var urlMainContent =  'http://localhost:3000/mainContent';

fetch(urlMainContent)
.then(function(resp){
  return resp.json();
})
.then(function(data){
  console.log(data);
});

function newFunction() {
  "use strict";
}
*/

var urlMainContent =  'http://localhost:3000/mainContent';
//var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));

/**/