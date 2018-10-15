$(document).ready(function() {

  var today = new Date();
  var month = today.getUTCMonth();
  var day = today.getUTCDate();

  day = day + ((month + 1) * 30.4375);

  $(.earth:after).css('transform', 'rotate('day')');
  
});
