(function () {
	function scrolltoAnchor() {
		document.getElementById(location.hash.replace('#', '')).scrollIntoView({
			behavior: 'smooth'
		});
	}
	
	//smooth scroll to section
	function scrollToAnchorInit() {
		//scroll to anchor on load:
		if (location.hash.length)
			scrolltoAnchor();
		//scroll to anchor when hash changes
		window.addEventListener('hashchange', function (e) {
			scrolltoAnchor();
		});
	}

	//init
	//showMenuInit();
	scrollToAnchorInit();
}());