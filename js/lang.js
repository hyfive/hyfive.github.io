	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.change-lang').outerHeight();
	removeLanguage = false

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight && removeLanguage == false){
	        // Scroll Down
	        $('.change-lang').removeClass('lang-show').addClass('lang-hide');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height() && removeLanguage == false) {
	            $('.change-lang').removeClass('lang-hide').addClass('lang-show')
	        }
	    }
	    
	    lastScrollTop = st;
	}



function removeLang(){
		$('.change-lang').addClass('remove-lang');
		removeLanguage = true;
	}

// Switch Language
langIsEn = false;
function switchLang(){
	if (langIsEn == false){
		langISEn = true;
		$('.en').toggleClass('hidden');
		$('.cn').toggleClass('hidden');		
	} else {
		langIsEn = false;
		$('.en').toggleClass('hidden');
		$('.cn').toggleClass('hidden');
	}
}


