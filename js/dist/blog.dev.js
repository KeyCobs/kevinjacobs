"use strict";

document.addEventListener('click', function (e) {
  var elemId = e;

  if (elemId.srcElement.className != '') {
    console.log(elemId.srcElement.className);
    console.log(e);
    var property = document.getElementById(elemId.target.id);
    property.style.left = "50px";
  }
});