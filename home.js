$(document).ready(function() {

  var menuToggle = false;
  var curSize = 26;
  var touchDevice = false;

  // Menu styling variables
  var menuBg = 'rgba(255, 0, 0, 0.75)';
  var menuBgHover = 'rgba(255, 0, 0, 1)';
  var menuBorder = 'rgba(0, 0, 0, 1)';
  var menuButton = 'rgba(255, 0, 0, 1)';

  // Info styling variables
  var infoBg = 'rgba(255, 0, 0, 0.75)';
  var infoBgHover = 'rgba(255, 0, 0, 1)';
  var infoBorder = 'rgba(0, 0, 0, 1)';
  var infoButton = 'rgba(255, 0, 0, 1)';

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

  $('#menu').append('<svg class="navIcon" id="menuOpen"></svg>');
  $('#menuOpen').append('<polygon points="25 19 25 8 19 8 19 19 8 19 8 25 19 25 19 36 25 36 25 25 36 25 36 19 25 19" style="fill:none"/>');
  $('#menu').append('<svg class="navIcon" id="menuClose"></svg>');
  $('#menuClose').append('<rect x="19" y="8" width="6" height="28" transform="translate(44) rotate(90)" style="fill:none"/>');
  $('#info').append('<svg class="navIcon" id="infoOpen"></svg>');
  $('#infoOpen').append('<polygon points="35.62 17.6 32.62 12.4 25 16.8 25 8 19 8 19 16.8 11.38 12.4 8.38 17.6 16 22 8.38 26.4 11.38 31.6 19 27.2 19 36 25 36 25 27.2 32.62 31.6 35.62 26.4 28 22 35.62 17.6" style="fill:none"/>');
  $('#info').append('<svg class="navIcon" id="infoClose"></svg>');
  $('#infoClose').append('<rect x="19" y="8" width="6" height="28" style="fill:none"/>');

  $('.navIcon').attr('data-name','Layer 1');
  $('.navIcon').attr('xmlns','http://www.w3.org/2000/svg');
  $('.navIcon').attr('viewBox','0 0 44 44');

  console.log('attempting to change nav icon fill colors...');
  $('.navIcon polygon, .navIcon rect').attr('style','fill:green');

  // Setup content for about page.
  function home() {
    $('#content').empty();
    $('#content').removeAttr('style');
    $('body').removeAttr('style');

    menuBg = 'rgba(255, 0, 0, 0.75)';
    menuBgHover = 'rgba(255, 0, 0, 1)';
    menuButton = 'rgba(255, 0, 0, 1)';

    // Number of spray images to choose from.
    var imgNum = 10;

    // Randomly arrange spray images on page.
    $('body').css({'background':'red'});
    $('#menuButton').css('color',menuButton);
    $('#infoButton').css('color',infoButton);
    $('#menu').css({
      'border-right':'1px solid ' + menuBorder
    });
    $('#info').css({
      'border-left':'1px solid ' + infoBorder
    });

    if (touchDevice == true) {
      $('#menu').css('background',menuBgHover);
      $('#info').css('background',infoBgHover);
    } else {
      $('#menu').css('background',menuBg);
      $('#info').css('background',infoBg);
    }

    function randomizer(range) {
      return Math.floor(Math.random()*range);
    }
    for (i=1; i < 230; i++) {
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
        'width':'Calc(23vmin + 60px)',
        'height':'Calc(23vmin + 60px)',
        'pointer-events':'none'
      });
    };
  };

  $( "#menu" ).click(function() {
    if (menuToggle == false) {
      menuToggle = true;
      $('#menuButton').text('−');
      $(this).removeClass('closedMenu');
      $(this).addClass('openMenu');
    } else {
      menuToggle = false;
      $('#menuButton').text('+');
      $(this).removeClass('openMenu');
      $(this).addClass('closedMenu');
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
        console.log('about to animate...');
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

  function engender() {

    $('#content').empty();
    $('#content').removeAttr('style');
    $('body').removeAttr('style');

    $('#content').css({
      'text-align':'center',
      'position': 'absolute',
      'top': '0px',
      'left': '0px',
      'width': '100vw',
      'height': '100vh',
      'margin':'auto',
      'overflow':'auto'
    });

    $('#content').append('<div id=\'engenderContent\'></div');
    $('#engenderContent').css({
      'position': 'absolute',
      'margin': '0',
      'padding-top':'64px',
      'padding-bottom':'64px',
      'top': '0px',
      'left': '50%',
      'transform': 'translate(-50%, 0%)',
      'height':'100vh',
      'background':'lavender',
      'overflow':'auto'
    });

    $('.engenderStyles').text(
      "@media screen and (min-width: 888px) { " +
        "#engenderContent { width: 800px; } " +
        ".engenderText { " +
          "font-size: 24px; " +
          "padding-left: 64px;" +
          "padding-right: 64px;" +
        "}" +
      "} " +
      "@media screen and (max-width: 888px) { " +
        "#engenderContent { " +
          "width: Calc(100vw - 88px); " +
        "} " +
        ".engenderText { " +
          "font-size: 16px; " +
          "padding-left: 24px;" +
          "padding-right: 24px;" +
        "}" +
      "} "
    );

    $('#engenderContent').append('<img id="engenderLogo" src="images/engender.png"></img>');
    $('#engenderLogo').css({
      'margin':'auto',
      'width':'96px',
      'background':'white',
      'margin-bottom':'24px'
    });

    $('#engenderContent').append(
      '<p class="engenderText">' +
      'In the fall of 2016, a group of classmates and I founded ' +
      'Engender to advocate for equity and inclusion at Yale. ' +
      'Then, as now, we believed that institutions can only ' +
      'contribute to an equitable society if they effect ' +
      'inclusive membership policies.</p>' +
      '<p class="engenderText">&#8195;For our first initiative, we are working on gender integration ' +
      'of Greek organizations given their discrim&shy;inatory ' +
      'nature. It is our view that this unchallenged discrim&shy;ination ' +
      'enables the harmful behaviors including sexual harassment ' +
      'and assault, bias incidents, hazing and substance abuse that are endemic to ' +
      'these groups.</p>' +
      '<p class="engenderText" id="p2">&#8195;During my time with Engender, ' +
      'I have managed our team&#8217;s internal ' +
      'and external communications, facilitated new member applications ' +
      'and onboarding, written up policy recommendations for the Yale ' +
      'admin&shy;istration, designed our visual identity and organized a ' +
      'group of women and non-binary students to rush a fraternity. ' +
      'You can read more about Engender on our ' +
      '<a class="engenderLink" href="http://engender.space">website</a> ' +
      'or connect with us on <a class="engenderLink" ' +
      'href="https://www.facebook.com/engenderequality/">Facebook</a> ' +
      'and <a class="engenderLink" ' +
      'href="https://twitter.com/engenderyale">Twitter</a>.' +
      '</p>');
      $('.engenderText').css({
        'padding-top':'0px',
        'padding-bottom':'0px',
        'text-align':'left',
        'margin':'0px',
        'hyphens':'manual'
      });
      $('.engenderText a').css({
        'color':'black',
        'text-decoration':'none',
        'border-bottom':'1px dotted black',
        'line-height':'1.4em'
      });

      $('.engenderLink').mouseenter(function() {
        $(this).css({
          'border-bottom':'1px solid black'
        });
      });
      $('.engenderLink').mouseleave(function() {
        $(this).css({
          'border-bottom':'1px dotted black'
        });
      });

  };

  function contact() {

    $('#content').empty();
    $('#content').removeAttr('style');
    $('body').removeAttr('style');

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
    clearTimeout(delay);
    clearInterval(interval);
    console.log('Loading analogies page.');
    analogies();
  });

  $('.engenderButton').click(function() {
    console.log('Loading Engender page.');
    engender();
  });

  $('.contactButton').click(function() {
    console.log('Loading contact page.');
    contact();
  });
});
