//door////////////////////////
//blink when the mouse is over the picture
function doorblinkover() { 
  var elem = document.getElementById("doorblinkingimg");   
  elem.classList.toggle("blink-image");
}

//stop blinking when mouse is not over the picture
function doorblinkout() {
  var elem = document.getElementById("doorblinkingimg");   
  elem.classList.toggle("blink-image");
}

//Doors///////////////
//blink when the mouse is over the picture
function flightsblinkover() { 
  var elem = document.getElementById("blinkingflight");   
  elem.classList.toggle("lightsblink-image");
}

//stop blinking when mouse is not over the picture
function flightsblinkout() {
  var elem = document.getElementById("blinkingflight");   
  elem.classList.toggle("lightsblink-image");
}

//blink when the mouse is over the picture
function blightsblinkover() { 
  var elem = document.getElementById("blinkingblight");   
  elem.classList.toggle("lightsblink-image");
}

//stop blinking when mouse is not over the picture
function blightsblinkout() {
  var elem = document.getElementById("blinkingblight");   
  elem.classList.toggle("lightsblink-image");
}