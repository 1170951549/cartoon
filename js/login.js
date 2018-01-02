$(function() {
	$(".login-bg").height($(window).height());
	//窗口居中
	function Divcenter() {
		var Dtop = ($(window).height() - $('.login-box').height()) / 2;
		var Dleft = ($(window).width() - $('.login-box').width()) / 2;
		var scrL = $(window).scrollLeft();

		$(".login-box").css({
			left: Dleft + scrL,
			top: Dtop,
		});
	}
	Divcenter();

	function log() {
		$(".login-btn").on("click", function() {
			var user = $(".login-user").val();
			var pwd = $(".login-pwd").val();
			$.ajax({
				type: "get",
				url: "json/login.json",
				async: true,
				datatype: "json",
				success: function(data) {
					$.each(data, function(index, msg) {
						if(user == msg.user && pwd == msg.password) {
							console.log(1);
							 window.location.href="index.html";
						} else {
							console.log(2);
							
						}
					});
				}
			});
		})
	}
	log();
})