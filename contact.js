$(document).ready(function() {

  $('.contactButton').click(function() {

    $('#content').empty();
    $('#content').removeAttr('style');
    $('#content').css({
      'position': 'fixed',
      'top': '0px',
      'left': '0px',
      'width': '100vw',
      'height': '100vh',
      'font-size': '26pt',
      'color':'navy',
      'text-align':'center'
    });
    $('#content').append(
      '<a id="contact" ' +
      'href="mailto:natalie.schultz-henry@yale.edu">' +
      'Send me a note!' +
      '</a>');
    $('#contact').css({
      'position':'absolute',
      'left':'50%',
      'top':'50%',
      'margin':'auto',
      'max-width':'100%',
      'max-height':'100%',
      'overflow':'auto',
      'transform': 'translate(-50%, -50%)',
      'font-size': '26pt',
      'color':'MidnightBlue',
      'text-decoration':'none',
    });

    // When mouse hovers on contact button
    $('#contact').mouseenter(function() {
      $('#content').append('<img id="plane" src="plane.svg" />');
      $('#plane').css({
        'position':'absolute',
        'left':'50%',
        'top':'50%',
        'margin':'auto',
        'overflow':'auto',
        'width':'140px',
        'transform': 'translate(-180%, -30%)',
        'pointer-events':'none'
      });
      $('#plane').animate({
        width:'0px',
        top:'-=2px',
        left: '+=156px'
      }, 1600);
      $(this).css({'text-decoration':'underline'});
    });
    // When mouse leaves contact button
    $('#contact').mouseleave(function() {
      $(this).css({'text-decoration':'none'});
      $('#plane').remove();
    });
  });
});
