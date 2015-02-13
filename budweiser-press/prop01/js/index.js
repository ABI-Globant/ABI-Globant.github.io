$(document).ready(function () {
  var v = document.getElementById("video1");	
  v.volume = 0;
  $('.navbar-button-container').on('click', function () {
    console.log('asasa');
    $('.navbar-container-open').css('left',0);
    $('.navbar-container-close').css('left',225);
  });
  $('.navbar-container-close').on('click', function () {
    console.log('asasa');
    $('.navbar-container-open').css('left',-280);
    $('.navbar-container-close').css('left',-50);
  });
});