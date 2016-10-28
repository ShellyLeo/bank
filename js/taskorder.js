/**
 * 
 * @authors LEO
 * @date    2016-10-17 17:15:25
 * @version $Id$
 */

//编辑
$(".mainCon table input").attr("disabled", true).css("background", "#fff");
$(".mainList .edit").click(function() {
    if ($(this).html() == "编辑") {
        $(this).html("保存");
        $(".mainCon table input").css("border", "1px solid #d7d7d7").attr("disabled", false);
        $(".mainCon table i").show();
    } else {
        $(this).html("编辑")
        $(".mainCon table input").css({ "border": "none", "background": "#fff" }).attr("disabled", true);
        $(".mainCon table i").hide();
    }
})


//历史记录

$(".mainList a:first").click(function() {
    $(".history").show();
});
$(".hisTitle b").click(function() {
    $(".history").hide();
})

//相关基线


$(".listTitle").click(function() {
    $(this).next(".liMore").slideToggle();
    $(this).parent("li").toggleClass("liCheck");
});

// 折叠显示
$(".mainCon h5").click(function() {
    $(this).next("table").toggle();
    if (!$(this).children("i").hasClass("iUp")) {
        $(this).children("i").addClass("iUp")
    } else {
        $(this).children("i").removeClass("iUp")
    }
})


// 历史记录可拖动
var clicked = "Nope.";
var mausx = "0";
var mausy = "0";
var winx = "0";
var winy = "0";
var difx = mausx - winx;
var dify = mausy - winy;

$("html").mousemove(function(event) {
    mausx = event.pageX;
    mausy = event.pageY;
    winx = $(".history").offset().left;
    winy = $(".history").offset().top;
    if (clicked == "Nope.") {
        difx = mausx - winx;
        dify = mausy - winy;
    }

    var newx = event.pageX - difx - $(".history").css("marginLeft").replace('px', '');
    var newy = event.pageY - dify - $(".history").css("marginTop").replace('px', '');
    $(".history").css({ top: newy, left: newx });

});

$(".hisTitle").mousedown(function(event) {
    clicked = "Yeah.";
});

$("html").mouseup(function(event) {
    clicked = "Nope.";
});
