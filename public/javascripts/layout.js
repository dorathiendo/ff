$('document').ready(function(){
    $('.menuBtn').click(function(){
        if($('nav').css('right') == '0px'){
            $('nav').css('right', '-300px');
        } else {
            $('nav').css('right', '0');
        }
    });
    $('.main').css('margin-top', $('header').css('height'));
    var pageName = window.location.pathname.replace('/', '');
    if(pageName == ''){
        pageName = 'news';
    }
    $('.pageTitle').html(pageName).css({
        'top': 0,
        'opacity': 1
    });
});