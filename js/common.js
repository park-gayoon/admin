$(document).ready(function(){
    /* //파일찾기
    $('.input_file').change(function(){
        var i = $(this).val();
        $('.upload_text').val(i);
    });*/

    /* lnb_menu 클릭 시 */
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

    // toggle 공통
    $('.btn_toggle').click(function() {
        $(this).toggleClass('is-active');
    });

});