$(document).ready(function(){
    // lnb_menu
    $('.lnb_menu-list .btn_depth').click(function(){
        if ($(this).parent('.list_item').hasClass('is-active')) {
            slideUp();
            $('.list_item').removeClass('is-active')
        } else {
            slideUp();
            $(this).parent('.list_item').addClass('is-active').find('.depth_list').slideDown();
        }
        function slideUp() {
            $('.list_item').removeClass('is-active').find('.depth_list').slideUp();
        };
    })

    //datepicker
    $("input.datepicker").datepicker({
        inline: true,
        showOn: "button",
        dateFormat: "yy.mm.DD",
        buttonText: "Select date",
        changeYear: true,
        changeMonth: true,
        showOtherMonths: true,
        monthNamesShort: [ "1","2","3","4","5","6","7","8","9","10","11","12" ],
        dayNames: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        dayNamesShort: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],

        beforeShow: function(input, inst)
        {
            var calendar = inst.dpDiv;
            setTimeout(function() {
                calendar.position({
                    my: 'right top',
                    at: 'right bottom',
                    collision: 'none',
                    of: input
                });
            }, 1);
        },
        onSelect: function() {
            $('.ui-widget-overlay.ui-front').remove();
        },
        onClose: function() {
            $('.ui-widget-overlay.ui-front').remove();
        }
    });

});