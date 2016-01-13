$(document).ready(function(){
  $("#right_nav_about a").click(function(){
    $('body').animate({
      scrollTop: $(".photo").offset().top}, 1000, 'swing');
  });
    $("#right_nav_projects a").click(function(){
    $('body').animate({
      scrollTop: $(".photo1").offset().top}, 1000, 'swing');
  });
      $("#right_nav_contact a").click(function(){
    $('body').animate({
      scrollTop: $(".photo2").offset().top}, 1000, 'swing');
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 7) {
      $(".navbar").addClass("scrolling");
    } else {
      $(".navbar").removeClass("scrolling")
    }
  })

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 8 && scroll < 664 ) {
      $("#right_nav_about").addClass("active");
    } else {
      $("#right_nav_about").removeClass("active")
    }
  })

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 664 && scroll < 1320 ) {
      $("#right_nav_projects").addClass("active");
    } else {
      $("#right_nav_projects").removeClass("active")
    }
  })

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1320 ) {
      $("#right_nav_contact").addClass("active");
    } else {
      $("#right_nav_contact").removeClass("active")
    }
  })

  $("#left_nav").click(function(){
    location.reload();
  })
});