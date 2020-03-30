function emptyFn() {}
 

function tabfn(e, t, n) {
	n = $.extend({
		name1: "active",
		name2: "show"
	}, n);
	e.each(function(r) {
		$(this).click(function() {
			e.removeClass(n.name1);
			$(this).addClass(n.name1);
			t.removeClass(n.name2).eq(r).addClass(n.name2);
		
		})
	})
}

function elemSwitch(e, t) {
	e.click(function() {
		e.hide();
		t.show()
	})
}

function openmore(e, t) {
	e.change(function() {
		if (this.checked) {
			t.show();
			urlselect()
		} else {
			t.hide();
			$("#msg").text("输入网址")
		}
	})
}

function addpic(e, t, n, r) {
	e.change(function() {
		var e = $(this).val();
		if (e) {
			t.show();
			t.children("span").text(e);
			if (n) {}
		}
	})
}

function hideelem(e, t, n, r) {
	if (!e || !t || !n) return;
	if (!r) r = emptyFn;
	e.click(function() {
		t.hide();
		n.show();
		r()
	})
}

function fixtaba(e, t) {
	e.hover(function() {
		$(this).addClass("hover").children().show()
	}, function() {
		$(this).removeClass("hover").children().hide()
	});
	t.click(function() {
		var e = $(this).children();
		e.removeClass("hover").children().hide()
	})
}

function urlselect() {
	$("#urlset input").change(function() {
		if (this.checked) {
			var e;
			var t = "";
			switch ($(this).attr("rel")) {
			case "weixin":
				e = "输入微信号码";
				break;
			case "sina1":
				e = "输入微博账号";
				t = "http://weibo.com/";
				break;
			case "sina2":
				e = "输入微博账号";
				t = "http://e.weibo.com/";
				break;
			case "shop":
				e = "输入淘宝店铺地址";
				break;
			case "item":
				e = "输入淘宝商品地址";
				break;
			default:
				e = "输入网址";
				break
			}
			$("#msg").text(e);
			$("#QR_CODE_Generator_URL").val(t)
		}
	})
}

function resetAll() {
	//$("#icp_fgcolor,#icp_gccolor,#icp_ptcolor,#icp_inptcolor,#icp_ftcolor").css("background-color", "#000");
	$("#icp_bgcolor").css("background-color", "#fff");
	$("#resetGcColor,#resetPtColor,#resetInPtColor,#resetFtColor,#picelem").hide();
	if ($("#gradientWay")[0]) {
		$("#gradientWay")[0].options[2].selected = true
	}
	$("#margin")[0].options[2].selected = true;
	$("#level")[0].options[0].selected = true;
	if ($("#rotate")[0]) {
		$("#rotate")[0].options[0].selected = true
	}
	if ($("#fonteffect")[0]) {
		$("#fonteffect")[0].options[0].selected = true
	}
	if ($("#fontsize")[0]) {
		$("#fontsize")[0].options[2].selected = true
	}
	if ($("#size")[0]) {
		$("#size")[0].options[1].selected = true
	}
	$("#level").removeAttr("disabled");
	$("#diy_dot").attr("style", "");
	if ($("#urloptions")[0]) {
		$("#urloptions")[0].checked = false
	}
	$("#ctext").val("输入文本");
	$("#pin-panel li").removeClass("active").eq(0).addClass("active")
}

function changeWifi() {
	$("#QR_CODE_Generator_WIFI_T").change(function() {
		if ($(this).val() == "nopass") {
			$("#QR_CODE_Generator_WIFI_P").attr("disabled", "true").addClass("disabled").val("")
		} else {
			$("#QR_CODE_Generator_WIFI_P").removeAttr("disabled").removeClass("disabled")
		}
	})
}

function setDefault() {
	$("#copy").hide()
}