$(document).ready(function(){
  $("#right_nav a").on("click", function(){
      $('html,body').animate({
          scrollTop: $(".photo2").offset().top}, 2500);
  });
})