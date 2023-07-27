// $(document).ready(function(){
// 	$('.main_cont_txt','.main_cont_wrap.sec02 figure p','.main_cont_wrap.sec05 ul').fadeOut(); 
// })

// $(document).scroll(function(e){
// 	var height = $(document).scrollTop();
	
// 	if(899 < height && height < 1200){
// 		console.log("보민씨 바보 똥개1111 : " + height);
// 		//($('.main_cont_txt')[0].style.display == 'block')
// 		$('.main_cont_txt').css('display', 'block');
// 		$('.main_cont_txt')[0].className = 'main_cont_txt on'
// 	} else if(1400 < height && height < 1700) {
// 		// 1400
// 		console.log("보민씨 바보 똥개2222 : " + height);
// 	} else if(1400 < height && height < 1700) {
// 		// 7800
// 		console.log("보민씨 바보 똥개ㅗㅗㅗㅗㅗ : " + height);
// 	}
// })		


$(document).scroll(function(e){

	var _winW = $(window).scrollTop();
	console.log(_winW);
	if (_winW <= 1280 && _winW > 960) {
		$('.main_cont_txt').animate({
			'opacity':'1',
			'top':'25%'
		// }, 700, function(){
		// 	$('.main_vis_motto strong').animate({
		// 		'opacity':'1',
		// 		'top':'48px'
		// 	}, 700);
		// $('.main_vis_motto b').animate({
		// 		'opacity':'1',
		// 	'top':'158px'
		// }, 700, function(){
		// 	$('.evt_main_logo').animate({
		// 			'opacity':'1',
		// 	'top':'244px'
		// 	}, 700, 'easeOutBounce');
		// 	});
		}, 700);
	} else if (_winW <= 1700 && _winW > 1400) {
		$('.main_cont_wrap.sec02 figure p').animate({
			'opacity':'1',
			'transform' : 'translateY(-50px)'
		// }, 700, function(){
		// 	$('.main_vis_motto strong').animate({
		// 		'opacity':'1',
		// 		'top':'9.6vw'
		// 	}, 700);
		// 	$('.main_vis_motto b').animate({
		// 		'opacity':'1',
		// 		'top':'25.06vw'
		// 	}, 700, function(){
		// 		$('.evt_main_logo').animate({
		// 			'opacity':'1',
		// 			'top':'97.73vw'
		// 		}, 700, 'easeOutBounce');
		// 	});
		}, 700);
	} else if(_winW <= 8100 && _winW > 7800) {
		$('.ment').animate({
			'opacity':'1',
			'transform' : 'translateY(-50px)'
		// $('.main_vis_motto p').animate({
		// 	'opacity':'1',
		// 	'top':'-4px'
		// }, 700, function(){
		// 	$('.main_vis_motto strong').animate({
		// 		'opacity':'1',
		// 		'top':'58px'
		// 	}, 700);
		// 	$('.main_vis_motto b').animate({
		// 		'opacity':'1',
		// 		'top':'188px'
		// 	}, 700, function(){
		// 		$('.evt_main_logo').animate({
		// 			'opacity':'1',
		// 			'top':'294px'
		// 		}, 700, 'easeOutBounce');
		// 	});
		// });
	}, 700);
}

// $(document).ready(function(){

// 	var _winW = $(window).width();

// 	if (_winW <= 1280 && _winW > 960) {
// 		$('.main_cont_txt').animate({
// 			'opacity':'1',
// 			'top':'-8px'
// 		}, 700, function(){
// 			$('.main_vis_motto strong').animate({
// 				'opacity':'1',
// 				'top':'48px'
// 			}, 700);
// 		$('.main_vis_motto b').animate({
// 				'opacity':'1',
// 			'top':'158px'
// 		}, 700, function(){
// 			$('.evt_main_logo').animate({
// 					'opacity':'1',
// 			'top':'244px'
// 			}, 700, 'easeOutBounce');
// 			});
// 		});
// 	} else if (_winW <= 960) {
// 		$('.main_vis_motto p').animate({
// 			'opacity':'1',
// 			'top':'0'
// 		}, 700, function(){
// 			$('.main_vis_motto strong').animate({
// 				'opacity':'1',
// 				'top':'9.6vw'
// 			}, 700);
// 			$('.main_vis_motto b').animate({
// 				'opacity':'1',
// 				'top':'25.06vw'
// 			}, 700, function(){
// 				$('.evt_main_logo').animate({
// 					'opacity':'1',
// 					'top':'97.73vw'
// 				}, 700, 'easeOutBounce');
// 			});
// 		});
// 	} else {
// 		$('.main_vis_motto p').animate({
// 			'opacity':'1',
// 			'top':'-4px'
// 		}, 700, function(){
// 			$('.main_vis_motto strong').animate({
// 				'opacity':'1',
// 				'top':'58px'
// 			}, 700);
// 			$('.main_vis_motto b').animate({
// 				'opacity':'1',
// 				'top':'188px'
// 			}, 700, function(){
// 				$('.evt_main_logo').animate({
// 					'opacity':'1',
// 					'top':'294px'
// 				}, 700, 'easeOutBounce');
// 			});
// 		});
// 	}
// })



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