 //get the "det" variable from the url
  function getQueryVariable(variable)
  {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
  }
  var picname=getQueryVariable("det");

//insert the detected img in the placeholder in detected.html
var elem = document.createElement("img");
elem.setAttribute("src", "detected/img/"+picname+".png");
document.getElementById("showdetected").appendChild(elem);