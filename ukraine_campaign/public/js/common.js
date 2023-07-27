$(document).scroll(function(e){

	var _winW = $(window).scrollTop();
	console.log(_winW);
	if (_winW <= 1080 && _winW > 760) {
		$('.main_cont_txt').animate({
			'opacity':'1',
			'top':'25%'

		}, 700);
	} else if (_winW <= 1500 && _winW > 1200) {
		$('.main_cont_wrap.sec02 figure p').animate({
			'opacity':'1',
			'transform' : 'translateY(-50px)'
	
		}, 700);
	} else if(_winW <= 7900 && _winW > 7600) {
		$('.ment').animate({
			'opacity':'1',
			'transform' : 'translateY(-50px)'
	
	}, 700);
}


//반응형
	// $(window).on('resize', function(){
	// 	var _winW = $(window).width();
	// 	if (_winW <= 1280 && _winW > 960) {
	// 		$('.main_vis_motto p').css({
	// 			'top':'-8px'
	// 		});
	// 		$('.main_vis_motto strong').css({
	// 			'top':'48px'
	// 		});
	// 		$('.main_vis_motto b').css({
	// 			'top':'158px'
	// 		});
	// 		$('.evt_main_logo').css({
	// 			'top':'244px'
	// 		});
	// 	} else if (_winW <= 960) {
	// 		$('.main_vis_motto p').css({
	// 			'top':'0'
	// 		});
	// 		$('.main_vis_motto strong').css({
	// 			'top':'9.6vw'
	// 		});
	// 		$('.main_vis_motto b').css({
	// 			'top':'25.06vw'
	// 		});
	// 		$('.evt_main_logo').css({
	// 			'top':'97.73vw'
	// 		});
	// 	} else {
	// 		$('.main_vis_motto p').css({
	// 			'top':'-4px'
	// 		});
	// 		$('.main_vis_motto strong').css({
	// 			'top':'58px'
	// 		});
	// 		$('.main_vis_motto b').css({
	// 			'top':'188px'
	// 		});
	// 		$('.evt_main_logo').css({
	// 			'top':'294px'
	// 		});
	// 	}
	// })

	



});