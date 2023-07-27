var g_now_zoom = 100; // 현재비율
var g_max_zoom = 110; // 최대비율(500으로하면 5배 커진다)
var g_min_zoom = 90;  // 최소비율
var g_font_size_cookie_name = "REDCROSS_FONT_SIZE";

$(function() {
    ContentsUtility.init();
});
/**
 * 컨텐츠 유틸리티(인쇄, 스크랩, 확대/축소
 */
var ContentsUtility = {
    init : function($place_holder) {
        try {
            $('#area_contents_utility').prepend('<ul><li class="advertise">소문내기</li></ul>');
            $('#area_contents_utility ul')
                //.append('<li class="facebook"    ><input type="button" value="페이스북 스크랩"      title="새창-페이스북 스크랩"      /></li>')
                /*.append('<li class="twitter"     ><input type="button" value="새창-트위터 스크랩"        title="새창-트위터 스크랩"        /></li>')*/
                //.append('<li class="naverblog"   ><input type="button" value="네이버 블로그 스크랩" title="새창-네이버 블로그 스크랩" /></li>')
                .append('<li class="print"       ><input type="button" value="인쇄"                 title="인쇄"                      /></li>')
                .append('<li class="font_smaller"><input type="button" value="본문 내 글자크기 축소"         title="본문 내 글자크기 축소"              /></li>')
                .append('<li class="font_larger" ><input type="button" value="본문 내 글자크기 확대"         title="본문 내 글자크기 확대"              /></li>');
            //$('#area_contents_utility .facebook input'     ).click(ContentsUtility.facebookScrap); 
            $('#area_contents_utility .twitter input'      ).click(ContentsUtility.twitterScrap);
            //$('#area_contents_utility .naverblog input'    ).click(ContentsUtility.naverBlogScrap);
            $('#area_contents_utility .print input'        ).click(ContentsUtility.printContents);
            $('#area_contents_utility .font_smaller input' ).click(ContentsUtility.reduceFont);
            $('#area_contents_utility .font_larger input'  ).click(ContentsUtility.expandFont);
        } catch(e) {
            alert("[contents_utility.js's ContentsUtility.init] " + e.description);
        }
    },
    facebookScrap : function() {
        FacebookUtil.openScrapDialog(ContentsUtility._getPageTitle(), ContentsUtility._getPageDescription());
    },
    twitterScrap : function() {
        TwitterUtil.openScrapDialog(ContentsUtility._getPageTitle(), ContentsUtility._getPageDescription());
    },
    naverBlogScrap : function() {
        var l_win_popup = window.open('../common/metaweblog/naver_blog.do?title=' + ContentsUtility._getPageTitle() 
                                        + '&description=' + ContentsUtility._getPageDescription()
                                        + '&target_url=' + window.location
                                        , 'naverblog_dialog', 'menubar=no,toolbar=no,location=no,status=no,scrollbars=no,width=355px,height=185px,resizable=no');
        if(!l_win_popup) {
            alert("팝업이 차단되어서 정상적으로 사용하실수 없습니다. \n\n"+document.domain+"주소를 팝업차단에서 허용해 주시기 바랍니다.\n\n====================== 참 고 ==================\n\n1.Explore 도구 - 팝업 차단 설정 에서 팝업차단 사항을 확인하시기 바랍니다.\n\n2. 인터넷에서 툴바를 설치하신 경우에 툴바에서 팝업차단 설정 사항을 확인하시기 바랍니다.");
        } else {
            l_window_popup.focus();
        }
    },
    printContents : function() {
        window.print();
    },
    reduceFont : function() {
        PageZoom.zoomOut();
    },
    expandFont : function () {
        PageZoom.zoomIn();
    },
    _getPageTitle : function() {
        var l_title         = "";
        var $area_title = $('#area_section h2');
        
        if($area_title.size() > 0) {
            l_title = $area_title.text();
        } else {
            l_title = $('head title').text();
        }
        return l_title;
    },
    _getPageDescription : function() {
        var l_description   = '';
        var $pagemessage = $('.page_message');
        if($pagemessage.size() > 0) {
            $.each($pagemessage.children(), function(idx, ele) {
                l_description = l_description + $(ele).text();
            });
        } else {
            $.each($('.area_section').children(), function(idx, ele) {
                l_description = l_description + $(ele).text();
            });
        }
        return l_description;
    }
}
var PageZoom = {
    setZoom : function() {
        try {
            g_now_zoom = PageZoom._getNowZoom();
            $('#area_section *').css('font-size', g_now_zoom + "%");
        } catch(e) {
            alert("[contents_utility.js's PageZoom.setZoom] "+e.description);
        }
    },
    zoomIn : function() {
        try {
            if (g_now_zoom < g_max_zoom){
                g_now_zoom += 5; //25%씩 커진다.
            }else{
                alert("화면의 최대비율 입니다.");
                return;
            }
            PageZoom._saveNowZoom(g_now_zoom);
            $('#area_section *').css('font-size', g_now_zoom + "%");
        } catch(e) {
            alert("[contents_utility.js's PageZoom.zoomIn] "+e.description);
        }
    },
    zoomOut : function() {
        try {
            if (g_now_zoom > g_min_zoom){
                g_now_zoom -= 5; //25%씩 작아진다.
            }else{
                alert("화면의 최소비율 입니다.");
                return;
            }
            PageZoom._saveNowZoom(g_now_zoom);
            $('#area_section *').css('font-size', g_now_zoom + "%");
        } catch(e) {
            alert("[contents_utility.js's PageZoom.zoomOut] "+e.description);
        }
    },
    zoomDefault : function() {
        try {
            g_now_zoom = 100;
            PageZoom._saveNowZoom(g_now_zoom);
            $('#area_section *').css('fontSize', g_now_zoom + "%");
        } catch(e) {
            alert("[contents_utility.js's PageZoom.zoomDefault] "+e.description);
        }
    },
    _getNowZoom : function() {
        var l_found = false;
        var l_index = 0;
        var l_begin;
        var l_end;

        while(l_index <= document.cookie.length) {
            l_begin = l_index;
            l_end = l_begin + g_font_size_cookie_name.length;
            if(document.cookie.substring(l_begin, l_end) == g_font_size_cookie_name) {
                l_found = true;
                break;
            }
            l_index ++;
        }

        if(l_found == true) {
            l_begin = l_end+1;
            l_end = document.cookie.indexOf(";", l_begin);
            if(l_end < l_begin) {
                l_end = document.cookie.length;
            }
            return Number(document.cookie.substring(l_begin, l_end));
        } else {
            return Number(g_now_zoom);
        }
    },
    _saveNowZoom : function(p_zoom) {
        document.cookie = g_font_size_cookie_name+"="+escape(p_zoom);
    }
}