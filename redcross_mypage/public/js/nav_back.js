let header = "";
// header +=          '<header id="header" class="header">';
header +='<div class="header_inner">';
header +=    '<div class="nav_dim"></div>';
header +=    '<div class="wrap_gnb">';
header +=        '<!-- 최상단 로그인 화면크기 조절 버튼 -->';
header +=        '<div class="area_top">';
header +=            '<div class="area_top_inner">';
header +=        '<div class="gov_top_info">';
header +=            '<p>이 누리집은 대한민국 공식 전자정부 누리집입니다.</p>';
header +=        '</div>';
header +=                '<ul class="box_btns">';
header +=                    '<li><a href="로그인,회원가입,마이페이지_01로그인.html" target="_self" class="user_anchor">로그인</a></li>';
header +=                    '<li><a href="로그인,회원가입,마이페이지_02회원가입_Step1.html" target="_self" class="user_anchor">회원가입</a></li>';
header +=                    '<li><a href="07사이트맵.html" target="_self" class="user_anchor">사이트맵</a></li>';
header +=                    '<!-- <li><a href="javascript:;" target="_self" class="user_anchor">관리자 페이지</a></li> -->';
header +=                    '<!-- <li><a href="javascript:;" target="_self" class="user_anchor">로그아웃</a></li> -->';
header +=                    '<li class="box_btn_zoom">';
header +=                        '<span>화면크기</span>';
header +=                        '<button onclick="javascript:zoomControl.zoomIn()" class="btn_zoom in" title="화면 확대"></button>';
header +=                        '<button onclick="javascript:zoomControl.zoomOut()" class="btn_zoom out" title="화면 축소"></button>';
header +=                        '<button onclick="javascript:zoomControl.zoomReset()" class="btn_zoom reset" title="화면크기 초기화"></button>';
header +=                    '</li>';
header +=                '</ul>';
header +=            '</div>';
header +=        '</div>';
header +=        '<div class="area_menu">';
header +=            '<div class="area_menu_inner">';
header +=                '<h1 class="logo">';
header +=                    '<a href="00메인_new_type01.html" target="_self" class="logo_anchor" title="디지털서비스 개방로고 메인페이지이동"></a>';
header +=                '</h1>';
header +=                '<div class="wrap_menus">';
header +=                    '<!-- 모바일 상단 로그인 상태창 -->';
header +=                    '<div class="area_state">';
header +=                        '<button type="button" class="btn_close_menu" title="메뉴 닫기"></button>';
header +=                        '<div class="user_info">';
header +=                            '<div class="logo_lnb">';
header +=                                '<img src="../../public/img/logo/logo_big_wt.png" alt="디지털서비스 개방로고">';
header +=                            '</div>';
header +=                            '<!-- 로그인 상태 - 로그인 전 -->';
header +=                            '<!-- <div class="box_state state_login_before">';
header +=                                '<div class="user_info">';
header +=                                    '<p class="greeting">디지털서비스 개방에 오신 것을 환영합니다.</p>';
header +=                                    '<ul class="box_btn_info">';
header +=                                        '<li><a href="로그인,회원가입,마이페이지_01로그인.html" target="_self" class="btn_info login">로그인</a></li>';
header +=                                        '<li><a href="로그인,회원가입,마이페이지_02회원가입_Step1본인인증_공동 인증서.html" target="_self" class="btn_info join">회원등록</a></li>';
header +=                                    '</ul>';
header +=                                '</div>';
header +=                            '</div> -->';
header +=                            '<!-- 로그인 상태 - 로그인 후 -->';
header +=                            '<div class="box_state state_login_after">';
header +=                                '<div class="user_info">';
header +=                                    '<p class="greeting"><span class="user_name">홍길동</span> 님 안녕하세요.</p>';
header +=                                    '<p class="user_auth_state">업무담당자(최고 관리자)</p>';
header +=                                    '<ul class="box_btn_info">';
header +=                                        '<li><a href="로그인,회원가입,마이페이지_03마이페이지.html" target="_self" class="btn_info">마이페이지</a></li>';
header +=                                        '<li><a href="javascript:;" target="_self" class="btn_info">로그아웃</a></li>';
header +=                                    '</ul>';
header +=                                '</div>';
header +=                            '</div>';
header +=                        '</div>';
header +=                    '</div>';
header +=                    '<nav id="gnb" class="wrap_group menu_text on"> ';
header +=                        '<div class="lnb_drop_menu">';
header +=                            '<h2 class="sr_only">주메뉴</h2>';
header +=                            '<ul class="lnb_list">';
header +=                                '<li class="depth01">';
// header +=                                    '<div class="depth01_item"><a href="01소개_01디지털서비스 개방 소개.html" target="_self" class="depth01_item_anchor">소개</a></div>';
header +=                                    '<div class="depth01_item"><a href="javascript:;" target="_self" class="depth01_item_anchor">소개</a></div>';
header +=                                    '<ul class="depth02">';
// header +=                                        '<li class="depth02_item"><a href="javascript:;" target="_self" class="depth02_item_anchor">디지털서비스 개방이란?</a></li>';
// header +=                                        '<li class="depth02_item"><a href="javascript:;" target="_self" class="depth02_item_anchor">이용 안내 및 절차</a></li>';
// header +=                                        '<li class="depth02_item"><a href="javascript:;" target="_self" class="depth02_item_anchor">적용사례</a></li>';
header +=                                   '<li class="depth02_item"><a href="01소개_01디지털서비스 개방 소개.html" target="_self" class="depth02_item_anchor">디지털서비스 개방이란?</a></li>';
header +=                                   '<li class="depth02_item"><a href="01소개_02이용 안내 및 절차.html" target="_self" class="depth02_item_anchor">이용 안내 및 절차</a></li>';
header +=                                   '<li class="depth02_item"><a href="01소개_03적용사례.html" target="_self" class="depth02_item_anchor">적용사례</a></li>';
header +=                                    '</ul>';
header +=                                '<li class="depth01">';
header +=                                    '<div class="depth01_item"><a href="02서비스_01SRT승차권 예약.html" target="_self" class="depth01_item_anchor">서비스</a></div>';
// header +=                                    '<ul class="depth02">';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">SRT승차권 예약</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">자동차검사 예약</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">휴양림 예약</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">국립수목원 예약</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">세종·백두대간수목원 예약</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">공항 내 소요시간 안내(Home to Airport)</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">문화누리카드 발급신청 및 이용내역 조회</a>';
// header +=                                        '</li>';
// header +=                                    '</ul>';
header +=                               '<ul class="depth02">';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="02서비스_01SRT승차권 예약.html" target="_self" class="depth02_item_anchor">SRT승차권 예약</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="02서비스_02자동차검사 예약.html" target="_self" class="depth02_item_anchor">자동차검사 예약</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="02서비스_03휴양림 예약.html" target="_self" class="depth02_item_anchor">휴양림 예약</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="02서비스_04국립수목원 예약.html" target="_self" class="depth02_item_anchor">국립수목원 예약</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="02서비스_05세종·백두대간수목원 예약.html" target="_self" class="depth02_item_anchor">세종·백두대간수목원 예약</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="02서비스_06공항 내 소요시간 안내(Home to Airport).html" target="_self" class="depth02_item_anchor">공항 내 소요시간 안내(Home to Airport)</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="02서비스_07문화누리카드 발급신청 및 이용내역 조회.html" target="_self" class="depth02_item_anchor">문화누리카드 발급신청 및 이용내역 조회</a>';
header +=                                   '</li>';
header +=                               '</ul>';
header +=                                '</li>';
header +=                                '<li class="depth01">';
header +=                                    '<div class="depth01_item"><a href="03API_01표준 API.html" target="_self" class="depth01_item_anchor">API</a></div>';
// header +=                                    '<ul class="depth02">';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">표준API</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">자동차검사 예약</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">휴양림 예약</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">국립수목원 예약</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">세종·백두대간수목원 예약</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">공항 내 소요시간 안내(Home to Airport)</a>';
// header +=                                        '</li>';
// header +=                                        '<li class="depth02_item">';
// header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor">문화누리카드 발급신청 및 이용내역 조회</a>';
// header +=                                        '</li>';
// header +=                                    '</ul>';
header +=                               '<ul class="depth02">';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="03API_01표준 API.html" target="_self" class="depth02_item_anchor">표준 API</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="03API_02자동차검사 예약.html" target="_self" class="depth02_item_anchor">자동차검사 예약</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="03API_03휴양림 예약.html" target="_self" class="depth02_item_anchor">휴양림 예약</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="03API_04국립수목원 예약.html" target="_self" class="depth02_item_anchor">국립수목원 예약</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="03API_05세종·백두대간수목원 예약.html" target="_self" class="depth02_item_anchor">세종·백두대간수목원 예약</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="03API_06공항 내 소요시간 안내(Home to Airport).html" target="_self" class="depth02_item_anchor">공항 내 소요시간 안내(Home to Airport)</a>';
header +=                                   '</li>';
header +=                                   '<li class="depth02_item">';
header +=                                       '<a href="03API_07문화누리카드 발급신청 및 이용내역 조회.html" target="_self" class="depth02_item_anchor">문화누리카드 발급신청 및 이용내역 조회</a>';
header +=                                   '</li>';
header +=                               '</ul>';
header +=                                '</li>';
header +=                                '<li class="depth01">';
header +=                                    '<div class="depth01_item"><a href="04고객센터_01공지사항.html" target="_self" class="depth01_item_anchor">고객센터</a></div>';
// header +=                                    '<ul class="depth02">';
// header +=                                        '<li class="depth02_item"><a href="javascript:;" target="_self" class="depth02_item_anchor">공지사항</a></li>';
// header +=                                        '<li class="depth02_item"><a href="javascript:;" target="_self" class="depth02_item_anchor">FAQ</a></li>';
// header +=                                        '<li class="depth02_item"><a href="javascript:;" target="_self" class="depth02_item_anchor">Q&A</a></li>';
// header +=                                        '<li class="depth02_item"><a href="javascript:;" target="_self" class="depth02_item_anchor">자료실</a></li>';
// header +=                                        '<li class="depth02_item"><a href="javascript:;" target="_self" class="depth02_item_anchor">서비스개선요청</a></li>';
// header +=                                    '</ul>';
header +=                               '<ul class="depth02">';
header +=                                   '<li class="depth02_item"><a href="04고객센터_01공지사항.html" target="_self" class="depth02_item_anchor">공지사항</a></li>';
header +=                                   '<li class="depth02_item"><a href="04고객센터_02FAQ.html" target="_self" class="depth02_item_anchor">FAQ</a></li>';
header +=                                   '<li class="depth02_item"><a href="04고객센터_03Q_A.html" target="_self" class="depth02_item_anchor">Q&amp;A</a></li>';
header +=                                   '<li class="depth02_item"><a href="04고객센터_04자료실.html" target="_self" class="depth02_item_anchor">자료실</a></li>';
header +=                                   '<li class="depth02_item"><a href="04고객센터_05서비스개선요청.html" target="_self" class="depth02_item_anchor">서비스 개선요청</a></li>';
header +=                               '</ul>';
header +=                                '</li>';
header +=                            '</ul>';
header +=                        '</div>';
header +=                    '</nav>';
header +=                '</div>';
header +=                '<!-- mob 검색 메뉴 버튼 -->';
header +=                '<div class="box_btn_util">';
header +=                    '<div class="box_btn_item">';
header +=                        '<button type="button" class="btn_util_search" aria-label="홈페이지 내 검색 열기"></button>';
header +=                    '</div>';
header +=                    '<div class="box_btn_item">';
header +=                        '<a href="javascript:;" target="_self" class="btn_util_ham" aria-label="lnb 메뉴 열기"></a>';
header +=                    '</div>';
header +=                '</div>';
header +=                '<!-- 검색바 -->';
header +=                '<div class="wrap_gnb_search">';
header +=                    '<div class="gnb_search">';
header +=                        '<input type="text" class="input_search_gnb" placeholder="검색어를 입력해 주세요." title="검색어를 입력해 주세요." value="">';
// header +=                        '<button type="submit" class="btn_search_gnb" title="홈페이지 내 검색"></button>';
header +=                        '<a href="06통합검색.html" class="btn_search_gnb" title="홈페이지 내 검색"></a>';
header +=                    '</div>';
header +=                '</div>';
header +=            '</div>';
header +=        '</div>';
header +=        '<!--  검색 메뉴  -->';
header +=        '<div class="wrap_group menu_search">';
header +=            '<div class="wrap_drop_menu">';
header +=                '<fieldset>';
header +=                    '<legend class="sr_only">홈페이지 내 검색</legend>';
header +=                    '<div class="wrap_lnb_search">';
header +=                        '<input id="" type="text" name="" class="" placeholder="검색어를 입력해 주세요." title="검색어를 입력해 주세요." value="">';
header +=                        '<button type="submit" class="btn_lnb_search" aria-label="홈페이지 내 검색"></button>';
header +=                    '</div>';
header +=                '</fieldset>';
header +=            '</div>';
header +=        '</div>';
header +=    '</div>';
header +='</div>';

let footer = "";
footer +=  		'<div class="inner">'
footer +=  				'<div class="area_links">'
footer +=  						'<ul class="list_link">'
footer +=  								'<li class="list_link_item"><a href="javascript:;" target="_self" class="list_link_item_anchor">디지털서비스 개방이란?</a></li>'
footer +=  								'<li class="list_link_item"><a href="05이용안내_01플랫폼 이용약관.html" target="_self" class="list_link_item_anchor">플랫폼 이용 약관</a></li>'
footer +=  								'<li class="list_link_item"><a href="05이용안내_02개인정보처리방침.html" target="_self" class="list_link_item_anchor color_blue">개인정보처리방침</a></li>'
footer +=  								'<li class="list_link_item"><a href="07사이트맵.html" target="_self" class="list_link_item_anchor">사이트맵</a></li>'
footer +=  						'</ul>'
footer +=  			    	'<div class="wrap_select_family">'
footer +=  			    			'<a href="javascript:;" class="rel_link_sel" title="관련사이트 목록 열기">Family SITE_1</a>'
footer +=                '<ul>'
footer +=                   '<li><a href="" target="_blank" title="새창열림">Family SITE_1</a></li>'
footer +=                   '<li><a href="" target="_blank" title="새창열림">Family SITE_2</a></li>'
footer +=                   '<li><a href="" target="_blank" title="새창열림">Family SITE_3</a></li>'
footer +=                   '<li><a href="" target="_blank" title="새창열림">Family SITE_4</a></li>'
footer +=  			         '</ul>'
footer +=  		    		'</div>'
footer +=  		   	'</div>'
footer +=  				'<div class="wrap_bottom">'
footer +=  						'<div class="area_logo">'
footer +=  								'<img src="../../public/img/logo/logo_wt.png" alt="디지털서비스 개방">'
footer +=  						'</div>'
footer +=  						'<div class="area_address">'
footer +=  								'<ul class="list_address">'
footer +=  										'<li class="list_address_item">30112 세종특별자치시 도움6로 42(어진동) / <br class="only_mob">30116 세종특별자치시 가름로 143(어진동)</li>'
footer +=  								'</ul>'
footer +=  						'</div>'
footer +=  						'<div class="area_copyright">'
footer +=  								'<p>© Ministry of the Interior and Safety. All rights reserved.</p>'
footer +=  						'</div>'
footer +=  				'</div>'
footer +=  		'</div>'

let skip = "";
skip += '<nav id="skip" class="skip">'
skip +=  '<a href="#content" class="skip_anchor">본문 바로가기</a>'
// skip +=  '<a href="#gnb" class="skip_anchor">주메뉴 바로가기</a>' 
// skip +=  '<a href="#sidemenu" class="skip_anchor">서브메뉴 바로가기</a>'
// skip +=  '<a href="#footer" class="skip_anchor">푸터 바로가기</a>'
// skip +=  '<a href="#">홈페이지 내 검색 바로가기</a>'
skip += '</nav>'


$(document).ready(function () {
  $("header.header").html(header);
  $("footer.footer").html(footer);
  
  $(".footer .rel_link_sel").on("click", function(){
    $(".footer .wrap_select_family ul").slideToggle(200);
  });
    
  // 접근성 관련 
   // 접근성 - 스킵 메뉴
   $(".wrapper").prepend(skip);
  $(".skip .skip_anchor").on("focus", function () {
    $(this).parent(".skip").addClass("on");
    $(this).parent(".skip").stop().css({top: 0});
  });
  $(".skip .skip_anchor").on("click", function () {
    $(this).parent(".skip").removeClass("on");
    $(this).parent(".skip").stop().animate({top: "-40px"});
  });
  $(".skip .skip_anchor").on("focusout", function () {
    $(this).parent(".skip").removeClass("on");
    $(this).parent(".skip").stop().animate({top: "-40px"});
  });

  // focus events

// 검색 바 focusout  
$(".header .wrap_gnb_search .gnb_search").focusout(function (){
  $("html").removeClass("open_lnb");
  $(".gnb_dim").removeClass("on");
});
// 검색 메뉴 focusout  
$(".header .wrap_lnb_search .btn_lnb_search").focusout(function (){
  $("html").removeClass("open_lnb");
  $(".header .btn_util_search").removeClass("on");
  $(".header .menu_search").removeClass("on");
  $(".gnb_dim").removeClass("on");
});

  // 디바이스 사이즈 체크
  let w1024 = window.matchMedia("(max-width: 1024px)");
  // let w1200 = window.matchMedia("(max-width: 1200px)");
  // if (w1200.matches) {
  if (w1024.matches) {
    $(".header").removeClass("gnb_wide");
    $(".header").addClass("gnb_mob");
  } else {
    $(".header").removeClass("gnb_mob");
    $(".header").addClass("gnb_wide");
  }

  //  검색버튼 엔터키
$(".header .btn_util_search").keyup(function (e){
    if (e.keyCode == 13) {

      if ($(this).hasClass("on") === true) {
        $(".header .wrap_lnb_search").focusin();

      } else {
        $(".header .btn_util_search").removeClass("on");
        $(".header .menu_search").removeClass("on");
        
      }
      return;
    }
});

});

// 창 크기 변경 시 헤더 스타일 변경 1200px 까지 gnb_wide
$(window).on("resize", function () {
  $("html").removeClass("open_lnb");
  $(".header").removeClass("on");
  
  // submenu 모두 닫기  
  $(".header .btn_util_search").removeClass("on");
  $(".header .menu_search").removeClass("on");
  $(".header.gnb_mob").removeClass("open_search");
  $(".header .depth01").removeClass("on");  

  let w1024 = window.matchMedia("(max-width: 1024px)");
  // let w1200 = window.matchMedia("(max-width: 1200px)");
  // if (w1200.matches) {
  if (w1024.matches) {
    $(".header").removeClass("gnb_wide");
    $(".header").addClass("gnb_mob");
  } else {
    $(".header").removeClass("gnb_mob");
    $(".header").addClass("gnb_wide");
  }

});


// area_top 화면크기 조절
let nowZoom = 100;
let zoomControl = {
  zoomOut: function () {
    nowZoom = nowZoom - 5;
    if (nowZoom <= 90) nowZoom = 90;
    zoomControl.zooms();
    // $(".box_btn_zoom .btn_zoom").text(nowZoom + '%")
  },
  zoomIn: function () {
    nowZoom = nowZoom + 5;
    if (nowZoom >= 120) nowZoom = 120;
    zoomControl.zooms();
    // $(".box_btn_zoom .btn_zoom").text(nowZoom + '%")
  },
  zoomReset: function () {
    nowZoom = 100;
    zoomControl.zooms();
    // $(".box_btn_zoom .btn_zoom").text(nowZoom + '%")
  },
  zooms: function () {
    let aUserAgent = navigator.userAgent.toLowerCase();

    if (aUserAgent.indexOf("firefox") >= 0) {
      $("body").css("-moz-transform", "scale(" + nowZoom + "%)");
      $("body").css("-moz-transform-origin", "0 0");
    } else {
      document.body.style.zoom = nowZoom + "%";
    }
    if (nowZoom == 90) {
      // 최소 배율 설정
      alert("더 이상 축소할 수 없습니다.");
    }
    if (nowZoom == 120) {
      // 최대 배율 설정
      alert("더 이상 확대할 수 없습니다.");
    }
  },
};

//////////////////////////////////////////////////////////////
// //header gnb_wide

$(document).ready(function () {

  $(".gnb_wide .lnb_list .depth01").on("mouseenter focusin", function () {

    $("html").addClass("open_lnb");
    $(".gnb_wide .lnb_list .depth02").stop().slideDown(200);
});

$(".gnb_wide .lnb_list .depth01").on("mouseleave focusout", function () {
  $("html").removeClass("open_lnb");
  $(".gnb_wide .lnb_list .depth02").stop().slideUp(200);
});

});

  // // nav_dim 클릭 시 메뉴 닫기
  $(document).on("click", ".header.gnb_wide .nav_dim", function(e) {
    e.stopPropagation();
    $("html").removeClass("open_lnb");
    $(".gnb_wide .lnb_list").removeClass("on");
    $(".gnb_wide .menu_text .depth02").stop().slideUp(200);
    $(".header.gnb_mob .btn_util_ham").removeClass("on");
    $(".gnb_wide .btn_util_search").removeClass("on");
    $(".header .btn_util_search").removeClass("on");
    $(".header .menu_search").removeClass("on");

  });


//////////////////////////////////////////////////////////////
// 모바일 헤더 gnb_mob - 1200px 미만 

  // 터치디바이스 - wrap_menus 외 영역 터치 시 메뉴 닫기

  $("html").on("touchend", function(e) {
    if ( !$(e.target).is(".header.gnb_mob .wrap_menus") && $(e.target).is(".nav_dim") ) {
			e.stopPropagation();
      $("html").removeClass("open_lnb");
      $(".header.gnb_mob").removeClass("on");
      $(".header.gnb_mob .btn_util_ham").removeClass("on");
      $(".header .btn_util_search").removeClass("on");
      $(".header .menu_search").removeClass("on");
      $(".header.gnb_mob").removeClass("open_search");
      }

  });


//  검색 열기 mob
$(document).on("click", ".gnb_mob .btn_util_search", function () {
  $(this).toggleClass("on");

  if ($(this).hasClass("on") === true) {
    $("html").addClass("open_lnb");
    $(".header .menu_search").addClass("on");
    $(".gnb_wide .menu_text .lnb_list").removeClass("on");
  } else {
    $("html").removeClass("open_lnb");
    $(".header .menu_search").removeClass("on");

  }
});

// gnb 아코디언
$(document).on("click", ".gnb_mob .depth01", function () {
  $(this).toggleClass("on");

  if ($(this).hasClass("on") === true) {
    $(this).children(".depth02").stop().slideDown(200);
  }
   else {
    $(this).children(".depth02").stop().slideUp(200);
  }
});

// 햄버거 메뉴 열기 버튼 클릭 시 

$(document).on("click", ".gnb_mob .btn_util_ham", function () {
  $(this).toggleClass("on");

  if ($(this).hasClass("on") === true) {
    $("html").addClass("open_lnb");
    $(".header.gnb_mob").addClass("on");
  } else {
    $("html").removeClass("open_lnb");
    $(".header.gnb_mob").removeClass("on");
  }

});

// 햄버거 메뉴 닫기 버튼 클릭 시 
$(document).on("click", ".header.gnb_mob .btn_close_menu", function () {
  
  $(".header.gnb_mob").removeClass("on");
  $(".header.gnb_mob .btn_util_ham").removeClass("on");

  if ($(".menu_search").hasClass("on") === true) {
// 
  } else {
    $("html").removeClass("open_lnb");
  }

});

