$(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#sidebar').offset().top;

    console.log(stickyHeaderTop)

    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#sidebar').css({position: 'fixed', top: '0px'});
        } else {
            $('#sidebar').css({position: 'static', top: '0px'});
        }
    });

    $('.list-categories li a').on('click', function(){
        if !($(this).parent().hasClass('active')) {
            $(window).scrollTop(stickyHeaderTop)
        }
        // console.log($(this).parent().hasClass('active'))
    })

});
