
$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('nav').toggleClass('active');
    });
})