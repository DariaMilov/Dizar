//import {lightbox} from '/node_modules/lightbox2/dist/js/lightbox.js';
/*$(window).bind("load", function() {
    MainInit();
 });*/

$(function () {
    MainInit();
}
);

function MainInit() {
    debugger;
    InitGalary();
    function InitGalary() {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        })
    };
}