
$(function () {

	$.smoothscroll();

	/*var top = 0,
		step = 55,
		speed = 400,
		viewport = $(window).height(),
		body = $.browser.webkit ? $('body') : $('html'),
		wheel = false;


	$('body').mousewheel(function(event, delta) {

		wheel = true;

		if (delta < 0) {

			top = (top+viewport) >= $(document).height() ? top : top+=step;

			body.stop().animate({scrollTop: top}, speed, function () {
				wheel = false;
			});
		} else {

			top = top <= 0 ? 0 : top-=step;

			body.stop().animate({scrollTop: top}, speed, function () {
				wheel = false;
			});
		}

		return false;
	});

	$(window).on('resize', function (e) {
		viewport = $(this).height();
	});

	$(window).on('scroll', function (e) {
		if (!wheel)
			top = $(this).scrollTop();
	});*/

});
