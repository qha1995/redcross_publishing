$(function() {
	$('#footer .wrapper').hide();
    $('#new_area_localunion_and_worldredcross .btn_link_close').hide();
    
    $('#new_area_localunion_and_worldredcross .btn_link_open').click(function(e){
    	e.preventDefault();
    	$('#new_area_localunion_and_worldredcross .btn_link_open').hide();
    	$('#new_area_localunion_and_worldredcross .btn_link_close').show();
    	
    	$('#footer .wrapper').show();
    	$('.area_jisa .item_01 > a').focus();
    });
    
    $('#new_area_localunion_and_worldredcross .btn_link_close').click(function(e){
    	e.preventDefault();
    	$('#new_area_localunion_and_worldredcross .btn_link_close').hide();
        $('#new_area_localunion_and_worldredcross .btn_link_open').show();
        $('#footer .wrapper').hide();
        //$('#new_area_footer').focus();
        return false;
    });
    $('.area_redcross_othernation .item_23 > a').keydown(function(e) {
		e.preventDefault();
		$('#footer .wrapper').hide();
		$('#new_area_localunion_and_worldredcross .btn_link_close').hide();
        $('#new_area_localunion_and_worldredcross .btn_link_open').show();
        $('#new_area_localunion_and_worldredcross .btn_link_open').focus();
		return false;
	});
});