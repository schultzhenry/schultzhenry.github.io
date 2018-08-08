$(document).ready(function() {

  var delay;
  var interval;
  var play = true;
  var array = ["#one", "#two", "#three", "#four"];
  var speed = 800;

  function analogies() {
    $('#content').empty();
    $('#content').removeAttr('style');
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
    $('.item').css({
      'vertical-align':'center',
      'display':'inline',
      'font-size':'58px',
      'padding':'8px 8px 0px 8px',
      'line-height':'2em'
    });

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
    });
  }

  $('.menuButton').click(function() {
    clearTimeout(delay);
    clearInterval(interval);
  });

  $('.analogiesButton').click(function() {
    analogies();
  });
});
