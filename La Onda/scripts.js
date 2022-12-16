$(function(){ 

	/* SVG Fallback */
	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}

	$(window).on('scroll',function(){
		if (Modernizr.mq('only screen and (min-width: 640px)')) {
			var scroll = $(window).scrollTop(),
				opacity = 1 - scroll/500;
				

				
		}
	});

	$('.introduction').on('click',function(){
		$('html, body').animate({scrollTop : $('.contact').offset().top},1000);
	});

	

});


$(function(){ 

	/* SVG Fallback */
	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}

	$(window).on('scroll',function(){
		if (Modernizr.mq('only screen and (min-width: 640px)')) {
			var scroll = $(window).scrollTop(),
				opacity = 1 - scroll/500;
				scale = 1 - scroll/2000;

			if (opacity > 0) $('.introductiondirectors').css({
				'opacity':opacity,
				'transform':'scale('+scale+')'
			});			
		}
	});

	$('.introductiondirectors').on('click',function(){
		$('html, body').animate({scrollTop : $('.contact').offset().top},1000);
	});

	

});

$(document).ready(function() {

	// Initialize Masonry
	$('#content').masonry({
		columnWidth: 320,
		itemSelector: '.item',
		isFitWidth: true,
		isAnimated: !Modernizr.csstransitions
	}).imagesLoaded(function() {
		$(this).masonry('reload');
	});

});
