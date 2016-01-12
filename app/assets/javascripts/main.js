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

// $(".about_me").flipping_text({
//     tickerTime: 7, // Define a time between each ticket in milliseconds. The default value is 10.
//     customRandomChar: false, // You can use your own random strings by defining them here. The default value is false which will use my random string: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     tickerCount: 5, // Set the number of characters randomly shown before the real text is shown here. The default value is 10.
//     opacityEffect: true, // You can toggle the opacity effect here. Set this to false if you don't want the random text to fade in. The default value is 10.
//     resetOnChange: true // Toggle this to true if you want the plugin to stop and fill in all the text immediately when the user changes browser's tab. The default value is false.
//   });

});