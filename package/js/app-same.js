
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
      $(".same-sider").addClass("container");
      $(".same-list-side a").removeClass("selected");
        e.preventDefault();
    }
  });
  $(".same-list-side a").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    var _m = $($(this).attr("data-submenu"));
    if (_m.size()) {
      _m.css("marginTop", (_m.parent().height()-_m.height())/2).show().siblings().hide();
      $(".same-sider").removeClass("container");
    }
  });
  //
  $("[data-toggle=short]").click(function(e){
    var _icon = $(this).children(".glyphicon").toggleClass("glyphicon-chevron-down");
    $($(this).attr("href")).stop().animate({height:_icon.is(".glyphicon-chevron-down")?"100%":"4em"});
    e.preventDefault();
  });
  //
  $(".post-ticket .btn-group:not(.muted)").click(function(){
    $(this).toggleClass("active").find(".btn:last").text($(this).is(".active")?"已选":"选择");
  });
  //
  $("#link_frame").height($(window).height()-($(".same-media").is(":visible")?$(".same-media").height()+$(".same-bar").height():0));

});