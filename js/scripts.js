$(document).ready(function() {
  $(".clickable").click(function() {
    $("#hermit").toggle();
    $("#hidehermit").toggle()
  });
  $(".paragraph").click(function() {
    $("#showme").slideDown();
    $("#hideme").fadeToggle();
  });
});
