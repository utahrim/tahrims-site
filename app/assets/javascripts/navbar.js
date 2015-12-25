$(document).ready(function(){
  $("#right_nav a").on("click", function(){
    $('body').animate({
      scrollTop: $(".photo2").offset().top}, 1000, 'swing');
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".navbar").addClass("scrolling");
    } else {
      $(".navbar").removeClass("scrolling")
    }
  })

});