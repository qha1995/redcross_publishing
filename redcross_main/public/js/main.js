$(function () {
  /************ slider_main slick **************/
  var slider_main = $(".slider_main").slick({
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, // 화면의 넓이가 768px 이상일 때
        settings: {
          slidesToShow: 1,
          autoplay: false,
          autoplaySpeed: 4000,
          infinite: true,
          fade: true
        }
      }
    ]
  });
  /************ slider_main slick arrows **************/
  var direction = true;
  var slidePrev = $(".main_visual .arrow_left");
  var slideNext = $(".main_visual .arrow_right");

  slidePrev.on("click", function () {
    direction = false;
    $(".slider_main").slick("slickPrev");
  });
  slideNext.on("click", function () {
    $(".slider_main").slick("slickNext");
  });

  /************ slider_donation slick **************/
  var wrap_donation = $(".slider_donation").slick({
    arrows: false,
    autoplay: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    autoplaySpeed: 4000,
    asNavFor: ".donation_txt",
    responsive: [
      {
        breakpoint: 768, // 화면의 넓이가 768px 이상일 때
        settings: {
          autoplay: false,
          dots: false,
          infinite: true,
          slidesToShow: 1,
          fade: true,
          autoplaySpeed: 4000,
          asNavFor: ".donation_txt"
        }
      }
    ]
  });
  $(".donation_txt").slick({
    arrows: false,
    autoplay: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    fade: true,
    autoplaySpeed: 4000,
    asNavFor: ".slider_donation",
    responsive: [
      {
        breakpoint: 768, // 화면의 넓이가 768px 이상일 때
        settings: {
          slidesToShow: 1,
          autoplay: false,
          autoplaySpeed: 4000,
          infinite: true,
          fade: true,
          asNavFor: ".slider_donation",
          dots: false
        }
      }
    ]
  });

  /************ slider_donation slick arrows**************/
  var direction = true;
  var slidePrev = $(".wrap_donation .arrow_left");
  var slideNext = $(".wrap_donation .arrow_right");

  slidePrev.on("click", function () {
    direction = false;
    $(".slider_donation").slick("slickPrev");
  });
  slideNext.on("click", function () {
    wrap_donation.slick("slickNext");
  });

  /************ slider_story slick **************/
  var slider_story = $(".slider_story").slick({
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
    responsive: [
      {
        breakpoint: 768, // 화면의 넓이가 768px 이상일 때
        settings: {
          slidesToShow: 2,
          autoplay: false,
          autoplaySpeed: 4000,
          infinite: true,
          fade: false,
          vertical: false,

          variableWidth: true
        }
      }
    ]
  });

  /************ slider_news slick **************/
  var slider_news = $(".slider_news").slick({
    accessibility: false,
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, // 화면의 넓이가 768px 이상일 때
        settings: {
          slidesToShow: 2,
          autoplay: false,
          autoplaySpeed: 4000,
          dots: false,
          infinite: true,
          fade: false,
          vertical: false,
          dots: true,
          variableWidth: true
        }
      }
    ]
  });

  /************ slider_news slick **************/
  var direction = true;
  var slidePrev = $(".wrap_news .arrow_left");
  var slideNext = $(".wrap_news .arrow_right");

  /************ 슬라이드 탭 인덱스 S **************/
  $(".slider_news a").attr("tabindex", "-1");
  $(".slider_news .slick-current a").attr("tabindex", "0");
  $(".slider_news .slick-active a").attr("tabindex", "0");

  slider_news.on("afterChange", function (event, slick, currentSlide, nextSlide) {
    // 이전 슬라이드에서 a 태그 tabindex를 -1로 변경
    $(".slider_news a").attr("tabindex", "-1");
    // 현재 슬라이드에서 a 태그 tabindex를 0으로 변경
    for (var i = 0; i < 4; i++) {
      $(slick.$slides[currentSlide + i])
        .find("a")
        .attr("tabindex", "0");
    }
  });
  /************ 슬라이드 탭 인덱스 E **************/

  slidePrev.on("click", function () {
    direction = false;
    $(".slider_news").slick("slickPrev", "");
  });
  slideNext.on("click", function () {
    $(".slider_news").slick("slickNext");
  });

  /************ 탭메뉴 slider_notice .tab_contents 와 wrap_tabs 연결 **************/
  $(document).on("click", ".wrap_tabs .tab_btn_item", function () {
    $(".wrap_tabs .tab_btn_item").removeClass("on");
    $(this).addClass("on");

    $(".tab_btn_list .tab_btn_anchor").removeClass("on");
    $(this).children(".tab_btn_anchor").addClass("on");

    var tabIdx = $(this).index();
    $(".wrap_tabs .tab_contents").removeClass("on");
    $(".wrap_tabs .tab_contents").eq(tabIdx).addClass("on");
  });

  /************ 탭메뉴 slider_notice .more 과  wrap_tabs 연결**************/
  $(document).on("click", ".wrap_tabs .tab_btn_item", function (e) {
    $(".wrap_tabs .more_item").removeClass("on");
    $(this).addClass("on");

    $(".more_list .more_anchor").removeClass("on");
    $(this).children(".more_anchor").addClass("on");

    var tabIdx = $(this).index();
    $(".wrap_tabs .more_item").removeClass("on");
    $(".wrap_tabs .more_item").eq(tabIdx).addClass("on");

    var html = "";

    $(".tab_contents_list").children().remove();

    if (e.target.id == "notice1") {
      html = `<li class="tab_contents on swiper">
								<div class="swiper-wrapper">
										<div class="item01 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>충남</span>
																<h3>2023년도 대한적십자사1111
																		경상북도지사 기술직(운전원)
																		신규채용 서류전형 결과 안내</h3>
																<p>2023.01.07</p>
														</a>
												</figure>
										</div>
										<div class="item02 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>서울</span>
																<h3>대한적십자사 서울특별시지사
																		육아휴직 대체인력(계약직)
																		공개 모집공고</h3>
																<p>2023.01.15</p>
														</a>
												</figure>
										</div> 
										<div class="item03 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>부산</span>
																<h3>부산시 재난심리회복지원센터
																		전담요원 채용 서류전형
																		결과안내</h3>
																<p>2023.01.19</p>
														</a>
												</figure>
										</div>
										<div class="item04 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>경기</span>
																<h3>재난심리회복지원센터 전담
																		행정직원 공개채용 면접전형
																		합격자 발표</h3>
																<p>2023.01.25</p>
														</a>
												</figure>
										</div>
										<div class="item05 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>부산</span>
																<h3>부산시 재난심리회복지원센터
																		전담요원 채용 서류전형
																		결과안내</h3>
																<p>2023.01.19</p>
														</a>
												</figure>
										</div>
										<div class="item06 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>경기</span>
																<h3>재난심리회복지원센터 전담
																		행정직원 공개채용 면접전형
																		합격자 발표</h3>
																<p>2023.01.25</p>
														</a>
												</figure>
										</div>
								</div>
								<div class="swiper-pagination"></div>
							</li>`;
    } else if (e.target.id == "notice2") {
      html = `<li class="tab_contents on swiper">
								<div class="swiper-wrapper">
										<div class="item01 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>충남</span>
																<h3>2023년도 대한적십자사2222
																		경상북도지사 기술직(운전원)
																		신규채용 서류전형 결과 안내</h3>
																<p>2023.01.07</p>
														</a>
												</figure>
										</div>
										<div class="item02 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>서울</span>
																<h3>대한적십자사 서울특별시지사
																		육아휴직 대체인력(계약직)
																		공개 모집공고</h3>
																<p>2023.01.15</p>
														</a>
												</figure>
										</div> 
										<div class="item03 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>부산</span>
																<h3>부산시 재난심리회복지원센터
																		전담요원 채용 서류전형
																		결과안내</h3>
																<p>2023.01.19</p>
														</a>
												</figure>
										</div>
										<div class="item04 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>경기</span>
																<h3>재난심리회복지원센터 전담
																		행정직원 공개채용 면접전형
																		합격자 발표</h3>
																<p>2023.01.25</p>
														</a>
												</figure>
										</div>
										<div class="item05 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>부산</span>
																<h3>부산시 재난심리회복지원센터
																		전담요원 채용 서류전형
																		결과안내</h3>
																<p>2023.01.19</p>
														</a>
												</figure>
										</div>
										<div class="item06 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>경기</span>
																<h3>재난심리회복지원센터 전담
																		행정직원 공개채용 면접전형
																		합격자 발표</h3>
																<p>2023.01.25</p>
														</a>
												</figure>
										</div>
								</div>
								<div class="swiper-pagination"></div>
							</li>`;
    } else if (e.target.id == "notice3") {
      html = `<li class="tab_contents on swiper">
								<div class="swiper-wrapper">
										<div class="item01 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>충남</span>
																<h3>2023년도 대한적십자사3333
																		경상북도지사 기술직(운전원)
																		신규채용 서류전형 결과 안내</h3>
																<p>2023.01.07</p>
														</a>
												</figure>
										</div>
										<div class="item02 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>서울</span>
																<h3>대한적십자사 서울특별시지사
																		육아휴직 대체인력(계약직)
																		공개 모집공고</h3>
																<p>2023.01.15</p>
														</a>
												</figure>
										</div> 
										<div class="item03 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>부산</span>
																<h3>부산시 재난심리회복지원센터
																		전담요원 채용 서류전형
																		결과안내</h3>
																<p>2023.01.19</p>
														</a>
												</figure>
										</div>
										<div class="item04 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>경기</span>
																<h3>재난심리회복지원센터 전담
																		행정직원 공개채용 면접전형
																		합격자 발표</h3>
																<p>2023.01.25</p>
														</a>
												</figure>
										</div>
										<div class="item05 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>부산</span>
																<h3>부산시 재난심리회복지원센터
																		전담요원 채용 서류전형
																		결과안내</h3>
																<p>2023.01.19</p>
														</a>
												</figure>
										</div>
										<div class="item06 swiper-slide">
												<figure>
														<a href="javascript:;" target="_self">
																<span>경기</span>
																<h3>재난심리회복지원센터 전담
																		행정직원 공개채용 면접전형
																		합격자 발표</h3>
																<p>2023.01.25</p>
														</a>
												</figure>
										</div>
								</div>
								<div class="swiper-pagination"></div>
							</li>`;
    }

    $(".tab_contents_list").append(html);

    const tabSwiper = new Swiper(".tab_contents", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 4,
      autoplay: true,
      loopAdditionalSlides: 1,
      delay: 4000,
      spaceBetween: 30,
      breakpoints: {
        1920: {slidesPerView: 4, spaceBetween: 30},
        1024: {slidesPerView: 4, spaceBetween: 10},
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
          autoplay: false
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 10,
          autoplay: false
        },
        100: {
          slidesPerView: 2,
          spaceBetween: 10,
          autoplay: false
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  });

  /************ 첫화면 클릭 이벤트 **************/
  $("#notice1").click();

  // /************ slider_notice slick arrows **************/
  // var slider_notice = $('.slider_notice').slick({
  // 	arrows:false,
  // 				autoplay: true,
  // 				dots: false,
  // 				infinite: true,
  // 				slidesToShow: 4,
  // 				autoplay: true,
  // 				autoplaySpeed: 4000 ,
  // 				slidesToScroll:2,

  // 				responsive: [
  // 						{ breakpoint: 768, // 화면의 넓이가 768px 이상일 때
  // 							settings: {
  // 								slidesToShow: 2,
  // 								autoplay: false,
  // 								autoplaySpeed: 4000 ,
  // 								infinite: true,
  // 								fade: false,
  // 								vertical:false,
  // 								dots: true,
  // 								variableWidth: true
  // 						}},]

  // 		});
  // /************ slider_main slick **************/
  // 		var direction = true;
  // 		var slidePrev = $(".wrap_notice .arrow_left");
  // 		var slideNext = $(".wrap_notice .arrow_right");

  // 		slidePrev.on("click", function () {
  // 			direction = false;
  // 			$('.slider_notice').slick("slickPrev");
  // 		});
  // 		slideNext.on("click", function () {
  // 			$('.slider_notice').slick("slickNext")
  // 		});

  /************ slider_promotion slick **************/
  var slider_promotion = $(".slider_promotion").slick({
    arrows: false,
    accessibility: false,
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 768, // 화면의 넓이가 768px 이상일 때
        settings: {
          slidesToShow: 1,
          autoplay: false,
          autoplaySpeed: 4000,
          infinite: true,
          fade: false,
          vertical: false,
          dots: true,
          variableWidth: true
        }
      }
    ]
  });

  /************ 슬라이드 탭 인덱스 S **************/
  $(".slider_promotion a").attr("tabindex", "-1");
  $(".slider_promotion .slick-current a").attr("tabindex", "0");
  $(".slider_promotion .slick-active a").attr("tabindex", "0");

  slider_promotion.on("afterChange", function (event, slick, currentSlide, nextSlide) {
    // 이전 슬라이드에서 a 태그 tabindex를 -1로 변경
    $(".slider_promotion a").attr("tabindex", "-1");
    // 현재 슬라이드에서 a 태그 tabindex를 0으로 변경
    for (var i = 0; i < 2; i++) {
      $(slick.$slides[currentSlide + i])
        .find("a")
        .attr("tabindex", "0");
    }
  });
});

/************ scroll_top **************/

$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll_top").fadeIn();
    } else {
      $(".scroll_top").fadeOut();
    }
  });

  //Click event to scroll to top
  $(".scroll_top").click(function () {
    $("html, body").animate({scrollTop: 0}, 800);
    return false;
  });
});
