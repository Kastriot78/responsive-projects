jQuery(document).ready(function($){
    //open menu
    $('.pn-menu-trigger').on('click', function(event){
        event.preventDefault();
        $('#pn-content').addClass('move-out');
        $('#pn-nav').addClass('is-visible');
        $('.pn-layer').addClass('is-visible');
    });
    //close menu
    $('.pn-close-menu').on('click', function(event){
        event.preventDefault();
        $('#pn-content').removeClass('move-out');
        $('#pn-nav').removeClass('is-visible');
        $('.pn-layer').removeClass('is-visible');
    });

    //clipped image - blur effect
    set_clip_property();
    $(window).on('resize', function(){
        set_clip_property();
    });

    function set_clip_property() {
        var $header_height = $('.pn-header').height(),
            $window_height = $(window).height(),
            $header_top = $window_height - $header_height,
            $window_width = $(window).width();
        $('.pn-blurred-bg').css('clip', 'rect('+$header_top+'px, '+$window_width+'px, '+$window_height+'px, 0px)');
    }
});