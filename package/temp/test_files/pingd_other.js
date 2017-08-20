/*!
* pingd.js v1.8.5
*
* pingd_other.js v1.1.2
*
* Copyright 2013, 1905.com
*
* Date: 2014-08-08 15:04:00
*
* Modified 2016-03-29 15:04:00 (set baidu js to own domain delete ga)
*/
(function other(){bdtj();function bdtj(){var thisdom=location.href.match(/.*?\/([\w-.]+)(\/[\w-.\/]+|\/)?(?:\?(.*))?/)[1];var subid="";if(thisdom=="d.1905.com"){subid="895d65199373ee75eab89dc9c1bacf66"}else if(thisdom=="vip.1905.com"){subid="b44eee64e7c90dde50ff4bbad90eb529"}else if(thisdom=="blog.1905.com"){subid="085a882556a42bb19f647e41334b02ff"}else if(thisdom=="v.1905.com"){subid="dcee2e0a47f371a589c891d4885497a8"}else{subid="49411f7bde52035653f2e2b70a0bb6a5"};var _dmProtocol=(("https:"==document.location.protocol)?" https://":" http://");document.write(unescape("%3Cscript src='"+_dmProtocol+"hm.baidu.com/h.js%3F"+subid+"'type='text/javascript'%3E%3C/script%3E"))}})();var _hmt=_hmt||[];(function bdpt(){function gc(n){var a=document.cookie.match(new RegExp("(^|\\s)"+n+"=([^;]*)(;|$)"));return a==null?"":unescape(a[2])};var luser=gc("WOlTvIlgRpuid")||gc("__uv_")||"";_hmt.push(["_setUserId",luser]);(function(){var hm=document.createElement("script");hm.src="//hm.baidu.com/hm.js?5a9573957327e40b58294447cd1d8ad2";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})()})();