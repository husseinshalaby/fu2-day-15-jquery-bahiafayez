$('.header').on('click',function(){
  $('.header + div').addClass('close');
  $(this).next().toggleClass('close');
});



// i = 0
// while (i < 8){
//   i++
//
// }

$('.pass').on('keyup',function(){
  if ($('.pass').val().length > 8){
      $('.d').html('<span id="check">good</span>')
  } else {
      $('.d').html('<span id="cross">bad</span>')
  }

});
