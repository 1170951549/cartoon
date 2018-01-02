$(function(){
	//轮播
	function banner(){
		$.ajax({
			type:"get",
			url:"json/man-bannerFl.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<a href='javascript:;' class='man-banFl-cont-img'>"
							str+="<img src='images/"+msg.img+"' />"
						str+="</a>"
						str+="<a href='javascript:;' class='man-banFl-cont-text'>"+msg.name+"</a>"
					str+="</li>"
				});
				$(".man-banFl-cont ul").append(str);
			}
		});
		$(".man-banFl-btn a").hover(function(){
			$(".man-banFl-btn a").removeClass("man-banFl-btn-active");
			$(this).addClass("man-banFl-btn-active");
			$(".man-banFl-cont li").hide();
			$(".man-banFl-cont li").eq($(".man-banFl-btn a").index($(this))).show();
		});
		var t=setInterval(times,2000);
		var num=0;
		function times(){
			num++;
			if(num>=$(".man-banFl-cont li").length){
				num=0;
			}
			$(".man-banFl-btn a").removeClass("man-banFl-btn-active");
			$(".man-banFl-btn a").eq(num).addClass("man-banFl-btn-active");
			$(".man-banFl-cont li").hide();
			$(".man-banFl-cont li").eq(num).show();
		};
		$(".man-ban-fl").hover(function(){
			clearInterval(t);
		},function(){
			t=setInterval(times,1000);
		})
		//右边
		$.ajax({
			type:"get",
			url:"json/man-bannerFr.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				str+="<li>"
					$.each(data, function(index,msg) {
						if(msg.id>=1 && msg.id<=3){
							str+="<div class='man-btnFr-cont-text'>"
								str+="<a href='javascript:;' class='man-btnFr-cont-text-img'>"
									str+="<img src='images/"+msg.img+"' />"
								str+="</a>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p><a href='javascript:;'>"+msg.up+"</a></p>"
							str+="</div>"
						}
					});
				str+="</li>"
				str+="<li>"
					$.each(data, function(index,msg) {
						if(msg.id>=4 && msg.id<=6){
							str+="<div class='man-btnFr-cont-text'>"
								str+="<a href='javascript:;' class='man-btnFr-cont-text-img'>"
									str+="<img src='images/"+msg.img+"' />"
								str+="</a>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p><a href='javascript:;'>"+msg.up+"</a></p>"
							str+="</div>"
						}
					});
				str+="</li>"
				str+="<li>"
					$.each(data, function(index,msg) {
						if(msg.id>=7 && msg.id<=9){
							str+="<div class='man-btnFr-cont-text'>"
								str+="<a href='javascript:;' class='man-btnFr-cont-text-img'>"
									str+="<img src='images/"+msg.img+"' />"
								str+="</a>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p><a href='javascript:;'>"+msg.up+"</a></p>"
							str+="</div>"
						}
					});
				str+="</li>"
				$(".man-btnFr-cont").append(str);
			}
		});
		var num=0;
		$(".man-btnFr-btn-r").click(function(){
			num++;
			if(num>=$(".man-btnFr-cont li").length){
				num=0;
			}
			$(".man-btnFr-cont li").hide();
			$(".man-btnFr-cont li").eq(num).show();
		});
		$(".man-btnFr-btn-l").click(function(){
			num--;
			if(num<0){
				num=$(".man-btnFr-cont li").length-1;
			}
			$(".man-btnFr-cont li").hide();
			$(".man-btnFr-cont li").eq(num).show();
		});
	}
	banner();
	//看漫画
	function lookCartoon(){
		$.ajax({
			type:"get",
			url:"json/man-lookCartoon.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(data,msg) {
					str+="<a href='javascript:;'>"+msg.name+"</a>"
				});
				$(".man-lookCartoon-fr-text").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/man-lookCartoon1.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(data,msg) {
					str+="<a href='javascript:;'>"+msg.name+"</a>"
				});
				$(".man-lookCartoon-fr-text2").append(str);
			}
		});
		
	}
	lookCartoon();
	//漫画列表
	function cartoonList(){
		$.ajax({
			type:"get",
			url:"json/man-cartoonList1.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<div class='man-cartoonList-text-img'>"
							str+="<a href='javascript:;'>"
								str+="<img src='images/"+msg.img+"'/>"
								str+="<span class='man-cartoonList-text-img-bg'></span>"
							str+="</a>"
							str+="<div class='man-cartoonList-text-name'>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="<a href='javascript:;'>更新至<span>"+msg.up+"</span>话</a>"
							str+="</div>"
						str+="</div>"
						str+="<div class='man-cartoonList-up'>"
							for(var i=0;i<msg.update.length;i++){
								str+="<a href='javascript:;'>"+msg.update[i]+"</a>"
							}
							str+="<a href='javascript:;'>更多章节>></a>"
						str+="</div>"
					str+="</li>"
				});
				$(".man-cartoonList-text1 ul").append(str);
				
			}
		});
		//连载
		$.ajax({
			type:"get",
			url:"json/man-cartoonList2.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<div class='man-cartoonList-text-img'>"
							str+="<a href='javascript:;'>"
								str+="<img src='images/"+msg.img+"'/>"
								str+="<span class='man-cartoonList-text-img-bg'></span>"
							str+="</a>"
							str+="<div class='man-cartoonList-text-name'>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="<a href='javascript:;'>更新至<span>"+msg.up+"</span>话</a>"
							str+="</div>"
						str+="</div>"
						str+="<div class='man-cartoonList-up'>"
							for(var i=0;i<msg.update.length;i++){
								str+="<a href='javascript:;'>"+msg.update[i]+"</a>"
							}
							str+="<a href='javascript:;'>更多章节>></a>"
						str+="</div>"
					str+="</li>"
				});
				$(".man-cartoonList-text2 ul").append(str);
			}
		});
		//完结
			$.ajax({
			type:"get",
			url:"json/man-cartoonList3.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<div class='man-cartoonList-text-img'>"
							str+="<a href='javascript:;'>"
								str+="<img src='images/"+msg.img+"'/>"
								str+="<span class='man-cartoonList-text-img-bg'></span>"
							str+="</a>"
							str+="<div class='man-cartoonList-text-name'>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="<a href='javascript:;'>全<span>"+msg.up+"</span>话</a>"
							str+="</div>"
						str+="</div>"
						str+="<div class='man-cartoonList-up'>"
							for(var i=0;i<msg.update.length;i++){
								str+="<a href='javascript:;'>"+msg.update[i]+"</a>"
							}
							str+="<a href='javascript:;'>更多章节>></a>"
						str+="</div>"
					str+="</li>"
				});
				$(".man-cartoonList-text3 ul").append(str);
			}
		});
		//番外
			$.ajax({
			type:"get",
			url:"json/man-cartoonList4.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<div class='man-cartoonList-text-img'>"
							str+="<a href='javascript:;'>"
								str+="<img src='images/"+msg.img+"'/>"
								str+="<span class='man-cartoonList-text-img-bg'></span>"
							str+="</a>"
							str+="<div class='man-cartoonList-text-name'>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="<a href='javascript:;'>更新至<span>"+msg.up+"</span>话</a>"
							str+="</div>"
						str+="</div>"
						str+="<div class='man-cartoonList-up'>"
							for(var i=0;i<msg.update.length;i++){
								str+="<a href='javascript:;'>"+msg.update[i]+"</a>"
							}
							str+="<a href='javascript:;'>更多章节>></a>"
						str+="</div>"
					str+="</li>"
				});
				$(".man-cartoonList-text4 ul").append(str);
			}
		});
		//全彩
			$.ajax({
			type:"get",
			url:"json/man-cartoonList5.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<div class='man-cartoonList-text-img'>"
							str+="<a href='javascript:;'>"
								str+="<img src='images/"+msg.img+"'/>"
								str+="<span class='man-cartoonList-text-img-bg'></span>"
							str+="</a>"
							str+="<div class='man-cartoonList-text-name'>"
								str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="<a href='javascript:;'>更新至<span>"+msg.up+"</span>话</a>"
							str+="</div>"
						str+="</div>"
						str+="<div class='man-cartoonList-up'>"
							for(var i=0;i<msg.update.length;i++){
								str+="<a href='javascript:;'>"+msg.update[i]+"</a>"
							}
							str+="<a href='javascript:;'>更多章节>></a>"
						str+="</div>"
					str+="</li>"
				});
				$(".man-cartoonList-text5 ul").append(str);
				
			}
		});
		$(window).load(function(){
			$(".man-cartoonList-text-img").hover(function(){
				$(this).children("a").children("span").css("opacity","0.3");
			},function(){
				$(this).children("a").children("span").css("opacity","0");
			});
		});
		$(".man-cartoon-tit li").on("click",function(){
			$(".man-cartoon-tit li").removeClass("man-cartoon-tit-active");
			$(this).addClass("man-cartoon-tit-active");
			$(".man-cartoonList-text").hide();
			$(".man-cartoonList-text").eq($(".man-cartoon-tit li").index($(this))).show();
		});
	}
	cartoonList();
})
