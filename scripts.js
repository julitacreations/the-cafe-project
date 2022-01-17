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


      // Filterable Gallery
      $('#food-filter span').click(function(){
    
        // Remove class 'active' from any <span> that is currently active 
        $('#food-filter .active').removeClass('active');
        
        // give this <span> that was clicked on a class of 'active' 
        $(this).addClass('active');
    
        // get the name of the cateory from this <span>, remove up to two spaces from the text and replace them with dashes, and make it lowercase 
        var filterVal = $(this).text().replace(' ','-').replace(' ','-').toLowerCase();
    
        // This is something new, it's an 'each' function which is basically iterates through each element that matches the selector and applies the function one by one.
        
        $('#filterable-gallery .gallery-item').each(function() {
          
            // If the filter value that they have clicked on is 'all' then remove the class of hidden from each gallery-item. 
    
            if (filterVal == 'all') {
              $(this).removeClass('hidden');
              
            }
          
            // if it's not all, then 
            else {
               if($(this).hasClass(filterVal)) {
                  $(this).removeClass('hidden'); // show those that have the filter class
                 
                }
              else {
                  $(this).addClass('hidden'); // hide those that do not have the filter
                }};
            });
          
        });
    

});
