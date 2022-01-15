// A $( document ).ready() block.
$( document ).ready(function() {
    
    $('.hamburger-button').click(function(){
        $('.mobile-menu').slideToggle();
        $(this).toggleClass('active');
      });

      // Animate on scroll - activate 
      AOS.init({
        offset: 80, // offset (in px) from the original trigger point
        duration: 1100, // values from 0 to 3000, with step 50ms
      });

});
