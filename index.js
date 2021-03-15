$(document).ready(function() {

  $('a').attr('target','_blank');

  $.scrollify({
		section:".view",
    scrollbars:false,
    // before:function(i,panels) {
    //   var ref = panels[i].attr("section");
    // },
    after:function(i,panels) {
      $(".view").each(function(i) {
        activeClass = "";
        console.log($.scrollify.currentIndex());
        if(i===$.scrollify.currentIndex()) {
          activeClass = "active";
        }
        $("#nav"+i).attr("class", activeClass);
        $(this).attr("class", "view " + activeClass);
      })
    }
  });

  var sectionLabels = [
    "Home",
    "Mayor Scott's First 100 Days",
    "COVID-19 Dashboard",
    "116th",
    "Engender",
    "Duby Team",
    "Fuzzy Grids II",
    "About"
  ];

  $(".nav div").each(function(i) {
    $(this).on("click touchstart", function() {
      $.scrollify.move(i);
    }).on("mouseover", function () {
      $("#pnav" + i).text( sectionLabels[i] );
    }).on("mouseleave", function () {
      $("#pnav" + i).text( "" );
    });
  });

  function Dec(num, total) {
    return Math.abs((num - 1) % total);
  }
  function Inc(num, total) {
    return Math.abs((num + 1) % total);
  }

  var DubyTotal = 8;
  var DubyList = 0;

  $("#Duby .prev").on("click touchstart", function () {
    DubyList = Dec(DubyList, DubyTotal);
    $("#DubyImage").attr("src", "thumbnails/t-duby-" + String(DubyList) + ".jpg");
  });
  $("#Duby .next").on("click touchstart", function () {
    DubyList = Inc(DubyList, DubyTotal);
    $("#DubyImage").attr("src", "thumbnails/t-duby-" + String(DubyList) + ".jpg");
  });

  var FuzzyTotal = 4;
  var FuzzyList = 1;

  $("#Fuzzy .prev").on("click touchstart", function () {
    FuzzyList = Dec(FuzzyList, FuzzyTotal);
    $("#FuzzyImage").attr("src", "thumbnails/t-fuzzy-" + String(FuzzyList) + ((FuzzyList == 3) ? ".gif" : ".jpg"));
  });
  $("#Fuzzy .next").on("click touchstart", function () {
    FuzzyList = Inc(FuzzyList, FuzzyTotal);
    $("#FuzzyImage").attr("src", "thumbnails/t-fuzzy-" + String(FuzzyList) + ((FuzzyList == 3) ? ".gif" : ".jpg"));
  });

  var ZineTotal = 15;
  var ZineList = 12;

  $("#Zine .prev").on("click touchstart", function () {
    ZineList = Dec(ZineList, ZineTotal);
    $("#ZineImage").attr("src", "zine-116/zine-116-" + ((ZineList < 10) ? ("0" + String(ZineList)) : String(ZineList)) + ".png");
  });
  $("#Zine .next").on("click touchstart", function () {
    ZineList = Inc(ZineList, ZineTotal);
    $("#ZineImage").attr("src", "zine-116/zine-116-" + ((ZineList < 10) ? ("0" + String(ZineList)) : String(ZineList)) + ".png");
  });

  requestAnimationFrame(animateDiv);

  function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height()+100;
    var w = $(window).width()+100;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh-50,nw-50];
  }

  function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
  }

  function animateDiv(){
    $('.dot').each(function(i,obj) {
      var newq = makeNewPosition();
      var oldq = $(obj).offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $(obj).animate({ top: newq[0], left: newq[1] }, speed, function(){
        requestAnimationFrame(animateDiv());
      });
    });
  };

});
