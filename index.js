$(document).ready(function() {

  $('.item-details').hide();

  // Handle expand button clicks
  $(".expand-button").on("click touchstart", function () {
    var that = $(this);
    var thisObj = that.parent().parent();
    var thisID = thisObj.attr('id');
    that.text() == '+' ? that.text('-') : that.text('+');
    $('.item-details').each(function(i, obj) {
      if ($(obj).parent().parent().attr('id') == thisID) {
        let itemDetails = thisObj.children().eq(1).find('.item-details');
        that.text() == '+' ? itemDetails.hide() : itemDetails.show()
          .css({
            'display': 'flex',
            'width': '100%',
            'justify-content': 'space-between'});
        if (itemDetails.attr("class").indexOf("long") > -1) {
          itemDetails.css('flex-direction', 'row');
        } else {
          itemDetails.css('flex-direction', 'column');
        }
      } else {
        $(obj).hide();
        $(obj).parent().parent().children().eq(0).children().eq(0).text('+');
      }
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

});
