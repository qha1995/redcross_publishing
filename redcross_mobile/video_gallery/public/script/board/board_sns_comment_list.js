var G_TWITTER_SESSIONYN = "";
var G_FACEBOOK_SESSIONYN = "";
var G_SNS_FLAG = "";
$(function() {
    $('.area_comment_register').append('<p class="area_comment_btn"></p>');
    $('.area_comment_register').append('<p class="area_comment_username"></p>');
    $('.area_comment_username').css('display', 'none');
    CommentList.init();
});

var CommentList = {
    init : function() {
        try {
            CommentList.setCommentBg();         // 댓글 입력창의 Background이미지를 로드 한다.
            //CommentList.makeScriptLink1();      // 동적 스크립트 생성
            //CommentList.makeScriptLink2();      // 동적 스크립트 생성
            //CommentList.makeScriptLink3();      // 동적 스크립트 생성

            // 댓글 페이지 이동
            $('.comment_list_wrapper .area_page ul li a').click(CommentList.changePage);
    
            // 조회중입니다. 동적 생성
            $('.area_input').append('<p class="loading_sns_image">조회중입니다.</p>');

            // 댓글 입력창 포커스 유무에 따른 배경 이미지 처리 이벤트 등록
            $('.area_comment_register textarea').focus(CommentList.clearCommentBg).blur(CommentList.setCommentBg);
            // 댓글 폼 전송 이벤트 등록
            $('.area_comment_register form').live('submit', function() {
                return CommentList.submitForm();
            });
            // 댓글에 데이터 입력 시 글자수 계산 이벤트 등록
            $('.area_comment_register textarea').keyup(CommentList.limitCommentCount);

            //SnsUtil.init($('.area_comment_btn'), $('.area_comment_username'), $('.userinfo'));
        } catch(e) {
            alert('[board_sns_comment_list.js CommentList.init]' + e.description);
        }
    },

    /**
     *  댓글 저장
     */
    submitForm : function() {
        if(!CommentList.checkFormValidation()) {
            return false;
        }
        // SNS ID 생성
        if(SnsUtil.loginStatus.facebook) {
            $('.area_comment_register form').append('<input type="hidden" name="facebook_id" value="' + SnsUtil.userinfo.facebook.id + '"/>');
        }
        if(SnsUtil.loginStatus.twitter) {
            $('.area_comment_register form').append('<input type="hidden" name="twitter_id" value="' + SnsUtil.userinfo.twitter.id + '"/>');
        }
        var l_message = $('.area_comment_register textarea').val();
        // SNS Post
        SnsUtil.post(l_message, function() { $('.area_comment_register form').die(); $('.area_comment_register form').submit(); });
        return false;
    },

    /**
     * 댓글 페이징 ajax처리
     */
    changePage : function() {
        try {
            if($(this).hasClass('current_page')) {
                return false;
            }
            var l_action = $(this).attr('href');
            l_action = l_action.replace('action=detail', 'action=commentList');
            $('.comment_list_wrapper .area_page ul li a').unbind('click');
            $('.comment_list_wrapper').load(
                l_action,
                {},
                function() {
                    $('.comment_list_wrapper .area_page ul li a').click(CommentList.changePage);
                }
            );
            return false;
        } catch(e) {
            alert('[board_sns_comment_list.js CommentList.changePage]' + e.description);
        }
    },

    /**
     * 댓글에 입력한 글자수 제한 및 글자수 표시 처리
     */
    limitCommentCount : function() {
        try {
            var l_comment_length = $(this).val().length;

            // 글자수에 따른 제한 처리
            if(l_comment_length > 250) {
                alert("입력가능 글자수를 초과하였습니다.");
                $(this).val($(this).val().substring(0, 250));
            } else {
                // 입력된 글자수 표시
                $('.character_counter strong').text(l_comment_length);
            }
        } catch(e) {
            alert("[board_sns_comment_list.js CommentList.limitCommentCount] " + e.description);
            return false;
        }

        return true;
    },

    /**
     * 댓글의 배경 이미지 설정 처리
     */
    setCommentBg : function() {
        try {
            var l_thisobj = $('.area_comment_register textarea');

            if(l_thisobj.val() == '') {
                l_thisobj.css({
                     'backgroundImage'    : 'url("../images/board/bg_comment_empty.png")'
                    ,'backgroundRepeat'   : 'no-repeat'
                    ,'backgroundPosition' : '3px 10px'
                });
            } else {
                l_thisobj.css({
                     'background' : 'none'
                });
            }
        } catch(e) {
            alert("[board_sns_comment_list.js CommentList.setCommentBg] " + e.description);
        }
    },

    /**
     * 댓글의 배경 이미지 제거 처리
     */
    clearCommentBg : function() {
        try {
            $('.area_comment_register textarea').css({
                 'background' : 'none'
            });
        } catch(e) {
            alert("[board_sns_comment_list.js CommentList.clearCommentBg] " + e.description);
        }
    },

    /**
     * 폼 양식 유효성 체크
     */
    checkFormValidation : function() {
        try {
            if($('.area_comment_register textarea').val() == '') {
                alert("댓글을 작성해 주세요.");
                $('.area_comment_register textarea').focus();
                return false;
            }
        } catch(e) {
            alert("[board_sns_comment_list.js CommentList.checkFormValidation] " + e.description);
            return false;
        }
        return true;
    }
}