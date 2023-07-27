/**
 * SNS 유틸리티
 */
var SnsUtil = {
	/**
	 * 로그인 상태
	 */
	loginStatus : { 'facebook' : false, 'twitter' : false },
	userinfo : { 'facebook' : null, 'twitter' : null },
	config : {
			'session_image' : null
			, 'session_name' : null
	},
	initByPlaceHolder : function(p_placeholder_obj) {
			// SNS형 댓글 초기화
			p_placeholder_obj.append('<p class="area_sns_btn" style="float:right; margin-bottom:4px;"></p>');
			p_placeholder_obj.append('<p class="area_sns_username" style="margin-left:5px; font-weight:bolder; line-height:2.4em; float:right; margin-bottom:4px; margin-right:10px;"></p>');
			p_placeholder_obj.append('<p class="area_sns_userimage" style="display:none;float:right;"></p>');
			SnsUtil.init($('.area_sns_btn'), $('.area_sns_username'), $('.area_sns_userimage'));
	},
	/**
	 * 초기화
	 */
	init : function(p_button_container, p_name_container, p_image_container) {
			if(!p_button_container) {
					alert('SNS 로그인/로그아웃 버튼이 들어갈 컨테이너 객체가 필요합니다.');
					return false;
			}
			if(!p_name_container) {
					alert('SNS 사용자명이 출력될 컨테이너 객체가 필요합니다.');
					return false;
			} else {
					SnsUtil.config.session_name = p_name_container;
			}
			if(!p_image_container) {
					alert('SNS 사용자 이미지가 출력될 컨테이너 객체가 필요합니다.');
					return false;
			} else {
					SnsUtil.config.session_image = p_image_container;
			}

		 /**
			 *  SNS 기능 초기화
			 */
			FacebookWrapper.init(p_button_container);
			TwitterWrapper.init(p_button_container);

			TwitterWrapper.getUserinfo();

			// FB 객체의 사용자 상태 요청
			FB.getLoginStatus(function(response) {
					if (response.status === 'connected') {
							FacebookWrapper.getUserinfo();
					}
			});
	},
	/**
	 *  페이스북 세션 상태 변경에 의한 Display 변경
	 */
	setFacebookUserinfo : function(p_user_json) {
			SnsUtil.loginStatus.facebook = false;
			SnsUtil.userinfo.facebook = p_user_json;
			SnsUtil._removeSnsUserinfoDisplay();
			if(!p_user_json && SnsUtil.loginStatus.twitter) {
					SnsUtil._displayTwitterUserinfo();
			} else if(p_user_json) {
					SnsUtil.loginStatus.facebook = true;
					SnsUtil._displayFacebookUserinfo();
			}
	},
	/**
	 *  트위터 세션 상태 변경에 의한 Display 변경
	 */
	setTwitterUserinfo : function(p_user_json) {
			SnsUtil.loginStatus.twitter = false;
			SnsUtil.userinfo.twitter = p_user_json;
			SnsUtil._removeSnsUserinfoDisplay();
			if(!p_user_json && SnsUtil.loginStatus.facebook) {
					SnsUtil._displayFacebookUserinfo();
			} else if(p_user_json) {
					SnsUtil.loginStatus.twitter = true;
					SnsUtil._displayTwitterUserinfo();
			}
	},
	/**
	 *  SNS 전파
	 *  @param p_callback : SNS 전파 후 실행될 콜백함수
	 */
	post : function(p_message, p_callback) {
			if(SnsUtil.loginStatus.facebook && SnsUtil.loginStatus.twitter) {
					FacebookWrapper.feed(p_message, function() {
							TwitterWrapper.tweet(p_message, p_callback);
					});
			} else if(SnsUtil.loginStatus.facebook) {
					FacebookWrapper.feed(p_message, p_callback);
			} else if(SnsUtil.loginStatus.twitter) {
					TwitterWrapper.tweet(p_message, p_callback);
			} else {
					p_callback();
			}
	},
	/**
	 *  세션정보 Display 제거
	 */
	_removeSnsUserinfoDisplay : function() {
			SnsUtil.config.session_name.text("");
			SnsUtil.config.session_image.children('img').remove();
	},
	/**
	 *  Facebook 세션정보 Display
	 */
	_displayFacebookUserinfo : function() {
			SnsUtil.config.session_name.text(SnsUtil.userinfo.facebook.name);
			SnsUtil.config.session_image.append('<img src="' + SnsUtil.userinfo.facebook.image + '" class="sns_session_userimage" />');
	},
	/**
	 *  Twitter 세션정보 Display
	 */
	_displayTwitterUserinfo : function() {
			SnsUtil.config.session_name.text(SnsUtil.userinfo.twitter.name);
			SnsUtil.config.session_image.append('<img src="' + SnsUtil.userinfo.twitter.image + '" class="sns_session_userimage" />');
	}
}

var FacebookWrapper = {
	session_button : null,
	/**
	 * 초기화
	 */
	init : function(p_button_container) {
			FacebookWrapper.createSessionButton(p_button_container);
	},
	/**
	 *  로그인/로그아웃 버튼 생성
	 */
	createSessionButton : function(p_button_container) {
			p_button_container.append('<a href="#" class="btn_facebook_session" title="페이스북 로그인/로그아웃" style="overflow:hidden; ">페이스북 로그인/로그아웃</a>');
			FacebookWrapper.session_button = $('.btn_facebook_session').css('float', 'left').click(function(p_event) { p_event.preventDefault(); if(SnsUtil.loginStatus.facebook) { FacebookWrapper.logout(); } else { FacebookWrapper.login(); } });
	},
	/**
	 *  로그인
	 */
	login : function() {
			FacebookUtil.login(FacebookWrapper.getUserinfo);
	},
	/**
	 * 로그아웃
	 */
	logout : function() {
			FacebookUtil.logout(FacebookWrapper.getUserinfo);
	},
	/**
	 * 사용자 정보 조회
	 */
	getUserinfo : function() {
			FacebookUtil.getUserInfo(FacebookWrapper.getUserinfoCallback);
	},
	/**
	 * 사용자 정보 조회 콜백
	 */
	getUserinfoCallback : function(p_userinfo_json) {
			if(!p_userinfo_json.id) {
					FacebookWrapper.session_button.removeClass('on');
					SnsUtil.setFacebookUserinfo();
			} else {
					FacebookWrapper.session_button.addClass('on');
					SnsUtil.setFacebookUserinfo({ 'id' : p_userinfo_json.id, 'name' : p_userinfo_json.name, 'image' : FacebookUtil.getProfileImageURI(p_userinfo_json.id) });
			}
	},
	feed : function(p_message, p_callback) {
			FacebookUtil.postFeed({ 'message' : p_message }, p_callback);
	}
}

var TwitterWrapper = {
	session_button : null,
	/**
	 * 초기화
	 */
	init : function(p_button_container) {
			TwitterWrapper.createSessionButton(p_button_container);
	},
	/**
	 *  로그인/로그아웃 버튼 생성
	 */
	createSessionButton : function(p_button_container) {
			p_button_container.append('<a href="#" class="btn_twitter_session" title="트위터 로그인/로그아웃" style="overflow:hidden; ">트위터 로그인/로그아웃</a>');
			TwitterWrapper.session_button = $('.btn_twitter_session').css('float', 'left').click(function(p_event) { p_event.preventDefault(); if(SnsUtil.loginStatus.twitter) { TwitterWrapper.logout(); } else { TwitterWrapper.login(); } });
	},
	/**
	 *  로그인
	 */
	login : function() {
			TwitterUtil.login(TwitterWrapper.getUserinfo);
	},
	/**
	 * 로그아웃
	 */
	logout : function() {
			TwitterUtil.logout(TwitterWrapper.getUserinfo);
	},
	/**
	 * 사용자 정보 조회
	 */
	getUserinfo : function() {
			TwitterUtil.getUserInfo(TwitterWrapper.getUserinfoCallback);
	},
	/**
	 * 사용자 정보 조회 콜백
	 */
	getUserinfoCallback : function(p_screen_name) {
			if(!p_screen_name) {
					TwitterWrapper.session_button.removeClass('on');
					SnsUtil.setTwitterUserinfo();
			} else {
					TwitterWrapper.session_button.addClass('on');
					SnsUtil.setTwitterUserinfo({ 'id' : p_screen_name, 'name' : p_screen_name, 'image' : TwitterUtil.getProfileImageURI(p_screen_name) });
			}
	},
	tweet : function(p_message, p_callback) {
			TwitterUtil.postTweet(p_message, p_callback);
	}
}