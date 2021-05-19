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
	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


    (function ($) {

        /*------------------
            Background Set
        --------------------*/
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    
    
        /*------------------
            Hero Slider
        --------------------*/
        var sliderCount;
        $(".hero-slider").on("initialized.owl.carousel", function (e) {
            sliderCount = e.item.count;
            if (sliderCount < 10) {
                sliderCount = "0" + sliderCount;
            }
        }).owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: ['<img src="img/icons/arrow-left-white.png" alt="">', '<img src="img/icons/arrow-right-black.png" alt="">'],
            smartSpeed: 1200,
            autoplay: true,
            mouseDrag: false
        }).on("changed.owl.carousel", function (e) {
    
            var Index = e.item.index - 1;
            var Count = e.item.count;
            var PreIndex = Index - 1;
            var NextIndex = Index + 1;
    
    
            if (PreIndex < 0) {
                PreIndex = Count - 1;
            }
    
            if (PreIndex < 1) {
                PreIndex = Count;
            }
    
            if (PreIndex < 10) {
                PreIndex = "0" + PreIndex;
            }
    
            if (NextIndex > Count) {
                NextIndex = 1;
            }
    
            if (NextIndex < 10) {
                NextIndex = "0" + NextIndex;
            }
    
    
            $(".hero-slider .owl-nav button.owl-prev").html('<img src="img/icons/arrow-left-white.png" alt=""> <span> ' + PreIndex + '</span> ');
            $(".hero-slider .owl-nav button.owl-next").html('<span> ' + NextIndex + ' </span> <img src="img/icons/arrow-right-black.png" alt="">');
        });
    
        $(".hero-slider .owl-nav button.owl-prev").html('<img src="img/icons/arrow-left-white.png" alt=""> <span> ' + sliderCount + '</span> ');
    
        $(".hero-slider .owl-nav button.owl-next").html('<span>02</span> <img src="img/icons/arrow-right-black.png" alt="">');
    
    
    
    })(jQuery);
    
    
    /*------------------
        Features Slider
    --------------------*/