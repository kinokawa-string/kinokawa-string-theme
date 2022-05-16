// Preloader js
$(window).on('load', function() {
	$('.preloader').fadeOut(100);
});

(function($) {
	'use strict';

	// background color
	$('[data-color]').each(function() {
		$(this).css({
			'background-color': $(this).data('color')
		});
	});

	// progress bar
	$('[data-progress]').each(function() {
		$(this).css({
			'bottom': $(this).data('progress')
		});
	});

})(jQuery);

window.onscroll = function() {
	let nav = document.getElementById('navbar');
	if (document.documentElement.scrollTop > 100) {
		nav.classList.add('nav-bg');
	} else {
		nav.classList.remove('nav-bg');
	}
}
