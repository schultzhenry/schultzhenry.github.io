$(document).ready(function() {

  $("#up-arrow").mouseover(function() {
    $("#up-arrow").css("margin-bottom", "8px");
  });
  $("#down-arrow").mouseover(function() {
    $("#down-arrow").css("top", "-28px");
  });

  $("#up-arrow").mouseout(function() {
    $("#up-arrow").css("margin-bottom", "0px");
  });
  $("#down-arrow").mouseout(function() {
    $("#down-arrow").css("top", "-36px");
  });

  $("#up-arrow").click(function() {
    $("#up-arrow").css("color", "white");
    $("#header").css("height", "calc(100vh - 72px - 520px)");
    $("#view").css("bottom", "0px");
    $("#up-arrow-symbol").text("");
    $("#up-arrow-symbol").css("cursor", "default");
    $("#down-arrow").css("color", "black");
  });
  $("#down-arrow").click(function() {
    $("#down-arrow").css("color", "white");
    $("#header").css("height", "calc(100vh - 72px)");
    $("#view").css("bottom", "calc(-18px - 520px)");
    $("#up-arrow").css("color", "black");
    $("#up-arrow-symbol").text("↑");
    $("#up-arrow-symbol").css("cursor", "pointer");
  });
});
