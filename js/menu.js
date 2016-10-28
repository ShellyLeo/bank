/**
 * 
 * @authors LEO
 * @date    2016-10-13 09:39:51
 * @version $Id$
 */

// 导航栏固定效果
$(function() {
    var ie6 = /msie 6/i.test(navigator.userAgent),
        dv = $('.head'),
        st;
    $(window).scroll(function() {
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (st >= 300) {
            if (ie6) { //IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
                dv.css({
                    position: 'absolute',
                    top: st
                });
            } else if (dv.css('position') != 'fixed') dv.css({
                'position': 'fixed',
                'height': '46px',
                'top': 0,
                'padding': 0
            });
        } else if (dv.css('position') != 'static') dv.css({
            'position': 'static',
            'padding': "17px 0",
            'height': '80px'
        });
    });

    // 左侧浮层折叠展示
    $(".sideArrow").click(function() {
        $(this).toggleClass("up");
        $(".sideMenu").fadeToggle();
        if ($(this).hasClass("up")) {
            $(".head").css("padding-left", "1%");
            $(".content").css("padding-left", "1%");
            $(".aside").css("z-index", "112");
            $(".nav li").css("padding", "0 17px")
        } else {
            $(".head").css("padding-left", "50px");
            $(".content").css("padding-left", "70px");
            $(".nav li").css("padding", "0 13px")
        }
    })
});
