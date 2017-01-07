$('document').ready(function(){
    $('.typewriter').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
        function(){
            $('.typewriter').delay(1000).fadeOut(function(){
                $('.nav').show();
            });
        });
    $('.nav a').click(function(ev){
        ev.preventDefault();
        var that = $(this);
        that.addClass('blink_me');
        that.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
            function(){
                location.replace(ev.currentTarget.href);
            });
    });
    $('.main .content-wrapper').addClass('show');
    var layoutEl = $('.layout:not(.visible)');
    var i = 0;
    $('.main .content-wrapper').scroll(function(event) {
        var curEl = layoutEl[i];
        var curElTop = Math.floor($(curEl).position().top);
        var scrollTop = $(this).scrollTop();
        if(scrollTop >= curElTop-500 && scrollTop <= curElTop+100){
            $(curEl).addClass('visible');
            i++;
        }
    });
});
