var a = function () {
    var b = $(window).scrollTop();
    var d = $("#scroller-anchor").offset().top;
    var f = $("#footer").offset().top;
    var c = $("#sidebar");
    var h = $("#sidebar").height() + 60; // margin
    var e = $("#wrap-page").height();

    if (b > d) {
        if (h < e) {
            var myTop = $(window).scrollTop();
            if (myTop > f - h) myTop = f - h;
            c.css({
                position: "absolute",
                top: myTop - 170,
                bottom: ""
            })
        } else {
            c.css({
                position: "relative",
                top: "",
                bottom: ""
            })
        }
    } else {
        if (b <= d) {
            c.css({
                position: "relative",
                top: "",
                bottom: ""
            })
        }
    }
};

$(window).scroll(a);

$(function(){

    a()

    var stickyHeaderTop = $('#sidebar').offset().top;
    $('.list-categories li a').on('click', function(){
        if (!($(this).parent().hasClass('active'))) {
            $(window).scrollTop(stickyHeaderTop)
        }
    });

    $('.popup-link').magnificPopup({
      type: 'image',
      // closeBtnInside: false,
      closeOnContentClick: false,

      callbacks: {
        open: function() {
          var self = this;
          self.wrap.on('click.pinhandler', 'img', function() {
            self.wrap.toggleClass('mfp-force-scrollbars');
          });
        },
        beforeClose: function() {
          this.wrap.off('click.pinhandler');
          this.wrap.removeClass('mfp-force-scrollbars');
        }
      },

      image: {
        verticalFit: false
      }

    });

});
