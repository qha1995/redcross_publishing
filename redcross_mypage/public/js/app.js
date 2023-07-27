// 브레드크럼  
$(document).on("click", ".breadcrumb > li", function () {
  $(".breadcrumb .cat_depth01, .breadcrumb .cat_depth02").removeClass("on");
  $(this).addClass("on");
});
                                                                                                                                                                                                                                                                                                                                    
// 브레드크럼 외부 클릭시 서브메뉴 닫기 
$(document).on("mouseup", function (e) {
  let areaCategory = $(".breadcrumb .cat_depth01, .breadcrumb .cat_depth02");
  if (!areaCategory.is(e.target) && areaCategory.has(e.target).length === 0) {
    $(".breadcrumb .cat_depth01, .breadcrumb .cat_depth02").removeClass("on");
  }
});

$(document).ready(function () {      
  // 브레드크럼 포커스 아웃 메뉴 닫기 
  $(".breadcrumb > li").on("mouseenter focusin", function(){
		$(this).children('.cat_sub_menu').stop().slideDown();
	});
	$('.breadcrumb > li').on("mouseleave focusout", function(){
		$(this).children('.cat_sub_menu').stop().slideUp();
	});
  
  });


// 팝업 

// 마스크 클릭 시 팝업 닫기 
$(document).on("click", ".mask", function () {
  closePop();
});

let maskOverlay = $(".mask");
let focusedElementBeforePopup; // 팝업 버튼 링크 위치  

function openPop(type, id) {
  
  $("html, body, .wrapper").css({
    "overflow-y": "hidden",
  });
  $("html, body, .wrapper").on("scroll touchmove touchmove", function (e) {
      e.preventDefault();
    });
  
    $(".popup_layer").attr({
    "role": "dialog",
    "aria-modal": "true",
  });

  focusedElementBeforePopup = document.activeElement;

  $("#" + id).on("keydown", trapTabKey);

 
  if (type == "layer") {

    $(".popup_layer").fadeOut(); // 열려있는 다른 팝업 닫기
    $("#" + id).show();
    $(".mask").fadeIn();

    // // iOS 스크롤 막기 ( body padding-top 체크 )
    // $(document).on("scroll touchmove touchmove", function (e) {
    //   e.preventDefault();
    // });
    //     $("body").css("top", - ($(window).scrollTop())).addClass("scroll-off").on("scroll touchmove mousewheel", function(e){
    //           e.preventDefault(); // iOS 레이어 열린 상태에서 body 스크롤되는 문제 방지
    //       });
    // }
  }

  // 포커스 막기
  //  $(document).on("focusin", function (e) {
  //    if ($(e.target).closest(id).length === 0) {
  //      $(id).focus();
  //    }
  //  });


  let focusableElementsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  let focusableElements = $("#" + id).find(focusableElementsString);
  focusableElements = Array.prototype.slice.call(focusableElements);
  let firstTabStop = focusableElements[0];
  let lastTabStop = focusableElements[focusableElements.length - 1];

  firstTabStop.focus();

  // 팝업 내부에서만 포커스 작동
  function trapTabKey(e) {
    if (e.keyCode === 9) {
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
    }
    if (e.keyCode === 27) {
      closePop(id);
    }
  }
  }

function closePop(type, id) {
 $("html, body, .wrapper").css({
   "overflow-y": "auto",
 });

$("html, body, .wrapper").off("scroll touchmove touchmove", function (e) {
    e.preventDefault();
  });

  $(".mask").fadeOut();
  $(".popup_layer").hide();

  // 최초 팝업 열기 버튼으로 포커스 이동
  // (이중 레이어 팝업 시 data-focus="beforePopup 추가)
  // firstPopupBtn = $('.btn_submit[data-focus="firstPopupBtn"]');
  // firstPopupBtn.focus();

  // 단일 레이어 팝업 시 포커스 이동  
  focusedElementBeforePopup.focus();

}


// 긴 팝업 popup_layer pop_scroll 

// 개인정보처리방침 
$(document).on("click", ".mask_scroll", function () {
  closePopScroll();
});

function openPopScroll(type, id) {

// let popupLayerHeight = $(".popup_layer.pop_scroll").outerHeight();
// // console.log(popupLayerHeight);
// $("body").outerHeight( popupLayerHeight + 200 );
// $(".mask_scroll").outerHeight( popupLayerHeight + 200 );

$("html, body").stop().animate({
  scrollTop: 0,
},
"150"
);
 
// $("html, body, .wrapper").on("scroll touchmove touchmove", function (e) {
//     e.preventDefault();
//   });

  $(".popup_layer").attr({
  "role": "dialog",
  "aria-modal": "true",
});

focusedElementBeforePopup = document.activeElement;

$("#" + id).on("keydown", trapTabKey);


if (type == "layer") {

  $(".popup_layer").fadeOut(); // 열려있는 다른 팝업 닫기
  $("#" + id).show();
  $(".mask_scroll").fadeIn();

  // // iOS 스크롤 막기 ( body padding-top 체크 )
  //     $("body").css("top", - ($(window).scrollTop())).addClass("scroll-off").on("scroll touchmove mousewheel", function(e){
  //           e.preventDefault(); // iOS 레이어 열린 상태에서 body 스크롤되는 문제 방지
  //       });
  // }
}

// 포커스 막기
//  $(document).on("focusin", function (e) {
//    if ($(e.target).closest(id).length === 0) {
//      $(id).focus();
//    }
//  });

let focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
let focusableElements = $("#" + id).find(focusableElementsString);
focusableElements = Array.prototype.slice.call(focusableElements);
let firstTabStop = focusableElements[0];
let lastTabStop = focusableElements[focusableElements.length - 1];

firstTabStop.focus();

// 팝업 내부에서만 포커스 작동
function trapTabKey(e) {
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === firstTabStop) {
        e.preventDefault();
        lastTabStop.focus();
      }
    } else {
      if (document.activeElement === lastTabStop) {
        e.preventDefault();
        firstTabStop.focus();
      }
    }
  }
  if (e.keyCode === 27) {
    closePopScroll(id);
  }
}

}

function closePopScroll(id) {

//   $("#" + id).removeClass("open");
//   $(".popup_layer").fadeOut();
//   $(".mask_scroll").fadeOut();

//   $("body").css({
//     overflow: "unset",
//     height:"auto"
//   });

  // $(".mask_scroll").css({
  //   height:"auto"
  // });
//   // 개인정보처리방침 
// let offset = $("#list_num04").offset(); 
// $("html, body").animate({scrollTop: offset.top},300);
// // console.log(offset);

$("html, body, .wrapper").css({
    overflow: "unset",
    height:"auto"
});

// $("html, body, .wrapper").off("scroll touchmove touchmove", function (e) {
//    e.preventDefault();
//  });

 $(".mask_scroll").fadeOut();
 $(".popup_layer").hide();

 // 최초 팝업 열기 버튼으로 포커스 이동
 // (이중 레이어 팝업 시 data-focus="beforePopup 추가)
//  firstPopupBtn = $('.btn_submit[data-focus="firstPopupBtn"]');
 focusedElementBeforePopup.focus();

}

// datepicker settings

$.datepicker.setDefaults({
  // dateFormat: 'yy년-mm월-dd일',
  dateFormat: "yy-mm-dd",
  prevText: "이전 달",
  nextText: "다음 달",
  monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  dayNames: ["월", "화", "수", "목", "금", "토", "일"],
  dayNamesShort: ["월", "화", "수", "목", "금", "토", "일"],
  dayNamesMin: ["월", "화", "수", "목", "금", "토", "일"],
  showMonthAfterYear: true,
  yearSuffix: "년",
  showOn: "both",
  buttonImage: "../../public/img/icons/icon_date.png",
  buttonImageOnly: true,
  isRTL: false,
  showMonthAfterYear: true,
});

$(function () {
  $(".datepicker").datepicker();
});

// top 버튼  
$(document).ready(function () {

  //top button add & scroll event
  // new markup
  let tBtn = "";
  tBtn += '<!-- 최상단 이동 -->';
  tBtn += '<div class="top_btn">';
  tBtn += '    <a href="#wrapper" aria-label="최상단으로 이동" role="button"></a>';
  tBtn += '</div>';

  $(".footer").after(tBtn);
  $(".top_btn").hide();
});


// $(window.parent).scroll(function () {
$(window).scroll(function () {

  // top_btn
  console.log($(this).scrollTop())

  if ($(this).scrollTop() > 600) {
    $(".top_btn").fadeIn();
    // } else if ($(this).scrollTop()  < 600 && $(this).scrollTop() > 100 ) {
  } else if ($(this).scrollTop() < 600) {
    $(".top_btn").fadeOut();
  }
});

$(document).on("click", ".top_btn", function () {
  // $(document).on("click",".top_btn", function () {
  $("html, body").stop().animate({
      scrollTop: 0,
    },
    "500"
  );
  return false;
});

// tab common
$(document).on("click", ".wrap_tabs .tab_btn_item", function () {

  $(".wrap_tabs .tab_btn_item").removeClass("on");
  $(".tab_btn_list .tab_btn_anchor").removeClass("on");

  $(this).addClass("on");
  $(this).children(".tab_btn_anchor").addClass("on");

  let tabIdx = $(this).index();
  $(".wrap_tabs .tab_contents").removeClass("on");
  $(".wrap_tabs .tab_contents").eq(tabIdx).addClass("on");
  
  // 접근성 속성 추가 - 탭 버튼 선택 됨 
  $(".tab_btn_anchor").attr("aria-selected", "false");
  $(this).children(".tab_btn_anchor").attr("aria-selected", "true");
  
// 선택된 탭 상태 추가  
  $(".tab_btn_anchor").children(".sr_only").remove();
  if(!$(this).hasClass('on')){
    $(this).children(".tab_btn_anchor").prepend('<span class="sr_only">비활성화 탭</span>');
  } else{
    $(this).children(".tab_btn_anchor").prepend('<span class="sr_only">선택된 탭</span>');	
  } 

  });


// 통합검색 tab_btn_item


// });


// /* gnb fixed event */
// $(window).scroll(function () {
//   let scrollNum = $(document).scrollTop(); // 스크롤 현재 높이 측정
//   // console.log(scrollNum);
//   if (scrollNum > 120) {
//     $(".gnb_wide .area_menu").addClass("fixed_gnb");
//   } else if (scrollNum == 0) {
//     $(".gnb_wide .area_menu").removeClass("fixed_gnb");
//   }

// });


// 약관 상세 보기
$(document).on("click", ".box_terms_title", function () {

  $(this).toggleClass("on");

  if ($(this).hasClass("on")) {
    $(this).siblings(".box_terms").addClass("on");

  } else {
    $(this).siblings(".box_terms").removeClass("on");
  }
});


    // 아코디언 common
   
    /** 접근성 아코디언 메뉴 확장 축소 text 추가 - accodian_item  */    
    function toggleStateText() {
      $(".accodian_item .accodian_tit").attr({
        "aria-expanded": "false",
      });
      $(".accodian_item").each(function(){
      	if(!$(this).hasClass('on')){
          $(this).children(".accodian_tit").prepend('<span class="sr_only">축소됨</span>');	
          
      	} else{
          $(this).children(".accodian_tit").prepend('<span class="sr_only">확장됨</span>');
         
          	}
      });
    }
    $(document).ready(function () {      
      toggleStateText(); 
    });

$(document).on("click", ".accodian_item", function () {
  $(this).toggleClass("on"); 

  if ($(this).hasClass("on")) {
    $(this).children(".accodian_cnt").stop().slideDown(300);
    $(this).addClass("on");
    $(this).find(".sr_only").text('확장됨');
    $(this).children(".accodian_tit").attr({
      "aria-expanded": "true",
    });
    
  } else {
    $(this).removeClass("on");
    $(this).children(".accodian_cnt").stop().slideUp(300);
    $(this).find(".sr_only").text('축소됨');
    $(this).children(".accodian_tit").attr({
      "aria-expanded": "falese",
    });
  }
});

// 아코디언 모두 접기 버튼
$(document).on("click", ".btn_accodian_all", function () {
  $(".accodian_list .accodian_item").removeClass("on");
  $(".accodian_list .accodian_tit").removeClass("on");
  $(".accodian_list .accodian_tit").attr({
    "aria-expanded": "false",
  });
  $(".accodian_list .accodian_tit").find(".sr_only").text('축소됨');
  $(".accodian_list .accodian_item").children(".accodian_cnt").stop().slideUp(300);
 });

    

//  통합검색 페이지 상세검색 버튼 
$(document).on("click", ".btn_detail", function () {
  $(this).toggleClass("on");
  if ($(this).hasClass("on")) {
    $(this).parent(".area_search_bar").parent(".box_serach").children(".wrap_search_detail").stop().slideDown(300);
  } else {
    $(this).parent(".area_search_bar").parent(".box_serach").children(".wrap_search_detail").stop().slideUp(300);
  }
 });
 //  통합검색 페이지 상세검색 닫기 버튼 
$(document).on("click", ".btn_close_detail", function () {
  $(".area_search_bar .btn_detail").removeClass("on");
  $(this).parent(".wrap_btns").parent(".wrap_search_detail").stop().slideUp(300);  
 });


// 접근성 관련 스크립트 
// /* <div class="popup_layer"> 에 role="dialog" aria-modal="true" aria-labelledby="popup + "id="smPop" " 추가 */

function popupAriaAttrAdd() {

  $(".popup_layer").attr({
    "role": "dialog",
    "aria-modal": "true",
    "aria-labelledby": "",
  });

  $(".popup_layer").attr("aria-labelledby", function () {
    return this.id + "Title";
  });

  
}
$(document).ready(function () {
  popupAriaAttrAdd();
});
