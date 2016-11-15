//Carousel Slider
jQuery(document).ready(function($) {
			$('.my-slider').unslider();
		});
//Navbar minimizer
function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 300,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }
            }
        });
    }
    window.onload = init();

//card expand

//function init2(){
  //  var click;
    //window.addEventListner(onclick){
      //  click = !click;
        //if(click == true){
          //  document.getElementById("FPro")style.width = "";
        //}else{
        //    if(click == false){
        //    document.getElementById("FPro")style.    
       //     }
     //   }
  //  }
//}

function expandCard(){
    document.getElementById("FPro").style.width = "100%";
}
function condenseCard(){
    document.getElementById("FPro").style.width = "0%";
}