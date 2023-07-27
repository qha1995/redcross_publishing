$(document).ready(function(){
		
	//lnb타이틀 설정
	var lnb = $('.lnabArea ul.lnb > li')
	var leng = lnb.length
	var pageTitle = $('.contentsBox .pageTop h3').text()

	for(i=0; i<leng ;i++){
		if(lnb.eq(i).children('a').text() == pageTitle){
			lnb.removeClass('active')
			lnb.eq(i).addClass('active')
		}
		//console.log(i,'i')
	}
	
	//서브페이지 스크롤 보이기
	//$('.show-on-scroll').slideDown();
	var showScroll = $('.show-on-scroll');
	
	//2018-09-12 후원안내 '다운로드 파일 버튼'일괄 추가
	showScroll.append("<a href='/images/donation_participation_v2/HowToDonate.pdf' class='btn btn_down' download>후원자가이드 다운로드</a>")
	//스크롤 동작 시 서브페이지 스크롤 보이기 20180611추가
	$(window).scroll(function() {
		if($(window).scrollTop() > 99) {
			showScroll.stop().slideDown(800);
			showScroll.addClass('on')
		}
		if($(window).scrollTop() <= 100) {
			showScroll.stop().slideUp(300);
			showScroll.removeClass('on')
		}
	});
	
	// 하단 영역 컨텐츠 스크롤 올리기
	$('.main-ct6 a').focus(function(){
		$('html, body').scrollTop(document.body.scrollHeight)
	});
	$('.scrolling').focus(function(){
		var offset = $(this).offset();
				$('html, body').animate({scrollTop : offset.top}, 400);
	});
	
	//서브페이지 페이지 이동a태그 높이값 오토설정
	$('.wrap.subPage').next('a').css({'height':'auto'})

	/* Accordion */
	$(".accordion-cell").click(function(){
		//접근성 > tabindex 넣기
		$(this).find('a').attr('tabindex',0)
		$(this).find('dd').attr('tabindex',0)

		if($(this).hasClass('on')){
			//클릭시 자신의 노출된 'dd' 닫음
			$(this).removeClass('on').find('dd').slideUp()
		}else{
			//클릭시 숨겨진 'dd' 열기
			$(this).addClass('on').find('dd').slideDown()
			//클릭시 형제의 노출된 'dd' 닫음
			$(this).siblings('div').removeClass('on').find('dd').slideUp()
		}
	});

	/*샘플 슬라이드
	$('.slide01-container').carouFredSel({
		responsive: true,
		width:'915px',
		direction: "left",
		auto: false,
		prev: '.s01-prev',
		next: '.s01-next',
		scroll : 1,
		items : {
			visible: {
				min: 1,
				max: 1,
			}
		}
	});
	$('.innerSlider').carouFredSel({
		responsive: true,
		width:'100%',
		direction: "left",
		auto: true,
		scroll : {
			fx : "crossfade",      // its use animation of slide "none", "scroll", "directscroll", "fade", "crossfade", "cover", "cover-fade", "uncover" or "uncover-fade"
		}
	});
	*/
	

	//2018-07-09
	//레드크로스 아너스 member_view
	$('.pagingArea').hide()
	$('.member_view > span').click(function(){
		$('.img_box li').removeClass('hide')
		$('.pagingArea').show()
	});

	//2018-07-09
	//적십자 회비란 more_view
	$('.more_view > span').click(function(){
		$('.fund_history').css({'height':'883px'})
	});
	
	/*
	//2018-07-13
	$(function() {
		$('.tab01').addClass('on');
		$('.tab01').next().addClass('on');
		$('.tabArea').height(65 + $('#tab2017').height());
	});
	$('.tab a').click(function (e) {
		
		$('.tab').removeClass('on');
		$('.tabContArea').removeClass('on');
		
		$(this).parent().addClass('on');
		$(this).parent().next().addClass('on');
		// tab height + tabcontArea padding == 65
		$('.tabArea').height(65 + $(this).parent().next().height());
	});
	*/
	//2018-07-13
	$(function() {
		$('.tab01').addClass('on');
		$('.tab01').next().addClass('on');
		$('.tabArea').css({'height':'auto'})
		/* 
		$('.tabArea').height(($('.tabArea dl').outerHeight()) + ($('#tab2017').outerHeight())+54);
		console.log($('.tabArea').height(),$('.tabArea dl').height(), $('dd.on').outerHeight())
		console.log(($('.tabArea dl').outerHeight()) + ($('#tab2017').outerHeight()))
		*/
	});
	$('.tab a').click(function (e) {
		
		$('.tab').removeClass('on');
		$('.tabContArea').removeClass('on');
		
		$(this).parent().addClass('on');
		$(this).parent().next().addClass('on');
		// tab height + tabcontArea padding == 65
		$('.tabArea').css("height","auto");
		//$('.tabArea').height($('.tabArea dl').outerHeight() + $(this).parent().next().outerHeight()+54);
	});
	
	
	
	$( window ).resize(function() {
		
		//리사이징
		//2018-08-02
		//$('.tabArea').height(($('.tabArea dd.on').outerHeight()) + ($('#tab2017').outerHeight())+54);
		$('.tabArea').css({'height':'auto'})
		
		$('.tab a').click(function (e) {
			
			$('.tab').removeClass('on');
			$('.tabContArea').removeClass('on');
			
			$(this).parent().addClass('on');
			$(this).parent().next().addClass('on');
			// tab height + tabcontArea padding == 65
			$('.tabArea').css({'height':'auto'})
			//$('.tabArea').height($('.tabArea dl').outerHeight() + $(this).parent().next().outerHeight()+54);
		});
		/* 2018-08-10*/
	});
	

// 2018-07-27 추가
/* mask */
function maskOn(){
	var mask = "<div class='mask'></div>";//mask
	var winWidth = $(window).width();//window 가로 값
	var winHeight = $(window).height();//window 세로 값
	var scTop = $(window).scrollTop();//현재 scroll 값
	var scCk = 0-scTop;//scroll 값 음수로 변환
	var wpHeight = winHeight+scTop-53;//scroll 안생기는 wrapper 높이 값(53:wrapper 상단 padding 값 보정) 
	
	//fixed로 인한 가로값 설정, scroll 안생기게 높이 값 수정, 현재 scroll 위치에 맞춰 마이너스 마진으로 위치 수정, 마스크 뒤 스크롤 방지
	$(".wrapper").css({width:winWidth, height:wpHeight, marginTop:scCk, position:"fixed"});
	$(".header_mobile").append(mask);//mask 추가
	$(".tbLine").css("overflow", "hidden");//animate 사용시 내부 스크롤 최상단으로 올라옴 방지(안드로이드 버그)
	//$("body").css({backgroundColor:"black"});//하단 버그로 인한 공백 백그라운드로 가림
}

function maskOff(){
	var wpHeight = $(".wrapper").outerHeight();//상단 마이너스 마진 포함 높이 값
	var winHeight = $(window).height();//window 높이 값
	var scTop = wpHeight-winHeight;//이전 scroll 값
	
	//가로값 기본형으로 변경, 원래 높이 값으로 수정, 마이너지 마진 삭제, position 기본형으로 변경
	$(".wrapper").css({width:"auto", height:"auto", marginTop:"0", position:"static"});
	$(window).scrollTop(scTop);//이전 scroll 값 으로 이동
	$(".mask").remove();//mask 삭제
	$(".tbLine").css("overflow", "auto");//기본값으로 복원
	$("body").css({backgroundColor:"#fff"});//백그라운드 원복
}


/* gnb 닫음 버튼 */
var gnbClose = "<a href='javascript:;' class='gnbClose'><span class='blind'>닫기</span></a>";
$(".gnb, .gnb02").append(gnbClose);//top 버튼 노출

/* gnb left */
$(".menu").click(function(){
	maskOn();//마스크 노출
	$(".gnb").animate({"left": "+=300px"}, "fast");//메뉴 열기
	
	$(".gnb .gnbClose").one("click",function(){
		$(".gnb").animate({"left": "-=300px"}, "fast");//메뉴 닫기
		maskOff();//마스크 삭제
	});
});

/* gnb right */
$(".mpBtn").click(function(){
	maskOn();//마스크 노출
	$(".gnb02").animate({"right": "+=300px"}, "fast");//메뉴 열기
	
	// 나의 후원 금액 구하기
	//getMyDonationAmount();
	
	$(".gnb02 .gnbClose").one("click",function(){
		$(".gnb02").animate({ "right": "-=300px" }, "fast" );//메뉴 닫기
		maskOff();//마스크 삭제
	});
});


/* 아코디언 효과 */
$(".accordion .depth02").slideUp()
//적십자아카데미 아코디언 닫을시 동영상 시작위치로 이동
$(".acList li .depth01").click( function(ev) {
var onCk = $(this).is(".on");//on 클레스 확인
	
if(onCk == true){//on 클레스 체크
	$(this).next().children()[0].src += "&autoplay=0";//동영상 시작 위치로 이동
	ev.preventDefault();
}
});

//depth01 선택한것만 열림
$(".accordion .depth01").click(function(){
	var onCheck = $(this).hasClass("on");//클릭한 depth01 활성화 확인
	if(!onCheck){
		$(".accordion .depth01").removeClass('on');//depth01 활성화 초기화
		$(".accordion .depth02").slideUp(300);//depth02 열닫 초기화
		$(this).addClass('on');//depth01 활성화
		$(this).parent().find(".depth02").slideDown(300);//depth02 열기
	}else{
		if($(".depth03_btn").hasClass("on")){
			$(".depth03_btn").removeClass('on');//depth04 비 활성화
			$(".depth03_btn").next(".depth04").slideUp(300);//depth04 닫기
		}
		if($(".depth02_btn").hasClass("on")){
			$(".depth02_btn").removeClass('on');//depth03 비 활성화
			$(".depth02_btn").next(".depth03").slideUp(300);//depth03 닫기
		}
		$(".accordion .depth01").removeClass('on');//depth01 활성화 초기화
		$(".accordion .depth02").slideUp(300);//depth02 열닫 초기화
		
	}
});

//depth01 선택한것만 열림 + 자신도 닫힘
$(".accordion02 .depth02").slideUp()
$(".accordion02 .depth01").click(function(){
	var onCheck = $(this).hasClass("on");//depth01 활성화 확인
	var deth01 = $(this).parents(".accordion02").find(".depth01");//depth01
	var deth02 = $(this).parents(".accordion02").find(".depth02");//depth02
	
	if(!onCheck){
		deth01.removeClass('on');//depth01 활성화 초기화
		deth02.slideUp(300);//depth02 열닫 초기화
		$(this).addClass('on');//depth01 활성화
		$(this).next(".depth02").slideDown(300);//depth02 열기
	}else{
		deth01.removeClass('on');//depth01 활성화 초기화
		deth02.slideUp(300);//depth02 열닫 초기화
	}
});

//depth01 하나하나 따로 열리고 닫힘
$(".accordion03 .depth01").click(function(){
	var onCheck = $(this).hasClass("on");//depth01 활성화 확인
	
	if(!onCheck){
		$(this).addClass('on');//depth01 활성화
		$(this).next(".depth02").slideDown(300);//depth02 열기
	}else{
		$(this).removeClass('on');//depth01 비 활성화
		$(this).next(".depth02").slideUp(300);//depth02 닫기
	}
});

// 반응형 추가작업 depth02,depth03 버튼 추가
$(".depth02_btn").click(function(){
	var onCheck = $(this).hasClass("on");//depth01 활성화 확인
	
	if(!onCheck){
		$(this).addClass('on');//depth04 활성화
		$(this).parents().siblings().find(".depth02_btn").removeClass('on')
		$(".depth03").slideUp(300);//depth04 닫기
		$(this).next(".depth03").slideDown(300);//depth04 열기
	}else{
		$(this).removeClass('on');//depth04 비 활성화
		$(this).next(".depth03").slideUp(300);//depth04 닫기
	}
});
$(".depth03_btn").click(function(){
	var onCheck = $(this).hasClass("on");//depth01 활성화 확인
	
	if(!onCheck){
		$(this).addClass('on');//depth04 활성화
		$(this).parents().siblings().find(".depth03_btn").removeClass('on')
		$(".depth04").slideUp(300);//depth04 닫기
		$(this).next(".depth04").slideDown(300);//depth04 열기
	}else{
		$(this).removeClass('on');//depth04 비 활성화
		$(this).next(".depth04").slideUp(300);//depth04 닫기
	}
});



});//jQuery END