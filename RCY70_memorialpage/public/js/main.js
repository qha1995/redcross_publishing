  /************ 탭메뉴 **************/
  $(document).on("click", ".wrap_tabs .tab_btn_item", function () {
    $(".wrap_tabs .tab_btn_item").removeClass("on");
    $(this).addClass("on");

    $(".tab_btn_list .tab_btn_anchor").removeClass("on");
    $(this).children(".tab_btn_anchor").addClass("on");

    var tabIdx = $(this).index();
    $(".wrap_tabs .tab_contents").removeClass("on");
    $(".wrap_tabs .tab_contents").eq(tabIdx).addClass("on");
  });


  /************ ScrollToTop **************/

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

/************ business_pic more **************/
$(document).click(".more", function() {
    $('.business_pic').toggleClass('on');
  });