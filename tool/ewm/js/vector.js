String.prototype.colorHex = function() {
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var that = this;
    if (/^(rgb|RGB)/.test(that)) {
        var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = that;
        }
        return strHex;
    } else if (reg.test(that)) {
        var aNum = that.replace(/#/, "").split("");
        if (aNum.length === 6) {
            return that;
        } else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i += 1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    } else {
        return that;
    }
};
function format() {
    $('.saveto').bind('click', function() {
        var text = $('#apiText').attr('title');
        if (!text) {
            text = "http://www.Online-QRCode-Generator.com";
        }
        text=encodeURIComponent(text);
        var vt = $(this).attr('data-format');
        var param = '';
        var fg = $('#fgcolor').attr('data-color');
        if (fg) {
            param += '&fg=' + fg.colorHex().replace('#', '');
        }
        var bg = $('#bgcolor').attr('data-color');
        if (bg) {
            param += '&bg=' + bg.colorHex().replace('#', '');
        }
        var pt = $('#ptcolor').attr('data-color');
        if (pt) {
            param += '&pt=' + pt.colorHex().replace('#', '');
        }
        var inpt = $('#inptcolor').attr('data-color');
        if (inpt) {
            param += '&inpt=' + inpt.colorHex().replace('#', '');
        }
        var el = $('#level').val();
        var m = parseInt($('#margin').val());
        var href = 'savevector.php?text=' + text + param + '&el=' + el + '&m=' + m + '&vt=' + vt;
        location.href = href;
        return false;
    })
}
format();

//如果文本内容为粘贴来的
$("#QR_CODE_Generator_FREE_TEXT,#QR_CODE_Generator_Card_Name,#QR_CODE_Generator_Card_Tel,#QR_CODE_Generator_Card_Phone,#QR_CODE_Generator_Card_Note,#QR_CODE_Generator_Card_Org,#QR_CODE_Generator_Card_Til,#QR_CODE_Generator_Card_Mail,#QR_CODE_Generator_Card_Adr,#QR_CODE_Generator_Card_Url,#QR_CODE_Generator_URL,#QR_CODE_Generator_SMS_SMS,#QR_CODE_Generator_SMS_Tel,#QR_CODE_Generator_WIFI_SSID,#QR_CODE_Generator_WIFI_P,#QR_CODE_Generator_Telephone_Tel,#QR_CODE_Generator_Mail_Mail").bind({
    "paste": function() {
        var $this = $(this);
        $this.trigger("keyup");
    }
});