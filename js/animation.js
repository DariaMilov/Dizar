$('.frame').mousemove(function(e) {
	
	var xPos = $(this).position().left;
	var yPos = $(this).position().top;
	
	var mouseX = e.pageX;
	var mouseY = e.pageY;
	
	var left = e.pageX - xPos;
	var xOffset = left - $(this).width()/2;
	var top = e.pageY - yPos;
	var yOffset = top - $(this).height()/2;
	var xPerc = (xOffset/$(this).width()) * 200;
	var yPerc = (yOffset/$(this).height()) * 200;
		
	TweenMax.to($(this), 2, {
		rotationX: 0.3 * yPerc,
		rotationY: -0.3 * xPerc,
		transformOrigin: "center center -30",
		ease: Expo.easeOut
	});
	
	TweenMax.to($(this).find('.frame-grad'), 2, {
		opacity: top/$(this).height(),
		ease: Expo.easeOut
	});
	
	TweenMax.to($(this).find('.frame-shad'), 2, {
		opacity: 0.15 - top/$(this).height()/2,
		ease: Expo.easeOut
	});
	
});

$('.frame').on('mouseleave', function(){
	TweenMax.to($(this), 2, {
		rotationX: 0,
		rotationY: 0,
		transformOrigin: "center center -20",
		ease: Expo.easeOut
	});
	TweenMax.to($(this).find('.frame-grad'), 2, {
		opacity: 0.5,
		ease: Expo.easeOut
	});
	TweenMax.to($(this).find('.frame-shad'), 2, {
		opacity: 0,
		ease: Expo.easeOut
	});
});

console.clear();