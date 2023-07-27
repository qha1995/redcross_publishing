$('input.search_input').keyup(function(e){
	if ($(this).val()) {
		$('.header .search').addClass('auto-complete');
	} else {
		$('.header .search').removeClass('auto-complete');
	}
})

$('.header .search .auto-complete ul>li').click(function(){
	$('input.search_input').val($(this).text());
	$('.header .search').removeClass('auto-complete').removeClass('focus');
})

$('.side-menu .menu .menu-item>div').click(function(){
	if ($(this).parent().hasClass('open')) {
		$(this).parent().removeClass('open')
	} else {
		$('.side-menu .menu .menu-item').not($(this).parent()).removeClass('open')
		$(this).parent().addClass('open')
	}
})

$('.content').css('min-height',$(window).height() - 55)

$(document).ready(function(){ 
	let currentPageTitle = $(".tab-menu .current_page a").text();
	top.document.title = currentPageTitle;
});