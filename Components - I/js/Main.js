
/*
const buttons = document.querySelectorAll('.button');

class Button {
  constructor(element){
    this.element = element;
    this.element.addEventListener('click', () => { this.buttonClick() });
  }
  buttonClick(event){
    //console.log('button clicked!');
    alert('Mouse attacked me!');
  } 
}
*/


const btn1 = document.getElementsByClassName("button")[0];
const btn2 = document.getElementsByClassName("button")[1];
const btn3 = document.getElementsByClassName("button")[2];
const btn4 = document.getElementsByClassName("button")[3];

btn1.addEventListener('mouseover',function(event){ 

    alert('Mouse attacked me!');

});

// Double Click 
btn2.addEventListener('dblclick',function(event){ 

    alert('You double clicked me!');

});

// Click 
btn3.addEventListener('click',function(event){ 

    alert('You clicked me!');

});

// Click 
btn4.addEventListener('click',function(event){ 

  alert('You clicked me!');

});

