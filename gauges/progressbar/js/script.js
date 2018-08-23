function move() {
  var elem = document.getElementById("myBar");   
  var width = 10;                   //value of the initial progress
  var id = setInterval(frame, 50); //speed of the progress
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}