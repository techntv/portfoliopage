$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  }); // End a click


  $('.main-header h1,.main-header p').fadeOut(4000).fadeIn(3000);


    $(window).scroll(function(){
        if($(document).scrollTop() > 10){
           $('.navbar').addClass('affix', function(){
              $('affix').fadeIn(2000);
           });

         } else {
          $('.navbar').removeClass('affix', function(){
            $('affix').fadeOut(2000);
          });
         }
     }); // End window scroll


});
