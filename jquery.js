$(function(){
  console.log('hi');

  $(window).on('scroll', function(){
    var scroll = $(this).scrollTop();
    console.log(scroll);
    $('.fore-bird').css({
      transform: 'translateY(-'+ scroll/40 +'%)',
    });
    $('.logo-text').css({
      transform: 'translateY('+ scroll/2 +'%)',
    });
    $('.back-bird').css({
      transform: 'translateY('+ scroll/4 +'%)',
    });
  })
})
