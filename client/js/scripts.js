$(document).ready(function () {

  $(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    $('.logo').css({
      'transform': 'translate(0px, -' + wScroll / 6 + '%)'
    });

    $('.bird').css({
      'transform': 'translate(0px, ' + wScroll / 5 + '%)'
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
    
    $('.bottom').css({
      'transform': 'translate(0px, -' + wScroll / 7.5 + '%)'
    });

  });

});
