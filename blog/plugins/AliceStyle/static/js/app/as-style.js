// 获取URL GET参数
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

// 获取当前页面名称
function strPage(){
    
    var strUrl = window.location.href;
    var arrUrl = strUrl.split("/");
    var strPage = arrUrl[arrUrl.length - 1];
    
    if (strPage.indexOf("?") > -1) {
        var pageName = strPage.split("?");
        strPage = pageName[0];
    }
    
    return strPage;
}

// 判断前台页面是不是时光机页面
if(strPage() == "cross.html"){
    
    // 修复时光机页面右侧联系方式多出的空白
    $(".col.w-lg.bg-light.lter.bg-auto").attr("class","col w-lg bg-light lter");
}

