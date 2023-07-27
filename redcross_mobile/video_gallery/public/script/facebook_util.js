$(function(){
	try {
			if(FB != undefined) {
					FacebookUtil.init();
			}
	} catch(e) {
			//alert('FACEBOOK API가 잘못 되었습니다.');
	}
});
var FacebookUtil = {
	access_token : 'AAAGIKeGdgcoBAF23ZByf49LblZA5BJ0WyDVsyubEvqZAmiOMgKocy0YUz48xYR3gS3uUbEG6ySZAoSewMniZC4JgVscARHwZBVrRbDQoZCxrwZDZD#_=_'
	/**
	 * 초기화.
	 * <script type="text/javascript" src="https://connect.facebook.net/ko_KR/all.js" charset="utf-8"></script>
	 * 이 내용이 Header에 등록되어 있어야 한다.
	 */
	, init : function() {
			$('body').append('<div id="fb-root"></div>');
			var sAppID = "431188436943306";
			FB.init({
					appId  : sAppID,
					status : true, // check login status
					cookie : true, // enable cookies to allow the server to access the session
					xfbml  : true  // parse XFBML
			});
	}
	/*
	 *  페이스 북 로그인
	 *  로그인이 이미 되어있을 경우에도 callback function을 실행합니다.
	 */
	, login : function(p_callback) {
			FB.getLoginStatus(function(response) {
					if(response.session) {     //로그인 되어 있는 상태
							if($.isFunction(p_callback)) p_callback();
					} else {      //로그인이 안되어 있는 상태
							FB.login(function(response){  if($.isFunction(p_callback)) p_callback(); },{scope:'publish_stream,read_stream'});
					}
			});
	}
	/*
	 *  페이스 북 로그아웃
	 *  로그아웃이 이미 되어있을 경우에는 callback function을 실행하지 않습니다.
	 *  p_callback : function(response)
	 */
	, logout : function(p_callback) {
			FB.logout(function(p_response) {
					if($.isFunction(p_callback)) p_callback(p_response);
			});
	}
	/**
	 *  사용자 정보 추출.
	 *  callback function이 반드시 필요합니다.
	 * 정상결과   - {"id":"1000029094XXXXX","name":"\uc2e0\uc0c1\ud6c8","first_name":"\uc0c1\ud6c8","last_name":"\uc2e0\uc0c1\ud6c8","link":"http:\/\/www.facebook.com\/profile.php?id=1000029094XXXXX","gender":"male","email":"kaizer0720\u0040yahoo.co.kr","timezone":9,"locale":"ko_KR","updated_time":"2011-09-08T06:40:02+0000"}
	 * 비정상결과 - {"error":{"message":"An active access token must be used to query information about the current user.","type":"OAuthException"}}
	 */
	, getUserInfo : function(p_callback) {
			FB.api('/me', function(p_response) {
					if($.isFunction(p_callback)) {
							p_callback(p_response);
					} else {
							alert('오류가 발생하였습니다 : callback이 지정되지 않았습니다. API 코드를 확인하세요.');
					}
			});
	}
	/**
	 *  입력한 ID를 가진 Facebook 사용자 IMAGE를 가져온다
	 */
	, getProfileImageURI : function(facebookID) {
			try {
					return 'http://graph.facebook.com/' + facebookID +'/picture'
			} catch(e) {
					alert("[facebook_util.js's FacebookUtil.getProfileImageURI] " + e.description);
			}
	}
	/**
	 * 입력한 ID를 가진 사용자의 Feed를 읽어온다.
	 * p_post_limit : int
	 * p_userid : string
	 * p_callaback : function(p_posts)
	 */
	, loadFeeds : function(p_post_limit, p_userid, p_callback) {
			if(p_userid == undefined || p_userid == '') {
					alert('조회할 Facebook USERID가 설정되지 않았습니다.');
					return false;
			}
			if(p_post_limit == undefined || p_post_limit == '') {
					alert('조회할 Facebook USERID가 설정되지 않았습니다.');
					return false;
			}
			FB.api('/' + p_userid + '/posts?access_token=' + FacebookUtil.access_token, { limit: p_post_limit }, function(p_response) {
					var l_posts = p_response.data;
					if($.isFunction(p_callback)) {
							p_callback(l_posts);
					} else {
							alert('오류가 발생하였습니다 : callback이 지정되지 않았습니다. API 코드를 확인하세요.');
					}
			});
	}
	/**
	 * Feed를 Post한다.
	 * 필요 파라메터
	 * p_param : {
	 *  name        : 링크명
	 *  link        : 링크
	 *  picture     : 사진URL(절대경로)
	 *  caption     : 사진 캡션
	 *  description :
	 * },
	 * p_callback(response)
	 *
	 */
	, postFeed : function(p_param, p_callback) {
			var l_default_post = {
					'message'    : ''
					,'link'      : window.location.toString()
					,'name'      : '대한적십자사'
					,'picture'   : 'http://www.redcross.or.kr/images/common/logo_top.gif'
			};

			var l_post_param = $.extend(l_default_post, p_param);

			FB.api('me/feed', 'post', l_post_param, function(p_response) {
					if(!p_response || p_response.error) {
							if($.isFunction(p_callback)) {
									p_callback(false);
							}
					} else {
							if($.isFunction(p_callback)) {
									p_callback(true);
							}
					}
			});
	},
	openScrapDialog : function(p_title, p_description) {
			p_title       = p_title.replace(/(\s+$)/g, "").replace(/(^\s*)/g, "").replace("\n", "").replace("\r", "");         // 캐리지리턴 제거
			p_title       = p_title.substr(0, 10) + '...';
			p_description = p_description.replace(/(\s+$)/g, "").replace(/(^\s*)/g, "").replace("\n", "").replace("\r", "");   // 캐리지리턴 제거
			p_description = p_description.substr(0, 40) + '...';        // 40 글자 이내로 제한

			FB.ui({
				 method   : 'Feed' ,
				 name     : '대한적십자사 스크랩',
				 link     : window.location.toString(),
				 caption  : p_title,
				 description : p_description,
				 picture  : 'http://www.redcross.or.kr/images/common/logo_top.gif'
			},
			function(p_response) {
					if(p_response && p_response.post_id) {
							alert('페이스북에 스크랩 되었습니다.');
					}
			});
	}
}