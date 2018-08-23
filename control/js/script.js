
$(document).ready(function(){

  //disable spead alternation on start
   $(".speedbutton").attr("onclick", null);

	//stop the animation of the key
	//start the animation of the brakes
	$("#startcar").dblclick(function(){
		//active only when the car is not running
		if( $("#brake").css('animation-play-state') == 'paused'){
			$('#startcar').css('animation-play-state','paused');
	    	$('#startcar').css('height','80px');
	    	$('#brake').css('animation-play-state','running');
	    	//car can now move forward and backward
	    	$('#mforward').css('opacity','1');
	    	$('#mbackward').css('opacity','1');
        //spead buttons are active and speed can be alternated
        $('.speedbutton').css('opacity','1');
        $('#incs').attr("onclick", "incspeed()");
        $('#decs').attr("onclick", "decspeed()");
		}
	});

	//stop the animation of the brake (stop the car)
	//start the animation of the key (car is stopped)
	//forward button can't be pressed
	$("#brake").dblclick(function(){
    	$('#brake').css('animation-play-state','paused');
    	$('#startcar').css('height','40px');
    	$('#startcar').css('animation-play-state','running');
    	$('#mforward').css('opacity','0.5');
    	$('#mbackward').css('opacity','0.5');
      //disable speed buttons, now speed can't be alterned
      $('.speedbutton').css('opacity','0.5');
      $(".speedbutton").attr("onclick", null);
	});

	//when hovering over the key
	//the key should interact with hovering only if the brake is not animating
	$("#startcar").hover(function () {
		if( $("#brake").css('animation-play-state') == 'paused'){
	    	$('#startcar').css('animation-play-state','paused');
	    	$('#startcar').css('height','100px');			
		}

	}, function () {//when not hovering 
		if( $("#brake").css('animation-play-state') == 'paused'){
			$('#startcar').css('animation-play-state','running');
    		$('#startcar').css('height','40px');
		}

	});
	//forward buttin can be pressed only if the car is running and it is not already pressed
	$('#mforward').click(function(){
		if( $("#brake").css('animation-play-state') == 'running'){
			if( $("#mforward").css('opacity') == '1'){
				$('#mbackward').css('opacity','1');//activae backward
				$('#mforward').css('opacity','0.5');
			}
		}
	})

	$('#mforward').hover(function(){
		//do hover effect only if the car is running and the forward button is not pressed
		if( $("#brake").css('animation-play-state') == 'running'&& $("#mforward").css('opacity') == '1')
			$('#mforward').css('filter','drop-shadow(5px 5px 5px #222)');
	}, function (){
		//when mouse is not hovering delete the shadow effect
		$('#mforward').css('filter','none');
	});

	$('#mbackward').hover(function(){
		//do hover effect only if the car is running and the backward button is not pressed
		if( $("#brake").css('animation-play-state') == 'running'&& $("#mbackward").css('opacity') == '1')
			$('#mbackward').css('filter','drop-shadow(5px 5px 5px #222)');
	}, function (){
		//when mouse is not hovering delete the shadow effect
		$('#mbackward').css('filter','none');
	});
	//backward buttin can be pressed only if the car is running and it is not already pressed
	$('#mbackward').click(function(){
		if( $("#brake").css('animation-play-state') == 'running'){
			if( $("#mbackward").css('opacity') == '1'){
				$('#mforward').css('opacity','1');//activate forward
				$('#mbackward').css('opacity','0.5');
			}
		}
	});

});

var speed; //as a degree, general value that can be seen by all functions
function drawme(new_d){
  //canvas initialization
  var carspeed = document.getElementById("carspeed");
  var ctx = carspeed.getContext("2d");
  //dimensions
  var W = carspeed.width;
  var H = carspeed.height;
  //Variables
  var degrees = 0;
  speed =  new_d;
  var difference = 0;
  var color = "#5b8ff7"; //green looks better to me
  var bgcolor = "#c3c6cc";
  var text;
  var animation_loop, redraw_loop;

 

  function init()
  {
    //Clear the canvas everytime a chart is drawn
    ctx.clearRect(0, 0, W, H);
    
    //Background 360 degree arc
    ctx.beginPath();
    ctx.strokeStyle = bgcolor;
    ctx.lineWidth = 30;
    ctx.arc(W/2, H/2, 100, 0, Math.PI*2, false); //you can see the arc now
    ctx.stroke();
    
    //gauge will be a simple arc
    //Angle in radians = angle in degrees * PI / 180
    var radians = degrees * Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 20;
    //The arc starts from the rightmost end. If we deduct 90 degrees from the angles
    //the arc will start from the topmost end
    ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
    //you can see the arc now
    ctx.stroke();
    
    //Lets add the text
    ctx.fillStyle = color;
    ctx.font = "50px bebas";
    //if full speed for example is 220 we add 120 to the degrees
    text = Math.floor(degrees/360*100) ;
    //stop the text so we don't go overflow over 100
    if(text>=100)
    	{
    		//text=100;
    		speed=361; //reached 100%
    	}

	text = text + "%"
    //Lets center the text
    //deducting half of text width from position x
    text_width = ctx.measureText(text).width;
    //adding manual value to position y since the height of the text cannot
    //be measured easily. There are hacks but we will keep it manual for now.
    ctx.fillText(text, W/2 - text_width/2, H/2 + 15);
  }
  
  draw=function draw()
  {
    //Cancel any movement animation if a new chart is requested
    if(typeof animation_loop != undefined) clearInterval(animation_loop);
    
    //random degree from 0 to 360
    //speed = 180;//Math.round(Math.random()*360);
    difference = speed - degrees;
    //This will animate the gauge to new positions
    //The animation will take 1 second
    //time for each frame is 1sec / difference in degrees
    if(speed==0)
    	init();

    else
    animation_loop = setInterval(animate_to, 1000/difference);
    ///init();
  }
  
  //function to make the chart move to new degrees
  function animate_to()
  {
    //clear animation loop if degrees reaches to speed
    if(degrees == speed) 
      clearInterval(animation_loop);
    
    if(degrees < speed)
      degrees++;
    else
      degrees--;
      
    init();
  }
  
   // add some animation 
   draw();
   //redraw_loop = setInterval(draw, 2000); //Draw a new chart every 2 seconds
 }



//onload function to draw the speed gauge
function drawspeed(){
	speed=100;
	drawme(speed);
}


//increase the speed
function incspeed(){
	speed=speed+5;
   	draw();
}

//decrease the speed
function decspeed(){
	speed=speed-5;
	if(speed<=0)	//so speed doesn't overflow
		speed=1;
   	draw();
}