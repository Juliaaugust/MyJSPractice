$(function () {
	var slider = $("#slider");
	var slides = slider.find(".slide");
	var image = slides.find("img");
	var nextBtn = $("#slider_next");
	var prevBtn = $("#slider_prev");

	// var n = 1;
	// var duringPicture = $("#pic-"+n);


	
	//for (var n = 1; n < image.length+1; n++) {
	// setInterval(function(){
	// 	$("#pic-"+n).fadeOut();
	// }, 100);
	//}

	var n = 1;

	var changeSlide = function(dir) {
		
		var duringPicture = $("#pic-"+n);
		if(dir == "next") {
			duringPicture.fadeOut();
			n++;
			$("#pic-"+n).fadeIn();
		}
		if(dir == "prev") {
			duringPicture.fadeIn();
			n++;
		}
	}

	nextBtn.click(function () {
		changeSlide("next");
	});

	prevBtn.click(function () {
		changeSlide("prev");
	});

	// var startAutoScroll = function () {
	// 	timer = setInterval(function () {
	// 		changeSlide(autoScrollDir);
	// 	}, 2000);
	// };

	// startAutoScroll();

});
