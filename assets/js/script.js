window.onload = function() {
	document.getElementById('preloader').style.opacity = "0";
	document.getElementById('preloader').style.visibility = "hidden";
}

window.onscroll = function() {
	let nav = document.getElementById('navbar');
	if (document.documentElement.scrollTop > 100) {
		nav.classList.add('nav-bg');
	} else {
		nav.classList.remove('nav-bg');
	}
}
