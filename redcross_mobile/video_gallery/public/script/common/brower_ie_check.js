/**
 * 익스 브라우저 체크
 */
$(function() {
	var trident = navigator.userAgent.match(/Trident\/(\d.\d)/i);
	var agent = navigator.userAgent.toLowerCase();
	if(agent.indexOf('msie 8') > -1 || ( trident != null &&	trident[1] == "4.0")){
		var video = $('.video_player');
		var area = '<div style="text-align:center; padding:11.8em 0;">IE8이하버전은 동영상이 지원되지 않습니다.<br />IE9,IE10,IE11,Chrome,FireFox는 동영상 지원이 가능합니다.</div>';
		video.html('');
		video.html(area);
	}
});