$(function(){

	
	
	
	  $(".tt_f h3").each(function(index){
       $(this).mouseenter(
       function(){
     $(".tt_f h3.on").removeClass("on");
     $(this).addClass("on");
     $(".news_list:visible").hide();
     $(".news_list:eq(" + index + ")").show();
/*mouseleave*/
   })
   })
	
	
	
	
	
	
	
	
	
	
	
 var myChart = echarts.init($('#map')[0]);

	myChart.setOption(option = {
		tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c}'
        },
		
		visualMap: {
            min: 800,
            max: 80000,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#faf9dd','#ddebe3', '#fcedf3', '#d7d8ea']
            }
        },
		
		
		

	series: [{
				type: 'map',
				map: 'shijiazhuang',
				itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
		data:[
            {name: '平山县', value: 17.34},
			{name: '灵寿县', value: 2457.34},
			{name: '行唐县', value: 10257.34},
			{name: '新乐市', value: 25507.34},
			{name: '正定县', value: 64057.34},
			{name: '无极县', value: 12057.34},
			{name: '深泽县', value: 24057.34},
			{name: '晋州市', value: 50057.34},
			{name: '辛集市', value: 20057.34},
			{name: '藁城区', value: 60057.34},
			{name: '长安区', value: 70057.34},
			{name: '新华区', value: 80057.34},
			{name: '鹿泉区', value: 90057.34},
			{name: '井陉矿区', value: 4057.34},
			{name: '井陉县', value: 50057.34},
			{name: '元氏县', value: 60507.34},
			{name: '赞皇县', value: 40057.34},
			{name: '高邑县', value: 70057.34},
			{name: '赵县', value: 30057.34},
			{name: '栾城区', value: 10057.34},
			{name: '裕华区', value: 40057.34},
			{name: '桥西区', value: 50057.34},
			
         
                ],
               
			}]
		});

	
	
})