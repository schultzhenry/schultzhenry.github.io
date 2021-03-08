$(document).ready(function() {
  // if (window.innerHeight < 980) {
  //   $(".desktop").hide();
  // } else {
  //   $(".desktop").show();
  // }

  // window.onresize = function () {
  //   if (window.innerHeight < 980) {
  //     $(".desktop").hide();
  //   } else {
  //     $(".desktop").show();
  //   }
  // };

  // $.scrollify({
	// 	section:".view",
  //   scrollbars:false,
  //   after:function(i,panels) {
  //     $(".view").each(function(i) {
  //       activeClass = "";
  //       console.log($.scrollify.currentIndex());
  //       if(i===$.scrollify.currentIndex()) {
  //         activeClass = "active";
  //       }
  //       $("#nav"+i).attr("class", activeClass);
  //       $(this).attr("class", "view " + activeClass);
  //     })
  //   }
  // });

  // var sectionLabels = [
  //   "Home",
  //   "Mayor Brandon M. Scott's First 100 Days Tracker",
  //   "Baltimore City COVID-19 Dashboard",
  //   "Federal Judiciary Interactive",
  //   "116th",
  //   "Engender",
  //   "Duby Team",
  //   "Fuzzy Grids II",
  //   "About"];
  //
  // $(".nav div").each(function(i) {
  //   $(this).on("click touchstart", function() {
  //     $.scrollify.move(i);
  //   }).on("mouseover", function () {
  //     $("#pnav" + i).text( sectionLabels[i] );
  //   }).on("mouseleave", function () {
  //     $("#pnav" + i).text( "" );
  //   });
  // });

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

});
