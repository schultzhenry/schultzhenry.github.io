$(document).ready(function() {

  var menuToggle = false;
  var infoToggle = false;
  var curSize = 26;
  var touchDevice = false;

  var bgColor = 'rgba(255, 0, 0, 1)';
  // Nav styling variables
  var navBg = 'rgba(255, 0, 0, 0.75)';
  var navBgHover = 'rgba(255, 0, 0, 1)';
  var navBorder = 'rgba(0, 0, 0, 0)';
  var navIconColor = 'rgba(255, 0, 0, 1)';
  var navIconStroke = 'rgba(0, 0, 0, 0)';

  var delay;
  var pickDelay;
  var interval;

  var play = true;
  var speed = 800;

  $('#body').css({
    'position':'fixed',
    'top':'0px',
    'left':'0px',
    'width':'100vw',
    'height':'100vh',
    'z-index':'1',
  });

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

  navSvg1 = '<svg version="1.1" ';
  navSvg2 = 'class="navIcon"' +
            'xmlns="http://www.w3.org/2000/svg" ' +
            'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
            'x="0px" y="0px" viewBox="0 0 44 44" ' +
            'style="enable-background:new 0 0 44 44;" ' +
            'xml:space="preserve">'
  navSvg3 = '</svg>'

  menuOpen = navSvg1 + 'id="menuOpen" ' + navSvg2 +
             '<polygon fill="white" ' +
             'points="25,19 25,8 19,8 19,19 8,19 8,25 19,25 19,36 25,36 25,25 36,25 36,19 	"/>' +
             navSvg3;
  infoOpen = navSvg1 + 'id="infoOpen" ' + navSvg2 +
             '<polygon fill="white" ' +
             'points="35.6,17.6 32.6,12.4 25,16.8 25,8 19,8 19,16.8 11.4,12.4 8.4,17.6 16,22 8.4,26.4 11.4,31.6 19,27.2 19,36 25,36 25,27.2 32.6,31.6 35.6,26.4 28,22 	"/>' +
             navSvg3;

  $('#menu').append(menuOpen);
  $('#info').append(infoOpen);

  $('.navIcon').css({
    'width':'36px',
    'height':'36px'
  });

  $('#menu a, #menu a:visited, #info a, #info a:visited').addClass('menuBlack');

  $('#infoText').css({
    'position': 'absolute',
    'top': '16px',
    'left': '44px',
    'font-size': '18pt',
    'padding-right': '40px',
    'color':'black'
  });

  $('#menu').click(function() {
    if (menuToggle == false) {
      if (infoToggle == true) {
        infoToggle = false;
        $('#infoOpen').css('visibility','visible');
        $('#info').removeClass('openInfo');
        $('#info').addClass('closedInfo');
      }
      menuToggle = true;
      $('#menuOpen').css('visibility','hidden');
      $(this).removeClass('closedMenu');
      $(this).addClass('openMenu');
    } else {
      menuToggle = false;
      $('#menuOpen').css('visibility','visible');
      $(this).removeClass('openMenu');
      $(this).addClass('closedMenu');
    }
  });

  $('#info').click(function() {
    if (infoToggle == false) {
      if (menuToggle == true) {
        menuToggle = false;
        $('#menuOpen').css('visibility','visible');
        $('#menu').removeClass('openMenu');
        $('#menu').addClass('closedMenu');
      }
      infoToggle = true;
      $('#infoOpen').css('visibility','hidden');
      $(this).removeClass('closedInfo');
      $(this).addClass('openInfo');
    } else {
      infoToggle = false;
      $('#infoOpen').css('visibility','visible');
      $(this).removeClass('openInfo');
      $(this).addClass('closedInfo');
    }
  });

  $('#menu, #info').mouseenter(function() {
    $(this).css('background',navBgHover);
  });
  $('#menu, #info').mouseleave(function() {
    if (touchDevice == true) {
      $(this).css('background',navBgHover);
    } else {
      $(this).css('background',navBg);
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

  function clearPage() {
    $('#content').empty();
    $('#content').removeAttr('style');
    $('body').removeAttr('style');

    $('#body').css({
      'position':'fixed',
      'top':'0px',
      'left':'0px',
      'width':'100vw',
      'height':'100vh',
      'background-position':'0px 0px'
    })

    $('#infoText').css({
      'position': 'absolute',
      'top': '16px',
      'left': '44px',
      'font-size': '18pt',
      'padding-right': '40px',
      'color':'black'
    });
  }

  // Setup content for about page.
  function home() {

    clearPage();

    navBg = 'rgba(255, 0, 0, 0.75)';
    navBgHover = 'rgba(255, 0, 0, 1)';
    navBorder = 'rgba(0, 0, 0, 1)';
    navIconColor = 'rgba(255, 0, 0, 1)';
    navIconStroke = 'rgba(0, 0, 0, 1)';

    // Change page background
    bgColor = 'rgba(255, 0, 0, 1)';
    $('#background').css({
      'background':bgColor,
    });

    $('#menu a, #menu a:visited, #info a, #info a:visited').addClass('menuBlack');

    // Number of spray images to choose from.
    var imgNum = 10;

    $('#menu').css({
      'border-right':'1px solid ' + navBorder
    });
    $('#info').css({
      'border-left':'1px solid ' + navBorder
    });

    if (touchDevice == true) {
      $('#menu').css('background',navBgHover);
      $('#info').css('background',navBgHover);
    } else {
      $('#menu').css('background',navBg);
      $('#info').css('background',navBg);
    }

    $('.navIcon polygon, .navIcon rect').css('fill',navIconColor);
    $('.navIcon polygon, .navIcon rect').css('stroke',navIconStroke);

    $('#content').css({
      'text-align':'center',
      'position': 'fixed',
      'top': '0px',
      'left': '0px',
      'width': '100vw',
      'height': '100vh',
      'margin':'auto',
      'overflow':'auto'
    });

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

    $('#infoText').text(
      'Thanks for stopping by!'
    );
  };

  function analogies() {

    clearPage();

    // Change page background
    bgColor = 'rgba(255, 255, 255, 1)';
    $('#background').css({
      'background':bgColor,
    });

    $('.analogiesStyles').empty();

    navBg = 'rgba(255, 255, 255, 0.9)';
    navBgHover = 'rgba(255, 255, 255, 1)';
    navBorder = 'rgba(0, 0, 0, 1)';
    navIconColor = 'rgba(255, 255, 255, 1)';
    navIconStroke = 'rgba(0, 0, 0, 1)';

    $('#menu, #info').css('border','none');
    $('#menu a, #menu a:visited, #info a, #info a:visited').addClass('menuBlack');

    $('.navIcon polygon, .navIcon rect').css('fill',navIconColor);
    $('.navIcon polygon, .navIcon rect').css('stroke',navIconStroke);

    if (touchDevice == true) {
      $('#menu, #info').css('background',navBgHover);
    } else {
      $('#menu, #info').css('background',navBg);
    }

    $('#content').css({
      'z-index':'1',
      'text-align':'center',
      'position': 'fixed',
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
          "font-size:30px;" +
          "padding:4px 4px 0px 4px;" +
        "}" +
      "}" +
      "@media screen and (max-width: 300px) {" +
        ".item {" +
          "font-size:22px;" +
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

    var array = ["#one", "#two", "#three", "#four"];

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
        pickDelay = setTimeout(function() {
          $(c1).text(pick());
          $(c2).text(pick());
          $(c3).text(pick());
        }, speed);
        $(selectors).fadeTo(speed,1);
        $(".emoji").css("background", "white");
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
          clearTimeout(pickDelay);
          clearInterval(interval);
          $('#control').attr('src', 'play.svg');
          play = false;
        }
      }
    });
  }

  function engender() {

    clearPage();

    // Change page background
    bgColor = 'lavender';
    $('#background').css({
      'background':bgColor,
    });

    navBg = 'rgba(230, 230, 250, 0.9)';
    navBgHover = 'rgba(230, 230, 250, 1)';
    navBorder = 'rgba(0, 0, 0, 0)';
    navIconColor = 'rgba(230, 230, 250, 1)';
    navIconStroke = 'rgba(0, 0, 0, 1)';

    $('#menu a, #menu a:visited, #info a, #info a:visited').addClass('menuBlack');

    $('#menu, #info').css('border','none');

    $('.navIcon polygon, .navIcon rect').css('fill',navIconColor);
    $('.navIcon polygon, .navIcon rect').css('stroke',navIconStroke);

    if (touchDevice == true) {
      $('#menu, #info').css('background',navBgHover);
    } else {
      $('#menu, #info').css('background',navBg);
    }

    $('#content').css({
      'text-align':'center',
      'position': 'fixed',
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
      'overflow':'auto'
    });

    $('.engenderStyles').text(
      "@media screen and (min-width: 888px) { " +
        "#engenderContent { width: 802px; } " +
        ".engenderText { " +
          "font-size: 24px; " +
          "padding-left: 64px;" +
          "padding-right: 64px;" +
        "}" +
      "} " +
      "@media screen and (max-width: 888px) { " +
        "#engenderContent { " +
          "width: Calc(100vw - 86px); " +
        "} " +
        ".engenderText { " +
          "font-size: 24px; " +
          "padding-left: 64px;" +
          "padding-right: 64px;" +
        "}" +
      "} " +
      "@media screen and (max-width: 660px) { " +
        "#engenderContent { " +
          "width: Calc(100vw - 86px); " +
        "} " +
        ".engenderText { " +
          "font-size: 21px; " +
          "padding-left: 0px;" +
          "padding-right: 0px;" +
        "}" +
      "} " +
      "@media screen and (max-width: 460px) { " +
        "#engenderContent { " +
          "width: Calc(100vw - 86px); " +
        "} " +
        ".engenderText { " +
          "font-size: 16px; " +
          "padding-left: 0px;" +
          "padding-right: 0px;" +
        "}" +
      "} "
    );

    $('#engenderContent').append('<img id="engenderLogo" src="images/engender.png"></img>');
    $('#engenderLogo').css({
      'margin':'auto',
      'width':'96px',
      'margin-bottom':'24px',
    });

    $('#engenderContent').append(
      '<p class="engenderText">' +
      'In the fall of 2016, a group of classmates and I founded ' +
      'Engender to advocate for equity and inclusion at Yale. ' +
      'Then, as now, we believed that institutions can only ' +
      'contribute to an equitable society if they effect ' +
      'inclusive membership policies. ' +

      'For our first initiative, we are working on gender integration ' +
      'of Greek organizations given their discrim&shy;inatory nature. ' +
      'It is our view that this unchallenged discrim&shy;ination ' +
      'enables the harmful behaviors including hazing, substance abuse ' +
      'and acts of bias and hate that so many members of these groups ' +
      'unfortunately exhibit.</p>' +

      '<p class="engenderText">' +
      '&#8195;During my time with ' +
      'Engender, I have managed our team&#8217;s internal and ' +
      'external communications, facilitated new member applications ' +
      'and onboarding, written up policy recommendations for the Yale ' +
      'admin&shy;istration, designed our visual identity and organized a ' +
      'group of women and non-binary students to rush a fraternity.</p>' +

      '<p class="engenderText">' +
      '&#8195;More information about Engender is available on our ' +
      '<a class="engenderLink" href="http://engender.space">website</a>. ' +
      'You can also connect with us on <a class="engenderLink" ' +
      'href="https://www.facebook.com/engenderequality/">Facebook</a> ' +
      'and <a class="engenderLink" ' +
      'href="https://twitter.com/engenderyale">Twitter</a>, ' +
      'or see the links below for notable events pertaining ' +
      'to our efforts.</p>'
    );

    $('.engenderText').css({
      'padding-top':'0px',
      'padding-bottom':'0px',
      'text-align':'justify',
      'margin':'0px',
      'hyphens':'manual',
      'line-height':'1.3em'
    });
    $('.engenderText a').css({
      'color':'black',
      'text-decoration':'none',
      'border-bottom':'1px dotted black',
      'line-height':'1.3em'
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

  function searchlight() {

    clearPage();

    $('body').css('background','black');
    $('#infoText').css('color','white');

    navBg = 'rgba(0, 0, 0, 1)';
    navBgHover = 'rgba(0, 0, 0, 1)';
    navBorder = 'rgba(0, 0, 0, 0)';
    navIconColor = 'rgba(0, 0, 0, 1)';
    navIconStroke = 'rgba(255, 255, 255, 1)';

    $('#menu, #info').css('border','none');

    $('.navIcon polygon, .navIcon rect').css('fill',navIconColor);
    $('.navIcon polygon, .navIcon rect').css('stroke',navIconStroke);

    if (touchDevice == true) {
      $('#menu, #info').css('background',navBgHover);
    } else {
      $('#menu, #info').css('background',navBg);
    }
    $('#menu a, #menu a:visited, #info a, #info a:visited').removeClass('menuBlack');
    $('#menu a, #menu a:visited, #info a, #info a:visited').addClass('menuWhite');

    $('#content').css({
      'text-align':'center',
      'position': 'fixed',
      'top': '0px',
      'left': '0px',
      'width': '100vw',
      'height': '100vh',
      'margin':'auto',
      'overflow':'auto'
    });

    if (touchDevice == true) {
      $('#content').append(
        '<p style="color:white">Searchlight is a bookmarklet that ' +
        'lets you view webpages with your cursor ' +
        'as you would a dark room with a ' +
        'flashlight. To try it, Visit this page ' +
        'while using a mouse.</p>');
    }
  }

  function contact() {

    clearPage();

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

    $('#menu a, #menu a:visited, #info a, #info a:visited').addClass('menuBlack');

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
  }

  function respond() {
    $('#menu a, #menu a:visited, #info a, #info a:visited').removeClass('menuWhite');
    $('#menu a, #menu a:visited, #info a, #info a:visited').removeClass('menuBlack');
    let loc = window.location.href;
    console.log("Visiting " + String(loc));
    if ([
      'http://schultzhenry.com/',
      'https://schultzhenry.com/',
      'http://schultzhenry.com/#home',
      'https://schultzhenry.com/#home'
    ].indexOf(loc) >= 0) {
      console.log('Loading about page...');
      home();
    } else if ([
      'http://schultzhenry.com/#analogies',
      'https://schultzhenry.com/#analogies'
    ].indexOf(loc) >= 0) {
      console.log('Loading analogies page...');
      if (play == false) {
        $('#control').attr('src', 'pause.svg');
        play = true;
      }
      clearInterval(interval);
      clearTimeout(delay);
      clearTimeout(pickDelay);
      analogies();
    } else if ([
      'http://schultzhenry.com/#engender',
      'https://schultzhenry.com/#engender'
    ].indexOf(loc) >= 0) {
      console.log('Loading engender page...');
      engender();
    } else if ([
      'http://schultzhenry.com/#instructions',
      'https://schultzhenry.com/#instructions'
    ].indexOf(loc) >= 0) {
      console.log('Loading instructions page...');
      // instructions();
    } else if ([
      'http://schultzhenry.com/#searchlight',
      'https://schultzhenry.com/#searchlight'
    ].indexOf(loc) >= 0) {
      console.log('Loading searchlight page...');
      searchlight();
    } else if ([
      'http://schultzhenry.com/#contact',
      'https://schultzhenry.com/#contact'
    ].indexOf(loc) >= 0) {
      console.log('Loading contact page...');
      contact();
    }
  }

  respond();

  $(window).on('popstate', function(event) {
    respond();
  });

});
