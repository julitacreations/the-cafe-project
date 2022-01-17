// A $( document ).ready() block.
$( document ).ready(function() {
    
    $('.hamburger-button').click(function(){
        $('.mobile-menu').slideToggle();
        $(this).toggleClass('active');
      });

      // Animate on scroll - activate 
      AOS.init({
        offset: 80, // offset (in px) from the original trigger point
        duration: 900, // values from 0 to 3000, with step 50ms
      });

      // Slick-Slider animation
      $('.testimonial-slider-container').slick({
        autoplay: true, // Do we want it to autoplay? true or false
        autoplaySpeed: 3000, // How long between each slide when auto-playing
        speed: 500, // How fast is the transition in milliseconds
        arrows: false, // Do you want to show arrows to trigger each slide
        accessibility: true, // Enables keyboard tabbing and arrow key navigation
        dots: true, // Enables the dots below to show how many slides
        fade: false, // Changes the animate from slide to fade if true
        infinite: true, // When true, means that it will scroll in a circle
        pauseOnHover: true, // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
        
      });

});
