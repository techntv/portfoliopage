$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 52
      }, 2500, function(){
        window.location.hash = hash;
      });
    } // End if
  }); // End a click





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

    $(window).on('load resize', function(){
      $('.fill-screen').css('height', window.innerHeight);
    }); // end full screen images

    new WOW().init();


});
