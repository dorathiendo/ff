var layout = {
    init: function(){
        this.events();

        this.setMargins();
        this.setFirstLayoutVisible();
        this.typewriterEffect();
        this.scrollEffect();
    },
    events: function(){
        $('.nav a').click(function(ev){
            ev.preventDefault();
            var that = $(this);
            that.addClass('blink_me');
            that.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function(){
                    location.replace(ev.currentTarget.href);
                });
        });
        $('.list-view-btn').click(function(e){
            $('.layout').removeClass('visible');
            $(this).fadeOut();
            $('#tour-list-view').addClass('show');
        });
    },
    setMargins: function(){
        var layouts = $('.layout');
        var margins = ['-20px 0 0 5%', '50px 0 0 50%', '-30px 0 0 15%'];
        var i = 0;
        layouts.each(function(){
            $(this).css('margin', margins[i]);
            if(i == 2){
                i = 0;
            } else {
                i++;
            }
        });
    },
    setFirstLayoutVisible: function(){
        $($('.layout')[0]).addClass('visible');
    },
    slideInMain: function(){
        $('.main').addClass('move');
    },
    typewriterEffect: function(){
        $('.typewriter').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
            function(){
                $('.typewriter').delay(1000).fadeOut(function(){
                    $('.nav').show();
                });
            });
    },
    scrollEffect: function(){
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
    },
};

$('document').ready(function(){
    layout.init();
});

$('window').ready(function(){
    layout.slideInMain();
});