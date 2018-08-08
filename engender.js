$(document).ready(function() {

  function engender() {
    $('#content').empty();
    $('#content').removeAttr('style');
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

  $('.engenderButton').click(function() {
    engender();
  });
});
