$('.hamburger').on('click', function() {
    $('header nav').removeClass('desktop-only');
    $('#main-menu ul').slideToggle();
});

var w = $(window).width();
$(window).resize(function(){
    if(w > 767) {
        $('.hamburger').hide();
        $('#main-menu ul').show();
    }

    else if (w<767) {
        $('#main-menu ul li').hide();
        $('.hamburger').show();
    }
});