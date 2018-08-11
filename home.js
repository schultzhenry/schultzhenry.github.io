$(document).ready(function() {

  var menuToggle = false;
  var curSize = 26;
  var touchDevice = false;
  var menuBg = 'rgba(255, 0, 0, 0.85)';
  var menuBgHover = 'rgba(255, 0, 0, 1)';

  // Remember device as touch capable if touch
  // action detected.
  var detectMouse = function(e){
      if (e.type === 'touchstart') {
        touchDevice = true;
      }
      // Remove after first run.
      $('body').off(
        'mousedown touchstart',
        detectMouse
      );
  }
  // Setup.
  $('body').on(
    'mousedown touchstart',
    detectMouse
  );

  // Setup content for about page.
  function about() {

    // Remove any existing content or style
    // before appending about-specific divs.
    $('#content').empty();
    $('#content').removeAttr('style');
    $('body').removeAttr('style');

    // Number of spray images to choose from.
    var imgNum = 5;

    // Randomly arrange spray images on page.
    $('body').css({'background':'red'});
    $('#menu').css('background',menuBg);

    function randomizer(range) {
      return Math.floor(Math.random()*range);
    }
    for (i=1; i < 160; i++) {
      $('#content').append(
        '<img class="spray" '+
        'id="spray'+String(i)+'" '+
        'src="images/spray-'+
        String(randomizer(imgNum)+1)+
        '.png"></img>');
      $('#spray'+String(i)).css({
        'position':'fixed',
        'bottom':String(randomizer(140)-40)+'vh',
        'left':String(randomizer(140)-40)+'vw',
        'transform':'rotate('+String(randomizer(360))+'deg)',
        'width':'Calc(12vmin + 160px)',
        'height':'Calc(12vmin + 160px)',
        'pointer-events':'none'
      });
    };
  };

  console.log(window.location.href);
  if (window.location.href == 'http://schultzhenry.com/' ||
      window.location.href == 'https://schultzhenry.com/' ||
      window.location.href == 'https://www.schultzhenry.com/#about' ||
      window.location.href == 'file:///Users/natalieschultz-henry/sites/schultzhenry.github.io/index.html') {
    console.log('Loading about page.');
    about();
  }

  $( "#menu" ).click(function() {
    if (menuToggle == false) {
      menuToggle = true;
      $('#menuButton').text('−');
      $(this).removeClass('closed');
      $(this).addClass('open');
    } else {
      menuToggle = false;
      $('#menuButton').text('+');
      $(this).removeClass('open');
      $(this).addClass('closed');
    }
  });

  $('#menu').mouseenter(function() {
    $(this).css('background',menuBgHover);
  });
  $('#menu').mouseleave(function() {
    $(this).css('background',menuBg);
  });

  // Update cursor div coordinates
  // according to mouse location.
  onmousemove = function(e) {

    // Assume touch device and hide
    // cursor.
    $('#cursor').css({
      'left':'-10vw',
      'top':'-10vh'
    });

    // If mouse in use, update
    // coordinates with mousemove.
    if (touchDevice == false) {
      $('#cursor').css({
        'left':String(e.clientX-(curSize/2))+'px',
        'top':String(e.clientY-(curSize/2))+'px'
      });
    }
  };

  $('.menuButton').click(function() {
    $('body').removeAttr('style');
  });
  $('.aboutButton').click(function() {
    about();
  });
});
