      $(document).ready(function(){
	
	document.cookie = "safeCookie1=foo; SameSite=Lax"; 
    document.cookie = "safeCookie2=foo";  
    document.cookie = "crossCookie=bar; SameSite=None; Secure";
    
	//gnb
	$('.main-menu > li').mouseenter(function(){
		$('.slider1 .bx-controls-direction').css('z-index', '99999');
		$(this).children('.main-menu > li > ul').removeAttr('style');
		$(this).children('.main-menu > li > ul').stop().slideDown('fast');
		$('.header .bottom .menu-bt').removeClass('active');
		$('.allMenu-hbg').stop().hide();
	});
	$('.main-menu > li').mouseleave(function(){
		$('.slider1 .bx-controls-direction').css('z-index', '9999999999999999999999999999999999');
		$(this).children('.main-menu > li > ul').stop().hide();
	});
	$('.main-menu > li > a').focus(function(){
		$('.slider1 .bx-controls-direction').css('z-index', '99999');
		$(this).parent().siblings().children('ul').hide();
		$(this).siblings('ul').removeAttr('style');
		$(this).siblings('ul').stop().slideDown('fast');
		$('.header .bottom .menu-bt').removeClass('active');
		$('.allMenu-hbg').stop().hide();
	});
	$('.menu-bt').focus(function(){
		$('.slider1 .bx-controls-direction').css('z-index', '9999999999999999999999999999999999');
		$('.main-menu > li > ul').stop().hide();
	});
	$('.logo').focus(function(){
		$('.slider1 .bx-controls-direction').css('z-index', '9999999999999999999999999999999999');
		$('.main-menu > li > ul').stop().hide();
	});

	/*추가*/
	$('.main-menu > li:last-child > ul > li:last-child > a ').blur(function(){
		$('.menu-goBtn').focus();
		$('.main-menu > li > ul').stop().hide();
	});
	$('.top_menuH > ul > li:last-child > ul > li:last-child > a ').blur(function(){
		$('.menu-goBtn').focus();
		$('.allMenu-hbg').hide();
		$('.menu-bt').removeClass("active");
	});

	$('.main-menu').mouseenter(function(){
		$('.sponsor-btn ul').css('display', 'none');
	});
	$('.main-menu').mouseleave(function(){
		$('.sponsor-btn ul').css('display', 'block');
	});

	$('.header .bottom .menu-bt').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.allMenu-hbg').stop().hide();
		}else{
			$(this).addClass('active');
			$('.allMenu-hbg').stop().slideDown();
		}
		
	});
	
	$('.sponsor-btn a').focus(function(){
		$('.allMenu-hbg').stop().hide();
	});


});