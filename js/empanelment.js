var ajaxCallStacks = Array();
var partnerOBJ = null;
var initPage = false;
var districtList = {};
var cityList = {};
var lastSelectedPartner="";
var isClickFlag=true;
var isBrowse=false;
setInterval(function(){ $(".addresstext").trigger("change"); }, 100);

function mobileCurrentAddress()
{
	if (matchMedia('only screen and (max-width: 600px)').matches) 
    {
    	  // smartphone/iphone... maybe run some small-screen related dom scripting?
    			  
    			 /* $(tableObj).children(":eq(1)").after($(tableObj).children(":eq(4)"));*/
    			  //$(tableObj).children(":eq(1)")===$(tableObj).children(":eq(4)");
    			  /*$( ".cstateLabel" ).replaceWith( $( ".caddressline2Label" ) );
    			  $( ".cstatebox" ).replaceWith( $( ".caddressline2box" ) );*/
    			  
    			  $(".cAddress1MobileBox").after($(".caddressline2Label"));
    			  $(".caddressline2Label").after($(".caddressline2box"));
    			  $(".caddressline2box").after($(".caddressline3label"));
    			  $(".caddressline3label").after($(".caddressline3Box"));
    			  $(".caddressline3Box").after($(".cstateLabel"));
    			  $(".cstateLabel").after($(".cstatebox"));
    			  
    			  $(".cstatebox").after($(".cdistrictLabel"));
    			  $(".cdistrictLabel").after($(".cdistrictBox"));
    			  
    			  $(".cdistrictBox").after($(".ccityLabel"));
    			  $(".ccityLabel").after($(".ccityBox"));
    			  
    			  $(".ccityBox").after($(".cpinlabel"));
    			  $(".cpinlabel").after($(".cpinBox"));
    			  $(".hiddennbsp").remove();
    			  
    			  
    }
		
}

function mobilePermanentAddress()
{
	if (matchMedia('only screen and (max-width: 600px)').matches) 
    {
    	  // smartphone/iphone... maybe run some small-screen related dom scripting?
    			  
    			 /* $(tableObj).children(":eq(1)").after($(tableObj).children(":eq(4)"));*/
    			  //$(tableObj).children(":eq(1)")===$(tableObj).children(":eq(4)");
    			  /*$( ".cstateLabel" ).replaceWith( $( ".caddressline2Label" ) );
    			  $( ".cstatebox" ).replaceWith( $( ".caddressline2box" ) );*/
    			  
    			  $(".pAddress1MobileBox").after($(".paddressline2Label"));
    			  $(".paddressline2Label").after($(".paddressline2box"));
    			  $(".paddressline2box").after($(".paddressline3label"));
    			  $(".paddressline3label").after($(".paddressline3Box"));
    			  $(".paddressline3Box").after($(".pstateLabel"));
    			  $(".pstateLabel").after($(".pstatebox"));
    			  
    			  $(".pstatebox").after($(".pdistrictLabel"));
    			  $(".pdistrictLabel").after($(".pdistrictBox"));
    			  
    			  $(".pdistrictBox").after($(".pcityLabel"));
    			  $(".pcityLabel").after($(".pcityBox"));
    			  
    			  $(".pcityBox").after($(".ppinlabel"));
    			  $(".ppinlabel").after($(".ppinBox"));
    			  $(".hiddennbsp1").remove();
    			  
    			  
    			  
    			  
    			  
    }
}
$(document).ready(function() 
{
	
	
	
	
	
	
	tabHandler();
	partnerDetails = JSON.stringify(partnerDetails);
	
	var partner = $.parseJSON(partnerDetails);
	if(partner.partnerType !=null)
	{
		$(".main-radio input[type='radio']").each(function(index){
			var value  = $(this).val();
			if(value == partner.partnerType.commonDataId){
				$(this).attr('checked',true);
				$(this).parent("div").addClass("higlight");
			}			
		});
		
		$(document).bind("initPage", initialize);
		lastSelectedPartner=partner.partnerType.commonDataId;
		if(null!=partner.empanelStatus && partner.empanelStatus!='')
		loadEmpanelPartnerView("" +partner.partnerType.commonDataId,partner.empanelStatus.commonDataId);
		else
		loadEmpanelPartnerView("" +partner.partnerType.commonDataId,'');
		
		initPage = true;
		$('.partnerType').click(showPartnerDiv);
		$('#btnEmpanelmentSave').click(savePartner);
		
			
	}
	$('.label-prp').attr('disabled', 'disabled');
	
	//loadEmpanelPartnerView("" + partner.partnerType.commonDataId);
});

function uploadFile(frm,id){
	$("#"+id).css('color', 'white');
	document.frm.submit();
}

function clearMsg(id,clearTextBoxId)
{
	document.getElementById(id).innerHTML="";
    $("#"+id).prev(".input_data").css('border-color', '');
    clearParmanentMsg(clearTextBoxId);
    
}
function clearParmanentMsg(id)
{
	if($("#sameAbove").prop('checked') == true)
    {
		if(null!=$("#"+id))
		{
			$("#"+id).html("");
		}
        $("#"+id).prev(".input_data").css('border-color', '');
    }
}
function onCopyPastInCurrentAddress(cid,pid)
{
	if($("#sameAbove").prop('checked') == true)
	{
		$("#"+pid).val($("#"+cid).val());
	}
}

function loadEmpanelPartnerView(selectedPartner,status){
	
	var requesturl = "ajax/empanelview.htm?empanelStatus="+status;
	var requestData = {};

	//hideAllDiv();
	//storeInDB("partnerType", selectedPartner);
	initPage=true;
	switch (selectedPartner) {
	case '34':		
		requestData['empanelmentType']='INDIVIDUAL';		
		makeAjaxCall(requesturl, requestData, loadIndividualEmpanelForm);		
		break;
	case '35':		
		requestData['empanelmentType']='PARTNERSHIP';
		makeAjaxCall(requesturl, requestData, loadEmpanelForm);
		break;
	case '36':
		requestData['empanelmentType']='PROPRIETORSHIP';		
		makeAjaxCall(requesturl, requestData, loadEmpanelForm);
		break;
	case '37':
		requestData['empanelmentType']='PRIVATE LIMITED';
		makeAjaxCall(requesturl, requestData, loadEmpanelForm);
		break;
	case '38':
		requestData['empanelmentType']='INDIVIDUAL READ ONLY';
		makeAjaxCallAsyncFalse(requesturl, requestData, loadReadOnlyEmpanelForm);
		$("#divPartnerType").hide();
		break;
	case '39':
		requestData['empanelmentType']='PARTNERSHIP READ ONLY';
		makeAjaxCallAsyncFalse(requesturl, requestData, loadReadOnlyEmpanelForm);
		$("#divPartnerType").hide();
		break;
	case '40':
		requestData['empanelmentType']='INDIVIDUAL READ ONLY';
		makeAjaxCallAsyncFalse(requesturl, requestData, loadReadOnlyEmpanelForm);
		$("#divPartnerType").hide();
		break;
	case '41':
		requestData['empanelmentType']='PROPRIETORSHIP READ ONLY';
		makeAjaxCallAsyncFalse(requesturl, requestData, loadReadOnlyEmpanelForm);
		$("#divPartnerType").hide();
		break;
	case '42':
		requestData['empanelmentType']='PVT READ ONLY';
		makeAjaxCallAsyncFalse(requesturl, requestData, loadReadOnlyEmpanelForm);
		$("#divPartnerType").hide();
		break;	
	default:
		hideAllDiv();
	}
	
	
}
function tabHandler()
{
	var mydatec = new Date();
	var yearc = mydatec.getYear();
	yearc += 1800;
	//--------------
	// Datepicker
	$("#dob").datepicker({
		changeMonth : true,
		changeYear : true,
		dateFormat : 'd-M-yy',
		maxDate: 0,
		yearRange: yearc+':'+mydatec
	});

	$("#dob2").datepicker({
		changeMonth : true,
		changeYear : true,
		dateFormat : 'd-M-yy',
		maxDate: 0,
		yearRange: yearc+':'+mydatec
	});

	$("#dob3").datepicker({
		changeMonth : true,
		changeYear : true,
		dateFormat : 'd-M-yy',
		maxDate: 0,
		yearRange: yearc+':'+mydatec
	});

	$("#dob4").datepicker({
		changeMonth : true,
		changeYear : true,
		dateFormat : 'd-M-yy',
		maxDate: 0,
		beforeShow: function(){    
		        $(".ui-datepicker").css('font-size', 15) 
		},
		yearRange: yearc+':'+mydatec
	});

	$("#dob5").datepicker({
		changeMonth : true,
		changeYear : true,
		dateFormat : 'd-M-yy',
		maxDate: 0,
		yearRange: yearc+':'+mydatec
	});

	$("#dob2a").datepicker({
		changeMonth : true,
		changeYear : true,
		dateFormat : 'd-M-yy',
		maxDate: 0,
		yearRange: yearc+':'+mydatec
	});

	$("#reg").datepicker({
		changeMonth : true,
		changeYear : true,
		dateFormat : 'd-M-yy'
	});


	$('.save-btn').click(function() {
		
		$("html, body").animate({
			scrollTop : 0
		});

	});

	$('.tab-click').click(function() {		
		$('.save-msg').hide();
		$("#tabName").val($(this).attr('tabName'));
		if($(this).attr('tabName')=='TERMS AND CONDITIONS'){
			$(".save").hide();
	      }
		else{		
			$(".save").show();
		}
		
		if(partnerOBJ.empanelStatus!=null && partnerOBJ.empanelStatus.commonDataId!=undefined && partnerOBJ.empanelStatus.commonDataId!=null && (partnerOBJ.empanelStatus.commonDataId==73 || partnerOBJ.empanelStatus.commonDataId==74) )
		{
			$(".save").hide();
		}
	

	});

//	toggle the componenet with class menu_body
	$("#emp1").hide();
	$("#emp1a").hide();
	$("#pre1").hide();
	$("#pre1a").hide();
	$("#pre1b").hide();
	$("#pre3").hide();
	$("#pre3a").hide();
	$("#pre3b").hide();
	$("#pre5").hide();
	$("#pre5a").hide();
	$("#pre5b").hide();
	$("#pre7").hide();
	$("#pre7a").hide();
	$("#pre7b").hide();

	$(".before-term").click(function() {
		alert("Please accept Terms and Conditions before submitting.");
	});

	$(".term-check").click(function() {
		if ($(this).is(":checked")) {
			//$(".after-term").show();
			$(".submit").show();
		} else {
			$(".submit").hide();
			/*$(".before-term").show();
			$(".after-term").hide();*/
		}
	});
//	----------------
}
function makeAjaxCall(requesturl, requestData, successCallBack, component, completeCallBack, method) {	
	if(method == null){
		method ="POST";		
	}
	$.blockUI(); 
	
	var ajax = $.ajax({
		url : requesturl,
		type : method,
		htmlComp : (component == null) ? "" : component,
				data : requestData,
				postData : requestData,
				beforeSend : function() {
						//showBlockUI("Please wait...");
				},
				success : function(responseData) {
					try {
						if(typeof successCallBack == 'function')
							successCallBack.call(this, responseData);

					} catch (e) {	
//						showDialog(unhandledExMsg + e, false);
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					if (jqXHR.status == 900 || jqXHR.status == 404)
					{
						window.location.href='expire.jsp';
					}

					//handleHttpError(jqXHR, textStatus, errorThrown);

				},
				complete : function() {
					$.unblockUI(); 
						if (initPage && typeof completeCallBack != 'function') 
						{
							$(document).trigger('initPage');
							initPage = false;
						} 
						else if (typeof completeCallBack == 'function') 
						{
							try 
							{
								completeCallBack.call(this);
							} 
							catch (e) 
							{
								//showDialog(unhandledExMsg + e, false);
							}
						}
						
					
				}
	});
	
}

function showPartnerDiv(event) {
	$(".main-radio input[type='radio']").each(function(index){
		var value  = $(this).val();
		if(value == partnerOBJ.partnerType.commonDataId){
			//lastSelectedPartner = ${this};
		}
	});
	handlePartnerChange($(this));
	return true;
}

function initialize(e) {
	
	var partner = $.parseJSON(partnerDetails);
	console.log(partner);
	
	$(".addresstext").keyup(copyAddressText);
	$(".address").change(copyAddressDD);
	//setTimeout($(".addresstext").trigger("change"),1);
	
	/*$(".referred_by").click(handleReferredByClick);
	$('.radio_pancard').click(handlePanCardTypeClick);
	$('.work_with_na').change(handleWorkWithNA);
	$('.irda_certification').change(changeIRDA);
	$(".paymentmode1").click(handlePaymentModeChange);
	$(".paymentmode2").click(handlePaymentModeChange);
	$(".firmpayment").click(handlePaymentModeChange);
	
	$(".addresstext").keyup(copyAddressText);
	$(".address").change(copyAddressDD);*/
	
	initializeHtmlComponent(partner);
	/*$('.micr').trigger('change');
	$('#partnerBasicInfo').show();
	$('.district').trigger('change');
	var inputBoxList = $('#partnerBasicInfo').find('input');
	
	if(inputBoxList.length){		
		var width=$(inputBoxList[0]).width();
		$('label.text').css('width',width);
		$($('label.text')).each(function(){
			var currentTd = $(this).parent();
			var labelTD = (currentTd).prev();
			$(labelTD).removeClass('mandatory');
			
		});
		
	}
	*/
	
}

function initializeHtmlComponent(partnerDetails) 
{	
	try{
		
		partnerOBJ = new Partner();
		partnerOBJ.init(partnerDetails);
		
				
		/*if(partnerOBJ.dateOfBirth!=null){
			var date  = new Date(partnerOBJ.dateOfBirth);
			
			if(isValueANumber(date.getMilliseconds())){
				partnerOBJ.dateOfBirth = $.datepicker.formatDate(jsDateFormat,date);
			}
		}
		if(partnerOBJ.doiOnFirmPanCard!=null){
			var doiOnFirmPanCard  = new Date(partnerOBJ.doiOnFirmPanCard);
			if(isValueANumber(doiOnFirmPanCard.getMilliseconds())){
			partnerOBJ.doiOnFirmPanCard = $.datepicker.formatDate(jsDateFormat,doiOnFirmPanCard);
			}
		}

		
		if (partnerOBJ.ackSlipNumber != null || partnerOBJ.firmAckSlipNumber !=null) {
			$(".radio_pancard").each(function(comp) {
				if ($(this).val() != 'PANCARD') {
					$(this).attr('checked', 'checked');
					isDisablePan = false;
				}
			});
		} else {

		}
		
		var statusValue ="";

		if(partnerOBJ.empanelStatus!=null){
			statusValue = ""+partnerOBJ.empanelStatus.commonDataId;
			
		}
		
		fillStageData(statusValue);
		

		$(".radio_pancard").each(function(comp) {
			if ($(this).is(':checked'))
				$(this).trigger('click');
			if (isDisablePan && partnerOBJ.partnerId!=null)
				$(this).attr('disabled', 'disabled');
		});

		
		if(partnerOBJ.workedWithNa!=null)
		setWorkWithNA(partnerOBJ.workedWithNa.commonDataId);
		if(partnerOBJ.referredBy!=null)
		setReferredByValue(partnerOBJ.referredBy.commonDataId);
		if (partnerOBJ.certiIrda == null)
			setIRDAValue('0');
		else if(partnerOBJ.certiIrda.commonDataId== null || partnerOBJ.certiIrda.commonDataId== 0){
			setIRDAValue('0');
		}*/
		if(partnerOBJ.approvalDate!=null)
		{
			var x=partnerOBJ.approvalDate.replace(/,/,'');
			var test= new Array();
			test=x.split(' ');
			if(test!=null && test[1]!=null && test[2]!=null)
				partnerOBJ.approvalDate=test[1]+"-"+test[0]+"-"+test[2];
		}
		if(partnerOBJ.authSignDateOfBirth!=null)
			{
				var x=partnerOBJ.authSignDateOfBirth.replace(/,/,'');
				var test= new Array();
				test=x.split(' ');
				if(test!=null && test[1]!=null && test[2]!=null)
					partnerOBJ.authSignDateOfBirth=test[1]+"-"+test[0]+"-"+test[2];
			}
		if(partnerOBJ.dateOfBirth!=null)
		{
			var x=partnerOBJ.dateOfBirth.replace(/,/,'');
			var test= new Array();
			test=x.split(' ');
			if(test!=null && test[1]!=null && test[2]!=null)
				partnerOBJ.dateOfBirth=test[1]+"-"+test[0]+"-"+test[2];
		}
		if(partnerOBJ.dateOfActivation!=null)
		{
			var x=partnerOBJ.dateOfActivation.replace(/,/,'');
			var test= new Array();
			test=x.split(' ');
			if(test!=null && test[1]!=null && test[2]!=null)
				partnerOBJ.dateOfActivation=test[1]+"-"+test[0]+"-"+test[2];
		}
		if(partnerOBJ.dateOfGeneration!=null)
		{
			var x=partnerOBJ.dateOfGeneration.replace(/,/,'');
			var test= new Array();
			test=x.split(' ');
			if(test!=null && test[1]!=null && test[2]!=null)
				partnerOBJ.dateOfGeneration=test[1]+"-"+test[0]+"-"+test[2];
		}
		if(partnerOBJ.lastModifiedDate!=null)
		{
			var x=partnerOBJ.lastModifiedDate.replace(/,/,'');
			var test= new Array();
			test=x.split(' ');
			if(test!=null && test[1]!=null && test[2]!=null)
				partnerOBJ.lastModifiedDate=test[1]+"-"+test[0]+"-"+test[2];
		}
		var userInputList = $('#partnerBasicInfo').find('.input_data');	
		
		for ( var i = 0; i < userInputList.length; i++) {
			var userInput = userInputList[i];
      
			try 
			{			
				partnerOBJ.setFieldValue(userInput);
				
			} 
			catch (e) 
			{
				//alert(e);
			}
			
		}
		
		
		if(partnerOBJ.ackSlip)
		{
			var serviceTaxHtml = $("#tdPanCardSercvieTax").html();			
			if(serviceTaxHtml!='')
			{
				$("#tdPanCardSercvieTax").html("");
				$("#tdAckSercvieTax").html(serviceTaxHtml);
			}
		}
		
		$('.state').change(loadDistrictList);
		$('.district').change(loadCityList);
		$('.city').change(populateCity);
		$('.permanent_district').change(loadPerCityList);

		/*if(isDisablePan)
			isDisablePan = !(isEnablePanCard);
		convertInputAsLabel(isDisablePan);

		if(isAllowToChangeSalesHierarchy){
			addAutoSuggesstion();
		}

		
		
		if(!isShowPreviousRemarks){
			$('#remarks_table').hide();
		}
		
		
		if(partnerOBJ.partnerId!=null)
		filterStatus();*/
		
		if(partnerOBJ.empanelStatus.commonDataId==73 ||partnerOBJ.empanelStatus.commonDataId==74){
			$(".submit").children().text("Update");
			$(".save").hide();
			
		}
		
		
		if($('#proprietorship').is(":checked") && ($('#proprietorship').val() != partnerOBJ.partnerType.commonDataId)){
		var x=$("#isShowDocName").val();
		if(x==null || x==''){
			$( ".doc" ).each(function() {
				$(this).val("");
				id=$(this).attr("id");
				$("."+id).text('');
				$("."+id).hide();
				$(this).hide();
			});
		}	
		}
		
		if($('#pvt').is(":checked") && ($('#pvt').val() != partnerOBJ.partnerType.commonDataId)){
			var x=$("#isShowDocName").val();
			if(x==null || x==''){
				$( ".doc" ).each(function() {
					$(this).val("");
					id=$(this).attr("id");
					$("."+id).text('');
					$("."+id).hide();
					$(this).hide();
				});
			}	
		}
		
		if($('#partnership').is(":checked") && ($('#partnership').val() != partnerOBJ.partnerType.commonDataId)){
			var x=$("#isShowDocName").val();
			if(x==null || x==''){
				
				$( ".doc" ).each(function() {
					$(this).val("");
					$(this).text("");
					
					id=$(this).attr("id");
					$("."+id).text('');
					$("."+id).hide();
					$(this).hide();
				});
			}	
		}
		
		if($('#individual').is(":checked") && ($('#individual').val()!=partnerOBJ.partnerType.commonDataId)){
			var x=$("#isShowDocName").val();
			
			if(x==null || x==''){
				$( ".doc" ).each(function() {
					$(this).val("");
					id=$(this).attr("id");
					$("."+id).text('');
					$("."+id).hide();
					$(this).hide();
				});
			}	
		}
		
	}catch(e){
//		alert(e);
	}
	
}

function loadDistrictList(event) 
{
	
	
	if($(event.currentTarget).attr('id')=='stateCurrentAddress')
	{
		$("#city").html('<option value="0" sysid="0">---Select---</option>');
		
		if(!$('#individual').is(":checked")){
			$("#perDistrict").html('<option value="0" sysid="0">---Select---</option>');
		}
		else
		{
			$("#districtCurrentAddress").html('<option value="0" sysid="0">---Select---</option>');
		}
		
		//$("#city").html('<option>---Select---</option>');
	}
	else if($(event.currentTarget).attr('id')=='statePermanentAddress')
	{
		$("#perCity").html('<option value="0" sysid="0">---Select---</option>');
		$("#perDistrict").html('<option value="0" sysid="0">---Select---</option>');
		
		
	}
	var isChecked = $('.sameAsAbove').is(":checked");
	if(isChecked)
	{
		$("#perCity").html('<option value="0" sysid="0">---Select---</option>');
		$("#perDistrict").html('<option value="0" sysid="0">---Select---</option>');
		//$("#perDistrict option").eq(0).text('--Select--');
		//$("#perCity option").eq(0).text('--Select--');
		$("#statePermanentAddress").val($("#stateCurrentAddress").val());
	}

	var selectedState = $(this).find(":selected").attr('sysid');
	var fillingDD = "." + $(this).attr('dependentdd');


	if(selectedState!=undefined)
	{
		var districtURL = "ajax/districtlist.htm";
		makeAjaxCallAsyncFalse(districtURL,{"state" : selectedState}, cacheDistrictList, $(fillingDD));
	}
	else
	{
		//$('.district').html('<option value="">----Select----</option>');
	//	$('.city').html('<option value="">----Select----</option>');
	}
}


function handlePartnerChange(clickedPartnerType)
{
	var selectedPartner = $(clickedPartnerType).val().trim();
	if(selectedPartner!=lastSelectedPartner)
		{
			lastSelectedPartner=selectedPartner;
			loadEmpanelPartnerView(selectedPartner);	
		}

}

function loadEmpanelForm(responseData) 
{

	var partnerDiv = $('#partnerBasicInfo');
	try 
	{
		$(partnerDiv).html(responseData);

		$('.sameAsAbove').click(handleSameAsAbove);
		loadAllPrefilledDistrictList();		

		
		$("#tabs").tabs();
		$("#tabs2").tabs();
		$("#tabs3").tabs();
		$("#tabs4").tabs();
		$(".toggle_head").click(function() {

			$(this).next(".toggle_body").slideToggle(600);
			var plusmin;
			plusmin = $(this).children(".plusminus").text();

			if (plusmin == '+')
				$(this).children(".plusminus").text('-');
			else
				$(this).children(".plusminus").text('+');
		});
		tabHandler();
	} 
	catch (e) 
	{
//		alert(e);
	}
}

function loadReadOnlyEmpanelForm(responseData) 
{
	var partnerDiv = $('#partnerBasicInfo');
	try
	{
		$(partnerDiv).html(responseData);
		//Show and hide mandatory fields depends on Readonly view return after page submit
	
		if($('#educationDetails :selected').text() == ''){
			$("#educationDetails").attr("value", "");
		}
		if($('#professionalDetails:selected').text()==''){
			$("#professionalDetails").attr("value", "");
		}
		if($('#totalExperienceInMonths:selected').text()==''){
			$("#totalExperienceInMonths").attr("value", "");
		}
		if($("#serviceTaxUnchecked").is(':checked'))
	     {
			 $("#service").prop('checked',false);
			 $("#regis-no1").hide();
	     }	
		if($("#service").is(':checked'))
	     {
			$("#serviceTaxUnchecked").prop('checked',false);
			 $("#regis-no1").show();
	     }
		if(!$("#service").is(':checked') && !$("#serviceTaxUnchecked").is(':checked')){
			$("#serviceTaxUnchecked").prop('checked',true);
			$("#service").prop('checked',false);
			$("#regis-no1").hide();
		}
		if($("#ackSlip").is(':checked')){
			$("#panCard").attr('checked',false);
		    $("#pancardTable1").hide();
			$("#pancardTable2").hide();
			$("#ackSlipTable").show();
		}
        if($("#panCard").is(':checked')){
			$("#ackSlip").attr('checked',false);
		    $("#pancardTable1").show();
			$("#pancardTable2").show();
			$("#ackSlipTable").hide();
		}
        if(!$("#ackSlip").is(':checked') && !$("#panCard").is(':checked') ){
        	$("#ackSlip").attr("checked","checked");
        	$("#panCard").attr('checked',false);
        	$("#pancardTable1").hide();
			$("#pancardTable2").hide();
			$("#ackSlipTable").hide();
        }
		if($("#ackSlipNumber").val() !=null && $("#ackSlipNumber").val() !=''){
			$("#ackSlip").attr("checked","checked");
        	$("#panCard").attr('checked',false);
        	$("#pancardTable1").hide();
			$("#pancardTable2").hide();
			$("#ackSlipTable").hide();
		}
		$(partnerDiv).html(responseData);

		$('.sameAsAbove').click(handleSameAsAbove);
		loadAllPrefilledDistrictList();		

		
		$("#tabs").tabs();
		$("#tabs2").tabs();
		$("#tabs3").tabs();
		$("#tabs4").tabs();
		$(".toggle_head").click(function() {
			$(".sameAsAbove").click(function() { isClickFlag=false;});
           if(isClickFlag){
			$(this).next(".toggle_body").slideToggle(600);
			var plusmin;
			plusmin = $(this).children(".plusminus").text();

			if (plusmin == '+')
				$(this).children(".plusminus").text('-');
			else
				$(this).children(".plusminus").text('+');
           }
           else{
        	   $(this).next(".toggle_body").show();
        	   $(this).children(".plusminus").text('-');
           }
           isClickFlag=true;
		});
		
			
		tabHandler();
	
	if(partnerOBJ.empanelStatus == null || partnerOBJ.empanelStatus.commonDataId == 72 || partnerOBJ.empanelStatus.commonDataId ==71 || partnerOBJ.empanelStatus.commonDataId == 0){
	    $("#submitted").text("Data has been submitted successfully");
	}
	else if(partnerOBJ.empanelStatus.commonDataId == 73 || partnerOBJ.empanelStatus.commonDataId == 74){
		$("#submitted").text("Data has been updated successfully");
	}
		
	}
	catch (e)
	{
//		alert(e);
	}
}

function loadIndividualEmpanelForm(responseData){
	var partnerDiv = $('#partnerBasicInfo');
	
	try 
	{
		$(partnerDiv).html(responseData);

		$('.sameAsAbove').click(handleSameAsAbove);
		loadAllPrefilledDistrictList();		

		
		$("#tabs").tabs();
		$("#tabs2").tabs();
		$("#tabs3").tabs();
		$("#tabs4").tabs();
		$(".toggle_head").click(function() {
			$(".sameAsAbove").click(function() { isClickFlag=false;});
           if(isClickFlag){
			$(this).next(".toggle_body").slideToggle(600);
			var plusmin;
			plusmin = $(this).children(".plusminus").text();

			if (plusmin == '+')
				$(this).children(".plusminus").text('-');
			else
				$(this).children(".plusminus").text('+');
           }
           else{
        	   $(this).next(".toggle_body").show();
        	   $(this).children(".plusminus").text('-');
           }
           isClickFlag=true;
		});
		
				
		tabHandler();
	} 
	catch (e) 
	{
//		alert(e);
	}
}
function handleSubmitEmpanelResponse(responseData) {
	
	
	var errorSpanList = $('#partnerBasicInfo').find('.fieldError');
	var isFocused = false;
	var focusIndexId = -1;
	var flag=true;
	for ( var index = 0; index < errorSpanList.length; index++) 
	{
		var name = $(errorSpanList[index]).attr('name');
		   
			var value = responseData[name];
			if (value != null)
			{
				//var id1= $(errorSpanList[index]).parents('div .ui-tabs-panel').attr("id");
				//alert(id1); 
				//$('.id1').click();
				$(errorSpanList[index]).parents('div .toggle_body').prev('.toggle_head').children('.plusminus').text('-');
				$(errorSpanList[index]).parents('div .toggle_body').show();
			    flag=false;
			    if(name=='documentsRecieved.panCardAckSlip'||name=='documentsRecieved.resisdenceProof'||name=='documentsRecieved.allRequiredPhotograph'||name=='documentsRecieved.authorizedSignatoryAddressProof'||name=='documentsRecieved.authorizedSignatoryPancard'||name=='documentsRecieved.partnershipDeed'||name=='documentsRecieved.authorizedSignatoryPancard'||name=='documentsRecieved.officeAddressProof'||name=='documentsRecieved.moaAoa'||name=='documentsRecieved.authorizedSignatoryPhotograph')
			    {
			    	
					$("#fileiploadError").text("Please upload mandatory file(s).");
					
//					$(errorSpanList[index]).parents('div .toggle_body').hide();
					var focusOnError= $("#fileiploadError").parents('div .ui-tabs-panel').attr("id");
					$("."+focusOnError).click();
					$("#tabName").val($("."+focusOnError).attr("tabName"));
					$("#tabName").attr("class","");
				}
			    else{
			    	
			    	$(errorSpanList[index]).prev(".input_data").css('border-color', 'red');
			    	$(errorSpanList[index]).text(value);}
		
			    
				if(!isFocused)
				{
					isFocused = true;					
					focusIndexId = index;
				}
			}
			else
			{
				$(errorSpanList[index]).text('');
			}
		
	}

	if(focusIndexId!=-1)
	{
		
		var focusFieldName = $(errorSpanList[focusIndexId]).attr("name");
		if(focusFieldName=='authSignDateOfBirth' || focusFieldName=='dateOfBirth')
		{
			var focusOnError= $(errorSpanList[focusIndexId]).parents('div .ui-tabs-panel').attr("id");
			$("."+focusOnError).click();
			$("#tabName").val($("."+focusOnError).attr("tabName"));
			$("#tabName").attr("class","");
			$('html,body').animate({scrollTop: $(errorSpanList[focusIndexId]).offset().top+20});
		}
		else
		{
			var focusOnError= $(errorSpanList[focusIndexId]).parents('div .ui-tabs-panel').attr("id");
			$("."+focusOnError).click();
			$("#tabName").val($("."+focusOnError).attr("tabName"));
			$("#tabName").attr("class","");
			$('html,body').animate({scrollTop: $(errorSpanList[focusIndexId]).offset().top+20});
			$('input[name="'+focusFieldName+'"]').focus();
		}
	}
	

	if(flag){
		var viewtabToDisplayId=partnerOBJ.partnerType.commonDataId;
		//code added to display readOnly view
		var viewtabId='0';
		
		if(viewtabToDisplayId == $('#partnership').val())
	     {
			viewtabId='39';
			
	     }
		if(viewtabToDisplayId == $('#individual').val())
	     {
			viewtabId='40';
			
	     }
		
		if(viewtabToDisplayId == $('#proprietorship').val())
	     {
			viewtabId='41';
	     }
		
		 if(viewtabToDisplayId == $('#pvt').val())
	     {
			viewtabId='42';
	     }	
		
		
		loadEmpanelPartnerView(viewtabId,'72');
	}
	
	
	
	if (responseData['SUCCESS'] != null) {
		/*$('.save-msg').show();
		$("#rateCard").hide();
		$("#myLeads").hide();
		$("#myEarnings").hide();
		$("#acquirePartner").hide();
		$("#partnerLeads").hide();*/
		
		if (responseData['SUCCESS'] == '200') {
			loadDedupeData();
		} 
	} else if(responseData['ERROR'] !=null ){
		var globalErrorTD = $('#globalError').find('.fieldError');
		$(globalErrorTD).text(responseData['ERROR']);
	}
	
	
	
	
	
	if(focusIndexId!=-1)
	{
		
		var focusFieldName = $(errorSpanList[focusIndexId]).attr("name");
		if(focusFieldName=='authSignDateOfBirth' || focusFieldName=='dateOfBirth'||focusFieldName=='documentsRecieved.panCardAckSlip'||focusFieldName=='documentsRecieved.resisdenceProof'||focusFieldName=='documentsRecieved.allRequiredPhotograph'||focusFieldName=='documentsRecieved.authorizedSignatoryAddressProof'||focusFieldName=='documentsRecieved.authorizedSignatoryPancard'||focusFieldName=='documentsRecieved.partnershipDeed'||focusFieldName=='documentsRecieved.authorizedSignatoryPancard'||focusFieldName=='documentsRecieved.officeAddressProof'||name=='documentsRecieved.moaAoa')
		{
			
		}
		else
	{
			$('html,body').animate({scrollTop: $(errorSpanList[focusIndexId]).offset().top+20});
			$('input[name="'+focusFieldName+'"]').focus();
	}
	}
}

function handleEmpanelResponse(responseData) {
	
	try{
		var errorSpanList = $('#partnerBasicInfo').find('.fieldError');
		if(errorSpanList.length > 0){
			$('.save-msg').hide();
		}
		var isFocused = false;
		var focusIndexId = -1;
		for ( var index = 0; index < errorSpanList.length; index++) 
		{
			var name = $(errorSpanList[index]).attr('name');
			if (!$(errorSpanList[index]).parents('div').hasClass( 'ui-tabs-hide' )) {
			   
				var value = responseData[name];
				if (value != null)
				{
					 //$('.toggle_head').trigger('click');
					$(errorSpanList[index]).parents('div .toggle_body').prev('.toggle_head').children('.plusminus').text('-');
					$(errorSpanList[index]).parents('div .toggle_body').show();
					
					if(name=='documentsRecieved.panCardAckSlip'||name=='documentsRecieved.resisdenceProof'||name=='documentsRecieved.allRequiredPhotograph'||name=='documentsRecieved.authorizedSignatoryAddressProof'||name=='documentsRecieved.authorizedSignatoryPancard'||name=='documentsRecieved.partnershipDeed'||name=='documentsRecieved.authorizedSignatoryPancard'||name=='documentsRecieved.officeAddressProof')
				    {
						$("#fileiploadError").text("Please upload mandatory file(s).");
					}
					else{
					$(errorSpanList[index]).prev(".input_data").css('border-color', 'red');
					$(errorSpanList[index]).text(value);
					}
					if(!isFocused)
					{
						isFocused = true;					
						focusIndexId = index;
					}
				}
				else
				{
					$(errorSpanList[index]).text('');
				}
			} 
		}
		
		if(focusIndexId!=-1)
		{
			
			var focusFieldName = $(errorSpanList[focusIndexId]).attr("name");
			if(focusFieldName=='authSignDateOfBirth' || focusFieldName=='dateOfBirth'||focusFieldName=='documentsRecieved.panCardAckSlip'||focusFieldName=='documentsRecieved.resisdenceProof'||focusFieldName=='documentsRecieved.allRequiredPhotograph'||focusFieldName=='documentsRecieved.authorizedSignatoryAddressProof'||focusFieldName=='documentsRecieved.authorizedSignatoryPancard'||focusFieldName=='documentsRecieved.partnershipDeed'||focusFieldName=='documentsRecieved.authorizedSignatoryPancard'||focusFieldName=='documentsRecieved.officeAddressProof')
			{
				
			}
			else
		{
				$('html,body').animate({scrollTop: $(errorSpanList[focusIndexId]).offset().top+20});
				$('input[name="'+focusFieldName+'"]').focus();
		}
		}
		
		
		
		
		if (responseData['SUCCESS'] != null) {
			$('.save-msg').show();
			if (responseData['SUCCESS'] == '200') {
				loadDedupeData();
			}
		} else if(responseData['ERROR'] !=null ){
			var globalErrorTD = $('#globalError').find('.fieldError');
			$(globalErrorTD).text(responseData['ERROR']);
		}
		
	}catch(e){}

}


function submitPartner(){
	var partnerDetail = initPartner();
	var detailsStr = JSON.stringify(partnerDetail);
	alert(detailsStr);
	document.form1.submit();
}

function savePartner(event, actionType){
	   	var partnerDetail = initPartner();
		partnerDetail["tabName"]=$("#tabName").val();
		var nameOnPanCard = partnerDetail.nameOnPanCard;
		var panCardNumber = partnerDetail.panCardNumber;
		if($("#serviceTaxUnchecked").is(':checked')){
			partnerDetail.serviceTaxUnchecked=$("#serviceTaxUnchecked").is(':checked');
			partnerDetail.service=false;
			partnerDetail.taxRegistration="";
		}
		if($("#service").is(':checked')){
			partnerDetail.service=$("#service").is(':checked');
			partnerDetail.serviceTaxUnchecked=false;
			partnerDetail.taxRegistration=$('#taxRegistration').val();
		}
		if($("#ackSlip").is(':checked')){
			partnerDetail.ackSlip = $("#ackSlip").is(':checked');
			partnerDetail.panCard = false;
			partnerDetail.nameOnPanCard="";
			partnerDetail.panCardNumber="";
			partnerDetail.dateOfBirth="";
			$("#panCard").prop('checked',false);
			
		}
		if($("#panCard").is(':checked')){
			partnerDetail.panCard = $("#panCard").is(':checked');
			partnerDetail.ackSlip = false;
			partnerDetail.ackSlipNumber="";
			
			


		}
		
		
			
		
		partnerDetail["tabName"]=$("#tabName").val();
		var detailsStr = JSON.stringify(partnerDetail);
		if(actionType=='submit')
			{
			var cnfrm=true;
			if(panCardNumber=="")
			{
				$("#panCardDoc").hide();
				 cnfrm = confirm(" By not adding your PAN Number, you are liable to pay 20% tax at the time of closure.\n Are you sure you want to continue?");
				 
				
			}
			else
			{
				$("#panCardDoc").show();
			}
			if(cnfrm)
			{
				makeAjaxCall("addPartner.htm?actionType="+actionType, {"partnerDetails":detailsStr},handleSubmitEmpanelResponse);
			}
			else
			{
				var errorSpanList = $('#partnerBasicInfo').find('.fieldError');
				$(".tabs-1").click();
				$("#tabName").val($(".tabs-1").attr("tabName"));
				$("#tabName").attr("class","");
				$('html,body').animate({scrollTop: $(errorSpanList[4]).offset().top+20});
			}	
			}
		
		else{
			 	 
		    makeAjaxCall("addPartner.htm?actionType="+actionType, {"partnerDetails":detailsStr}, handleEmpanelResponse);
		}
		
		partnerDetails = detailsStr;
}


function initPartner() {
	var userInputList = $('#partnerBasicInfo').find('.input_data');
	var parterTypeList = $('#divPartnerType').find('.input_data');
	
	for ( var index = 0; index < userInputList.length; index++) 
	{
		var userInput = userInputList[index];
		partnerOBJ.setValue(userInput);		
	}
	
	for ( var index = 0; index < parterTypeList.length; index++) 
	{
		var userInput = parterTypeList[index];
		partnerOBJ.setValue(userInput);		
	}

	var partnerRequest = partnerOBJ.toJSON();
	initPage=true;
	return partnerRequest;
}

function HandleFileButtonClick(id,id2) {
	$("#fileiploadError").text('');
	var obj1 = document.getElementById(id);
	obj1.click();
	$("#"+id2).css('border', '3px solid #72b7e6');
	isBrowse=true;
}



function prev_emp() {

	var country = $('#prev_emp1').val();
	if (country == "show-emp") {
		$("#emp1").show();
		$("#emp1a").show();
		$("#emp2").hide();
	}

	else if (country == "hide-emp") {
		$("#emp2").show();
		$("#emp1").hide();
		$("#emp1a").hide();

	}
}

/* 2nd-----*/


function prev_pre() {

	var country = $('#prev_pre1').val();
	if (country == "show-pre") {
		$("#pre1").show();
		$("#pre1a").show();
		$("#pre1b").show();
		$("#pre2").hide();
	}

	else if (country == "hide-pre") {
		$("#pre2").show();
		$("#pre1").hide();
		$("#pre1a").hide();
		$("#pre1b").hide();
	}
}

/* 3rd-----*/

function prev_pre31() {

	var country = $('#prev_pre3').val();
	if (country == "show-pre3") {
		$("#pre3").show();
		$("#pre3a").show();
		$("#pre3b").show();
		$("#pre4").hide();
	}

	else if (country == "hide-pre3") {
		$("#pre4").show();
		$("#pre3").hide();
		$("#pre3a").hide();
		$("#pre3b").hide();
	}
}

/* 4th-----*/

function prev_pre51() {

	var country = $('#prev_pre5').val();
	if (country == "show-pre5") {
		$("#pre5").show();
		$("#pre5a").show();
		$("#pre5b").show();
		$("#pre6").hide();
	}

	else if (country == "hide-pre5") {
		$("#pre6").show();
		$("#pre5").hide();
		$("#pre5a").hide();
		$("#pre5b").hide();
	}
}

/* 5th-----*/


function prev_pre71() {

	var country = $('#prev_pre7').val();
	if (country == "show-pre7") {
		$("#pre7").show();
		$("#pre7a").show();
		$("#pre7b").show();
		$("#pre8").hide();
	}

	else if (country == "hide-pre7") {
		$("#pre8").show();
		$("#pre7").hide();
		$("#pre7a").hide();
		$("#pre7b").hide();
	}
}

function sub_broker() {

	var country = $('#sub_broker1').val();
	if (country == "show-broker") {
		$("#broker1").show();
		$("#broker2").hide();

	}

	else {
		$("#broker1").hide();
		$("#broker2").show();

	}
}

function irda() {

	var country = $('#irda1').val();
	if (country == "s-irda") {
		$("#show-irda").show();
		$("#show-irda-n").show();
		$("#hide-irda").hide();
	}

	else {
		$("#show-irda").hide();
		$("#show-irda-n").hide();
		$("#hide-irda").show();

	}
}

function irdaa() {

	var country = $('#irda1a').val();
	if (country == "s-irdaa") {
		$("#show-irdaa").show();
		$("#show-irdaa-n").show();
		$("#hide-irdaa").hide();
	}

	else {
		$("#show-irdaa").hide();
		$("#show-irdaa-n").hide();
		$("#hide-irdaa").show();

	}
}

function irdab() {

	var country = $('#irda1b').val();
	if (country == "s-irdab") {
		$("#show-irdab").show();
		$("#show-irdab-n").show();
		$("#hide-irdab").hide();
	}

	else {
		$("#show-irdab").hide();
		$("#show-irdab-n").hide();
		$("#hide-irdab").show();

	}
}

function irdac() {

	var country = $('#irda1c').val();
	if (country == "s-irdac") {
		$("#show-irdac").show();
		$("#show-irdac-n").show();
		$("#hide-irdac").hide();
	}

	else {
		$("#show-irdac").hide();
		$("#show-irdac-n").hide();
		$("#hide-irdac").show();

	}
}





//to get the district list basis on stateId
var responseId;
function getList(request,response)
{
	var requesturl = null;
	var requestData={};
	responseId=response;
	$("#"+responseId).html("<option value='0'>----Select----</option>");
	if(response=='district' || response=='perDistrict')
	{
		requesturl= "ajax/getDistrictList.htm";
		requestData['stateId']=request;
		if(response=='district')
		{
			$("#city").html("<option value='0'>----Select----</option>");
		}
		else
		{
			$("#perCity").html("<option value='0'>----Select----</option>");
		}
	}
	else if(response=='city' || response=='perCity')
	{
		requesturl="ajax/getCityList.htm";
		requestData['districtId']=request;
	}

	makeAjaxCall(requesturl, requestData, loadDistricts);
}
function loadDistricts(responseData)
{ 
	if(responseData!=null)
	{
		for(var i=0;i<responseData.length;i++)
		{
			$("#"+responseId).append('<option value='+responseData[i].propertyId+'>'+responseData[i].propertyName+'</option>');
		}
	}
}


function ajaxCall(requestUrl,requestData,loaderId)
{
   $('#'+loaderId).html('<img src="images/logger.gif"> loading...');
	$.ajax({
        url : requestUrl,
        data:requestData,
        async : true,
        processData: false,
        contentType: false,
        type: 'POST',
        success : function(data) {
        	$('#'+loaderId).html('Uploaded Sucessfully');
        }
    });
}

function handleSameAsAbove(event) {
	sameAsAboveAction($(this).is(':checked'));

}

function sameAsAboveAction(isChecked){
	if (isChecked) {
		var district=$("#districtCurrentAddress option:selected").text();
		var city=$("#city option:selected").text();
		$("#statePermanentAddress").val($("#stateCurrentAddress").val());
		$("#perDistrict").val($("#districtCurrentAddress").val());
		$("#perDistrict").html('<option value='+district+'>'+district+'</option>');
		$("#perCity").html('<option value='+city+'>'+city+'</option>');
		
		$('.sameAsAboveData').attr('disabled', 'disabled');
		var dropdownComp = $('.address');
		var length = dropdownComp.length;
		$('#permanent_address_proof').removeClass('mandatory');
		
		$('#permanent_address_proof .close-prop').show();
		
		for ( var index = 0; index < length; index++) {
			var value = $(dropdownComp[index]).val();

			if (value != '0' && value != '') {
				var dependComp = $(dropdownComp[index]).attr('depend');
				setParmanentValue(value, dependComp);
			}
		}
		$('.addresstext').trigger('keyup');
	} else {
		
		
		$('#permanent_address_proof').addClass('mandatory');
		$('#permanent_address_proof .close-prop').hide();
		$('.sameAsAboveData').removeAttr('disabled');
		$('.sameAsAboveData').val('');
		$("#perCity").html('<option>--Select--</option>');
		$("#perDistrict").html('<option>--Select--</option>');
		
	}
}

function copyAddressText(event) {
	var isSameAsAbove = $(".sameAsAbove").is(':checked');
	if (isSameAsAbove) {
		var value = $(this).val();
		var dependComp = $(this).attr('depend');
		setParmanentValue(value, dependComp, false);
	}
}

function setParmanentValue(value, dependComp) {

	var componentList = $('.sameAsAboveData');
	var totalLength = $('.sameAsAboveData').length;
	
	for ( var index = 0; index < totalLength; index++) {
		var component = componentList[index];
       
		if ($(component).hasClass(dependComp)) {
			var ddValue  = $(component).val();
			$(component).val(value);
		if (ddValue!=value) {
				$(component).trigger('change');
			}
			break;
		}
	}
}
function copyAddressDD(event) {
	var isSameAsAbove = $(".sameAsAbove").is(':checked');
	if (isSameAsAbove) {
		
		var value = $(this).val();
		var dependComp = $(this).attr('depend');
		setParmanentValue(value, dependComp);
	}
}

function loadPerCityList(event) {
	var isChecked = $('.sameAsAbove').is(":checked");

	if(isChecked){
   //		 $("#perDistrict option").eq(0).val($("#districtCurrentAddress").val());
   //		 $("#perDistrict option").eq(0).text($("#districtCurrentAddress option:selected").text());
	 }
	 else{
		 $("#perCity option").eq(0).text('--Select--');
	    }
	 var selectedDistrict = $(this).find(":selected").attr('sysid');
	 var fillingDD = "." + $(this).attr('dependentdd');
	 if(selectedDistrict!=undefined){
	 var cityUrl = "ajax/citylist.htm";
	 makeAjaxCallAsyncFalse(cityUrl,{"district" : selectedDistrict}, cacheCityList, fillingDD);
	 }
	 
}


function loadCityList(event) {
	var isChecked = $('.sameAsAbove').is(":checked");

	if(isChecked){
		 $("#perDistrict option").eq(0).val($("#districtCurrentAddress").val());
		 $("#perDistrict option").eq(0).text($("#districtCurrentAddress option:selected").text());
	 }
	 else{
		 $("#perCity option").eq(0).text('--Select--');
	    }
	 var selectedDistrict = $(this).find(":selected").attr('sysid');
	 var fillingDD = "." + $(this).attr('dependentdd');
	 if(selectedDistrict!=undefined){
	 var cityUrl = "ajax/citylist.htm";
	 makeAjaxCallAsyncFalse(cityUrl,{"district" : selectedDistrict}, cacheCityList, fillingDD);
	 }
	 
}

function populateCity(event){
	var isChecked = $('.sameAsAbove').is(":checked");
	
	if(isChecked){
		 $("#perCity option").eq(0).val($("#city").val());
		 $("#perCity option").eq(0).text($("#city").val());
	 }
}


function cleanDependendDD(comp) {
	cleanComp($(comp));
	$(comp).append("<option value='0'>----Select----</option>");

	var fillingDD = $(comp).attr('dependentdd');
	if (fillingDD != null && fillingDD != undefined)
		cleanDependendDD($("." + fillingDD));
}

function cleanComp(comp) {
	$(comp).children().each(function(i, child) {
		$(child).remove();
	});

}

function cacheDistrictList(responseData) 
{	
	try
	{
		districtList[this.postData.state] = responseData;
		
		if (this.htmlComp.length) 
		{
			fillDistrictList(this.htmlComp, responseData);
		}
	}
	catch(e)
	{
//		alert(e);
	}
}

function fillDistrictList(component, districtData) 
{
	cleanComp($(component));
	var value = $(component).attr('defaultValue');
	$(component).removeAttr('defaultValue');
	var opt = $("<option></option>");
	opt.text("---Select---");
	opt.val("0");
	$(opt).attr('sysid', '0');
	var isDefaultValueSet = false;
	$(component).append(opt.clone());
	var length = districtData.length;
	for ( var i = 0; i < length; i++) {
		var districtID = districtData[i].propertyId;

		var districtName = districtData[i].propertyName;
		var opt = $("<option></option>");
		if (districtName == value) {
			opt.attr("selected", "selected");
			isDefaultValueSet = true;
		}
		$(opt).attr('sysid', districtID);
		opt.text(districtName);
		opt.val(districtName);
		$(component).append(opt.clone());
	}
	if (isDefaultValueSet) {
		$(component).trigger('change');
	}
}

function cacheCityList(responseData) {
	cityList[this.postData.district] = responseData;
	fillCityList(this.htmlComp, responseData);
}

function fillCityList(component, cityData) {

	cleanComp($(component));
	var defaultValue = $(component).attr('defaultValue');
	//$(component).removeAttr('defaultValue');
	var opt = $("<option></option>");
	opt.text("---Select---");
	opt.val("0");
	$(opt).attr('sysid', '0');
	$(component).append(opt.clone());
	var length = cityData.length;
	var isTriggerChange = false;
	for ( var i = 0; i < length; i++) {
		var cityID = cityData[i].propertyId;
		var cityName = cityData[i].propertyName;
		var opt = $("<option></option>");
		if(defaultValue == cityName){
			opt.attr("selected","selected");
			isTriggerChange = true;
		}
//		opt.attr("selected","selected");
		opt.text(cityName);
		opt.val(cityName);
		$(opt).data('sysid', cityID);
		$(component).append(opt);
		
	}
	if (isTriggerChange) {
		$(component).trigger('change');
	}
}
function manadotryField(id)
{

/*	$("#ifscMandatoryBank2 span").css("display","none");
	if ($("input[name='bankDetails1.paymentModeId'][value='19']").prop("checked"))
		{		
		$("#ifscMandatoryBank1 span").css("display","inline");
		}*/

	$("#"+id).prop("checked",false);
	 var divId =    $("#id_").closest("div").attr('id');
	 var clearDivId = $("#_id").closest("div").attr('id');
	 $("#"+clearDivId).find('span[id^="_id"]').css("display","none");
	 $("#"+divId).find('span[id^="id_"]').css("display","inline");
}
function manadotryField1(id)
{
	
	
/*	
	$("#ifscMandatoryBank1 span").css("display","none");
	if ($("input[name='bankDetails2.paymentModeId'][value='19']").prop("checked"))
	{	
	$("#ifscMandatoryBank2 span").css("display","inline");
	}*/
	
	$("#"+id).prop("checked",false);
	 var divId =    $("#_id").closest("div").attr('id');
	 var clearDivId = $("#id_").closest("div").attr('id');
	 $("#"+clearDivId).find('span[id^="id_"]').css("display","none");
	 $("#"+divId).find('span[id^="_id"]').css("display","inline");
}
function chekPanCardLength(evt,id)
{
	var maxLength = $("#"+id).attr("maxlength");
	var maxLengthPlusOne = parseInt(maxLength)+1;

if (matchMedia('only screen and (max-width: 580px)').matches)
{

	var primaryNum = $("#"+id).val();
	if(null!=primaryNum)
	{
		numLen = primaryNum.trim().length;
	}

	if(numLen==maxLengthPlusOne)
	{
		var res = primaryNum.substring(0, parseInt(maxLength));
		$("#"+id).val(res);
		evt.preventDefault();
		return false;
	}
}

else if (matchMedia('only screen and (max-width: 1024px) ').matches)
{
var primaryNum = $("#"+id).val();
var numLen=0;
if(null!=primaryNum)
	{
 numLen = primaryNum.trim().length;
	}

if(numLen==maxLengthPlusOne)
{
	var res = primaryNum.substring(0, parseInt(maxLength));
	//$("#"+id).val("");
	 $("#"+id).val(res);
	evt.preventDefault();
	return false;
}

} 
}
function isNumberKey(evt,id)
{
	
	var maxLength = $("#"+id).attr("maxlength");
	var maxLengthPlusOne = parseInt(maxLength)+1;
	var charCode = (evt.which) ? evt.which : event.keyCode;
	
	if (matchMedia('only screen and (max-width: 580px)').matches)
	{
		var numLen=0;
		if((charCode==229))
		{
			var primaryNum = $("#"+id).val();
			var res = primaryNum.substring(0, primaryNum.trim().length);
			$("#"+id).val("");
			$("#"+id).val(res);
			return false;
		}
		var primaryNum = $("#"+id).val();
		if(null!=primaryNum)
		{
			numLen = primaryNum.trim().length;
		}

		if(numLen==maxLengthPlusOne)
		{
			var res = primaryNum.substring(0, parseInt(maxLength));
			//$("#"+id).val("");
			$("#"+id).val(res);
			evt.preventDefault();
			return false;
		}
	}

else if (matchMedia('only screen and (max-width: 1024px) ').matches)
{
	var numLen=0;
	var primaryNum = $("#"+id).val();
	if(null!=primaryNum)
	{
		numLen = primaryNum.trim().length;
	}
	
	if(numLen==maxLengthPlusOne)
	{
		var res = primaryNum.substring(0, parseInt(maxLength));
		//$("#"+id).val("");
		 $("#"+id).val(res);
		evt.preventDefault();
		return false;
	}

}	
	
	
	
	if(!evt.shiftKey)
	{	
		if(charCode>=37 && charCode<=40)
		{
			return true;
		}		
	}
	if ((evt.keyCode >= 48 && evt.keyCode <= 57) || (evt.keyCode >= 96 && evt.keyCode <= 105)) 
	{
		return true;
	}
	if (charCode > 31 && (charCode < 48 || charCode > 57))
	{
		if(charCode==229)
			{
				return true;
			}
		else
		{	
		return false;
		}
	}
	
	else
	{
		return true;	
	} 
   
}
function isAlphabet(evt)
{
	
	
	
   var charCode = (evt.which) ? evt.which : event.keyCode;
   if ((charCode > 64 && charCode<=90) || (charCode>=97 && charCode<=122)|| charCode==8||charCode==32)
     {
  	 	return true;
     }

   return false;
}
function isAlphaNumeric(evt)
{
	/* var keynum;
	    var keychar;
	    var charcheck;
	    if(window.event) // IE
	       keynum = evt.keyCode;
	    else if(evt.which) // Netscape/Firefox/Opera
	       keynum = evt.which;
	    keychar = String.fromCharCode(keynum);
	    charcheck = /[a-zA-Z0-9]/;
	    return charcheck.test(keychar);*/
	var k;
    document.all ? k=evt.keycode : k=evt.which;
    return((k>47 && k<58)||(k>64 && k<91)||(k>96 && k<123)||k==0);

}



function loadAllPrefilledDistrictList() 
{
	
	var partner = $.parseJSON(partnerDetails);
	if (partner.currentAddress != null) 
	{
		var selectedState = $('.state').find("option[value='"+partner.currentAddress.stateName+"']").attr('sysid');		
		if (selectedState != null) 
		{
			var districtURL = "ajax/districtlist.htm";
			makeAjaxCallAsyncFalse(districtURL, {
				"state" : selectedState
			}, cacheDistrictList, $('.current_district'));

		}
	}
	if (partner.permanentAddress != null) 
	{		
		var selectedState = $('.state').find("option[value='"+partner.permanentAddress.stateName+"']").attr('sysid');
		if (selectedState != null) {			
			var districtURL = "ajax/districtlist.htm";

			makeAjaxCallAsyncFalse(districtURL, {
				"state" : selectedState
			}, cacheDistrictList, $('.permanent_district'));

		}
	}
	if (partner.officeAddress != null && !$('#individual').is(":checked")) 
	{
		
		var selectedState = $('.state').find("option[value='"+partner.officeAddress.stateName+"']").attr('sysid');
		if (selectedState != null) 
		{			
			var districtURL = "ajax/districtlist.htm";			
			makeAjaxCallAsyncFalse(districtURL, {
				"state" : selectedState
			}, cacheDistrictList, $('.office_district'));			
		}
	}	
	
		
		
		/*var selectedState = $('.state').find('option[value='+partner.officeAddress.stateName+']').attr('sysid');
		
		if (selectedState != null) 
		{

			var districtURL = "ajax/districtlist.htm";

			var htmlComp = $('.office_district');
			if ($('.office_district').length) 
			{
				htmlComp = $('.office_district');
			}
			makeAjaxCall(districtURL,{"state" : selectedState}, cacheDistrictList, htmlComp);

		}*/
	
	loadAllPrefilledCityList();
}
function loadAllPrefilledCityList() 
{
	var partner = $.parseJSON(partnerDetails);
	if (partner.currentAddress != null) 
	{
		var selectedDistrict = $('#districtCurrentAddress').find("option[value='"+partner.currentAddress.districtName+"']").attr('sysid');
		if (selectedDistrict != null) 
		{			
			var districtURL = "ajax/citylist.htm";		
			makeAjaxCallAsyncFalse(districtURL, {"district" : selectedDistrict}, cacheCityList, $('.office_city'));
			
		}
	}
	if (partner.permanentAddress != null) 
	{
		var selectedDistrict = $('#perDistrict').find("option[value='"+partner.permanentAddress.districtName+"']").attr('sysid');		
		if (selectedDistrict != null) 
		{			
			var districtURL = "ajax/citylist.htm";		
			makeAjaxCallAsyncFalse(districtURL, {"district" : selectedDistrict}, cacheCityList, $('.permanent_city'));
		
		}
	}
	
	if (partner.officeAddress != null && $('#individual').is(":checked"))  
	{
		
		var selectedDistrict = $('#perDistrict').find("option[value='"+partner.officeAddress.districtName+"']").attr('sysid');		
		if (selectedDistrict != null) {
			var districtURL = "ajax/citylist.htm";

			makeAjaxCallAsyncFalse(districtURL, {"district" : selectedDistrict}, cacheCityList, $('.office_city'));

		}
	}
}

function searchAddressID(name, list) 
{	
	var id = null;
	if (name != null) {

		$.each(list, function(index, value) {
			if (value.propertyName == name) {
				id = value.propertyId;
				return;
			}
		});
	}
	return id;
}

function makeAjaxCallAsyncFalse(requesturl, requestData, successCallBack, component, completeCallBack, method) {	
	if(method == null){
		method ="POST";		
	}
	$.blockUI(); 
	
	var ajax = $.ajax({
		url : requesturl,
		type : method,
		async: false,
		htmlComp : (component == null) ? "" : component,
				data : requestData,
				postData : requestData,
				beforeSend : function() {
						//showBlockUI("Please wait...");
				},
				success : function(responseData) {
					try {
						if(typeof successCallBack == 'function')
							successCallBack.call(this, responseData);

					} catch (e) {	
//						showDialog(unhandledExMsg + e, false);
					}
				},
				error : function(jqXHR, textStatus, errorThrown) 
				{					
					//handleHttpError(jqXHR, textStatus, errorThrown);
					if (jqXHR.status == 900 || jqXHR.status == 404)
					{
						window.location.href='expire.jsp';
					}
					
				},
				complete : function() {
					$.unblockUI(); 
									
				
						if (initPage && typeof completeCallBack != 'function') 
						{
							$(document).trigger('initPage');
							initPage = false;
						} 
						else if (typeof completeCallBack == 'function') 
						{
							try 
							{
								completeCallBack.call(this);
							} 
							catch (e) 
							{
								//showDialog(unhandledExMsg + e, false);
							}
						}
						
					
				}
	});
	
}

function ifscMandatory(obj,type)
{
	
	
	if($(obj).attr('defaultValue').trim()=='NEFT')
	{
		
		
		
		$("#ifscMandatory"+type).show();
		$("#ifsc"+type).hide();
		
	
		/*if($("#bank1id").is(":checked"))
		{			
		$("#displaySpanBank1").show();	
		}
		if($("#bank2id").is(":checked"))
		{
		$("#displaySpanBank2").show();	
		}
		if($("#bank3id").is(":checked"))
		{
		$("#displaySpanBank1").show();	
		}
		if($("#bank4id").is(":checked"))
		{
		$("#displaySpanBank2").show();	
		}
		if($("#bank5id").is(":checked"))
		{
		$("#displaySpanBank1").show();	
		}
		if($("#bank6id").is(":checked"))
		{
		$("#displaySpanBank2").show();	
		}
		if($("#bank7id").is(":checked"))
		{
		$("#displaySpanBank1").show();	
		}
		if($("#bank8id").is(":checked"))
		{
		$("#displaySpanBank2").show();	
		}
		*/
		
	}
else
	{
	

		$("#ifscMandatory"+type).hide();
		$("#ifsc"+type).show();
		
		
	}
}

function loadIframepattern(value)
{
	var str="";	
	if(value!=undefined && value!=null)

	 str=value.substring(0, 20); 
	
	 var  DATE_PATTERN =     "(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[012])-((19|20)\\d\\d) ([0-9][0-9])_([0-9][0-9])_([0-9][0-9]) ";
     var matchpattern=     str.match(DATE_PATTERN);     
	return matchpattern;
	
	
}


function setdocumentvalueblank(documenttype)
{
	

	
	if($('#proprietorship').is(":checked") && ($('#proprietorship').val() != partnerOBJ.partnerType.commonDataId)){	    
		partnerOBJ.documentsRecieved[documenttype]='';
			
	  }
	
	if($('#pvt').is(":checked") && ($('#pvt').val() != partnerOBJ.partnerType.commonDataId)){
		partnerOBJ.documentsRecieved[documenttype]='';
	}
	if($('#partnership').is(":checked") && ($('#partnership').val() != partnerOBJ.partnerType.commonDataId)){
		partnerOBJ.documentsRecieved[documenttype]='';
	}
	if($('#individual').is(":checked") && ($('#individual').val() != partnerOBJ.partnerType.commonDataId)){
		partnerOBJ.documentsRecieved[documenttype]='';
			
	}
	}



function setdocumentfromDb(value)
{
	
	try
	{
	if(value!=undefined && value!=null)
		{
var	showval=value.substring(20, value.length);	
	return showval;
	}
	else{
		if(value.indexOf(".")==-1)
			return "";
		
		return value;
	}
		
	}
	catch(e)
	{
		
	}

}


function loadIframe(id, label1, val1, span1) {

	if ($('#' + id).contents().find("html").text().indexOf('.') > 0)
	{
		var value = $('#' + id).contents().find("html").text();
		if (value.length > 1000) 
		{			
			location.replace("index.jsp");
			return;
		}
		var showlabel = value.substring(20, value.length);
		$("#" + label1).html(showlabel + " Successfully Uploaded");
		$("#" + label1).show();
		$("#" + label1).css("color", "green");
		$("#" + val1).val($('#' + id).contents().find("html").text());
		$("#" + span1).show();

	} 
	else 
	{
		if ($('#' + id).contents().find("html").text() != '') 
		{
			$("#" + label1).text($('#' + id).contents().find("html").text());
			$("#" + val1).val('');
			$("#" + label1).show();
			$("#" + label1).css("color", "red");
			$("#" + span1).hide();
		}
	}
}
function hideField(id,id2){
	$("#"+id).hide();
	//browse-btn
	$(".browse-btn").addClass('disble-btn-small');
	//$("#"+id2).css('border', '3px solid #72b7e6');
	$("#"+id2).removeClass('disble-btn-small');
	$("#fileiploadError").text('');
	isBrowse=true;
}

function selectFile(label,dropDownId,spanId,id,id2,label2,e){
	
	if( $("#"+dropDownId).val().indexOf('Select')!=-1){
		$("#"+label).show();
		$("#"+label).text('Please Browse and Select a File');
	    $("#"+label).css('color','red');
	    $("#"+spanId).text('');
	    $("#"+id).val('');
	    $("#"+label2).text('');
	    e.preventDefault();
	}
	else{
		$("#"+label).text('');
		$("#"+spanId).text('Successfully Uploaded');
		hideField(id,id2);
	}
}

function uploadFile(frm,id,fileid,errMsg,selectid,selectError1){
	if(!isBrowse || $( "#"+id).hasClass( "disble-btn-small")){
		  return false;
	  }
	
	if($("#"+fileid).val()=="")
	{
		if((selectid!='') && ($("#"+selectid).val()!="----Select----"))
		{
		document.getElementById(selectError1).innerHTML="";
		}
	  // document.getElementById(errMsg).innerHTML="Please Browse and Select a File";
	   document.getElementById(errMsg).style.color="red";
	   return false;
	}
	
	else{

		document.getElementById(errMsg).innerHTML="";
		if(isBrowse){
			isBrowse=false;
			$("#"+id).css('border', '');			
			//document.frm.submit();
		}
	}
	return true;
}

function checkSelect(id,error,myFile4,upload4)
{

if($("#"+id).val()=="----Select----")
	{
	document.getElementById(error).innerHTML="Please Select From SelectBox";
	document.getElementById(error).style.color="red";
	return false;
	}
else{
	document.getElementById(error).innerHTML="";
	HandleFileButtonClick(myFile4,upload4);
}
}
function showTaxRegisTration(){
	if($("#service").is(':checked')){
		$(".serviceTax").append("<span class='red'>*</span>");
		$("#regis-no1").show();
		 $("#serviceTaxUnchecked").attr('checked',false);
	}
	else{
		
		
	}
	/*if($("#serviceAck").is(':checked')){
		$("#regis-no1").show();
	}*/
}

function resetTaxRegistration(){
	if($("#serviceTaxUnchecked").is(':checked')){
		$(".serviceTax").children("span").remove();
		if($("#service").is(':checked')){
		 $("#service").prop('checked',false);
		 $("#serviceTaxUnchecked").attr('checked',true);
			$("#service").attr('checked',false);
		}
		//$("#taxRegistration").val("");
		$("#regis-no1").hide();
	}
	
	/*if($("#serviceTaxAckUnchecked").is(':checked')){
		if($("#serviceAck").is(':checked')){
		 $("#serviceAck").prop('checked',false);
		 $("#serviceTaxAckUnchecked").attr('checked',':checked');
			$("#serviceAck").attr('checked',false);
		}
		//$("#taxRegistration").val("");
		$("#regis-no1").hide();
	}*/
}

function checkPanCardRadio(){
	if($("#panCard").is(':checked')){
		
		var serviceTaxHtml = $("#tdAckSercvieTax").html();
		
		if($("#ackSlip").is(':checked')){
		  $("#ackSlip").attr('checked',false);
		  $("#ackSlip").prop('checked',false);
		  $("#panCard").attr('checked',':checked');
		 /* if($("#serviceAck").is(':checked')){
			  $("#service").attr('checked',true);
			  $("#serviceTaxUnchecked").attr('checked',false);
			  $("#regis-no1").show();
		  }
		  else{
			  $("#service").attr('checked',false);
			  $("#serviceTaxUnchecked").attr('checked',true);
			  $("#regis-no1").hide();
		  }*/
		}
		$("#pancardTable1").show();
		$("#pancardTable2").show();
		$("#ackSlipTable").hide();
		
		if($.trim(serviceTaxHtml)!='')
		{
			var serviceRadio = $("#service").is(':checked');			
			$("#tdAckSercvieTax").html("");
			$("#tdPanCardSercvieTax").html(serviceTaxHtml);	
			if(serviceRadio)
			{
				$("#service").attr('checked',true);
			}
			else
			{
				$("#serviceTaxUnchecked").attr('checked',true);
			}
		}
		
		
		
	}
}
function checkAckSlipRadio(){
	if($("#ackSlip").is(':checked')){
		
		var serviceTaxHtml = $("#tdPanCardSercvieTax").html();
		if($("#panCard").is(':checked')){
			  $("#panCard").attr('checked',false);
			  $("#panCard").prop('checked',false);
			  $("#ackSlip").attr('checked',':checked');
			/*  if($("#service").is(':checked')){
				  $("#serviceAck").attr('checked',true);
				  $("#serviceTaxAckUnchecked").attr('checked',false);
				  $("#regis-no1").show();
			  }
			  else{
				  $("#serviceAck").attr('checked',false);
				  $("#serviceTaxAckUnchecked").attr('checked',true);
				  $("#regis-no1").hide();
			  }*/
		  }
		
		$("#pancardTable1").hide();
		$("#pancardTable2").hide();
		$("#ackSlipTable").show();
		
		
		if($.trim(serviceTaxHtml)!='')
		{
			var serviceRadio = $("#service").is(':checked');
			$("#tdPanCardSercvieTax").html("");
			$("#tdAckSercvieTax").html(serviceTaxHtml);
			if(serviceRadio)
			{
				$("#service").attr('checked',true);
			}
			else
			{
				$("#serviceTaxUnchecked").attr('checked',true);
			}
		}
	}
}