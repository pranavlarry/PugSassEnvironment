"use strict";

$(window).scroll(function (e) {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.jumbotron').css('top', scrolled * 0.0210 + 'rem');
}

;