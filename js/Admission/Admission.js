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