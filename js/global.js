$(function(){

/*页面初始化*/
 function init(){
    var scrollTop=$(this).scrollTop();//获取滚动条的值
   if(scrollTop>0){
	 	$(".seekIndex_navigation").addClass("seekIndex_navigation_off")
	}else if(scrollTop==0){
	 	$(".seekIndex_navigation").removeClass("seekIndex_navigation_off")
	}
 }
 init()
/*页面初始化*/

/*滚动条事件*/
$(window).on("scroll",function(e){
	 var scrollTop=$(this).scrollTop();//获取滚动条的值
	 var window_width=$(this).width();
	 if(window_width>736){
	 if(scrollTop==0){
	 	$(".seekIndex_navigation").removeClass("seekIndex_navigation_off")
	 }else{
	 	$(".seekIndex_navigation").addClass("seekIndex_navigation_off")
	 }
	 }	 
})
/*滚动条事件*/

/*手机菜单*/
$(".menuBut").click(function(){
	 var navigationButtom=$(".navigationButtom");
	 if(navigationButtom.is(":hidden")){
	 	 navigationButtom.slideDown()
	 }else{
	 	 navigationButtom.slideUp()
	 }
})
/*手机菜单*/

$(window).resize(function(){
var window_width=$(this).width();
 if(window_width>736){
 	$(".navigationButtom").hide()
 }
})




})