//Gnb tap
$(document).on('click', '.Gnb .tab_btn_item', function () {

    $(".Gnb .tab_btn_item").removeClass("on");
    $(this).addClass("on");
    $(".Gnb .tab_btn_anchor").removeClass("on");
    $(this).children(".tab_btn_anchor").addClass("on");
    var tabIdx = $(this).index();
    $(".Gnb .tab_contents").removeClass("on");
    $(".Gnb.tab_contents").eq(tabIdx).addClass("on");
    // console.log(tabIdx);
  
  });


  //totop

  $(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});

$(function () {

//slide
var mainSlider = $('.basicSlider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000 ,
        responsive: [
            { breakpoint: 768, // 화면의 넓이가 768px 이상일 때
              settings: {
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 4000 ,
                infinite: true,
            }},]

        
    });
    var direction = true;
    var slidePrev = $(".arrow_left");
    var slideNext = $(".arrow_right");

    slidePrev.on("click", function () {
        direction = false;
        mainSlider.slick("slickPrev");
    });
    slideNext.on("click", function () {
        mainSlider.slick("slickNext")
    });



    $(window).on('load resize', function () {
        if ($(window).width() > 768) {
            Rsd.slick('unslick');
        } else {
            Rsd.not('.slick-initialized').slick(slickOptions);
        }
    });


});

// tab common

$(document).on('click', '.wrap_tabs .tab_btn_item', function () {

    $(".wrap_tabs .tab_btn_item").removeClass("on");
    $(this).addClass("on");
    $(".tab_btn_list .tab_btn_anchor").removeClass("on");
    $(this).children(".tab_btn_anchor").addClass("on");
    var tabIdx = $(this).index();
    $(".wrap_tabs .tab_contents").removeClass("on");
    $(".wrap_tabs .tab_contents").eq(tabIdx).addClass("on");
    // console.log(tabIdx);
  
  });