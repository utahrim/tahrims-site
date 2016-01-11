$(window).resize(function() {
  if ($(window).width() >= 1349 && $(window).width() < 1372) {
     $(".earth.planet").show();
  } else {
    $(".earth.planet").hide();
  }
});

$(window).load(function(){
  $.stellar({
    horizontalScrolling:false,
  });
})

$(document).ready(function(){

  document.body.style.overflow = 'hidden'
  

  $(".planet").planetarium({
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll == 680) {
      $(".earth.planet").show();
    } else {
      $(".earth.planet").hide();
    }
  })

});