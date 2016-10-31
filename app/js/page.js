// var a = function () {
//     var b = $(window).scrollTop();
//     var d = $("#scroller-anchor").offset().top;
//     var f = $("#footer").offset().top;
//     var c = $("#scroller");
//     var h = $("#scroller").height() + 20; // margin

//     if (b > d) {
//         var myTop = $(window).scrollTop();
//         if (myTop > f - h) myTop = f - h;
//         c.css({
//             position: "absolute",
//             top: myTop - 200,
//             bottom: ""
//         })
//     } else {
//         if (b <= d) {
//             c.css({
//                 position: "relative",
//                 top: "",
//                 bottom: ""
//             })
//         }
//     }
// };

$(function(){

    // a();

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

// $(window).scroll(a);
