
	
	
$(function () {
/*
$(".tp_list a").mouseenter(function(){
	$(this).addClass("on").siblings().removeClass("on");			
})*/
$(".tp_list li").hover(function(){
	$(this).find(".sub_menu").show();
	},function(){
	$(this).find(".sub_menu").hide();	
})




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
			 $(this).siblings().removeClass("on");
			 $(this).addClass("on");
			 
			 $(this).parent(".new_nav").next(".change_s").find( ".change_box").slideUp();
			 $(this).parent(".new_nav").next(".change_s").find( ".change_box:eq(" + index + ")").fadeIn();
			
	
		 })
   })
 })
$('.ad_jdt').hiSlider();

});