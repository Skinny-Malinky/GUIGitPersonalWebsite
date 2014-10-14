/* 
Author: Struan Fraser
*/
$(document).ready(function () {
    $('.ajax-popup-link').magnificPopup({
        type: 'ajax',
        
        fixedContentPos: false,
        fixedBgPos: true,
        
        overflowY: 'auto',
        
        closeBtnInside:true,
        preloader:false,
        
        midClick:true,
        removalDelay: 300,
        mainClass:'mfp-fade'
    });
});