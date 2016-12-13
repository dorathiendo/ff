$('document').ready(function(){

    $('.menuBtn').click(function(){
        $('.menuBtn').toggleClass('is-active');
        if($('nav').css('right') == '0px'){
            $('nav').css('right', '-300px');
        } else {
            $('nav').css('right', '0');
        }
    });
    $('.glyphicon-music').click(function(){
        $('#song-list, #song-list ul').toggleClass('toggled');
    })
    $('.main').css('margin-top', $('header').css('height'));
    var pageName = window.location.pathname.replace('/', '');
    $('nav li a[name="' + pageName + '"]').addClass('active');
    $('.card .overlay').css('width', $('.card').width());
});

$(window).on("load", function(){
    $(".loader").fadeOut("slow");
});