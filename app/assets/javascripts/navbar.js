$(document).ready(function(){
  $("#right_nav_about a").on("click", function(){
    $('body').animate({
      scrollTop: $(".photo").offset().top}, 1000, 'swing');
  });
    $("#right_nav_projects a").on("click", function(){
    $('body').animate({
      scrollTop: $(".photo1").offset().top}, 1000, 'swing');
  });
      $("#right_nav_contact a").on("click", function(){
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