// Preloader js
$(window).on('load', function() {
	$('.preloader').fadeOut(100);
});

window.onscroll = function() {
	let nav = document.getElementById('navbar');
	if (document.documentElement.scrollTop > 100) {
		nav.classList.add('nav-bg');
	} else {
		nav.classList.remove('nav-bg');
	}
}
