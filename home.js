$(document).ready(function() {

  var today = new Date();
  var day = today.getUTCDate();
  day += (today.getUTCMonth() * 30.4375);

  $(".earth").css('transform', 'rotate(' + day.toString() + 'deg)');

  $(".earth").mouseover(function() {
    $( "#earth-label" ).text("today!");
  });
  $(".earth").mouseout(function() {
    $( "#earth-label" ).text("");
  });
  $(".menuButton").mouseover(function() {
    $("#background, .anchor").css('filter', 'blur(3px)');
  });
  $(".menuButton").mouseover(function() {
    $("*:not(this)").css('filter', 'none');
  });
});
