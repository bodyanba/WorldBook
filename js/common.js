$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		responsive: {
			0: {
				items: 1,
			},
			360: {
				items: 2,
			},
			440: {
				items: 3,
			},
			576: {
				items: 4,
			},
			768: {
				items: 3,
			},
			992: {
				items: 5,
			},
			1200: {
				items: 6,
			},
		},
		nav: true,
		navText: ['<h2 class="fa fa-caret-left"></h2>', '<h2 class="fa fa-caret-right"></h2>'],
		dots: false,
	});
});