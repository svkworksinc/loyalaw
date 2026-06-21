jQuery(document).ready(function($) {
    "use strict";
    // Lightbox Group fix
    $('.lightbox-group').each(function() {
        $(this).find('a').attr('data-elementor-lightbox-slideshow', 'gallery-group');
    });

    // Sticky header --- toggle fixed class
    $(window).on("load scroll", function () {
        const header = document.querySelector('[data-elementor-type="header"]');
        if (window.scrollY > 0) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });

    
	// Scroll Top Button - Show/Hide
    let $scroller = $("#scroller");
	$(window).on("load scroll", function() {
		if ($(window).scrollTop() >= 400) {
			$scroller.addClass("show");
		} else {
			$scroller.removeClass("show");
		}
	});

	// On click animate to top
	$scroller.on("click", function(e) {
		$("html, body").animate(
			{
				scrollTop: 0
			},
			700
		);
		e.preventDefault();
	});
});