	var getw=$(window).width();
	if (getw>=500){
	$('#Save_QR_Code').darkTooltip({
		animation:'flipIn'
	});
	$('#QR_Code_Share').darkTooltip({
		animation:'flipIn'
	});
	$('#QR_Code_Print').darkTooltip({
		animation:'flipIn'
	});
	$('#Online_File_Converter').darkTooltip({
		animation:'flipIn'
	});
	$('#QR_Code_Optional').darkTooltip({
		animation:'flipIn'
	});
	$('#QR_Code_T').darkTooltip({
		animation:'flipIn'
	});
	
	$('#Online_Barcode').hide();
	$('#What_is_a_QR_Code').css('margin-bottom','70px');
	}else{
		$('#fntab').css('max-width','520px');
	    $('#Online_Barcode').show();
	    $('#What_is_a_QR_Code').css('margin-bottom','10px');
	}
	$('#QR_Code_WH').darkTooltip({
		animation:'flipIn'
	});
	$('#resetAll').darkTooltip({
		animation:'flipIn'
	});
	
$('#canvas').mouseover(function() { 
$('#canvas').css('box-shadow','0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)');
$('#canvas').css("cursor", "pointer");
}); 
$('#canvas').mouseout(function() { 
$('#canvas').css('box-shadow','');
}); 

$('#Share_QR_Code_String').click(function() { 
$("#Share_QR_Code_String").focus();
$("#Share_QR_Code_String").select();
});


$("#QR_Code_Print").click(function() {
				window.print();
});

$("#QR_Code_T").click(function() {
                 var t = $("#QR_Code_T").attr('hx');
				 jQuery('#bgcolor').attr('hx','#ffffff');
				 canvasObj.changePtImage(0);
                 jQuery('#icp_bgcolor').css('background', 'transparent url("QR-Code/tt.png") no-repeat scroll right bottom');
                 canvasSet(canvasObj, 'bgcolor', null);
});

var t11=new TouchSlider('fntab',{duration:800, interval:3000, direction:0, autoplay:false, align:'left', mousewheel:false, mouse:true, fullsize:false});

