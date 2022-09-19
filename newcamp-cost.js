$(document).ready(function () {

    function screenWidthTracking() {
        var screenSize = $(window).width();
        if (screenSize < 700) {
            $('.user').appendTo('.navigation');
            $('.navigation').css('align-items', 'center');
            $('.navigation').css('padding', '8px 16px');
            $('.brand-logo').css('order', '2');
            $('.collapse-btn').css('order', '1');
            $('.user').css('order', '3');

        }
        else {
            $('.user').appendTo('.message-notification');
            $('.navigation').css('align-items', 'unset');
            $('.navigation').css('padding', '0 24px');
            $('.brand-logo').css('order', 'unset');
            $('.collapse-btn').css('order', 'unset');
            $('.user').css('order', 'unset');


        }
    }

    screenWidthTracking();
    $(window).resize(screenWidthTracking);
    var collapse = true;

    $('.collapse-btn').click(function () {
        if (collapse === true) {
            $('.collapse-menu').addClass("show-collapse-menu");
        }
        else {
            $('.collapse-menu').removeClass("show-collapse-menu");
        }
        collapse = !collapse;
    });

    $(".js-range-slider").ionRangeSlider({
        onStart: function (data) {
            // Called right after range slider instance initialised
        },

        onChange: function (data) {
            // Called every time handle position is changed
            $('#min-age').text(data.from);
            $('#max-age').text(data.to);
            // console.log(data.to);
        },

        onFinish: function (data) {
            // Called then action is done and mouse is released

            // console.log(data.to);
        },

        onUpdate: function (data) {
            // Called then slider is changed using Update public method

            // console.log(data.from_percent);
        }
    });

    // slider age end 

});