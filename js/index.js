
/*轮播回调事件*/
$('.seekIndex_carousel').on('slid.bs.carousel', function () {
        $(".seekIndex_caption_Cont").css({"transform":"translatey(0px)","transition":"all 1s"})
})

$('.seekIndex_carousel').on('slide.bs.carousel', function () {
        $(".seekIndex_caption_Cont").css({"transform":"translatey(500px)","transition":"none"})
})
/*轮播回调事件*/

/*轮播图片最大化*/
function seekIndex_header(){
   var window_width=$(window).width();
   var window_height=$(window).height();
   $(".seekIndex_header").height(window_height);
   $(".seekIndex_header").width(window_width);
}
seekIndex_header();
/*轮播图片最大化*/

/*改变浏览器大小轮播图片最大化*/
$(window).resize(function(){
   var window_width=$(this).width();
   var window_height=$(this).height();
   $(".seekIndex_header").height(window_height);
   $(".seekIndex_header").width(window_width);
})
/*改变浏览器大小轮播图片最大化*/


/*用户简介*/
var evaluate_num=0;
$(".selected_left").on("click",function(){
	var evaluate=$(".evaluate li");
    if(evaluate_num==0){
    	evaluate_num=evaluate.length-1;
    	evaluate.eq(evaluate_num).fadeIn(500).siblings("li").hide();
    }else{
    	 evaluate_num--;
    	 evaluate.eq(evaluate_num).fadeIn(500).siblings("li").hide();
    }
})

$(".selected_right").on("click",function(){
	var evaluate=$(".evaluate li");
	if(evaluate_num==evaluate.length-1){
          evaluate_num=0;
          evaluate.eq(evaluate_num).fadeIn(500).siblings("li").hide();
	}else{
		 evaluate_num++;
		 evaluate.eq(evaluate_num).fadeIn(500).siblings("li").hide();
	}   
})
/*用户简介*/

/*合作伙伴*/
function friendshipCont(){
   var friendshipCont_ul=$(".friendshipCont ul");
   var friendshipCont_ul_Li=friendshipCont_ul.children().length;
   var friendshipCont_li_width=friendshipCont_ul.children().eq(0).outerWidth(true);
       friendshipCont_ul.width(friendshipCont_ul_Li*friendshipCont_li_width);
       var maxValue=friendshipCont_li_width*5-friendshipCont_ul.width();
      $(".friendship_left").click(function(){
      	if(parseInt(friendshipCont_ul.css("left"))<=maxValue){
      		friendshipCont_ul.css("left",0);
      		friendshipCont_ul.animate({left:"-="+friendshipCont_li_width})
      	}else{
           friendshipCont_ul.animate({left:"-="+friendshipCont_li_width})
      	}
       })
      $(".friendship_right").click(function(){
      	if(parseInt(friendshipCont_ul.css("left"))>=0){
      		friendshipCont_ul.css("left",maxValue);
      		 friendshipCont_ul.animate({left:"+="+friendshipCont_li_width})
      	}else{
      		 friendshipCont_ul.animate({left:"+="+friendshipCont_li_width})
      	}
       })
}
friendshipCont();
/*合作伙伴*/


/*疑问提交*/

var seekErrer=function(msg){
   var seekErrer=$(".seekErrer");
   var seekErrerB=seekErrer.children("b");
       seekErrerB.text(msg);
       seekErrer.animate({top:0},200);
   setTimeout(function(){
       seekErrer.animate({top:-66},200)
   },2000)
}

$(".doubt").on("click",function(){
     var phoneNumber=$("#phoneNumber"),
         name=$("#name"),
         loanType=$("#loanType"),
         gold=$("#gold"),
         question=$("#question"),
         phoneReg=/^1[358]\d{9}$/,
         questionReg=/[\u4e00-\u9fa5]/g;
         if(phoneNumber.val()==''){
           seekErrer("手机号码为空")
         }else if(!phoneNumber.val().match(phoneReg)){
           seekErrer("手机号码格式不正确")
         }else if(name.val()==''){
           seekErrer("姓名为空") 
         }else if(loanType.val()=='借款类型'){
           seekErrer("没有选取借款类型")
         }else if(isNaN(gold.val()) || gold.val()==''){
           seekErrer("金额为非数字")
         }
})
/*疑问提交*/
