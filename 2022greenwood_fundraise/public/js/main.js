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

