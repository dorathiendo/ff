
$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('nav').toggleClass('active');
    });

    $('p').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function(e) {
            $('p').hide();
        });
})