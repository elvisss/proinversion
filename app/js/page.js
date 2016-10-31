$(function(){

    var stickyHeaderTop = $('#sidebar').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#sidebar').css({position: 'fixed', top: '0px'});
        } else {
            $('#sidebar').css({position: 'static', top: '0px'});
        }
    });

    $('.list-categories li a').on('click', function(){
        if (!($(this).parent().hasClass('active'))) {
            $(window).scrollTop(stickyHeaderTop)
        }
    })

});
