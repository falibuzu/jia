
	
	
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













/*����������*/
$(function(){
    var page = 1;
    
	var len = $(".ad_cnt").length;
	var page_count = Math.ceil(len) ;   //ֻҪ����������������ķ���ȡ��С������
	var none_unit_width = $(".ad_box").width(); //��ȡ������ݵĿ��,������λ
	var $parent = $(".move_box"); 
    //���� ��ť
    $(".btn_r").click(function(){ 
		if( !$parent.is(":animated") ){
			if( page == page_count ){  //�Ѿ������һ��������,�������󣬱�����ת����һ�����档
				$parent.animate({ left : 0}, 800); //ͨ���ı�leftֵ����ת����һ������
				page = 1;
			}else{
				$parent.animate({ left : '-='+none_unit_width}, 800);  //ͨ���ı�leftֵ���ﵽÿ�λ�һ������
				page++;
			}
		}
   });
    //���� ��ť
    $(".btn_l").click(function(){
	    if( !$parent.is(":animated") ){
			if( page == 1 ){  //�Ѿ�����һ��������,�������ǰ��������ת�����һ�����档
				$parent.animate({ left : '-='+none_unit_width*(page_count-1)}, 800); //ͨ���ı�leftֵ����ת�����һ������
				page = page_count;
			}else{
				$parent.animate({ left : '+='+none_unit_width }, 800);  //ͨ���ı�leftֵ���ﵽÿ�λ�һ������
				page--;
			}
		}
    });
});


});