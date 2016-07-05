$(function(){ 
var window_width=$(window).width();
 if(window_width>1201){
	$(".culture ul li").mouseenter(function(){
		$(this).css({width:580}).children('.cultureCont').animate({left:285}).end().siblings().css({width:250}).children(".cultureCont").css({left:0})
 })
}
})