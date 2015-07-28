$(document).ready(function() {
  $(".poem").hide();
  $("#start-place").click(function() {
    $(".poem").show();
    $("h1").hide();
  });
});
$(".win").click(function(){
  $("h1").show();
  $(".poem").hide();
});
