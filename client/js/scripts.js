$(document).ready(function () {

  $(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    $('.logo').css({
      'transform': 'translate(0px, -' + wScroll / 6 + '%)'
    });

    $('.bird').css({
      'transform': 'translate(50px, ' + wScroll / 10 + '%)'
    });

    $('.man-bench').css({
      'transform': 'translate(0px, -' + wScroll / 15 + '%)'
    });

    $('.subway').css({
      'transform': 'translate(0px, -' + wScroll / 15 + '%)'
    });

    $('.logo2').css({
      'transform': 'translate(0px, ' + wScroll / 15 + '%)'
    });

    $('.computer').css({
      'transform': 'translate(0px, -' + wScroll / 15 + '%)'
    });

    $('.logo3').css({
      'transform': 'translate(0px, -' + wScroll / 30 + '%)'
    });

    $('.bottom').css({
      'transform': 'translate(0px, -' + wScroll / 38 + '%)'
    });

    $('.address').css({
      'transform': 'translate(0px, -' + wScroll / 3 + '%)'
    });

  });
  

});
