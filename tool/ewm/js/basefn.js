function generate() {
	this.error = [];
	this.string = "";
	this._isMail = function(e) {
		var t = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		return t.test(e)
	};
	this._isTeleNum = function(e) {
		var t = /^(13[0-9]{9})|(15[89][0-9]{8})$/;
		return t.test(e)
	};
	this._isUrl = function(e) {
		var t = "^((https|http|ftp|rtsp|mms)?://)" + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + "(([0-9]{1,3}.){3}[0-9]{1,3}" + "|" + "([0-9a-z_!~*'()-]+.)*" + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." + "[a-z]{2,6})" + "(:[0-9]{1,4})?" + "((/?)|" + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
		var n = new RegExp(t);
		return n.test(e)
	};
	this.getString = function() {
		return this.string
	};
	this.getError = function() {
		return this.error
	}
}
function Mode_text() {
	generate.apply(this);
	var e = $.trim($("#QR_CODE_Generator_FREE_TEXT").val());
	if (!e) this.error.push("文本不能为空!");
	this.string = e
}
function Mode_url() {
	generate.apply(this);
	var e = $.trim($("#QR_CODE_Generator_URL").val());
	if (!e || e == "http://") this.error.push("网址不能为空!");
	this.string = e
}
function Mode_weixin() {
	generate.apply(this);
	var e = $.trim($("#QR_CODE_Generator_URL").val());
	if (e) {
		this.string = "weixin://profile/" + e
	}
}
function Mode_telephone() {
	generate.apply(this);
	var e = $.trim($("#QR_CODE_Generator_Telephone_Tel").val());
	if (!e) this.error.push("电话号码不能为空!");
	if (e) {
		this.string = "tel:" + e
	}
}
function Mode_sms() {
	generate.apply(this);
	var e = $.trim($("#QR_CODE_Generator_SMS_Tel").val());
	if (!e) this.error.push("电话号码不能为空!");
	var t = $.trim($("#QR_CODE_Generator_SMS_SMS").val());
	if (!t) this.error.push("短信不能为空!");
	if (e) this.string += "smsto:" + e + ":";
	if (t) this.string += t
}
function Mode_card() {
	generate.apply(this);
	var e = $.trim($("#QR_CODE_Generator_Card_Name").val());
	var t = $.trim($("#QR_CODE_Generator_Card_Org").val());
	var n = $.trim($("#QR_CODE_Generator_Card_Til").val());
	var r = $.trim($("#QR_CODE_Generator_Card_Tel").val());
	var fax = $.trim($("#QR_CODE_Generator_Card_Fax").val());
	var i = $.trim($("#QR_CODE_Generator_Card_Phone").val());
	var s = $.trim($("#QR_CODE_Generator_Card_Url").val());
	var o = $.trim($("#QR_CODE_Generator_Card_Mail").val());
	var u = $.trim($("#QR_CODE_Generator_Card_Adr").val());
	var a = $.trim($("#QR_CODE_Generator_Card_Note").val());
	if (!e) this.error.push("姓名不能为空!");
	if (!r) this.error.push("电话号码不能为空!");
	if (!this._isTeleNum(r)) this.error.push("无效的电话号码！");
	if (!t) this.error.push("单位不能为空!");
	if (!n) this.error.push("职位不能为空!");
	if (!s) this.error.push("网址不能为空!");
	if (!this._isUrl(s)) this.error.push("无效的网址");
	if (!o) this.error.push("邮箱不能为空!");
	if (!this._isMail(o)) this.error.push("无效的邮箱!");
	if (!u) this.error.push("地址不能为空!");
	if (s == "http://") s = "";
	if (e || r || i || t || n || s || o || u || a || fax) {
		this.string = "BEGIN:VCARD\nVERSION:3.0";
		if (r) this.string += "\nTEL;CELL;VOICE:" + r + "";
		if (i) this.string += "\nTEL;WORK;VOICE:" + i + "";
		if (fax) this.string += "\nTEL;WORK;FAX:" + fax + "";
		if (s) this.string += "\nURL:" + s + "";
		if (o) this.string += "\nEMAIL:" + o + "";
		if (a) this.string += "\nNOTE:" + a + "";
		if (e) this.string += "\nFN:" + e + "";
		if (t) this.string += "\nORG:" + t + "";
		if (n) this.string += "\nTITLE:" + n + "";
		if (u) this.string += "\nADR;WORK;POSTAL:" + u + ""
		this.string += "\nEND:VCARD"
	}
}
function Mode_mail() {
	generate.apply(this);
	var e = $.trim($("#QR_CODE_Generator_Mail_Mail").val());
	if (!e) this.error.push("邮箱不能为空!");
	if (!this._isMail(e)) this.error.push("无效邮箱!");
	this.string = e
}
function Mode_wifi() {
	generate.apply(this);
	var e = $.trim($("#QR_CODE_Generator_WIFI_SSID").val());
	var t = $.trim($("#QR_CODE_Generator_WIFI_P").val());
	var n = $.trim($("#QR_CODE_Generator_WIFI_T").val());
	if (!e) this.error.push("ssid账号不能为空!");
	if (e || t) {
		this.string = "WIFI:";
		if (e) this.string += "S:" + e + ";";
		if (n) this.string += "T:" + n + ";";
		if (t) this.string += "P:" + t + ";"
	}
}
function Mode_map() {
	generate.apply(this);
	this.string = $.trim($("#map_map").val())
}
function countSize(e, t) {
	var n = e.val().length;
	e.next().children("span").text(n)
}
function defalutText(e, t) {
	if (e.val() == t) {
		e.addClass("default")
	}
	e.focus(function() {
		if (e.val() == t) {
			e.val("").removeClass("default")
		}
	});
	e.blur(function() {
		if (e.val() == "") {
			e.val(t).addClass("default")
		}
	})
}