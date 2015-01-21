/* 
Author: Struan Fraser
*/
$(document).ready(function () {
    $('.ajax-popup-link').magnificPopup({
        type: 'ajax',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $('.fader').click(function (disappear) {
        $('#intro').fadeOut(400, portFade());
    });

    function portFade(){
        $('.content').fadeIn();
        //#topbar
    };
});