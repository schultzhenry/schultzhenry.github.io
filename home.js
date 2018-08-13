$(document).ready(function() {

  var menuToggle = false;
  var curSize = 26;
  var touchDevice = false;
  var menuBg = 'rgba(255, 0, 0, 0.75)';
  var menuBgHover = 'rgba(255, 0, 0, 1)';
  var menuButton = 'rgba(255, 0, 0, 1)';
  var delay;
  var interval;
  var play = true;
  var array = ["#one", "#two", "#three", "#four"];
  var speed = 800;

  // Remember device as touch capable if touch
  // action detected.
  var detectMouse = function(e){
      if (e.type === 'touchstart') {
        touchDevice = true;
      }
  }
  // Setup.
  $('body').on(
    'mousedown touchstart',
    detectMouse
  );

  // Setup content for about page.
  function home() {
    $('#content').empty();
    $('#content').removeAttr('style');
    $('body').removeAttr('style');

    menuBg = 'rgba(255, 0, 0, 0.75)';
    menuBgHover = 'rgba(255, 0, 0, 1)';
    menuButton = 'rgba(255, 0, 0, 1)';

    // Number of spray images to choose from.
    var imgNum = 15;

    // Randomly arrange spray images on page.
    $('body').css({'background':'red'});
    $('#menuButton').css('color',menuButton);

    if (touchDevice == true) {
      $('#menu').css('background',menuBgHover);
    } else {
      $('#menu').css('background',menuBg);
    }

    function randomizer(range) {
      return Math.floor(Math.random()*range);
    }
    for (i=1; i < 140; i++) {
      $('#content').append(
        '<img class="spray" '+
        'id="spray'+String(i)+'" '+
        'src="images/spray-'+String(randomizer(imgNum)+1)+
        '.png"></img>');
      $('#spray'+String(i)).css({
        'position':'fixed',
        'bottom':String(randomizer(140)-40)+'vh',
        'left':String(randomizer(140)-40)+'vw',
        'transform':'rotate('+String(randomizer(360))+'deg)',
        'width':'Calc(14vmin + 150px)',
        'height':'Calc(14vmin + 150px)',
        'pointer-events':'none'
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
    $(this).css('background',menuBgHover);
  });
  $('#menu').mouseleave(function() {
    if (touchDevice == true) {
      $(this).css('background',menuBgHover);
    } else {
      $(this).css('background',menuBg);
    }
  });

  // Update cursor div coordinates
  // according to mouse location.
  onmousemove = function(e) {

    if (e.type == 'touchstart') {
      touchDevice == true;
    }

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

  function analogies() {
    $('#content').empty();
    $('#content').removeAttr('style');
    $('body').removeAttr('style');

    menuBg = 'rgba(255, 255, 255, 1)';
    menuBgHover = 'rgba(255, 255, 255, 1)';
    menuButton = 'rgba(255, 255, 255, 1)';

    $('#menuButton').css('color',menuButton);
    if (touchDevice == true) {
      $('#menu').css('background',menuBgHover);
    } else {
      $('#menu').css('background',menuBg);
    }

    $('#content').css({
      'z-index':'1',
      'text-align':'center',
      'position': 'absolute',
      'top': '0px',
      'left': '0px',
      'width': '100vw',
      'height': '100vh',
      'margin':'auto',
      'overflow':'auto'
    });

    $('#content').append('<div id=\'analogies\'></div');

    var analogyTags = [
      '<p class="item emoji" id="one">　</p>',
			'<p class="item grammar">:</p>',
			'<p class="item emoji" id="two">　</p>',
			'<p class="item grammar">::</p>',
			'<p class="item emoji" id="three">　</p>',
			'<p class="item grammar">:</p>',
			'<p class="item emoji" id="four">　</p>'
    ];

    $('#analogies').css({
      'position': 'absolute',
      'margin': '0',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%)'
    });

    for (i=0; i < analogyTags.length; i++) {
      $('#analogies').append(analogyTags[i]);
    }

    $(".item").fadeTo(0,0);

    $('.analogiesStyles').text(
      ".item {" +
        "vertical-align:center;" +
        "display:inline;" +
        "line-height:2.2em;" +
      "}" +
      "@media screen and (min-width: 888px) {" +
        ".item {" +
          "font-size:64px;" +
          "padding:10px 10px 0px 10px;" +
        "}" +
      "}" +
      "@media screen and (max-width: 888px) {" +
        ".item {" +
          "font-size:48px;" +
          "padding:8px 8px 0px 8px;" +
        "}" +
      "}" +
      "@media screen and (max-width: 620px) {" +
        ".item{" +
          "font-size:32px;" +
          "padding:6px 6px 0px 6px;" +
        "}" +
      "}" +
      "@media screen and (max-width: 480px) {" +
        ".item {" +
          "font-size:22px;" +
          "padding:4px 4px 0px 4px;" +
        "}" +
      "}" +
      "@media screen and (max-width: 300px) {" +
        ".item {" +
          "font-size:16px;" +
          "padding:2px 2px 0px 2px;" +
        "}" +
      "}"
    );

    var emojis = [
      "💀", "💩", "🌂", "👑", "🕶", "👖",
      "👣", "👁", "💦", "🍇", "🍼", "🍴",
      "🧀", "🏆", "🎧", "🏡", "💻", "💡",
      "🗑", "🍬", "🎁", "💬", "🔕", "🛑",
      "✂️", "🛒", "💰", "⚖️", "🎾", "📿",
      "🥒", "☕️", "🔔", "👽", "💼", "💍",
      "👞", "🔥", "🌏", "🦐", "🐛", "🐌",
      "🐓", "🐍", "🥚", "🌶", "🍰", "🎪",
      "⌛️", "⏳", "🔒", "🔓", "🔑", "🖊",
      "📦", "💊", "🔪", "🚬", "⚰️", "🕳",
      "👻", "🌈", "🌙", "🎳", "🛶", "🏰",
      "🛰", "⚓️", "⏰", "🚪", "🔭", "🚽",
      "🕯", "🔍", "🗞", "♻️", "💯", "❤️"
    ];

    function randomizer(range) {
      return Math.floor(Math.random() * range);
    }

    function pick() {
      i = randomizer(emojis.length);
      return emojis[i];
    }

    function animate() {
      interval = setInterval(function() {
        let c1 = array[randomizer(array.length)];
        let c2 = array[randomizer(array.length)];
        let c3 = array[randomizer(array.length)];
        let selectors = c1 + ", " + c2 + ", " + c3;
        $(selectors).fadeTo(speed,0);
        setTimeout(function() {
          $(c1).text(pick());
          $(c2).text(pick());
          $(c3).text(pick());
        }, speed);
        $(selectors).fadeTo(speed,1);
        // $(".emoji").css("background", "white");
      }, (speed * 10));
    };

    function setup() {
      delay = setTimeout(function() {
        $(".item").fadeTo(0,0);
        $("#one").text(pick());
        $("#two").text(pick());
        $("#three").text(pick());
        $("#four").text(pick());
        $(".item").fadeTo(speed,1);
        animate();
      }, 600);
    };

    setup();

    $('#analogies').mouseenter(function() {
      $('#cursor').removeClass('cursorDefault');
      if (play == true) {
        $('#cursor').append('<img id="control" src="pause.svg"/>');
      } else {
        $('#cursor').append('<img id="control" src="play.svg"/>');
      }
      $('#control').css({
        'position': 'absolute',
        'width': '38px',
        'height': '38px',
      });
    });
    $('#analogies').mouseleave(function() {
      $('#control').remove();
      $('#cursor').addClass('cursorDefault');
    });

    $('.item').click(function() {
      if (touchDevice == false) {
        if (play == false) {
          animate();
          $('#control').attr('src', 'pause.svg');
          play = true;
        } else {
          clearTimeout(delay);
          clearInterval(interval);
          $('#control').attr('src', 'play.svg');
          play = false;
        }
      }
    });

    $('.menuButton').click(function() {
      clearTimeout(delay);
      clearInterval(interval);
    });
  }

  function respond() {
    let loc = window.location.href;
    console.log("hashchange event detected: " + String(loc));
    if ([
      'http://schultzhenry.com/',
      'https://schultzhenry.com/',
      'http://schultzhenry.com/#home',
      'https://schultzhenry.com/#home'
    ].indexOf(loc) >= 0) {
      console.log('Loading about page.');
      home();
    } else if ([
      'http://schultzhenry.com/#analogies',
      'https://schultzhenry.com/#analogies'
    ].indexOf(loc) >= 0) {
      console.log('Loading analogies page.');
      analogies();
    }
  }
  respond();

  // $('.menuButton').click(function() {
  //   $('#content').empty();
  //   $('#content').removeAttr('style');
  //   $('body').removeAttr('style');
  // });

  $('.homeButton').click(function() {
    console.log('Loading about page.');
    home();
  });

  $('.analogiesButton').click(function() {
    console.log('Loading analogies page.');
    analogies();
  });
});
