$(document).ready(function () {
  var maskSite = $('.mask-site'),
    imgBg = $('.img-bg'),  
    imgSmoke = $('.img-smoke');
  document.onmousemove = function(e) {
    var x = -(e.clientX/10);
    var y = -(e.clientY/10);
    maskSite.animate({left: x, top: y},{duration: 50, queue: false, easing: 'linear'});
    imgBg.animate({'background-position-x': x/5, 'background-position-y': y/5},{duration: 50, queue: false, easing: 'linear'});
    imgSmoke.animate({left: x/2, bottom: y/2-50},{duration: 50, queue: false, easing: 'linear'});
  }; 
});



