$(document).ready(function() {

  var $body = $('body');
  var detectMouse = function(e){
      if (e.type === 'touchstart') {
          e.preventDefault();
          console.log('trying to prevent touch artifacts');
      }
      // remove event bindings, so it only runs once
      $body.off('mousedown touchstart', detectMouse);
  }
  // attach both events to body
  $body.on('mousedown touchstart', detectMouse);


  var menuToggle = false;
  var cursorSize = 26;
  var imgNumber = 5;

  function about() {

    $('#content').empty();
    $('#content').removeAttr('style');
    $('body').css({'background':'red'});

    var homeImages = [
      '<img class="spray" id="spray1" src="images/spray-01.png"></img>',
      '<img class="spray" id="spray2" src="images/spray-02.png"></img>',
      '<img class="spray" id="spray3" src="images/spray-03.png"></img>',
      '<img class="spray" id="spray4" src="images/spray-04.png"></img>',
      '<img class="spray" id="spray5" src="images/spray-05.png"></img>',
      '<img class="spray" id="spray6" src="images/spray-06.png"></img>'
      // '<img class="homeImage" id="bg" src="images/collage.jpg"></img>',
    ];

    for (i=1; i < 160; i++) {
      $('#content').append(
        '<img '+
        'class="spray" '+
        'id="spray'+String(i)+'" '+
        'src="images/spray-'+
        String(Math.floor(Math.random() * imgNumber) + 1)+
        '.png">'+
        '</img>');
      $('#spray'+String(i)).css({
        'position':'fixed',
        'bottom':String(Math.floor(Math.random() * 140) - 40) + 'vh',
        'left':String(Math.floor(Math.random() * 140) - 40) + 'vw',
        'transform':'rotate('+ String(Math.floor(Math.random() * 360)) + 'deg)'
      });
    };
  };

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
    $('#menuButton').css('color','black');
  });
  $('#menu').mouseleave(function() {
    $('#menuButton').css('color','transparent');
  });
  onmousemove = function(e) {
    $('#cursor').css({
      'left': String(e.clientX- (cursorSize / 2)) + 'px',
      'top': String(e.clientY - (cursorSize / 2)) + 'px'
    });
  };

  about();

  $('.menuButton').click(function() {
    $('body').removeAttr('style');
  });
  $('.aboutButton').click(function() {
    about();
  });
});
