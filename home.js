$(document).ready(function() {

  var today = new Date();
  var month = today.getUTCMonth();
  var day = today.getUTCDate();

  day = day + (month * 30.4375);

  console.log('so far so good');
  $(".earth").css('transform', 'rotate(' + day.toString() + 'deg)');

  console.log(day.toString());
  console.log('did it all');
});
