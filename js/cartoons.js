$(function(){
	//内容1
	function cartoonsCon(){
		$.ajax({
			type:"get",
			url:"json/cartoons-con1.json",
			async:true,
			datatype:"json",
			success:function(data){
				var week1="";
				$.each(data, function(index,msg) {
					week1+="<li>"
						week1+="<a href='javascript:;'>"+msg.name+"</a>"
						week1+="<div class='cartoons-con1-tit-none'>"
							week1+="<a href='javascript:;'><img src='images/"+msg.img+"'/></a>"
							week1+="<p>"+msg.name+"</p>"
						week1+="</div>"
					week1+="</li>"
				});
				$(".cartoons-con1-tit ul").append(week1);
				
				$(".cartoons-con1-tit li").hover(function(){
					$(".cartoons-con1-tit li").children(".cartoons-con1-tit-none").hide();
					$(this).children(".cartoons-con1-tit-none").show();
				
					$(".cartoons-con1-tit li").children("a").css("color","#c2eeff");
					$(this).children("a").css("color","#ffb74a");
				},function(){
					$(".cartoons-con1-tit li").children("a").css("color","#c2eeff");
					$(".cartoons-con1-tit li").children(".cartoons-con1-tit-none").hide();
				});
			}
		});
		
		//hover
		$(".cartoons-con1-list-li>a").hover(function(){
			$(".cartoons-con1-list-li>a").removeClass("cartoons-con1-list-li-active");
			$(this).addClass("cartoons-con1-list-li-active");
		},function(){
			$(".cartoons-con1-list-li>a").removeClass("cartoons-con1-list-li-active");
		});
		$(".cartoons-con1-list-li2>div a").hover(function(){
			$(".cartoons-con1-list-li2>div a").removeClass("cartoons-con1-list-lis-active");
			$(this).addClass("cartoons-con1-list-lis-active");
		},function(){
			$(".cartoons-con1-list-li2>div a").removeClass("cartoons-con1-list-lis-active");
		});
		$(".cartoons-con1-list-li3>div a").hover(function(){
			$(".cartoons-con1-list-li3>div a").removeClass("cartoons-con1-list-lis-active");
			$(this).addClass("cartoons-con1-list-lis-active");
		},function(){
			$(".cartoons-con1-list-li3>div a").removeClass("cartoons-con1-list-lis-active");
		});
	}
	cartoonsCon();
	//内容二
	function cartoonsCon2(){
		$.ajax({
			type:"get",
			url:"json/cartoons-week.json",
			async:true,
			datatype:"json",
			success:function(data){
				var week1="";
				var week2="";
				var week3="";
				var week4="";
				var week5="";
				//星期1
				$.each(data, function(index,msg) {
					if(msg.week==1){
						week1+="<li>"
							week1+="<a href='javascript:;'>"
								week1+="<img src='images/"+msg.img+"' />"
								week1+="<p class='cartoons-con2-weekBox-name'>"+msg.name+"</p>"
								week1+="<p class='cartoons-con2-weekBox-js'>"+msg.jies+"</p>"
								week1+="<span></span>"
								week1+=""
							week1+="</a>"
						week1+="</li>"
					}
				});
				//星期2
				$.each(data, function(index,msg) {
					if(msg.week==2){
						week2+="<li>"
							week2+="<a href='javascript:;'>"
								week2+="<img src='images/"+msg.img+"' />"
								week2+="<p class='cartoons-con2-weekBox-name'>"+msg.name+"</p>"
								week2+="<p class='cartoons-con2-weekBox-js'>"+msg.jies+"</p>"
								week2+="<span></span>"
								week2+=""
							week2+="</a>"
						week2+="</li>"
					}
				});
				//星期3
				$.each(data, function(index,msg) {
					if(msg.week==3){
						week3+="<li>"
							week3+="<a href='javascript:;'>"
								week3+="<img src='images/"+msg.img+"' />"
								week3+="<p class='cartoons-con2-weekBox-name'>"+msg.name+"</p>"
								week3+="<p class='cartoons-con2-weekBox-js'>"+msg.jies+"</p>"
								week3+="<span></span>"
								week3+=""
							week3+="</a>"
						week3+="</li>"
					}
				});
				//星期4
				$.each(data, function(index,msg) {
					if(msg.week==4){
						week4+="<li>"
							week4+="<a href='javascript:;'>"
								week4+="<img src='images/"+msg.img+"' />"
								week4+="<p class='cartoons-con2-weekBox-name'>"+msg.name+"</p>"
								week4+="<p class='cartoons-con2-weekBox-js'>"+msg.jies+"</p>"
								week4+="<span></span>"
								week4+=""
							week4+="</a>"
						week4+="</li>"
					}
				});
				//星期5
				$.each(data, function(index,msg) {
					if(msg.week==5){
						week5+="<li>"
							week5+="<a href='javascript:;'>"
								week5+="<img src='images/"+msg.img+"' />"
								week5+="<p class='cartoons-con2-weekBox-name'>"+msg.name+"</p>"
								week5+="<p class='cartoons-con2-weekBox-js'>"+msg.jies+"</p>"
								week5+="<span></span>"
								week5+=""
							week5+="</a>"
						week5+="</li>"
					}
				});
				$(".cartoons-con2-week-list1").append(week1);
				$(".cartoons-con2-week-list2").append(week2);
				$(".cartoons-con2-week-list3").append(week3);
				$(".cartoons-con2-week-list4").append(week4);
				$(".cartoons-con2-week-list5").append(week5);
				
				$(".cartoons-con2-weekBox ul li").hover(function(){
					$(".cartoons-con2-weekBox ul li").css("border","1px solid transparent");
					$(this).css("border","1px solid #ffb74a");
				},function(){
					$(".cartoons-con2-weekBox ul li").css("border","1px solid transparent");
				});
			}
		});
	}
	cartoonsCon2();
	//内容3
	function cartoonsCon3(){
		$.ajax({
			type:"get",
			url:"json/cartoons-ban.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=1 && msg.id<=8){
							str+="<li>"
								str+="<a href='javascript:;'><img src='images/"+msg.img+"'/></a>"
								str+="<div class='cartoons-con3-ban-text'>"
									str+="<p>"+msg.name+"</p>"
									str+="<p>"+msg.exp+"</p>"
								str+="<div>"
							str+="</li>"
						}
					});
				str+="</ul>"
				//
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=9 && msg.id<=16){
							str+="<li>"
								str+="<a href='javascript:;'><img src='images/"+msg.img+"'/></a>"
								str+="<div class='cartoons-con3-ban-text'>"
									str+="<p>"+msg.name+"</p>"
									str+="<p>"+msg.exp+"</p>"
								str+="<div>"
							str+="</li>"
						}
					});
				str+="</ul>"
				//
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=17){
							str+="<li>"
								str+="<a href='javascript:;'><img src='images/"+msg.img+"'/></a>"
								str+="<div class='cartoons-con3-ban-text'>"
									str+="<p>"+msg.name+"</p>"
									str+="<p>"+msg.exp+"</p>"
								str+="<div>"
							str+="</li>"
						}
					});
				str+="</ul>"
				
				$(".cartoons-con3-ban").append(str);
				//轮播
				var ulWidth=$(".cartoons-con3-ban ul").eq(0).width();
				var num=0;
				$(".cartoons-con3-btnR").on("click",function(){
					if(num>=ulWidth*3){
						num=0;
					};
					$(".cartoons-con3-ban").css("left",-num);
					num+=ulWidth;
				});
				
				$(".cartoons-con3-btnL").on("click",function(){
					if(num<0){
						num=ulWidth*2;
					};
					console.log(num)
					$(".cartoons-con3-ban").css("left",-num);
					num-=ulWidth;
				});
				//hover
				$(".cartoons-con3-ban li>a").hover(function(){
					$(".cartoons-con3-ban li>a").removeClass("cartoons-con3-ban-active");
					$(this).addClass("cartoons-con3-ban-active");
				},function(){
					$(".cartoons-con3-ban li>a").removeClass("cartoons-con3-ban-active");
				});
			}
			
		});
	}
	cartoonsCon3();
})
