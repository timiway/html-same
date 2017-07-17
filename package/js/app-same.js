
$(function(){
  $(".same-user-header .menu").click(function(){
    var _side = $(".same-sider");
    var _main = $(".same-main");
    _side.stop(true).animate({left:(_side.position().left<0)?0:-170});
    _main.stop(true).animate({left:(_main.position().left>0)?0:170});
  });
});