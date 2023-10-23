$(document).ready(function(){

    $('.carousel').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
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
            
            $('.menu').removeClass('menu_active');
            $('span').removeClass('active-line');
            $('body').removeClass('scroll-y');

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

    $('.burger').on('click', function(){
      $('.menu').toggleClass('menu_active');
      $('span').toggleClass('active-line');
      $('body').toggleClass('scroll-y');
    })



    function validateForm(form){
      $(form).validate({
        rules:{
          name:{
            required: true,
            minlength: 2
          },
          phone: "required"
        },
        messages: {
          name: {
            required: "Пожалуйста введите свое имя",
            minlength: jQuery.validator.format("Введите {0} символа!")
          },
          phone: "Введите свой номер телефона",
          errorClass: "invalid"
        }
      });
    }

    validateForm('.feed-form')

    $('input[name=phone]').mask("+7(999)999-99-99");

    $('form').submit(function(e){
      e.preventDefault();
      if(!$(this).valid()){
          return;
      }
      $.ajax({
          type: 'POST',
          url: 'telegram/telegram.php',
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");

          // $('#consultation').fadeOut();
          // $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      }); 
      return false;
    });
  
}); 