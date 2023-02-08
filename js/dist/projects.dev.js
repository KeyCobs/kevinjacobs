"use strict";

function SearchAnimal() {
  var input = document.getElementById('searchProject').value;
  input = input.toLowerCase();
  var x = document.getElementsByClassName('b-game-card'); //classNames = x[0].className;
  //classNames = classNames.replace('b-game-card',''); // Removeing first part of the class

  for (var i = 0; i < x.length; i++) {
    classString = x[i].className;
    console.log(classString);
    classString = classString.replace('b-game-card', '');

    if (!classString.toLowerCase().includes(input)) {
      x[i].style.display = 'none';
    } else {
      x[i].style.display = 'list-item';
    }
  }
}

console.log('Hello world');