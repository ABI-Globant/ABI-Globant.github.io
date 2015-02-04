$(document).ready(function () {
  var maskSite = $('.mask-site'),
    imgBg = $('.img-bg');  
  document.onmousemove = function(e) {
    var x = -(e.clientX/10);
    var y = -(e.clientY/10);
    maskSite.animate({left: x, top: y},{duration: 50, queue: false, easing: 'linear'});
    imgBg.animate({'background-position-x': x/3, 'background-position-y': y/3},{duration: 50, queue: false, easing: 'linear'});
  }; 
});



