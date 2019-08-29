$(function() {   
 $('.slide').slick({
     slidesToShow: 2,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
   nextArrow: '<button class="btn-next"><img src="images/arrow-right.png"></button>',
   prevArrow: '<button class="btn-previous"><img src="images/arrow-left.png"></button>',
responsive: [
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 1
               }
           },
       ] 
  });
});


// usercase carousel


$('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  nextArrow: '<button class="btn-next"><img src="images/arrow-right.png"></button>',
  prevArrow: '<button class="btn-previous"><img src="images/arrow-left.png"></button>',
  responsive: [
                 {
                     breakpoint: 768,
                     settings: {
                         slidesToShow: 1
                     }
                 },
             ] 
});

// home page testimonial carousel

$(function() {   
 $('.slick_home_slider').slick({
     dots: true,
     slidesToShow: 1,
     slidesToScroll: 1,
   //autoplay: true,
     autoplaySpeed: 2000,
   // nextArrow: '<button class="btn-next"><img src="images/arrow-left.png"></button>',
   // prevArrow: '<button class="btn-previous"><img src="images/arrow-right.png"></button>',
responsive: [
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 1
               }
           },
       ] 
  });
});


$( document ).ready(function() {
    $('.navbar_open').on('click', function () {
      $(this).hide();
      $('.navbar_close').show();
    });

    $('.navbar_close').on('click', function () {
      $(this).hide();
      $('.navbar_open').show();
    });
});