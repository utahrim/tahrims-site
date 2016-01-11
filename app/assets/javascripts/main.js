$(document).ready(function(){
  document.body.style.overflow = 'hidden'
  
  $.stellar();
  
  $(".planet").planetarium({
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll == 664 ) {
      $(".earth.planet").show();
    } else {
      $(".earth.planet").hide();
    }
  })

});