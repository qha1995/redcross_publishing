$(function(){
	WindMill.init();
	//QuickMenu.init();
});
/**
*  우중단 퀵메뉴 자바스크립트
*/
var QuickMenu = {
	/**
	 * 초기화
	 */
	init : function() {
			$('#area_quickmenu_list').addClass('point');
			$('#area_quickmenu_list').live('click', QuickMenu._toggleQuickMenu);
	},
	_toggleQuickMenu : function(p_event) {
			p_event.preventDefault();
			var $quickmenu_list = $('#area_quickmenu_list');
			if($('#area_quickmenu').hasClass('on')) {
					$quickmenu_list.die('mouseleave');
					$quickmenu_list.addClass('point');
					$('#area_quickmenu_list').removeClass('on');
					$('#area_quickmenu_list .title').removeClass('on').animate({"width" : "26px"}, 10);
					$('#area_quickmenu_list .question'  ).removeClass('on').animate({"width" : "26px"}, 10);
					$('#area_quickmenu_list .complaint' ).removeClass('on').animate({"width" : "26px"}, 10);
					$('#area_quickmenu_list .callcenter').removeClass('on').animate({"width" : "26px"}, 10);
					$('#area_quickmenu_list .community' ).removeClass('on').animate({"width" : "26px"}, 10);
					$('#area_quickmenu').removeClass('on').animate({"width" : "0px", "height" : "581px"}, 100, function() {
							$quickmenu_list.live('click', QuickMenu._toggleQuickMenu);
					});
			} else {
					$quickmenu_list.die('click');
					$('#area_quickmenu').addClass('on').animate({"width" : "370px", "height" : "581px"}, "fast", function() {
							$quickmenu_list.removeClass('point');
							$('#area_quickmenu_list').addClass('on');
							$('#area_quickmenu_list .title'     ).addClass('on').animate({"width" : "102px"}, 10);
							$('#area_quickmenu_list .question'  ).addClass('on').animate({"width" : "102px"}, 10);
							$('#area_quickmenu_list .complaint' ).addClass('on').animate({"width" : "102px"}, 10);
							$('#area_quickmenu_list .callcenter').addClass('on').animate({"width" : "102px"}, 10);
							$('#area_quickmenu_list .community' ).addClass('on').animate({"width" : "102px"}, 10);
							$quickmenu_list.live('mouseleave', QuickMenu._toggleQuickMenu);
					});
			}
	}
}

/**
*  희망풍차
*/
var WindMill = {
	/**
	 * 초기화
	 */
	init : function() {
			
			// 닫기버튼 마크업 생성
			$('#area_windmill_hidden').append('<a href="#" class="btn_close_windmill" title="닫기">닫기</a>');
			
			$('.btn_open_windmill a').click(function(){
					if(!$('#area_windmill_hidden').hasClass('on')){
							$('#area_windmill_hidden').addClass('on');
							$('#area_windmill').animate({top:"116px", right:"-90px", width:"526px", height:"563px"});
							return false;
					}
			});
			
			// 희망풍차 닫음.
			$('.btn_close_windmill').click(function(){
					$('#area_windmill_hidden').removeClass('on');
					$('#area_windmill').animate({top:"116px", right:"-90px", width:"120px", height:"200px"});
					return false;
			});
	}
}