$(document).ready(function() {
// smooth ancor scrolling
  $('a[href*="#"]:not([href="#"])').click(function(e) {
    if (location.pathname == this.pathname && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
          
        $imgContainer.animate({
             opacity: 1
          }, 2000);       
      }
    }
  });

// second header animation 
  var $window = $(window);
  var $navbar = $('.navbar');
  var $body = $('body');
  var $firstHeader = $(".first-header");
  var $imgContainer = $("#img-container"); 
  
  $window.scroll(scrollAnimation);
  $window.resize(scrollAnimation);
      
  function scrollAnimation(){
     var windowTop = $window.scrollTop();
     var windowHeight = $window.height();
     var bodyHeight = $body.outerHeight(true);
     var pageBottom = bodyHeight - windowHeight;
     var navbarTop = $firstHeader.outerHeight(true);
    
     if( (windowTop >= navbarTop) && (windowTop < pageBottom) ){  
         
         $navbar.css({
             position: "fixed",
             top: 0,
             bottom: "auto"
         });
          
         $imgContainer.animate({
             opacity: 1
          }, 2000);
         
     }else if(windowTop == pageBottom){
    
         $navbar.css({
             position: "fixed",
             bottom: 0,
             top: "auto"
         });
         
     }else{
         
         $navbar.css({
             position: "absolute",
             top: 0,
             bottom: "auto"
         });
    
     }
      
  }; 
    
});