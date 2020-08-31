$('button').on('click', (event) => {
    console.log('Yeah, you clicked me');
  });

  $('.button02').click((event) => {
    $('.button01').text('Second one was clicked.');
  });

  $('.button03').click((event) => {$('button').css('background-color', 'red')} )