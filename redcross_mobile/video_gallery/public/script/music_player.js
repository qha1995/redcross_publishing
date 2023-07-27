/**
 * music player 정의
 */

var MusicPlayer = {
	/**
	 * 음원재생 플레이어를 그리기 처리
	 * @param $place_holder : 음원플레이어가 표시될 영역의 jquery 객체
	 */
	init : function($place_holder, p_player_id, p_file_path) {
			try {
					// --------------------------------------------------------------------------------------
					// check validation
					if($place_holder.size() == 0) {
							alert("[music_player.js's MusicPlayer.init] player가 보여질 영역이 지정되지 않았습니다.");
							return;
					}
					if(p_player_id == undefined || p_player_id == '') {
							alert("[music_player.js's MusicPlayer.init] p_player_id 가 설정되지 않았습니다.");
							return;
					}
					if(p_file_path == undefined || p_file_path == '') {
							alert("[music_player.js's MusicPlayer.init] p_file_path 가 설정되지 않았습니다.");
							return;
					}
					// --------------------------------------------------------------------------------------

					l_player_html  = '<object id="'+ p_player_id +'" width="290" height="70" classid="CLSID:22D6f312-B0F6-11D0-94AB-0080C74C7E95" standby="Loading Microsoft?Windows?Media Player components..." type="application/x-oleobject">'
					l_player_html +=        '<param name="transparentAtStart" value="True"/>'
					l_player_html +=        '<param name="transparentAtStop" value="True"/>'
					l_player_html +=        '<param name="AnimationAtStart" value="False"/>'
					l_player_html +=        '<param name="AutoStart" value="False"/>'
					l_player_html +=        '<param name="AutoRewind" value="true"/>'
					l_player_html +=        '<param name="SendMouseClickEvents" value="True"/>'
					l_player_html +=        '<param name="DisplaySize" value="0"/>'
					l_player_html +=        '<param name="AutoSize" value="False"/>'
					l_player_html +=        '<param name="ShowDisplay" value="False"/>'
					l_player_html +=        '<param name="ShowStatusBar" value="True"/>'
					l_player_html +=        '<param name="ShowControls" value="True"/>'
					l_player_html +=        '<param name="ShowTracker" value="True"/>'
					l_player_html +=        '<param name="Filename" value="'+ p_file_path +'"/>'
					l_player_html +=        '<param name="Enabled" value="1"/>'
					l_player_html +=        '<param name="EnableContextMenu" value="0"/>'
					l_player_html +=        '<param name="EnablePositionControls" value="1"/>'
					l_player_html +=        '<param name="EnableFullScreenControls" value="1"/>'
					l_player_html +=        '<param name="ShowPositionControls" value="1"/>'
					l_player_html +=        '<param name="Mute" value="0"/>'
					l_player_html +=        '<param name="Rate" value="1"/>'
					l_player_html +=        '<param name="SAMILang" value=""/>'
					l_player_html +=        '<param name="SAMIStyle" value=""/>'
					l_player_html +=        '<param name="SAMIFileName" value=""/>'
					l_player_html += '</object>'

					$place_holder.html(l_player_html);
			} catch(e) {
					alert("[music_player.js's MusicPlayer.init] " + e.description);
			}
	}
}