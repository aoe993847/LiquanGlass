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
