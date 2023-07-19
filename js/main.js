document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    // freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    autoHeight: true,
    thumbs: {
      swiper: swiper,
    },
  });
});

$(document).ready(function() {
  $('.review__button').click(function() {
      var $hiddenPara = $(this).closest('.review__item').find('.review__paragraph-hidden');
      var $button = $(this);
      
      $hiddenPara.slideToggle('fast', function() {
          // Check if the element is now visible
          if ($hiddenPara.is(':visible')) {
              $button.text('Hide');
          } else {
              $button.text('Read All');
          }
      });
  });
  $(".accordion__header").click(function() {
    // First close all open accordions
    $(".accordion__content").slideUp();
    $(".accordion__icon").text("+");
  
    // If the clicked accordion was already open, leave it closed
    if($(this).next(".accordion__content").is(":visible")) {
      $(this).next(".accordion__content").slideUp();
      $(this).children(".accordion__icon").text("+");
    } else {
      // Otherwise, open the clicked accordion and change the icon to "-"
      $(this).next(".accordion__content").slideDown();
      $(this).children(".accordion__icon").text("-");
    }
  });  
});



