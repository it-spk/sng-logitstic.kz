$(document).ready(function(){

    $('.carousel').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500
      });
    
      var zero = 0;

      $(window).on('scroll', function(){

        $('.nav').toggleClass('hide', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();

      })

      $(".menu__item").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            var hash = this.hash;
            
            // $('.menu').removeClass('menu_active');
            // $('.burger__line').removeClass('burger__line-active');
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
    });

  
}); 