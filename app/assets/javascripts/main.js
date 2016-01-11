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

  $(".planet").planetarium({
  });

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
});