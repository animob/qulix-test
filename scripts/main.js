$(document).ready(function() {

    if ($('.menu-button').length) {
        $(".menu-button").click(function() {
            $(this).toggleClass("menu-button_active");
        });
    }

});