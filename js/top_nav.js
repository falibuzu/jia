//头部导航效果	
$(function () {

$(".tp_list li").hover(function(){
	$(this).find(".sub_menu").show();
	},function(){
	$(this).find(".sub_menu").hide();	
})


$(".lk_nav li").hover(function(){

	$(this).find(".lk_box").show();
	},function(){
	$(this).find(".lk_box").hide();
});


});