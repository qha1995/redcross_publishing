/**
 * InnoMX 동영상 플레이어 처리 클래스 정의
 */

var InnoPlayer = {
	/**
	 * 동영상 플레이어를 그리기 처리
	 * @param $place_holder : 동영상 플레이어가 표시될 영역의 jquery 객체
	 */
	init : function($place_holder, mx_player_id, mx_file_id, mx_thumb_sel, mx_mktime, mx_width, mx_height) {
			try {
					// --------------------------------------------------------------------------------------
					// check validation
					if($place_holder.size() == 0) {
							alert("[inno_player.js's InnoPlayer.init] 동영상이 보여질 영역이 지정되지 않았습니다.");
							return;
					}
					if(mx_player_id == undefined || mx_player_id == '') {
							alert("[inno_player.js's InnoPlayer.init] mx_player_id 가 설정되지 않았습니다.");
							return;
					}
					if(mx_file_id == undefined || mx_file_id == '') {
							alert("[inno_player.js's InnoPlayer.init] mx_file_id 가 설정되지 않았습니다.");
							return;
					}
					if(mx_thumb_sel == undefined || mx_thumb_sel == '') {
							alert("[inno_player.js's InnoPlayer.init] mx_thumb_sel 가 설정되지 않았습니다.");
							return;
					}
					if(mx_mktime == undefined || mx_mktime == '') {
							alert("[inno_player.js's InnoPlayer.init] mx_mktime 가 설정되지 않았습니다.");
							return;
					}

					// --------------------------------------------------------------------------------------
					// set init values
					InnoPlayer.mx_player_id = mx_player_id;
					InnoPlayer.mx_file_id   = mx_file_id;
					InnoPlayer.mx_thumb_sel = mx_thumb_sel;
					InnoPlayer.mx_mktime    = mx_mktime;
					InnoPlayer.mx_swf       = "../board/swf/player.swf";
					InnoPlayer.mx_skin      = "../board/swf/mxskin.swf";
					InnoPlayer.mx_format    = "mp4";
					InnoPlayer.mx_reg_date  = InnoPlayer.mx_mktime;
					InnoPlayer.mx_file      = "http://vod.redcross.or.kr:80/"+InnoPlayer.mx_mktime+"/"+InnoPlayer.mx_file_id+"/"+InnoPlayer.mx_file_id+"_M0."+InnoPlayer.mx_format;
					InnoPlayer.mx_image     = "http://vod.redcross.or.kr:80/"+InnoPlayer.mx_mktime+"/"+InnoPlayer.mx_file_id+"/"+InnoPlayer.mx_file_id+"_B"+InnoPlayer.mx_thumb_sel+".jpg";

					// set init values - 플레이어 가로 사이즈
					if(mx_width == undefined || mx_width == '') {
							InnoPlayer.mx_width = '320';
					} else {
							InnoPlayer.mx_width = mx_width;
					}

					// set init values - 플레이어 세로 사이즈
					if(mx_height == undefined || mx_height == '') {
							InnoPlayer.mx_height = '215';
					} else {
							InnoPlayer.mx_height = mx_height;
					}

					// 동영상 플레이어를 그린다.
					var l_player_html = '';
					if(InnoPlayer.mx_format == "wmv") {
							l_player_html  = '<object classid="clsid:22d6f312-b0f6-11d0-94ab-0080c74c7e95"';
							l_player_html +=     'codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701"';
							l_player_html +=     'width="'+InnoPlayer.mx_width+'" height="'+InnoPlayer.mx_height+'" ID="'+InnoPlayer.mx_player_id+'"';
							l_player_html +=     'STANDBY="Loading Windows Media Player components..." TYPE="application/x-oleobject">';
							l_player_html +=     '<param name="AutoStart" value="true" />';
							l_player_html +=     '<param name="AutoSize" value="true" />';
							l_player_html +=     '<param name="FileName" value="'+InnoPlayer.mx_file+'" />';
							l_player_html += '</object>';
					} else {
							l_player_html  = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"';
							l_player_html +=     'codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"';
							l_player_html +=     'width="'+InnoPlayer.mx_width+'" height="'+InnoPlayer.mx_height+'" ID="'+InnoPlayer.mx_player_id+'">';
							l_player_html +=     '<param name="allowfullscreen" value="true" />';
							l_player_html +=     '<param name="menu" value="false" />';
							l_player_html +=     '<param name="allowscriptaccess" value="always" />';
							l_player_html +=     '<param name="wmode" value="opaque" />';
							l_player_html +=     '<param name="movie" value="'+InnoPlayer.mx_swf+'" />';
							l_player_html +=     '<param name="flashvars" value="file='+encodeURIComponent(InnoPlayer.mx_file)
																																 +'&image='+encodeURIComponent(InnoPlayer.mx_image)
																																 +'&stretching=uniform'
																																 +'&skin='+InnoPlayer.mx_skin
																																 +'&abouttext=About'
																																 +'&aboutlink=http://www.innorix.com/MX/" />';
							l_player_html +=     '<embed src="'+InnoPlayer.mx_swf+'"'
																				+' width="'+InnoPlayer.mx_width+'"'
																				+' height="'+InnoPlayer.mx_height+'"'
																				+' wmode="opaque"'
																				+' flashvars="file='+encodeURIComponent(InnoPlayer.mx_file)+'&image='+encodeURIComponent(InnoPlayer.mx_image)+'&stretching=uniform&skin='+InnoPlayer.mx_skin+'&abouttext=About&aboutlink=http://www.innorix.com/MX/"'
																				+' name="'+InnoPlayer.mx_player_id+'"'
																				+' type="application/x-shockwave-flash"'
																				+' pluginspage="http://www.adobe.com/go/getflashplayer" />';
							l_player_html += '</object>';
					}

					$place_holder.html(l_player_html);
			} catch(e) {
					alert("[inno_player.js's InnoPlayer.init] " + e.description);
			}
	},
	getFilePath : function(mx_file_id, mx_mktime) {
			var returnvalue = '';
			try {
					returnvalue = "http://vod.redcross.or.kr:8080/"+mx_mktime+"/"+mx_file_id+"/"+mx_file_id+"_M0."+InnoPlayer.mx_format;
			} catch(e) {
					alert("[inno_player.js's InnoPlayer.getFilePath] " + e.description);
			}
			return returnvalue;
	}
}