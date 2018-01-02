$(function(){
	//最近更新
	function update(){
		$.ajax({
			type:"get",
			url:"json/fiction-update.json",
			datatype:"json",
			async:true,
			success:function(data){
				var str="";
				str+="<ul class='clearfix'>"
					$.each(data, function(index,msg) {
						if(msg.id>=1 && msg.id<=10){
							str+="<li>"
								str+="<a href='javascript:;' class='fiction-update-list-img'>"
									str+="<img src='images/"+msg.img+"' />"
									str+="<span class='hover-bg'></span>"
									str+="<span class='fiction-update-list-span'>"+msg.update+"</span>"
								str+="</a>"
								str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
								str+="<p>"+msg.des+"</p>"
								str+="<p>"
									for(var i=0;i<msg.clas.length;i++){
										str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
									}
								str+="</p>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul class='clearfix'>"
					$.each(data, function(index,msg) {
						if(msg.id>=11 && msg.id<=20){
							str+="<li>"
								str+="<a href='javascript:;' class='fiction-update-list-img'>"
									str+="<img src='images/"+msg.img+"' />"
									str+="<span class='hover-bg'></span>"
									str+="<span class='fiction-update-list-span'>"+msg.update+"</span>"
								str+="</a>"
								str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
								str+="<p>"+msg.des+"</p>"
								str+="<p>"
									for(var i=0;i<msg.clas.length;i++){
										str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
									}
								str+="</p>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul class='clearfix'>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=30){
							str+="<li>"
								str+="<a href='javascript:;' class='fiction-update-list-img'>"
									str+="<img src='images/"+msg.img+"' />"
									str+="<span class='hover-bg'></span>"
									str+="<span class='fiction-update-list-span'>"+msg.update+"</span>"
								str+="</a>"
								str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
								str+="<p>"+msg.des+"</p>"
								str+="<p>"
									for(var i=0;i<msg.clas.length;i++){
										str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
									}
								str+="</p>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".fiction-update-list").append(str);
				$(".fiction-update-list-img").hover(function(){
						$(this).children(".hover-bg").css("opacity","0.3");
						$(this).css("border","1px solid #f06d00");
						
					},function(){
						$(this).children(".hover-bg").css("opacity","0");
						$(this).css("border","1px solid #bebebe");
				});
			}
		});
		$(".fiction-update-head-btn a").on("click",function(){
			$(".fiction-update-head-btn a").removeClass("fiction-update-head-btn-active");
			$(this).addClass("fiction-update-head-btn-active");
			$(".fiction-update-list ul").hide();
			$(".fiction-update-list ul").eq($(".fiction-update-head-btn a").index($(this))).show();
		});
	}
	update();
	//分类
	function classify(){
		$.ajax({
			type:"get",
			url:"json/fiction-classify-con-1.json",
			datatype:"json",
			async:true,
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;' class='fiction-classify-con-img'>"
							str+="<img src='images/"+msg.img+"' />"
							str+="<span class='hover-bg'></span>"
							str+="<span class='fiction-classify-con-up'>"+msg.update+"</span>"
						str+="</a>"
						str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
						str+="<p>"+msg.des+"</p>"
					str+="</li>"
				});
				$(".fiction-classify-con-1").append(str);
			}
		});
		//玄幻战斗
		$.ajax({
			type:"get",
			url:"json/fiction-classify-con-2.json",
			datatype:"json",
			async:true,
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;' class='fiction-classify-con-img'>"
							str+="<img src='images/"+msg.img+"' />"
							str+="<span class='hover-bg'></span>"
							str+="<span class='fiction-classify-con-up'>"+msg.update+"</span>"
						str+="</a>"
						str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
						str+="<p>"+msg.des+"</p>"
					str+="</li>"
				});
				$(".fiction-classify-con-2").append(str);
			}
		});
		//青春生活
		$.ajax({
			type:"get",
			url:"json/fiction-classify-con-3.json",
			datatype:"json",
			async:true,
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;' class='fiction-classify-con-img'>"
							str+="<img src='images/"+msg.img+"' />"
							str+="<span class='hover-bg'></span>"
							str+="<span class='fiction-classify-con-up'>"+msg.update+"</span>"
						str+="</a>"
						str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
						str+="<p>"+msg.des+"</p>"
					str+="</li>"
				});
				$(".fiction-classify-con-3").append(str);
			}
		});
		//更新列表
		$.ajax({
			type:"get",
			url:"json/fiction-upList.json",
			async:true,
			datatype:"jsoan",
			success:function(data){
				var str="";
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=1 && msg.id<=10){
							str+="<li>"
								str+="<p class='fiction-upList-con-text1'>"
									str+="<span>【"
										for(var i=0;i<msg.clas.length;i++){
											str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
										}
									str+="】</span>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
									str+="<a href='javascript:;'>["+msg.up+"]</a>"
								str+="<p>"
								str+="<p class='fiction-upList-con-text2'>"
									str+="<span>"+msg.zz+"</span>"
									str+="<span>"+msg.time+"</span>"
								str+="<p>"
							str+="</li>"
						}
					});
				str+="</ul>"
				//
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=11 && msg.id<=20){
							str+="<li>"
								str+="<p class='fiction-upList-con-text1'>"
									str+="<span>【"
										for(var i=0;i<msg.clas.length;i++){
											str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
										}
									str+="】</span>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
									str+="<a href='javascript:;'>["+msg.up+"]</a>"
								str+="<p>"
								str+="<p class='fiction-upList-con-text2'>"
									str+="<span>"+msg.zz+"</span>"
									str+="<span>"+msg.time+"</span>"
								str+="<p>"
							str+="</li>"
						}
					});
				str+="</ul>"
				str+="<ul>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=30){
							str+="<li>"
								str+="<p class='fiction-upList-con-text1'>"
									str+="<span>【"
										for(var i=0;i<msg.clas.length;i++){
											str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
										}
									str+="】</span>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
									str+="<a href='javascript:;'>["+msg.up+"]</a>"
								str+="<p>"
								str+="<p class='fiction-upList-con-text2'>"
									str+="<span>"+msg.zz+"</span>"
									str+="<span>"+msg.time+"</span>"
								str+="<p>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".fiction-upList-con").append(str);
				$(".fiction-upList-con li:odd").css("backgroundColor","#fafafa");
			}
		});
		$(".fiction-upList-head-btn a").on("click",function(){
			$(".fiction-upList-head-btn a").removeClass("fiction-upList-head-btn-active");
			$(this).addClass("fiction-upList-head-btn-active");
			$(".fiction-upList-con ul").hide();
			$(".fiction-upList-con ul").eq($(".fiction-upList-head-btn a").index($(this))).show();
		});
	}
	classify();
	//排行榜
	function conFr(){
		$.ajax({
			type:"get",
			url:"json/fiction-conFr-list-1.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<em>"+msg.id+"</em>"
						str+="<a href='javascript:;'>"+msg.name+"</a>"
						str+="<span>"+msg.rq+"</span>"
						str+="<div class='fiction-conFr-list-con-text'>"
							str+="<a href='javascript:;'>"
								str+="<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div class='fiction-conFr-list-con-text-fr'>"
								str+="<p><a href='javascript:;'>"+msg.name+"</a></p>"
								str+="<p>"+msg.des+"</p>"
								str+="<span>人气值："+msg.rq+"</span>"
							str+="</div>"
						str+="</div>"
					str+="</li>"
				});
				$(".fiction-conFr-list-con1 ul").append(str);
				
				$(".fiction-conFr-list-con1 li").eq(0).addClass("active");
				$(".fiction-conFr-list-con1 li").hover(function(){
					$(".fiction-conFr-list-con1 li").removeClass("active");
					$(this).addClass("active");
					$(".fiction-conFr-list-con1 .fiction-conFr-list-con-text").hide();
					$(this).children(".fiction-conFr-list-con1 .fiction-conFr-list-con-text").show();
				});
			}
		});
		//收藏排行
		$.ajax({
			type:"get",
			url:"json/fiction-conFr-list-2.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<em>"+msg.id+"</em>"
						str+="<a href='javascript:;'>"+msg.name+"</a>"
						str+="<div class='fiction-conFr-list-con-text'>"
							str+="<a href='javascript:;'>"
								str+="<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div class='fiction-conFr-list-con-text-fr'>"
								str+="<p><a href='javascript:;'>"+msg.name+"</a></p>"
								str+="<p>"+msg.des+"</p>"
							str+="</div>"
						str+="</div>"
					str+="</li>"
				});
				$(".fiction-conFr-list-con2 ul").append(str);
				
				$(".fiction-conFr-list-con2 li").eq(0).addClass("active");
				$(".fiction-conFr-list-con2 li").hover(function(){
					$(".fiction-conFr-list-con2 li").removeClass("active");
					$(this).addClass("active");
					$(".fiction-conFr-list-con2 .fiction-conFr-list-con-text").hide();
					$(this).children(".fiction-conFr-list-con2 .fiction-conFr-list-con-text").show();
				});
			}
		});
		//女生最爱
		$.ajax({
			type:"get",
			url:"json/fiction-conFr-list-3.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<em>"+msg.id+"</em>"
						str+="<a href='javascript:;'>"+msg.name+"</a>"
						str+="<div class='fiction-conFr-list-con-text'>"
							str+="<a href='javascript:;'>"
								str+="<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div class='fiction-conFr-list-con-text-fr'>"
								str+="<p><a href='javascript:;'>"+msg.name+"</a></p>"
								str+="<p>"+msg.des+"</p>"
							str+="</div>"
						str+="</div>"
					str+="</li>"
				});
				$(".fiction-conFr-list-con3 ul").append(str);
				
				$(".fiction-conFr-list-con3 li").eq(0).addClass("active");
				$(".fiction-conFr-list-con3 li").hover(function(){
					$(".fiction-conFr-list-con3 li").removeClass("active");
					$(this).addClass("active");
					$(".fiction-conFr-list-con3 .fiction-conFr-list-con-text").hide();
					$(this).children(".fiction-conFr-list-con3 .fiction-conFr-list-con-text").show();
				});
			}
		});
		//男生最爱
		$.ajax({
			type:"get",
			url:"json/fiction-conFr-list-4.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<em>"+msg.id+"</em>"
						str+="<a href='javascript:;'>"+msg.name+"</a>"
						str+="<div class='fiction-conFr-list-con-text'>"
							str+="<a href='javascript:;'>"
								str+="<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div class='fiction-conFr-list-con-text-fr'>"
								str+="<p><a href='javascript:;'>"+msg.name+"</a></p>"
								str+="<p>"+msg.des+"</p>"
							str+="</div>"
						str+="</div>"
					str+="</li>"
				});
				$(".fiction-conFr-list-con4 ul").append(str);
				
				$(".fiction-conFr-list-con4 li").eq(0).addClass("active");
				$(".fiction-conFr-list-con4 li").hover(function(){
					$(".fiction-conFr-list-con4 li").removeClass("active");
					$(this).addClass("active");
					$(".fiction-conFr-list-con4 .fiction-conFr-list-con-text").hide();
					$(this).children(".fiction-conFr-list-con4 .fiction-conFr-list-con-text").show();
				});
			}
		});
			
	}
	conFr();
})
$(window).load(function(){
	$(".fiction-classify-con .fiction-classify-con-img").hover(function(){
		$(this).children(".hover-bg").css("opacity","0.3");
		$(this).css("border","1px solid #f06d00");
	},function(){
		$(this).children(".hover-bg").css("opacity","0");
		$(this).css("border","1px solid #bebebe");
	});
});
