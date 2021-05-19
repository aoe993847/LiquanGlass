;(function($){
    "use strict"
	
	
	var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	

	

})(jQuery)


$(document).ready(function() { 
    var a = $("#pagelink").offset().top; 

    $(document).scroll(function(){ 
     if($(this).scrollTop() > 150) 
     { 
        $('#pagelink').addClass("navbar-fixed-top");; 
      $('#pagelink').css({"background":"rgba(0, 0, 0, 0.541)"}); 
     } else if($(this).scrollTop() < 50){ 
      $('#pagelink').css({"background":"black"}); 
      $('#pagelink').removeClass("navbar-fixed-top");;
     } 
    }); 
   }); 



$(".paragraph_A").click(function(){
    $(".paragraph_a").slideToggle();
});
$(".paragraph_B").click(function(){
    $(".paragraph_b").slideToggle();
});
$(".paragraph_C").click(function(){
    $(".paragraph_c").slideToggle();
});
$(".paragraph_D").click(function(){
    $(".paragraph_d").slideToggle();
});
$(".paragraph_E").click(function(){
    $(".paragraph_e").slideToggle();
});


