// A $( document ).ready() block.
$( document ).ready(function() {
    
    $('.hamburger-button').click(function(){
        $('.mobile-menu').slideToggle();
        $(this).toggleClass('active');
      });

      // Animate on scroll - activate 
      AOS.init();

});
