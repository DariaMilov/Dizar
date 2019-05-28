
$('.frame').mousemove(function (e) {

    var xPos = $(this).offset().left;
    var yPos = $(this).offset().top;

    console.log('xPos: ' + xPos);
    console.log('yPos: ' + yPos);

    var left = e.pageX - xPos;
    var xOffset = left - $(this).width() / 2;
    var top = e.pageY - yPos;
    var yOffset = top - $(this).height() / 2;
    var xPerc = (xOffset / $(this).width()) * 200;
    var yPerc = (yOffset / $(this).height()) * 200;

    console.log(`xPos: ${xPos}, yPos: ${yPos}, left: ${left}, top: ${top}, xOffset: ${xOffset}, yOffset: ${yOffset}`);

    TweenMax.to($(this), 4, {
        rotationX: 0.3 * yPerc,
        rotationY: -0.3 * xPerc,
        transformOrigin: "center center -30",
        ease: Expo.easeOut
    });

});

$('.frame').on('mouseleave', function () {
    TweenMax.to($(this), 4, {
        rotationX: 0,
        rotationY: 0,
        transformOrigin: "center center -20",
        ease: Expo.easeOut
    });
});

console.clear();

/*  ==========================================================================
    Greensock Dev Tools
    ========================================================================== */

//instantiate GSDevTools with default settings
// GSDevTools.create( );