var customScripts={profile:function(){var portfolio=$('#portfolio');var items=$('.items',portfolio);var filters=$('.filters li a',portfolio);items.imagesLoaded(function(){items.isotope({itemSelector:'.item',layoutMode:'fitRows',transitionDuration:'0.7s'});});filters.click(function(){var el=$(this);filters.removeClass('active');el.addClass('active');var selector=el.attr('data-filter');items.isotope({filter:selector});return false;});},fancybox:function(){$(".fancybox").fancybox();},onePageNav:function(){$('#mainNav').onePageNav({currentClass:'active',changeHash:false,scrollSpeed:950,scrollThreshold:0.2,filter:'',easing:'swing',begin:function(){},end:function(){if(!$('#main-nav ul li:first-child').hasClass('active')){$('.header').addClass('addBg');}else{$('.header').removeClass('addBg');}},scrollChange:function($currentListItem){if(!$('#main-nav ul li:first-child').hasClass('active')){$('.header').addClass('addBg');}else{$('.header').removeClass('addBg');}}});$("a[href='#top']").click(function(){$("html, body").animate({scrollTop:0},"slow");return false;});$("a[href='#basics']").click(function(){$("html, body").animate({scrollTop:$('#services').offset().top-75},"slow");return false;});},owlSlider:function(){var owl=$("#owl-demo");owl.owlCarousel();$(".next").click(function(){owl.trigger('owl.next');})
$(".prev").click(function(){owl.trigger('owl.prev');})},bannerHeight:function(){var bHeight=$(".banner-container").height();$('#da-slider').height(bHeight);$(window).resize(function(){var bHeight=$(".banner-container").height();$('#da-slider').height(bHeight);});},waySlide:function(){},fitText:function(){setTimeout(function(){$('h1.responsive-headline').fitText(1.2,{minFontSize:'16px',maxFontSize:'30px'});},100);},init:function(){customScripts.onePageNav();customScripts.profile();customScripts.fancybox();customScripts.owlSlider();customScripts.waySlide();customScripts.fitText();customScripts.bannerHeight();}}
$('document').ready(function(){customScripts.init();$('#main-slider').flexslider({namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,pauseOnAction:true,pauseOnHover:false,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:'Pause',playText:'Play',controlsContainer:"",manualControls:"",sync:"",asNavFor:"",});});