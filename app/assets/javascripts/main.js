$(window).load(function(){
  $.stellar({
    horizontalScrolling:false,
  });
})


$(document).ready(function(){

  $(window).load(function() {
    if ($(window).width() >= 1349 && $(window).width() < 1373) {
       $(".earth.planet").show();
    } else {
      $(".earth.planet").hide();
    }
  });

  document.body.style.overflow = 'hidden'

  $(".planet").planetarium();

  $(window).resize(function() {
    if ($(window).width() >= 1349 && $(window).width() < 1372) {
       $(".earth.planet").show();
    } else {
      $(".earth.planet").hide();
    }
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var width = $(window).width();
    if (scroll == 680  && width >= 1349) {
      $(".earth.planet").show();
    } else {
      $(".earth.planet").hide();
    };
  })

  $(".about_me").hide();

  $(".grid").one("click", function(){
    $('body').animate({scrollTop: $(".photo").offset().top}, 1000, 'swing');
    $(".grid").animate({marginTop: "-=6em", marginLeft: "-=10em"});
    $(".ot-letter-left").animate({fontSize: "2em", marginTop: "+=2.5em"});
    $(".about_me").show();
    $(".about_me").flipping_text({
      tickerTime: 7,
      customRandomChar: false,
      tickerCount: 5,
      resetOnChange: true
    });
  });


});