$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $('.header-navbar').addClass("header-navbar-fixed");
      }
  else {
    $('.header-navbar').removeClass("header-navbar-fixed");
  }
});