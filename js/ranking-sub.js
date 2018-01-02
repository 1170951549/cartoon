$(function(){
	$(".ranking-sub-list-tit h4 a").on("click",function(){
		$(".ranking-sub-list-tit h4 a").removeClass("ranking-sub-list-tit-active");
		$(this).addClass("ranking-sub-list-tit-active");
		$(".ranking-sub-list-con-list").hide();
		$(".ranking-sub-list-con-list").eq($(".ranking-sub-list-tit h4 a").index($(this))).show();
	});
	//月票
	function ranMonth(){
		$.ajax({
			type:"get",
			url:"json/ranking-sub-1.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list1").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-2.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {
						
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list2").append(str);
			}
		});
	}
	ranMonth();
	//作品打赏
	function ranReward(){
		$.ajax({
			type:"get",
			url:"json/ranking-sub-2.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list3").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-1.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {
						
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list4").append(str);
			}
		});
	}
	ranReward();
	//人气
	function ranMoods(){
		$.ajax({
			type:"get",
			url:"json/ranking-sub-3.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list5").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-1.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {					
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list6").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-2.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {					
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list7").append(str);
			}
		});
	}
	ranMoods();
	//畅销
	function ranBoom(){
		$.ajax({
			type:"get",
			url:"json/ranking-sub-2.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list8").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-1.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {					
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list9").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-3.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {					
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list10").append(str);
			}
		});
	}
	ranBoom();
	//上升
	function ranUp(){
		$.ajax({
			type:"get",
			url:"json/ranking-sub-1.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list11").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-3.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {					
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list12").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-2.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {					
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list13").append(str);
			}
		});
	}
	ranUp();
	//少年
	function ranMan(){
		$.ajax({
			type:"get",
			url:"json/ranking-sub-1.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list14").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-3.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {					
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list15").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-2.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {					
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list16").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-3.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {					
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list17").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-1.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {					
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list18").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-sub-3.json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {					
						if(msg.id>=1 && msg.id<=20){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=40){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=41 && msg.id<=60){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=61 && msg.id<=80){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=81 && msg.id<=100){
							str+="<li>"
								str+="<sub>"+msg.id+"</sub>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".ranking-sub-list-con-list19").append(str);
			}
		});
	}
	ranMan();
})
