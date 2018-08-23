
$(document).ready(function(){
	
    /* Blink each one of the LEDs when the user hover over any of them */
    $("#led1").hover(function () {
      $("#led1").toggleClass("playme");
    });

    $("#led2").hover(function () {
      $("#led2").toggleClass("playme");
    });
    $("#led3").hover(function () {
      $("#led3").toggleClass("playme");
    });
    $("#led4").hover(function () {
      $("#led4").toggleClass("playme");
    });
    $("#led5").hover(function () {
      $("#led5").toggleClass("playme");
    });
    $("#led6").hover(function () {
      $("#led6").toggleClass("playme");
    });
    $("#led7").hover(function () {
      $("#led7").toggleClass("playme");
    });
    $("#led8").hover(function () {
      $("#led8").toggleClass("playme");
    });
    $("#led9").hover(function () {
      $("#led9").toggleClass("playme");
    });
    $("#led10").hover(function () {
      $("#led10").toggleClass("playme");
    });

    /****************** Press and hold buttons ******************/
    ///////////////////First button///////////////////////////////
    var longpress_st = false;

    $("#stpress").on('click', function () {
        (longpress_st) ? alert("Long Press") : alert("Short Press");
    });

    var startTime, endTime;
    $("#stpress").on('mousedown', function () {
        startTime = new Date().getTime();
    });

    $("#stpress").on('mouseup', function () {
        endTime = new Date().getTime();
        longpress_st = (endTime - startTime < 500) ? false : true;
    });
    //second///////////////////////////////
    var longpress_nd = false;

    $("#ndpress").on('click', function () {
        (longpress_nd) ? alert("Long Press") : alert("Short Press");
    });

    var startTime, endTime;
    $("#ndpress").on('mousedown', function () {
        startTime = new Date().getTime();
    });

    $("#ndpress").on('mouseup', function () {
        endTime = new Date().getTime();
        longpress_nd = (endTime - startTime < 500) ? false : true;
    });

    //third///////////////////////////////
    var longpress_thd = false;

    $("#thrdpress").on('click', function () {
        (longpress_thd) ? alert("Long Press") : alert("Short Press");
    });

    var startTime, endTime;
    $("#thrdpress").on('mousedown', function () {
        startTime = new Date().getTime();
    });

    $("#thrdpress").on('mouseup', function () {
        endTime = new Date().getTime();
        longpress_thd = (endTime - startTime < 500) ? false : true;
    });

    //fourth///////////////////////////////
    var longpress_frth = false;

    $("#fourthpress").on('click', function () {
        (longpress_frth) ? alert("Long Press") : alert("Short Press");
    });

    var startTime, endTime;
    $("#fourthpress").on('mousedown', function () {
        startTime = new Date().getTime();
    });

    $("#fourthpress").on('mouseup', function () {
        endTime = new Date().getTime();
        longpress_frth = (endTime - startTime < 500) ? false : true;
    });
});

//for the slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time the user drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}