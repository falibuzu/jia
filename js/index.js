
	
	
$(function () {
/*
$(".tp_list a").mouseenter(function(){
	$(this).addClass("on").siblings().removeClass("on");			
})*/




$(".ico_play li").hover(function(){

	$(this).find(".ic").stop().animate({width:"0"},"fast").animate({width:"26px"},"fast");
	},function(){
	$(this).find(".ic").stop().animate({width:"0"},"fast").animate({width:"26px"},"fast");
});

/*

$(".new_nav").find( "li").each(function(index){
       $(this).mouseenter(
       function(){
		 $(this).siblings().removeClass("on");
		 $(this).addClass("on");
		 
		 $(this).parent(".new_nav").next(".change_s").find( ".change_box").hide();
		 $(this).parent(".new_nav").next(".change_s").find( ".change_box:eq(" + index + ")").show();
		alert(index)

      })
   })
*/
$(".new_nav").each(function(){
       $(this).find("li").each(function(index){
        $(this).mouseenter(
			function(){
			 if(!$(this).hasClass("on")){ 
			   
			 $(this).siblings().removeClass("on");
			 $(this).addClass("on");
			 
			 $(this).parent(".new_nav").next(".change_s").find( ".change_box").slideUp();
			 $(this).parent(".new_nav").next(".change_s").find( ".change_box:eq(" + index + ")").fadeIn();
			 
			 }
			 
			 })
		
   })
 })


$(".new_nav_s dd").each(function(index){


	$(this).mouseenter(
		function(){
			 if(!$(this).hasClass("on")){ 
			   
			 $(this).siblings().removeClass("on");
			 $(this).addClass("on");
			 
			 $(".new_s_box .change_box2").slideUp();
			 $(".new_s_box .change_box2:eq(" + index + ")").fadeIn();
			 
			 }
			 
			 })
		
})


$('.ad_jdt').hiSlider();



$(".close").click(function(){						   
	$(this).parent().hide(100);					   
})













/*横向滚动广告*/
$(function(){
    var page = 1;
    
	var len = $(".ad_cnt").length;
	var page_count = Math.ceil(len) ;   //只要不是整数，就往大的方向取最小的整数
	var none_unit_width = $(".ad_box").width(); //获取框架内容的宽度,不带单位
	var $parent = $(".move_box"); 
    //向右 按钮
    $(".btn_r").click(function(){ 
		if( !$parent.is(":animated") ){
			if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$parent.animate({ left : 0}, 800); //通过改变left值，跳转到第一个版面
				page = 1;
			}else{
				$parent.animate({ left : '-='+none_unit_width}, 800);  //通过改变left值，达到每次换一个版面
				page++;
			}
		}
   });
    //往左 按钮
    $(".btn_l").click(function(){
	    if( !$parent.is(":animated") ){
			if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
				$parent.animate({ left : '-='+none_unit_width*(page_count-1)}, 800); //通过改变left值，跳转到最后一个版面
				page = page_count;
			}else{
				$parent.animate({ left : '+='+none_unit_width }, 800);  //通过改变left值，达到每次换一个版面
				page--;
			}
		}
    });
});


});