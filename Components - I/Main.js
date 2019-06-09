const buttons = document.querySelectorAll('.button');
class Button {
  constructor(element){
    this.element = element;
    this.element.addEventListener('click', () => { this.buttonClick() });
  }
  buttonClick(event){
    console.log('button clicked!');
  } 
}
