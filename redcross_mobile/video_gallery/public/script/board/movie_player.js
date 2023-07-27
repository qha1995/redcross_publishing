$(function() {
	//동영상 데이터가 없는 경우, 스크립트 return false 처리
	if($('.movie_fileid').length > 0) {
			FeeMovie.moviePlayer();
			return false;
	}
	// 동영상의 데이터가 유투브인경우 
	
	if($('.youtobe_player').length > 0) {
			FeeMovie.youtobePlayer();
			return false;
	}
	//동영상
	FeeMovie.init();
});

var FeeMovie = {
	/**
	 * 동영상 정보/사이즈 입력
	 */
	init : function() {
			try {
					
					
			} catch(e) {
					alert("[movie_player.js's FeeMovie.init] " + e.description);
			}
	},
	moviePlayer : function() {
			try {
					//해당 동영상 캐싱정보 불러옴
					var mx_file_id = $('.movie_fileid').text();
					var mx_thumb_sel = $('.movie_thumbnumber').text();
					var mx_mktime = $('.movie_maketime').text();

					//선택된 동영상 정보로 InnoPlayer 실행
					InnoPlayer.init($('.movie_player'), 'inno_mx_player', mx_file_id, mx_thumb_sel, mx_mktime, 480, 320);
			} catch(e) {
					alert("[movie_player.js's moviePlayer.init] " + e.description);
			}
	},
	youtobePlayer : function() {
			try {
					var l_html = $('.youtobe_source').html();
					$('.youtobe_player').html(l_html);
					var title = $('td.subject').text();
					$('.youtobe_player').find('iframe').attr('title', title);
			} catch(e) {
					alert("[movie_player.js's youtobePlayer.init] " + e.description); 
			}
	}
}