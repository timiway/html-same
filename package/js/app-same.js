
$(function(){
  $(".same-menu").click(function(){
    var _side = $(".same-sider");
    var _main = $(".same-slide");
    _side.stop(true).animate({left:(_side.position().left<0)?0:-170});
    _main.stop(true).animate({left:(_main.position().left>0)?0:170});
  });
  $(".same-sider").on("touchmove", function(e) {
    if ($(this).position().left == 0) e.preventDefault();
  });
  $(".same-slide").on("touchstart", function(e) {
    if ($(this).position().left==170) {
        $(".same-menu").click();
        e.preventDefault();
    }
  });
  //
  $("[data-toggle=short]").click(function(e){
    var _icon = $(this).children(".glyphicon").toggleClass("glyphicon-chevron-down");
    $($(this).attr("href")).stop().animate({height:_icon.is(".glyphicon-chevron-down")?"100%":"4em"});
    e.preventDefault();
  });
});