$(function(){
	//月票榜
	function month(){
		$.ajax({
			type:"get",
			url:"json/ranking-month.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				var str1="";
				var str2="";
				$.each(data, function(index,msg) {
					if(msg.id>=1 && msg.id<=15){
						str+="<li>"
							str+="<em>"+msg.id+"</em>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<strong>"+msg.money+"</strong>"
							str+="<b>"+msg.month+"</b>"
						str+="</li>"
					}
				});
				$(".ranking-month-list1").append(str);
				$.each(data, function(index,msg) {
					if(msg.id>=16 && msg.id<=30){
						str1+="<li>"
							str1+="<em>"+msg.id+"</em>"
							str1+="<a href='javascript:;'>"+msg.name+"</a>"
							str1+="<strong>"+msg.money+"</strong>"
							str1+="<b>"+msg.month+"</b>"
						str1+="</li>"
					}
				});
				$(".ranking-month-list2").append(str1);
				$.each(data, function(index,msg) {
					if(msg.id>=31 && msg.id<=45){
						str2+="<li>"
							str2+="<em>"+msg.id+"</em>"
							str2+="<a href='javascript:;'>"+msg.name+"</a>"
							str2+="<strong>"+msg.money+"</strong>"
							str2+="<b>"+msg.month+"</b>"
						str2+="</li>"
					}
				});
				$(".ranking-month-list3").append(str2);
			}
		});
	}
	month();
	//作品打赏
	function reward(){
		$.ajax({
			type:"get",
			url:"json/ranking-reward-1.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<sub>"+msg.id+"</sub>"
						str+="<a href='javascript:;' class='ranking-reward-fl-list-name'>"+msg.name+"</a>"
						str+="<a href='javascript:;' class='ranking-reward-fl-list-aut'>"+msg.author+"</a>"
						str+="<div class='ranking-reward-fl-list-fans'>"
							for(var i=0;i<=msg.fans.length;i++){
								str+="<a href='javascript:;'>"+msg.fans[i]+"</a>"
							}
						str+="</div>"
					str+="</li>"
				});
				$(".ranking-reward-fl-list ul").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-reward-2.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					str+="<li>"
						str+="<sub>"+msg.id+"</sub>"
						str+="<a href='javascript:;'>"+msg.name+"</a>"
						str+="<span>"+msg.num+"</span>"
					str+="</li>"
				});
				$(".ranking-reward-fr-list").append(str);
			}
		});
	}
	reward();
	//排行榜
	function ranList(){
		$.ajax({
			type:"get",
			url:"json/ranking-ran-list-1.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					if(msg.id==1){
						str+="<li class='ranking-ran-list-eq-con-li'>"
							str+="<a href='javascript:;' class='ranking-ran-list-eq-con-li-img'>"
								str+="<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p>"+msg.exp+"</p>"
								str+="<p>人气: "+msg.rq+"</p>"
							str+="</div>"
						str+="</li>"
					}
					if(msg.id>1){
						str+="<li>"
							str+="<sub>"+msg.id+"</sub>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<span>"+msg.rq+"</span>"
						str+="</li>"
					}

				});
				$(".ranking-ran-list-eq-con-1 ul").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-ran-list-2.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					if(msg.id==1){
						str+="<li class='ranking-ran-list-eq-con-li'>"
							str+="<a href='javascript:;' class='ranking-ran-list-eq-con-li-img'>"
								str+="<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p>"+msg.exp+"</p>"
								str+="<p>人气: "+msg.rq+"</p>"
							str+="</div>"
						str+="</li>"
					}
					if(msg.id>1){
						str+="<li>"
							str+="<sub>"+msg.id+"</sub>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<span>"+msg.rq+"</span>"
						str+="</li>"
					}

				});
				$(".ranking-ran-list-eq-con-2 ul").append(str);
			}
		});
		$.ajax({
			type:"get",
			url:"json/ranking-ran-list-3.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					if(msg.id==1){
						str+="<li class='ranking-ran-list-eq-con-li'>"
							str+="<a href='javascript:;' class='ranking-ran-list-eq-con-li-img'>"
								str+="<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p>"+msg.exp+"</p>"
								str+="<p>人气: "+msg.rq+"</p>"
							str+="</div>"
						str+="</li>"
					}
					if(msg.id>1){
						str+="<li>"
							str+="<sub>"+msg.id+"</sub>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<span>"+msg.rq+"</span>"
						str+="</li>"
					}

				});
				$(".ranking-ran-list-eq-con-3 ul").append(str);
			}
		});
	}
	ranList();
	//分类排行榜
	function ranClas(){
		//少年
		$.ajax({
			type:"get",
			url:"json/ranking-clas-list-eq-1.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					if(msg.id==1){
						str+="<li class='ranking-clas-list-eq-con-li'>"
							str+="<a href='javascript:;' class='ranking-clas-list-eq-con-li-img'>"
								str+="	<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p>"+msg.exp+"</p>"
								str+="<p>人气: "+msg.rq+"</p>"
							str+="</div>"
						str+="</li>"
					}
					if(msg.id>1 && msg.id<=10){
						str+="<li>"
							str+="<sub>"+msg.id+"</sub>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<span>"+msg.rq+"</span>"
						str+="</li>"
					}
				});
				$(".ranking-clas-list-eq-con1 ul").append(str);
			}
		});
		//少女
		$.ajax({
			type:"get",
			url:"json/ranking-clas-list-eq-2.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					if(msg.id==1){
						str+="<li class='ranking-clas-list-eq-con-li'>"
							str+="<a href='javascript:;' class='ranking-clas-list-eq-con-li-img'>"
								str+="	<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p>"+msg.exp+"</p>"
								str+="<p>月票数: "+msg.rq+"</p>"
							str+="</div>"
						str+="</li>"
					}
					if(msg.id>1 && msg.id<=10){
						str+="<li>"
							str+="<sub>"+msg.id+"</sub>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<span>"+msg.rq+"</span>"
						str+="</li>"
					}
				});
				$(".ranking-clas-list-eq-con2 ul").append(str);
			}
		});
		//热血
		$.ajax({
			type:"get",
			url:"json/ranking-clas-list-eq-3.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					if(msg.id==1){
						str+="<li class='ranking-clas-list-eq-con-li'>"
							str+="<a href='javascript:;' class='ranking-clas-list-eq-con-li-img'>"
								str+="	<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p>"+msg.exp+"</p>"
								str+="<p>月票数: "+msg.rq+"</p>"
							str+="</div>"
						str+="</li>"
					}
					if(msg.id>1 && msg.id<=10){
						str+="<li>"
							str+="<sub>"+msg.id+"</sub>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<span>"+msg.rq+"</span>"
						str+="</li>"
					}
				});
				$(".ranking-clas-list-eq-con3 ul").append(str);
			}
		});
		//搞笑四格
		$.ajax({
			type:"get",
			url:"json/ranking-clas-list-eq-4.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					if(msg.id==1){
						str+="<li class='ranking-clas-list-eq-con-li'>"
							str+="<a href='javascript:;' class='ranking-clas-list-eq-con-li-img'>"
								str+="	<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p>"+msg.exp+"</p>"
								str+="<p>月票数: "+msg.rq+"</p>"
							str+="</div>"
						str+="</li>"
					}
					if(msg.id>1 && msg.id<=10){
						str+="<li>"
							str+="<sub>"+msg.id+"</sub>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<span>"+msg.rq+"</span>"
						str+="</li>"
					}
				});
				$(".ranking-clas-list-eq-con4 ul").append(str);
			}
		});
		//恐怖
		$.ajax({
			type:"get",
			url:"json/ranking-clas-list-eq-5.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					if(msg.id==1){
						str+="<li class='ranking-clas-list-eq-con-li'>"
							str+="<a href='javascript:;' class='ranking-clas-list-eq-con-li-img'>"
								str+="	<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p>"+msg.exp+"</p>"
								str+="<p>月票数: "+msg.rq+"</p>"
							str+="</div>"
						str+="</li>"
					}
					if(msg.id>1 && msg.id<=10){
						str+="<li>"
							str+="<sub>"+msg.id+"</sub>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<span>"+msg.rq+"</span>"
						str+="</li>"
					}
				});
				$(".ranking-clas-list-eq-con5 ul").append(str);
			}
		});
		//侦探推理
		$.ajax({
			type:"get",
			url:"json/ranking-clas-list-eq-6.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
					if(msg.id==1){
						str+="<li class='ranking-clas-list-eq-con-li'>"
							str+="<a href='javascript:;' class='ranking-clas-list-eq-con-li-img'>"
								str+="	<img src='images/"+msg.img+"' />"
							str+="</a>"
							str+="<div>"
								str+="<h3><a href='javascript:;'>"+msg.name+"</a></h3>"
								str+="<p>"+msg.exp+"</p>"
								str+="<p>月票数: "+msg.rq+"</p>"
							str+="</div>"
						str+="</li>"
					}
					if(msg.id>1 && msg.id<=10){
						str+="<li>"
							str+="<sub>"+msg.id+"</sub>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<span>"+msg.rq+"</span>"
						str+="</li>"
					}
				});
				$(".ranking-clas-list-eq-con6 ul").append(str);
			}
		});
	}
	ranClas();
})
