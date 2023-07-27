var TwitterUtil = {
	temp_login_callback : function() {}
	/*
	 *  트위터 로그인
	 *  로그인이 이미 되어있을 경우에도 callback function을 실행합니다.
	 */
	, login : function(p_callback) {
			if($.isFunction(p_callback)){
					TwitterUtil.temp_login_callback = p_callback;
			}
			TwitterUtil.getUserInfo(
					function(p_id) {
							if(p_id == null || p_id == undefined) {
									var l_win_popup = window.open('../common/twitter/twitter.do?action=GetToken', 'TwitterLogin', 'menubar=no,toolbar=no,location=no,status=no,scrollbars=no,width=730px,height=700px,resizable=no');
									if(!l_win_popup) {
											alert("팝업이 차단되어서 정상적으로 사용하실수 없습니다. \n\n"+document.domain+"주소를 팝업차단에서 허용해 주시기 바랍니다.\n\n====================== 참 고 ==================\n\n1.Explore 도구 - 팝업 차단 설정 에서 팝업차단 사항을 확인하시기 바랍니다.\n\n2. 인터넷에서 툴바를 설치하신 경우에 툴바에서 팝업차단 설정 사항을 확인하시기 바랍니다.");
									} else {
											l_win_popup.focus();
									}
							} else {
									if($.isFunction(p_callback)){
											TwitterUtil.temp_login_callback();
									} 
							}
					}
			);
	}
	/*
	 *  트위터 로그아웃
	 *  로그아웃이 이미 되어있을 경우에는 callback function을 실행하지 않습니다.
	 *  p_callback : function(response)
	 */
	, logout : function(p_callback) {
			$.ajax({
					 url        : '../common/twitter/twitter.do?action=Logout'
					,type       : 'post'
					,dataType   : 'text'
					,data       : {}
					, success : function(l_resultvalue) {
							var l_resultvalue = eval('(' + l_resultvalue + ')');
							if(l_resultvalue.SUCCESS_YN == 'Y') {
									if($.isFunction(p_callback)) {
											p_callback(true);
									}
							} else {
									if($.isFunction(p_callback)) {
											p_callback(false);
									}
							}
					}, error : function(p_xmlhttprequest, p_textstatus, p_errorthrown) {
							if($.isFunction(p_callback)) {
									p_callback(false);
							}
					}
			});
	}
	/**
	 * 트위터 아이디 조회
	 * p_callback : function(string id)
	 */
	, getUserInfo : function(p_callback) {
			$.ajax({
					 url        : '../common/twitter/twitter.do?action=GetID'
					,type       : 'post'
					,dataType   : 'text'
					,data       : {}
					, success : function(l_resultvalue) {
							var l_result_value = eval('(' + l_resultvalue + ')');
							if($.isFunction(p_callback)) {
									p_callback(l_result_value.ID);
							}
					}, error : function(p_xmlhttprequest, p_textstatus, p_errorthrown) {
							alert(p_textstatus);
					}
			});
	}
	/**
	 * 트위터 프로필 이미지 추출
	 * p_screenName : string
	 */
	, getProfileImageURI : function(p_screenName) {
			try {
					return 'http://api.twitter.com/1/users/profile_image?screen_name=' + p_screenName + '&size=bigger'
			} catch(e) {
					alert("[twitter_util.js's TwitterUtil.getProfileImageURI] " + e.description);
			}
	}
	/**
	 * 특정 사용자 트윗 조회
	 * screenName : string
	 * count : int
	 * callBackMethod : function
	 */
	, loadTweets : function(p_limit, p_screenName, p_callBack) {
			try {
					jQuery.getJSON(
							'https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&callback=?', 
					{ screen_name: p_screenName, count : p_limit },
					function(data){
							p_callBack(data);
							}
					);
			} catch(e) {
					alert("[twitter_util.js's TwitterUtil.getTweets] " + e.description);
			}
	}
	/**
	 * tweet을 Post한다.
	 * 필요 파라메터
	 * p_param : {
	 *  name        : 작성자명
	 *  link        : 링크
	 *  picture     : 사진URL(절대경로)
	 *  caption     : 사진 캡션
	 *  description :
	 * },
	 * p_callback(response)
	 *
	 */
	, postTweet : function(p_msg, p_callback) {
			$.ajax({
					 url        : '../common/twitter/twitter.do?action=WriteTweet'
					,type       : 'post'
					,dataType   : 'text'
					,data       : {'tweet_text' : encodeURIComponent(p_msg.length > 140? p_msg.substr(0, 140) : p_msg) }
					, success : function(l_resultvalue) {
							var l_result_value = eval('(' + l_resultvalue + ')');
							if(l_result_value.SUCCESS_YN == 'Y') {
									if($.isFunction(p_callback)) {
											p_callback(true);
									}
							} else {
									if($.isFunction(p_callback)) {
											p_callback(false);
									}
							}
					}, error : function(p_xmlhttprequest, p_textstatus, p_errorthrown) {
							if($.isFunction(p_callback)) {
									p_callback(false);
							}
					}
			});
	}
	, openScrapDialog : function(p_title, p_description) {
			p_title       = p_title.replace(/(\s+$)/g, "").replace(/(^\s*)/g, "").replace("\n", "").replace("\r", "");         // 캐리지리턴 제거
			p_description = p_description.replace(/(\s+$)/g, "").replace(/(^\s*)/g, "").replace("\n", "").replace("\r", "");   // 캐리지리턴 제거
			
			var l_message = p_title + " | " + p_description;
			l_message = l_message.length > 90? l_message.substr(0, 90) + "..." : l_message;
			var l_win_popup = window.open('https://twitter.com/share?text=' + encodeURIComponent(l_message) + '&url=' + encodeURIComponent(window.location), 'twitter_dialog', 'menubar=no,toolbar=no,location=no,status=no,scrollbars=no,width=530px,height=350px,resizable=no');
			
			if(!l_win_popup) {
					alert("팝업이 차단되어서 정상적으로 사용하실수 없습니다. \n\n"+document.domain+"주소를 팝업차단에서 허용해 주시기 바랍니다.\n\n====================== 참 고 ==================\n\n1.Explore 도구 - 팝업 차단 설정 에서 팝업차단 사항을 확인하시기 바랍니다.\n\n2. 인터넷에서 툴바를 설치하신 경우에 툴바에서 팝업차단 설정 사항을 확인하시기 바랍니다.");
			}
			
	}
	, _chkTweetLinks : function(text_contents){
		var regLink = new RegExp('(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()]+)','gi');
		var returnVal = text_contents.replace(regLink,'<a href="$1://$2" target="_blank">$1://$2</a>')
			.replace(/(^|\s)@(\w+)/g, '$1@<a href="http://www.twitter.com/$2" target="_blank">$2</a>')
			.replace(/(^|\s)#(\w+)/g, '$1#<a href="http://search.twitter.com/search?q=%23$2" target="_blank">$2</a>');
		return returnVal;
	}
}