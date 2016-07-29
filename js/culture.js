$(function(){ 
var window_width=$(window).width();
 if(window_width>1201){
	$(".culture ul li").mouseenter(function(){
		$(this).addClass('cutRight').siblings("li").removeClass('cutRight')
 })
}
})