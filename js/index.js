$(function() {
	//搜索条目
	function seek() {
		$.ajax({
			type: "get",
			url: "json/in-seek-list.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = "";
				$.each(data, function(index, msg) {
					str += "<li class='clearfix'>"
					str += "<em class='seek-list-id'>" + msg.id + "</em>"
					str += "<a href='javascript:;' class='seek-list-name'>" + msg.name + "</a>"
					str += "<span class='seek-list-up'>更新至[" + msg.update + "]话</span>"
					str += "<div class='seek-list-cont clearfix'>"
					str += "<a href='javascript:;' class='seek-list-img'>"
					str += "<img src='images/" + msg.images + "' />"
					str += "</a>"
					str += "<div class='seek-list-cont-r'>"
					str += "<a href='javascript:;'>" + msg.name + "</a>"
					str += "<p class='seek-list-cont-aut'>作者: " + msg.author + "</p>"
					str += "<div class='seek-list-cont-type clearfix'>"
					for(var i = 0; i < msg.types.length; i++) {
						str += "<a href='javascript:;'>" + msg.types[i] + "</a>"
					}
					str += "</div>"
					str += "<div class='seek-list-cont-num clearfix'>"
					for(var i = 0; i < msg.num.length; i++) {
						str += "<a href='javascript:;'>" + msg.num[i] + "</a>"
					}
					str += "</div>"
					str += "</div>"
					str += "</div>"
					str += "</li>"
				});
				$(".seek-list ul").append(str);
			},
		});
		//所搜快捷
		$.ajax({
			type: "get",
			url: "json/top-seek-ul.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = "";
				$.each(data, function(index, msg) {
					str += "<li><a href='javascript:;'>" + msg.name + "</a></li>"
				});
				$(".top-seek-ul").append(str);
			}
		});
		//获取焦点
		$(".top-seek").on("focus", function() {
			$(".seek-list").show();
			$(".seek-list li").hover(function() {
				$(this).addClass("active");
				$(this).children(".seek-list-cont").show();
			}, function() {
				$(this).removeClass("active");
				$(this).children(".seek-list-cont").hide();
			});
		});
		//失去焦点 搜索框
		$(".top-seek").on("blur", function() {
			$(".seek-list").hide();
		});
		$(".seek-list").css({
			width: $(".top-seek").width(),
			top: $(".top-seek").offset().top + $(".top-seek").height(),
			left: $(".top-seek").offset().left,
		});

	};
	seek();

	//独家动画
	function alone() {
		$.ajax({
			type: "get",
			url: "json/in-alone-list.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = ""
				$.each(data, function(index, msg) {
					str += "<li>"
					str += "<a href='javascript:;'>" + msg.name + "</a>"
					str += "<div class='in-alone-list'>"
					str += "<span class='jianjiao'></span>"
					str += "<a href='javascript:;' class='in-alone-img'>"
					str += "<img src='images/" + msg.images + "' />"
					str += "<span>第" + msg.updata + "集</span>"
					str += "</a>"
					str += "<div class='in-alone-text1 clearfix'>"
					str += "<a href='javascript:;' class='in-alone-text1-name fl'>" + msg.name + "</a>"
					str += "<a href='javascript:;' class='in-alone-text1-up fr'>更新至第" + msg.updata + "集</a>"
					str += "</div>"
					str += "<div class='in-alone-text2'>"
					str += "<p>播放量" + msg.play + "</p>"
					str += "<a href='javascript:;'>全部剧情</a>"
					str += "</div>"
					str += "<div class='in-alone-text3 clearfix'>"
					for(var i = 0; i < msg.num.length; i++) {
						str += "<a href='javascript:;'>[" + msg.num[i] + "]</a>"
					}
					str += "</div>"
					str += "</div>"
					str += "</li>"
				});
				$(".in-alone ul").append(str);
				//hover上去显示下面
				$(".in-alone ul li").hover(function() {
					$(this).children(".in-alone-list").show();
				}, function() {
					$(this).children(".in-alone-list").hide();
				});
			}
		});
	}
	alone();

	//轮播
	function banner() {
		$.ajax({
			type: "get",
			url: "json/in-banner-fl.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = ""
					//第一页轮播
				str += "<li>"
				$.each(data, function(index, msg) {
					if(msg.id == 1) {
						str += "<a href='javascript:;' class='in-banner-fl-a1'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<p class='in-banner-fl-text'>"
						str += "<strong>" + msg.name + "</strong>"
						str += "<span>" + msg.exp + "</span>"
						str += "<i></i>"
						str += "</p>"
						str += "<span class='in-ban-name'>《" + msg.name + "》</span>"
						str += "<span class='in-ban-bg'></span>"
						str += "</a>"
					}
				});
				str += "</li>"
					//第二页轮播
				str += "<li class='in-banner-fl-li2'>"
				$.each(data, function(index, msg) {
					if(msg.id > 1 && msg.id <= 6) {
						str += "<a href='javascript:;' class='in-banner-fl-a1'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<p class='in-banner-fl-text'>"
						str += "<strong>" + msg.name + "</strong>"
						str += "<span>" + msg.exp + "</span>"
						str += "<i></i>"
						str += "</p>"
						str += "<span class='in-ban-name'>《" + msg.name + "》</span>"
						str += "<span class='in-ban-bg'></span>"
						str += "</a>"
					}
				});
				str += "</li>"
					//第三页轮播
				str += "<li class='in-banner-fl-li3'>"
				$.each(data, function(index, msg) {
					if(msg.id > 6 && msg.id <= 11) {
						str += "<a href='javascript:;' class='in-banner-fl-a1'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<p class='in-banner-fl-text'>"
						str += "<strong>" + msg.name + "</strong>"
						str += "<span>" + msg.exp + "</span>"
						str += "<i></i>"
						str += "</p>"
						str += "<span class='in-ban-name'>《" + msg.name + "》</span>"
						str += "<span class='in-ban-bg'></span>"
						str += "</a>"
					}
				});
				str += "</li>"
				$(".in-banner-fl ul").append(str);
				//hover上去出现图片遮罩
				$(".in-banner-fl a").hover(function() {
					$(this).children(".in-ban-bg").css({
						"opacity": "0.5",
						"z-index": "5"
					});
					$(this).children(".in-banner-fl-text").css({
						"display": "block",
						"z-index": "10",
					});
					$(this).children(".in-ban-name").hide();
				}, function() {
					$(this).children(".in-ban-bg").css({
						"opacity": "0",
						"z-index": "-1"
					});
					$(this).children(".in-banner-fl-text").css({
						"display": "none",
						"z-index": "0",
					});
					$(this).children(".in-ban-name").show();
				})
			}
		});
		//左右按钮
		var num = 0;
		$(".in-banner-btnL").on("click", function() {
			num--;
			if(num < 0) {
				num = $(".in-banner-fl li").length - 1;
			}
			$(".in-banner-fl li").fadeOut();
			$(".in-banner-fl li").eq(num).fadeIn();
		})
		$(".in-banner-btnR").on("click", function() {
			num++;
			if(num >= $(".in-banner-fl li").length) {
				num = 0;
			}
			$(".in-banner-fl li").fadeOut();
			$(".in-banner-fl li").eq(num).fadeIn();
		})
	}
	banner();

	function bannerFr() {
		//国漫
		$.ajax({
			type: "get",
			url: "json/in-ban-frTop1.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = ""
				str += "<ul class='fl'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 1 && msg.id <= 8) {
						str += "<li class='clearfix'>"
						str += "<em>" + msg.id + "</em>"
						str += "<a href='javascript:;'>" + msg.name + "</a>"
						str += "</li>"
					}
				});
				str += "</ul>"

				str += "<ul class='fl'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 9 && msg.id <= 16) {
						str += "<li class='clearfix'>"
						str += "<em>" + msg.id + "</em>"
						str += "<a href='javascript:;'>" + msg.name + "</a>"
						str += "</li>"
					}
				});
				str += "</ul>"

				$(".in-ban-frCon-text1").append(str);
			}
		});
		//日漫
		$.ajax({
			type: "get",
			url: "json/in-ban-frTop2.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = ""
				str += "<ul class='fl'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 1 && msg.id <= 8) {
						str += "<li class='clearfix'>"
						str += "<em>" + msg.id + "</em>"
						str += "<a href='javascript:;'>" + msg.name + "</a>"
						str += "</li>"
					}
				});
				str += "</ul>"

				str += "<ul class='fl'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 9 && msg.id <= 16) {
						str += "<li class='clearfix'>"
						str += "<em>" + msg.id + "</em>"
						str += "<a href='javascript:;'>" + msg.name + "</a>"
						str += "</li>"
					}
				});
				str += "</ul>"
				$(".in-ban-frCon-text2").append(str);
			}
		});
		//综合
		$.ajax({
			type: "get",
			url: "json/in-ban-frTop3.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = ""
				str += "<ul class='fl'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 1 && msg.id <= 8) {
						str += "<li class='clearfix'>"
						str += "<em>" + msg.id + "</em>"
						str += "<a href='javascript:;'>" + msg.name + "</a>"
						str += "</li>"
					}
				});
				str += "</ul>"

				str += "<ul class='fl'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 9 && msg.id <= 16) {
						str += "<li class='clearfix'>"
						str += "<em>" + msg.id + "</em>"
						str += "<a href='javascript:;'>" + msg.name + "</a>"
						str += "</li>"
					}
				});
				str += "</ul>"

				$(".in-ban-frCon-text3").append(str);
			}
		});
		//推荐
		$.ajax({
			type: "get",
			url: "json/in-ban-frBot.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = ""
				$.each(data, function(index, msg) {
					str += "<li class='clearfix'>"
					str += "<i></i>"
					str += "<a href='javascript:;'>" + msg.name + "</a>"
					str += "</li>"
				});
				$(".in-ban-frBot ul").append(str);
			}
		});
		//选项卡
		$(".in-ban-frTop a").hover(function() {
			$(".in-ban-frTop a").removeClass("ban-active");
			$(this).addClass("ban-active");
			$(".in-ban-frCon div").hide();
			$(".in-ban-frCon div").eq($(".in-ban-frTop a").index($(this))).show()
		})
	}
	bannerFr();

	//强档推荐
	function inStrong() {
		$.ajax({
			type: "get",
			url: "json/in-strong.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = "";
				$.each(data, function(index, msg) {
					str += "<li>"
					str += "<a href='javascript:;' class='in-strong-list-img'>"
					str += "<img src='images/" + msg.images + "'/>"
					str += "<span class='in-strong-list-imgSpan'>更新至" + msg.updata + "话</span>"
					str += "<span class='in-strong-list-imgBg'></span>"
					str += "</a>"
					str += "<h5 class='in-strong-list-h'>"
					str += "<a href='javascript:;'>" + msg.name + "</a>"
					str += "</h5>"
					str += "<p>" + msg.recom + "</p>"
					str += "<p class='in-strong-list-p'>"
					for(var i = 0; i < msg.types.length; i++) {
						str += "<a href='javascript:;'>" + msg.types[i] + "</a>"
					}
					str += "</p>"
					str += "</li>"
				});
				$(".in-strong-list ul").append(str);
				//hover图片
				$(".in-strong-list-img").hover(function() {
					$(this).children(".in-strong-list-imgBg").css({
						"opacity": "0.1",
						"z-index": 1,
					});
					$(this).css("border", "1px solid #ff9a6a");
				}, function() {
					$(this).children(".in-strong-list-imgBg").css({
						"opacity": "0",
						"z-index": -1
					});
					$(this).css("border", "1px solid #e5e3e1");
				});
			}
		});
		//按钮
		var num = 0;
		$(".in-strong-btn").on("click", function() {
			num -= 620;
			if(num == -3720) {
				num = 0;
			}
			if(num == 0) {
				$(".in-strong-title-btn a").removeClass("in-strong-active");
				$(".in-strong-title-btn a").eq(0).addClass("in-strong-active");
			} else if(num == -1240) {
				$(".in-strong-title-btn a").removeClass("in-strong-active");
				$(".in-strong-title-btn a").eq(1).addClass("in-strong-active");
			} else if(num == -2480) {
				$(".in-strong-title-btn a").removeClass("in-strong-active");
				$(".in-strong-title-btn a").eq(2).addClass("in-strong-active");
			}
			$(".in-strong-list ul").css("transform", "translateX(" + num + "px)");
		});
		//按钮的hover
		$(".in-strong-btn").hover(function() {
			$(".in-strong-btn").css("opacity", "1");
		}, function() {
			$(".in-strong-btn").css("opacity", "0.6");
		});

	}
	inStrong();

	//强推作品
	function strPush() {
		$.ajax({
			type: "get",
			url: "json/in-strPush-fl1.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = "";
				//全部 第一个li
				str += "<li>"
				$.each(data, function(index, msg) {
					if(msg.id >= 1 && msg.id <= 5) {
						str += "<div class='in-strPushCon-listBox'>"
						str += "<a class='in-strPushCon-listBox-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-strPushCon-listBox-span'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-strPushCon-listBox-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.recom + "</p>"
						str += "<p class='in-strPushCon-listBox-p'>"
						for(var i = 0; i < msg.types.length; i++) {
							str += "<a href='javascript:;'>" + msg.types[i] + "</a>"
						}
						str += "</p>"
						str += "</div>"
					}
				});
				str += "</li>"
					//全部 第二个li
				str += "<li>"
				$.each(data, function(index, msg) {
					if(msg.id >= 6 && msg.id <= 10) {
						str += "<div class='in-strPushCon-listBox'>"
						str += "<a class='in-strPushCon-listBox-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-strPushCon-listBox-span'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-strPushCon-listBox-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.recom + "</p>"
						str += "<p class='in-strPushCon-listBox-p'>"
						for(var i = 0; i < msg.types.length; i++) {
							str += "<a href='javascript:;'>" + msg.types[i] + "</a>"
						}
						str += "</p>"
						str += "</div>"
					}
				});
				str += "</li>"
					//全部 第三个li
				str += "<li>"
				$.each(data, function(index, msg) {
					if(msg.id >= 11 && msg.id <= 15) {
						str += "<div class='in-strPushCon-listBox'>"
						str += "<a class='in-strPushCon-listBox-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-strPushCon-listBox-span'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-strPushCon-listBox-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.recom + "</p>"
						str += "<p class='in-strPushCon-listBox-p'>"
						for(var i = 0; i < msg.types.length; i++) {
							str += "<a href='javascript:;'>" + msg.types[i] + "</a>"
						}
						str += "</p>"
						str += "</div>"
					}
				});
				str += "</li>"
				$(".in-strPushCon-list1 ul").append(str);
			}
		});
		$.ajax({
			type: "get",
			url: "json/in-strPush-fl1.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = "";
				//女 第一个li
				str += "<li>"
				$.each(data, function(index, msg) {
					if(msg.id >= 16 && msg.id <= 20) {
						str += "<div class='in-strPushCon-listBox'>"
						str += "<a class='in-strPushCon-listBox-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-strPushCon-listBox-span'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-strPushCon-listBox-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.recom + "</p>"
						str += "<p class='in-strPushCon-listBox-p'>"
						for(var i = 0; i < msg.types.length; i++) {
							str += "<a href='javascript:;'>" + msg.types[i] + "</a>"
						}
						str += "</p>"
						str += "</div>"
					}
				});
				str += "</li>"
					//女 第二个li
				str += "<li>"
				$.each(data, function(index, msg) {
					if(msg.id >= 21 && msg.id <= 25) {
						str += "<div class='in-strPushCon-listBox'>"
						str += "<a class='in-strPushCon-listBox-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-strPushCon-listBox-span'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-strPushCon-listBox-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.recom + "</p>"
						str += "<p class='in-strPushCon-listBox-p'>"
						for(var i = 0; i < msg.types.length; i++) {
							str += "<a href='javascript:;'>" + msg.types[i] + "</a>"
						}
						str += "</p>"
						str += "</div>"
					}
				});
				str += "</li>"
					//女 第三个li
				str += "<li>"
				$.each(data, function(index, msg) {
					if(msg.id >= 26 && msg.id <= 30) {
						str += "<div class='in-strPushCon-listBox'>"
						str += "<a class='in-strPushCon-listBox-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-strPushCon-listBox-span'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-strPushCon-listBox-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.recom + "</p>"
						str += "<p class='in-strPushCon-listBox-p'>"
						for(var i = 0; i < msg.types.length; i++) {
							str += "<a href='javascript:;'>" + msg.types[i] + "</a>"
						}
						str += "</p>"
						str += "</div>"
					}
				});
				str += "</li>"
				$(".in-strPushCon-list2 ul").append(str);
				//图片经过
				$(".in-strPushCon-listBox-img").hover(function() {
					$(this).children(".in-strPushCon-listBox-bg").css({
						"opacity": "0.1",
						"z-index": 1,
					});
					$(this).css("border", "1px solid #ff9a6a");
				}, function() {
					$(this).children(".in-strPushCon-listBox-bg").css({
						"opacity": "0",
						"z-index": -1,
					});
					$(this).css("border", "1px solid #e5e3e1");
				});
			}
		});

		//畅销榜
		$.ajax({
			type: "get",
			url: "json/in-strPush-fr.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = "";
				str += "<ul class='fl'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 1 && msg.id <= 8) {
						str += "<li>"
						str += "<em>" + msg.id + "</em>"
						str += "<a href='javascript:;'>" + msg.name + "</a>"
						str += "</li>"
					}
				});
				str += "</ul>"
					//
				str += "<ul class='fr'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 9 && msg.id <= 16) {
						str += "<li>"
						str += "<em>" + msg.id + "</em>"
						str += "<a href='javascript:;'>" + msg.name + "</a>"
						str += "</li>"
					}
				});
				str += "</ul>"
				$(".in-strPush-frCon").append(str);
			}
		});
		//头部选项卡
		$(".in-strPushTop-class a").hover(function() {
			$(".in-strPushTop-class a").removeClass("in-strPushTop-class-active");
			$(this).addClass("in-strPushTop-class-active");

			$(".in-strPushCon-list").hide();
			$(".in-strPushCon-list").eq($(".in-strPushTop-class a").index($(this))).show();
		});

		//翻页
		var num = 0;
		var numb = 1;
		$(".in-strPushCon-btnR").on("click", function() {
			num++;
			numb++;
			if(numb > 3) {
				numb = 1;
			}
			if(num >= $(this).parents(".in-strPushCon-list").children("ul").children("li").length) {
				num = 0;
			}
			$(this).parents(".in-strPushCon-list").children("ul").children("li").hide();
			$(this).parents(".in-strPushCon-list").children("ul").children("li").eq(num).show();
			$(this).parents(".in-strPushCon-btnBox").children("span").html("" + numb + "/3");
		});
	}
	strPush();

	//连载表
	function seral() {
		$.ajax({
			type: "get",
			url: "json/in-seral.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = "";
				//第一个ul
				str += "<ul class='clearfix'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 1 && msg.id <= 5) {
						str += "<li>"
						str += "<a class='in-seralFl-con-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-seralFl-con-up'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-seralFl-con-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.exp + "</p>"
						str += "</li>"
					}
				});
				str += "</ul>"
					//第二个ul
				str += "<ul class='clearfix'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 6 && msg.id <= 10) {
						str += "<li>"
						str += "<a class='in-seralFl-con-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-seralFl-con-up'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-seralFl-con-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.exp + "</p>"
						str += "</li>"
					}
				});
				str += "</ul>"
					//第三个ul
				str += "<ul class='clearfix'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 11 && msg.id <= 15) {
						str += "<li>"
						str += "<a class='in-seralFl-con-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-seralFl-con-up'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-seralFl-con-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.exp + "</p>"
						str += "</li>"
					}
				});
				str += "</ul>"
					//第四个ul
				str += "<ul class='clearfix'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 16 && msg.id <= 20) {
						str += "<li>"
						str += "<a class='in-seralFl-con-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-seralFl-con-up'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-seralFl-con-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.exp + "</p>"
						str += "</li>"
					}
				});
				str += "</ul>"
					//第五个ul
				str += "<ul class='clearfix'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 21 && msg.id <= 25) {
						str += "<li>"
						str += "<a class='in-seralFl-con-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-seralFl-con-up'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-seralFl-con-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.exp + "</p>"
						str += "</li>"
					}
				});
				str += "</ul>"
					//第六个ul
				str += "<ul class='clearfix'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 26 && msg.id <= 30) {
						str += "<li>"
						str += "<a class='in-seralFl-con-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-seralFl-con-up'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-seralFl-con-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.exp + "</p>"
						str += "</li>"
					}
				});
				str += "</ul>"
					//第七个ul
				str += "<ul class='clearfix'>"
				$.each(data, function(index, msg) {
					if(msg.id >= 31 && msg.id <= 35) {
						str += "<li>"
						str += "<a class='in-seralFl-con-img'>"
						str += "<img src='images/" + msg.images + "' />"
						str += "<span class='in-seralFl-con-up'>更新至" + msg.updata + "话</span>"
						str += "<span class='in-seralFl-con-bg'></span>"
						str += "</a>"
						str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
						str += "<p>" + msg.exp + "</p>"
						str += "</li>"
					}
				});
				str += "</ul>"
				$(".in-seralFl-con").append(str);
				//hover图片
				$(".in-seralFl-con-img").hover(function() {
					$(this).children(".in-seralFl-con-bg").css({
						"opacity": "0.1",
						"z-index": 1,
					});
					$(this).css("border", "1px solid #ff9a6a");
				}, function() {
					$(this).children(".in-seralFl-con-bg").css({
						"opacity": "0",
						"z-index": -1,
					});
					$(this).css("border", "1px solid #e5e3e1");
				})
			}
		});
		//星期选择
		$(".in-seralFl-week a").hover(function() {
			$(".in-seralFl-week a").removeClass("in-seralFl-week-active")
			$(this).addClass("in-seralFl-week-active");
			$(".in-seralFl-con ul").hide();
			$(".in-seralFl-con ul").eq($(".in-seralFl-week a").index($(this))).show();
		});
		//右边
		var num = 0;
		$(".in-seral-fr-btnR").on("click", function() {
			num++;
			if(num >= $(".in-seral-fr-con li").length) {
				num = 0;
			}
			$(".in-seral-fr-con li").hide();
			$(".in-seral-fr-con li").eq(num).show();
		});
		$(".in-seral-fr-btnL").on("click", function() {
			num--;
			if(num < 0) {
				num = $(".in-seral-fr-con li").length - 1;
			}
			$(".in-seral-fr-con li").hide();
			$(".in-seral-fr-con li").eq(num).show();
		});
	}
	seral();
	//签约作品
	function sign() {
		$.ajax({
			type: "get",
			url: "json/in-sign.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = ""
				str += "<div class='in-signCon-fl'>"
				$.each(data, function(index, msg) {
					str += "<a href='javascript:;'><img src='images/" + msg.images + "' /></a>"
				});
				str += "</div>"
				str += "<div class='in-signCon-fr'>"
					//右边头部
				str += "<div class='in-signConFr-titBox'>"
				$.each(data, function(index, msg) {
					str += "<div class='in-signConFrBox-list'>"
					str += "<div class='in-signConFrBox-list-text1 clearfix'>"
					str += "<h4><a href='javascript:;'>" + msg.name + "</a></h4>"
					str += "<p><sub></sub><sub>" + msg.score + "</sub></p>"
					str += "</div>"
					str += "<p class='in-signConFrBox-list-text2'>"
					str += "<em>" + msg.author + "</em>"
					for(var i = 0; i < msg.updata.length; i++) {
						str += "<a href='javascript:;'>" + msg.updata[i] + "</a>"
					}
					str += "</p>"
					str += "<p class='in-signConFrBox-list-text3'><a href='javascript:;'>" + msg.intro + "</a></p>"
					str += "</div>"
				});
				str += "</div>"
					//右边内容
				str += "<div class='in-signConFr-con'>"
				str += "<ul class='clearfix'>"
				$.each(data, function(index, msg) {
					str += "<li>"
					str += "<a href='javascript:;'>"
					str += "<img src='images/" + msg.images + "' />"
					str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
					str += "</a>"
					str += "</li>"
				});
				str += "</ul>"
				str += "</div>"
				str += "</div>"
				$(".in-signCon").append(str);
				$(".in-signConFr-con li").hover(function() {
					$(this).css("border", "1px solid rgb(255, 154, 106)");
					$(".in-signCon-fl a").hide();
					$(".in-signCon-fl a").eq($(".in-signConFr-con li").index($(this))).show();
					$(".in-signConFrBox-list").hide();
					$(".in-signConFrBox-list").eq($(".in-signConFr-con li").index($(this))).show();

				}, function() {
					$(this).css("border", "1px solid #eeeded");
				});
			}
		});
		$(".in-quick-text").on("click",function(){
			$(".in-quick-text").removeClass("in-quick-text-active");
			$(this).addClass("in-quick-text-active");
			$(".in-quick-con ul li").hide(5);
			$(".in-quick-con ul li").eq($(".in-quick-text").index($(this))).show(5);
		});
	}
	sign();
	//轻小说
	function fic() {
		$.ajax({
			type: "get",
			url: "json/in-fic.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = ""
				str += "<div class='in-ficCon-fl'>"
				$.each(data, function(index, msg) {
					str += "<a href='javascript:;'><img src='images/" + msg.images + "' /></a>"
				});
				str += "</div>"
				str += "<div class='in-ficCon-fr'>"
					//右边头部
				str += "<div class='in-ficConFr-titBox'>"
				$.each(data, function(index, msg) {
					str += "<div class='in-ficConFrBox-list'>"
					str += "<div class='in-ficConFrBox-list-text1 clearfix'>"
					str += "<h4><a href='javascript:;'>" + msg.name + "</a></h4>"
					str += "<p><sub></sub><sub>" + msg.score + "</sub></p>"
					str += "</div>"
					str += "<p class='in-ficConFrBox-list-text2'>"
					str += "<em>" + msg.author + "</em>"
					for(var i = 0; i < msg.updata.length; i++) {
						str += "<a href='javascript:;'>" + msg.updata[i] + "</a>"
					}
					str += "</p>"
					str += "<p class='in-ficConFrBox-list-text3'><a href='javascript:;'>" + msg.intro + "</a></p>"
					str += "</div>"
				});
				str += "</div>"
					//右边内容
				str += "<div class='in-ficConFr-con'>"
				str += "<ul class='clearfix'>"
				$.each(data, function(index, msg) {
					str += "<li>"
					str += "<a href='javascript:;'>"
					str += "<img src='images/" + msg.images + "' />"
					str += "<h5><a href='javascript:;'>" + msg.name + "</a></h5>"
					str += "</a>"
					str += "</li>"
				});
				str += "</ul>"
				str += "</div>"
				str += "</div>"
				$(".in-ficCon").append(str);
				$(".in-ficConFr-con li").hover(function() {
					$(this).css("border", "1px solid rgb(255, 154, 106)");
					$(".in-ficCon-fl a").hide();
					$(".in-ficCon-fl a").eq($(".in-ficConFr-con li").index($(this))).show();
					$(".in-ficConFrBox-list").hide();
					$(".in-ficConFrBox-list").eq($(".in-ficConFr-con li").index($(this))).show();
				}, function() {
					$(this).css("border", "1px solid #eeeded");
				});
			}
		});
	}
	fic();
	//独家动画
	function exc() {
		$.ajax({
			type: "get",
			url: "json/in-exc-fr.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = "";
				$.each(data, function(index, msg) {
					str += "<div class='in-exc-list clearfix'>"
					str += "<a href='javascript:;' class='in-exc-list-img'><img src='images/" + msg.images + "' /></a>"
					str += "<div class='in-exc-list-text1'>"
					str += "<p class='in-exc-list-text1-p1'>"
					str += "<a href='javascript:;'>" + msg.name + "</a>"
					str += "<a href='javascript:;'>[更新至" + msg.updata + "集]</a>"
					str += "<span>" + msg.upweek + "</span>"
					str += "</p>"
					str += "<p><span>" + msg.author + "</span><a href='javascript:;'>" + msg.clas + "</a></p>"
					str += "<p>" + msg.intr + "</p>"
					str += "</div>"
					str += "<div class='in-exc-list-text2'>"
					str += "<div class='in-exc-list-text2-title'>"
					str += "<h3>" + msg.name + " 播放列表</h3>"
					str += "</div>"
					str += "<div class='in-exc-list-text2-title-up clearfix'>"
					for(var i = 0; i < msg.upA.length; i++) {
						str += "<a href='javascript:;'>" + msg.upA[i] + "</a>"
					}
					str += "</div>"
					str += "</div>"
					str += "</div>"
				});
				$(".in-excCon-fl").append(str);
			}
		});
		//列表
		$.ajax({
			type: "get",
			url: "json/in-exc-fl.json",
			datatype: "json",
			async: true,
			success: function(data) {
				var str = "";
				$.each(data, function(index, msg) {
					str += "<a href='javascript:;'>"
					str += "<img src='images/" + msg.images + "' />"
					str += "<span class='in-excCon-fr-list-name'>"
					str += "<i>" + msg.name + "</i>"
					str += "<i>[更新至 第" + msg.up + "集]</i>"
					str += "</span>"
					str += "</a>"
				});
				$(".in-excCon-fr-list").append(str);
				$(".in-excCon-fr a").hover(function() {
					$(".in-exc-list").hide();
					$(".in-exc-list").eq($(".in-excCon-fr-list a").index($(this))).show();

				});
			}
		});
	}
	exc();
	//上升最快
	function quick(){
		$.ajax({
			type:"get",
			url:"json/in-quick-fl.json",
			datatype:"json",
			async:true,
			success:function(data){
				var str="";
				//第一个li
				str+="<li>"
					$.each(data, function(index,msg) {
						if(msg.id>=1&&msg.id<=10){
							str+="<div class='in-quick-con-text'>"
								str+="<a href='javascript:;' class='in-quick-con-text-img'>"
									str+="<img src='images/"+msg.images+"' />"
								str+="</a>"
								str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
								str+="<p>"+msg.intro+"</p>"
								str+="<p>"
									for(var i=0;i<msg.clas.length;i++){
										str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
									}
								str+="</p>"
							str+="</div>"
						}
					});
				str+="</li>"
				//第二个li
				str+="<li>"
					$.each(data, function(index,msg) {
						if(msg.id>=11 && msg.id<=20){
							str+="<div class='in-quick-con-text'>"
								str+="<a href='javascript:;' class='in-quick-con-text-img'>"
									str+="<img src='images/"+msg.images+"' />"
								str+="</a>"
								str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
								str+="<p>"+msg.intro+"</p>"
								str+="<p>"
									for(var i=0;i<msg.clas.length;i++){
										str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
									}
								str+="</p>"
							str+="</div>"
						}
					});
				str+="</li>"
				//第三个li
				str+="<li>"
					$.each(data, function(index,msg) {
						if(msg.id>=21 && msg.id<=30){
							str+="<div class='in-quick-con-text'>"
								str+="<a href='javascript:;' class='in-quick-con-text-img'>"
									str+="<img src='images/"+msg.images+"' />"
								str+="</a>"
								str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
								str+="<p>"+msg.intro+"</p>"
								str+="<p>"
									for(var i=0;i<msg.clas.length;i++){
										str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
									}
								str+="</p>"
							str+="</div>"
						}
					});
				str+="</li>"
				$(".in-quick-con ul").append(str);
			}
		});
		//右边
		$.ajax({
			type:"get",
			url:"json/in-quick-fr.json",
			datatype:"json",
			async:true,
			success:function(data){
				var str=""
				//第一个
				str+="<ul class='in-quick-fr-list-ul'>"
					$.each(data, function(index,msg) {
						if(msg.id>=1&&msg.id<=15){
							str+="<li>"
								str+="<b>"+msg.id+"</b>"
								str+="<a href='javascript:;'>"
									str+="<em>"+msg.name+"</em>"
									str+="<em>"+msg.z+"</em>"
									str+="<em>"+msg.num+"</em>"
								str+="</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				//第二个
				str+="<ul class='in-quick-fr-list-ul'>"
					$.each(data, function(index,msg) {
						if(msg.id>=16&&msg.id<=30){
							str+="<li>"
								str+="<b>"+msg.id+"</b>"
								str+="<a href='javascript:;'>"
									str+="<em>"+msg.name+"</em>"
									str+="<em>"+msg.z+"</em>"
									str+="<em>"+msg.num+"</em>"
								str+="</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				//第三个
				str+="<ul class='in-quick-fr-list-ul'>"
					$.each(data, function(index,msg) {
						if(msg.id>=31&&msg.id<=45){
							str+="<li>"
								str+="<b>"+msg.id+"</b>"
								str+="<a href='javascript:;'>"
									str+="<em>"+msg.name+"</em>"
									str+="<em>"+msg.z+"</em>"
									str+="<em>"+msg.num+"</em>"
								str+="</a>"
							str+="</li>"
						}
					});
				str+="</ul>"
				$(".in-quick-fr-list").append(str);
			}
		});
		$(".in-quick-fr-con-title-text a").on("click",function(){
			$(".in-quick-fr-con-title-text a").removeClass("in-quick-fr-con-title-text-active");
			$(this).addClass("in-quick-fr-con-title-text-active");
			$(".in-quick-fr-list ul").hide();
			$(".in-quick-fr-list ul").eq($(".in-quick-fr-con-title-text a").index($(this))).show();
			console.log($(this).html())
			if($(this).html()=="1-15"){
				$(".in-quick-ran").css("backgroundPosition","0 -664px");
			}if($(this).html()=="16-30"){
				$(".in-quick-ran").css("backgroundPosition","0 -560px");
			}if($(this).html()=="31-45"){
				$(".in-quick-ran").css("backgroundPosition","0 -768px");
			}
		})
	}
	quick();
	//漫画棒
	function cartoon(){
		$.ajax({
			type:"get",
			url:"json/in-cartoonFl.json",
			datatype:"json",
			async:true,
			success:function(data){
				var str="";
				var str1="";
				$.each(data, function(index,msg) {
					if(msg.id>=1 && msg.id<=6){
						str+="<li>"
							str+="<a href='javascript:;' class='in-cartoonFl-img'>"
								str+="<img src='images/"+msg.img+"' />"
								str+="<span class='in-cartoonFl-span1'>"+msg.up+"</span>"
								str+="<span class='in-seralFl-con-bg'></span>"
							str+="</a>"
							str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
							str+="<p>"+msg.exp+"</p>"
							str+="<p>"
								for(var i=0;i<msg.clas.length;i++){
									str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
								}
							str+="</p>"
						str+="</li>"
					}
					if(msg.id>=7 && msg.id<=12){
						str1+="<li>"
							str1+="<a href='javascript:;' class='in-cartoonFl-img'>"
								str1+="<img src='images/"+msg.img+"' />"
								str1+="<span class='in-cartoonFl-span1'>"+msg.up+"</span>"
								str1+="<span class='in-seralFl-con-bg'></span>"
							str1+="</a>"
							str1+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
							str1+="<p>"+msg.exp+"</p>"
							str1+="<p>"
								for(var i=0;i<msg.clas.length;i++){
									str1+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
								}
							str1+="</p>"
						str1+="</li>"
					}
				});
				$(".in-cartoonFl-man ul").append(str);
				$(".in-cartoonFl-wo ul").append(str1);
				//鼠标经过
				$(".in-cartoonFl-img").hover(function(){
					$(this).children(".in-seralFl-con-bg").css({
						"opacity": "0.1",
						"z-index": 1,
					});
					$(this).css("border","1px solid #ff9a6a");
				},function(){
					$(this).children(".in-seralFl-con-bg").css({
						"opacity": "0",
						"z-index": -1,
					});
					$(this).css("border","1px solid #bebebe");
				});
				
			}
		});
		//分类
		$.ajax({
			type:"get",
			url:"json/in-cartoonFl-clas.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				//热血
				str+="<div class='in-cartoonFl-clas-con clearfix'>"
					$.each(data, function(index,msg) {
						if(msg.id==1){
							str+="<div class='in-cartoonFl-clas-con-fl'>"
								str+="<a href='javascript:;' class='in-cartoonFl-clas-con-fl-img'>"
									str+="<img src='images/"+msg.img+"' />"
								str+="</a>"
								str+="<div class='in-cartoonFl-clas-con-fr'>"
									str+="<p><a href='javascript:;'>"+msg.name+"</a></p>"
									str+="<p><a href='javascript:;'>"+msg.exp+"</a></p>"
								str+="</div>"
							str+="</div>"
						}
					});
						str+="<ul class='in-cartoonFl-ul clearfix'>"
							$.each(data, function(index,msg) {
							if(msg.id>=2 && msg.id<=5){
								str+="<li>"
									str+="<a href='javascript:;' class='in-cartoonFl-img'>"
										str+="<img src='images/"+msg.img+"' />"
										str+="<span class='in-cartoonFl-span1'>"+msg.up+"</span>"
										str+="<span class='in-seralFl-con-bg'></span>"
									str+="</a>"
									str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
									str+="<p>"+msg.exp+"</p>"
									str+="<p>"
										for(var i=0;i<msg.clas.length;i++){
											str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
										}
									str+="</p>"
								str+="</li>"
							}
							});	
						str+="</ul>"
				str+="</div>"
				//搞笑
				str+="<div class='in-cartoonFl-clas-con clearfix'>"
					$.each(data, function(index,msg) {
						if(msg.id==6){
							str+="<div class='in-cartoonFl-clas-con-fl'>"
								str+="<a href='javascript:;' class='in-cartoonFl-clas-con-fl-img'>"
									str+="<img src='images/"+msg.img+"' />"
								str+="</a>"
								str+="<div class='in-cartoonFl-clas-con-fr'>"
									str+="<p><a href='javascript:;'>"+msg.name+"</a></p>"
									str+="<p><a href='javascript:;'>"+msg.exp+"</a></p>"
								str+="</div>"
							str+="</div>"
						}
					});
						str+="<ul class='in-cartoonFl-ul clearfix'>"
							$.each(data, function(index,msg) {
							if(msg.id>=7 && msg.id<=10){
								str+="<li>"
									str+="<a href='javascript:;' class='in-cartoonFl-img'>"
										str+="<img src='images/"+msg.img+"' />"
										str+="<span class='in-cartoonFl-span1'>"+msg.up+"</span>"
										str+="<span class='in-seralFl-con-bg'></span>"
									str+="</a>"
									str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
									str+="<p>"+msg.exp+"</p>"
									str+="<p>"
										for(var i=0;i<msg.clas.length;i++){
											str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
										}
									str+="</p>"
								str+="</li>"
							}
							});	
						str+="</ul>"
				str+="</div>"
				//恐怖
				str+="<div class='in-cartoonFl-clas-con clearfix'>"
					$.each(data, function(index,msg) {
						if(msg.id==11){
							str+="<div class='in-cartoonFl-clas-con-fl'>"
								str+="<a href='javascript:;' class='in-cartoonFl-clas-con-fl-img'>"
									str+="<img src='images/"+msg.img+"' />"
								str+="</a>"
								str+="<div class='in-cartoonFl-clas-con-fr'>"
									str+="<p><a href='javascript:;'>"+msg.name+"</a></p>"
									str+="<p><a href='javascript:;'>"+msg.exp+"</a></p>"
								str+="</div>"
							str+="</div>"
						}
					});
						str+="<ul class='in-cartoonFl-ul clearfix'>"
							$.each(data, function(index,msg) {
							if(msg.id>=12 && msg.id<=15){
								str+="<li>"
									str+="<a href='javascript:;' class='in-cartoonFl-img'>"
										str+="<img src='images/"+msg.img+"' />"
										str+="<span class='in-cartoonFl-span1'>"+msg.up+"</span>"
										str+="<span class='in-seralFl-con-bg'></span>"
									str+="</a>"
									str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
									str+="<p>"+msg.exp+"</p>"
									str+="<p>"
										for(var i=0;i<msg.clas.length;i++){
											str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
										}
									str+="</p>"
								str+="</li>"
							}
							});	
						str+="</ul>"
				str+="</div>"
				//热血
				str+="<div class='in-cartoonFl-clas-con clearfix'>"
					$.each(data, function(index,msg) {
						if(msg.id==16){
							str+="<div class='in-cartoonFl-clas-con-fl'>"
								str+="<a href='javascript:;' class='in-cartoonFl-clas-con-fl-img'>"
									str+="<img src='images/"+msg.img+"' />"
								str+="</a>"
								str+="<div class='in-cartoonFl-clas-con-fr'>"
									str+="<p><a href='javascript:;'>"+msg.name+"</a></p>"
									str+="<p><a href='javascript:;'>"+msg.exp+"</a></p>"
								str+="</div>"
							str+="</div>"
						}
					});
						str+="<ul class='in-cartoonFl-ul clearfix'>"
							$.each(data, function(index,msg) {
							if(msg.id>=17 && msg.id<=20){
								str+="<li>"
									str+="<a href='javascript:;' class='in-cartoonFl-img'>"
										str+="<img src='images/"+msg.img+"' />"
										str+="<span class='in-cartoonFl-span1'>"+msg.up+"</span>"
										str+="<span class='in-seralFl-con-bg'></span>"
									str+="</a>"
									str+="<h5><a href='javascript:;'>"+msg.name+"</a></h5>"
									str+="<p>"+msg.exp+"</p>"
									str+="<p>"
										for(var i=0;i<msg.clas.length;i++){
											str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
										}
									str+="</p>"
								str+="</li>"
							}
							});	
						str+="</ul>"
				str+="</div>"
				$(".in-cartoonFl-clas-text").append(str);
				//鼠标经过
				$(".in-cartoonFl-img").hover(function(){
					$(this).children(".in-seralFl-con-bg").css({
						"opacity": "0.1",
						"z-index": 1,
					});
					$(this).css("border","1px solid #ff9a6a");
				},function(){
					$(this).children(".in-seralFl-con-bg").css({
						"opacity": "0",
						"z-index": -1,
					});
					$(this).css("border","1px solid #bebebe");
				});
			}
		});
			//分类上面选项
			$(".in-cartoonFl-clas-title-fl a").hover(function(){
			$(".in-cartoonFl-clas-title-fl a").removeClass("in-cartoonFl-clas-title-fl-active");
			$(this).addClass("in-cartoonFl-clas-title-fl-active");
			$(".in-cartoonFl-clas-con").hide();
			$(".in-cartoonFl-clas-con").eq($(".in-cartoonFl-clas-title-fl a").index($(this))).show();
			});
			//绘本
			$(".in-cartFl-book-ul-bg").hover(function(){
			$(this).css("opacity","0.7");
		},function(){
			$(this).css("opacity","0");
		})
		//最近更新
		$.ajax({
			type:"get",
			url:"json/in-cartoon-Fl-up.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				//ul
				str+="<ul class='in-cartoonFl-update-list'>"
					$.each(data, function(index,msg) {
						if(msg.id>=1 && msg.id<=15){
							str+="<li>"
								str+="<p class='in-cartoonFl-update-list1'>"
									str+="<span>【"
										for(var i=0;i<msg.clas.length;i++){
											str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
										}
									str+="】</span>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
									str+="<a href='javascript:;'>"+msg.up+"</a>"
								str+="</p>"
								str+="<p class='in-cartoonFl-update-list2'>"
									str+="<span>"+msg.zz+"</span>"
									str+="<span>"+msg.time+"</span>"
								str+="</p>"
							str+="</li>"
						}
					});
				str+="</ul>"
				//ul
				str+="<ul class='in-cartoonFl-update-list'>"
					$.each(data, function(index,msg) {
						if(msg.id>=16 && msg.id<=30){
							str+="<li>"
								str+="<p class='in-cartoonFl-update-list1'>"
									str+="<span>【"
										for(var i=0;i<msg.clas.length;i++){
											str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
										}
									str+="】</span>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
									str+="<a href='javascript:;'>"+msg.up+"</a>"
								str+="</p>"
								str+="<p class='in-cartoonFl-update-list2'>"
									str+="<span>"+msg.zz+"</span>"
									str+="<span>"+msg.time+"</span>"
								str+="</p>"
							str+="</li>"
						}
					});
				str+="</ul>"
				//ul
				str+="<ul class='in-cartoonFl-update-list'>"
					$.each(data, function(index,msg) {
						if(msg.id>=31 && msg.id<=45){
							str+="<li>"
								str+="<p class='in-cartoonFl-update-list1'>"
									str+="<span>【"
										for(var i=0;i<msg.clas.length;i++){
											str+="<a href='javascript:;'>"+msg.clas[i]+"</a>"
										}
									str+="】</span>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
									str+="<a href='javascript:;'>"+msg.up+"</a>"
								str+="</p>"
								str+="<p class='in-cartoonFl-update-list2'>"
									str+="<span>"+msg.zz+"</span>"
									str+="<span>"+msg.time+"</span>"
								str+="</p>"
							str+="</li>"
						}
					});
				str+="</ul>"
				
				$(".in-cartoonFl-update-text").append(str);
				//隔行变色
				$(".in-cartoonFl-update-list").find("li:even").css("backgroundColor","white");
				//切换
				$(".in-cart-text").on("click",function(){
					$(".in-cart-text").removeClass("in-cart-text-active");
					$(this).addClass("in-cart-text-active");
					$(".in-cartoonFl-update-list").hide();			
					$(".in-cartoonFl-update-list").eq($($(".in-cart-text")).index($(this))).show();
				});
			}
		});
		//右边打赏
		$.ajax({
			type:"get",
			url:"json/in-cartoonFR.json",
			datatype:"json",
			async:true,
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
						str+="<li>"
							str+="<em>"+msg.id+"</em>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<span>"+msg.num+"</span>"
						str+="</li>"	
				});
				$(".in-cartoonFR-text1 ul").append(str);
			}
		});
		//右边月票
		$.ajax({
			type:"get",
			url:"json/in-cartoonFR1.json",
			datatype:"json",
			async:true,
			success:function(data){
				var str="";
				$.each(data, function(index,msg) {
						str+="<li>"
							str+="<em>"+msg.id+"</em>"
							str+="<a href='javascript:;'>"+msg.name+"</a>"
							str+="<span>"+msg.num+"</span>"
						str+="</li>"	
				});
				$(".in-cartoonFR-text2 ul").append(str);
			}
		});
	}
	cartoon();
	//周排行榜
	function rank(){
		$.ajax({
			type:"get",
			url:"json/in-rank-text1.json",
			async:true,
			datatype:"json",
			success:function(data){
				var str="";
				//全部
				str+="<div class='in-rankFR-text'>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=1 && msg.id<=10){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=11 && msg.id<=20){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=21 && msg.id<=30){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=31 && msg.id<=40){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=41 && msg.id<=50){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=51 && msg.id<=60){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=61 && msg.id<=70){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
				str+="</div>"
				//少年漫画
				str+="<div class='in-rankFR-text'>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=1 && msg.id<=10){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=11 && msg.id<=20){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=21 && msg.id<=30){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=31 && msg.id<=40){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=41 && msg.id<=50){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=51 && msg.id<=60){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=61 && msg.id<=70){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
				str+="</div>"
				//少女
				str+="<div class='in-rankFR-text'>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=1 && msg.id<=10){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=11 && msg.id<=20){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=21 && msg.id<=30){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=31 && msg.id<=40){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=41 && msg.id<=50){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=51 && msg.id<=60){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=61 && msg.id<=70){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
				str+="</div>"
				//热血冒险
				str+="<div class='in-rankFR-text'>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=1 && msg.id<=10){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=11 && msg.id<=20){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=21 && msg.id<=30){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=31 && msg.id<=40){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=41 && msg.id<=50){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=51 && msg.id<=60){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=61 && msg.id<=70){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
				str+="</div>"
				//搞笑
				str+="<div class='in-rankFR-text'>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=1 && msg.id<=10){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=11 && msg.id<=20){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=21 && msg.id<=30){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=31 && msg.id<=40){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=41 && msg.id<=50){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=51 && msg.id<=60){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=61 && msg.id<=70){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
				str+="</div>"
				//恐怖
				str+="<div class='in-rankFR-text'>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=1 && msg.id<=10){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=11 && msg.id<=20){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=21 && msg.id<=30){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=31 && msg.id<=40){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=41 && msg.id<=50){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=51 && msg.id<=60){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=61 && msg.id<=70){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
				str+="</div>"
				//侦探
				str+="<div class='in-rankFR-text'>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=1 && msg.id<=10){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=11 && msg.id<=20){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=21 && msg.id<=30){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=31 && msg.id<=40){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=41 && msg.id<=50){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=51 && msg.id<=60){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
					str+="<ul>"
						$.each(data, function(index,msg) {
							if(msg.id>=61 && msg.id<=70){
								str+="<li>"
									str+="<em>"+msg.id+"</em>"
									str+="<a href='javascript:;'>"+msg.name+"</a>"
								str+="</li>"
							}
						});
					str+="</ul>"
				str+="</div>"
				$(".in-rankFR").append(str);
			}
		});
		$(".in-rank-btn a").hover(function(){
			$(".in-rank-btn a").removeClass("in-rank-btn-active");
			$(this).addClass("in-rank-btn-active");
			$(".in-rankFR-text").hide();
			$(".in-rankFR-text").eq($(".in-rank-btn a").index($(this))).show();
		});
	}
	rank();
	//左边楼层
	function floor(){
		$(document).scroll(function(){
			var t=$(this).scrollTop();
			$(".floor-text").each(function(index,msg){
				var ts=$(msg).offset().top-20;
				if(t>=ts){
					$(".in-floor-box li").removeClass("in-floor-box-active");
					$(".in-floor-box li").eq(index).addClass("in-floor-box-active");
				}
			})
		});
		$(".in-floor-box li").on("click",function(){
			var divs=$(".floor-text").eq($(this).index()).offset().top;
			$("html,body").animate({
				scrollTop:divs,
			},2000);
		});
	}
	floor();
})