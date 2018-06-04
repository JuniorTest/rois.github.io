
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}

$(document).ready(function() {

	/*
		Navigation
		*/
		$('a.scroll-link').on('click', function(e) {
			e.preventDefault();
			scroll_to($(this), $('nav').height());
		});
	/*
		toggle class
		*/
		$('.top-content .text').waypoint(function() {
			$('nav').toggleClass('navbar-no-bg');
		});

	/*	
		background content
		*/
		$('.top-content').backstretch("assets/img/backgrounds/1.jpg");
		$('.call-to-action-1').backstretch("assets/img/backgrounds/1.jpg");
		$('.testimonials-container').backstretch("assets/img/backgrounds/2.jpg");
		$('.call-to-action-2').backstretch("assets/img/backgrounds/2.jpg");


		// $('#top-navbar-1').on('shown.bs.collapse', function(){
		// 	$('.top-content').backstretch("resize");
		// });
		// $('#top-navbar-1').on('hidden.bs.collapse', function(){
		// 	$('.top-content').backstretch("resize");
		// });
		
		// $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
		// 	$('.testimonials-container').backstretch("resize");
		// });
		
		// $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
		// 	$('.testimonials-container').backstretch("resize");
		// });

	// using wow
	new WOW().init();
});