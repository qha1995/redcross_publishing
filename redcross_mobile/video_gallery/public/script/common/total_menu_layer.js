$(function() {
	slideTwoDepthMenu.init();
	totalMenuLayer.init();
});

var slideTwoDepthMenu = {
	_enterMenu : function(p_obj) {
			p_obj.parents().children('.area_total_2depth_menu').slideDown('fast');
	},
	_leaveMenu : function(p_obj) {
			p_obj.children('.area_total_2depth_menu').slideUp('fast');
	},
	init : function() {
			try {  
					// 마크업에 area_total_2depth_menu가 있을때만 실행
					if($('.area_total_2depth_menu').length > 0) {
							// 마우스 엔터이벤트
							$('#area_sub_menu ul.gnb_menues li.gnb_menu_item > a.menu_depth_1').live('mouseenter keyup', function() {
								
								var is_visible = $(this).parents().children('.area_total_2depth_menu').is(':visible');
								if(!is_visible) {
									$('.area_total_2depth_menu').slideUp('fast');
									var $thisobj = $(this);
									$thisobj.parents().siblings().find('.area_total_2depth_menu').removeClass('on');
									$thisobj.parents().children('.area_total_2depth_menu').addClass('on');
									$thisobj.parents().children('.area_total_2depth_menu').slideDown('fast');
								}
								
							});
							// 마우스 리브이벤트
							$('#area_sub_menu ul.gnb_menues li.gnb_menu_item').live('mouseleave', function() {
									var $thisobj = $(this);
									$('.area_total_2depth_menu').removeClass('on');
									$('.area_total_2depth_menu').slideUp('fast');
							});
					}
			} catch (e) {
					alert("[totalMenuLayer.js's init] " + e.description);
			}
	}
}

var totalMenuLayer = {
	is_extract : false, 

	init : function() {
			try {
					$('body').append('<div id="bg_total_menu_layer"></div>');

					var l_html = $('#area_totalmenu .contents').html();
					$('#area_family_menu').before('<div id="total_menu_layer"><div class="total_menu_outline">'+l_html+'</div></div>');

					$('#btn_totalmenu').click(function() {
							// 전체메뉴 열기
							if(totalMenuLayer.is_extract == false) {
									totalMenuLayer.slideDownTotalMenu();
									totalMenuLayer.is_extract = true;
									return false;
							}

							// 전체메뉴 닫기
							if(totalMenuLayer.is_extract == true) {
									totalMenuLayer.slideUpTotalMenu();
									totalMenuLayer.is_extract = false;
									return false;
							}
							return false;
					});
			} catch (e) {
					alert("[totalMenuLayer.js's init] " + e.description);
			}
	},

	slideDownTotalMenu : function() {
			try {
					$('#btn_totalmenu').addClass('on');
					$('#btn_totalmenu').attr('title', '전체메뉴닫기');
					$('#bg_total_menu_layer').slideDown();
					$('#total_menu_layer').slideDown();
			} catch (e) {
					alert("[totalMenuLayer.js's slideTotalMenu] " + e.description);
			}
	},

	slideUpTotalMenu : function() {
			try {
					$('#btn_totalmenu').removeClass('on');
					$('#btn_totalmenu').attr('title', '전체메뉴보기');
					$('#bg_total_menu_layer').slideUp();
					$('#total_menu_layer').slideUp();
			} catch (e) {
					alert("[totalMenuLayer.js's slideTotalMenu] " + e.description);
			}
	}
}	