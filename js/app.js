 const tabs = ["#poligraf", "#design", "#outdoor", "#plastic", "#digital", "#marketing"];


$(function () {
    MainInit();
    OpenTab();
}
);

function MainInit() {
    InitGalary();
    function InitGalary() {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        })
    };
}

function OpenTab() {
    var loc = window.location.hash;
    if (loc == "")
        return;
        
    var index = tabs.indexOf(loc);
    document.querySelectorAll('input[data-flex-tab]')[index].checked = true;
}