$('h1').click(e => {
  let color = $(e.target).css('color');
  if (color == 'rgb(231, 231, 231)'){
    $(e.target).css('color', 'blue');
  } else if (color == 'rgb(0, 0, 255)'){
    $(e.target).css('color', '#e7e7e7');
  };
});
/* $('h1').click(e => {
  $(e.target).css('color', 'blue');

}); */