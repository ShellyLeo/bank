/**
 * 
 * @authors LEO
 * @date    2016-10-19 16:11:28
 * @version $Id$
 */
$(function () {
    $(".nextMonth").click(function(){
        var year=parseInt($("b.year").text());
        var month=parseInt($("b.month").text());
        $("b.month").text(month+1);
        if($("b.month").text()>12){
            $("b.year").html(year+1);
            $("b.month").html(1);
        }
    })

    $(".prevMonth").click(function(){
        var year=parseInt($("b.year").text());
        var month=parseInt($("b.month").text());
        $("b.month").text(month-1);
        if($("b.month").text()<1){
            $("b.year").html(year-1);
            $("b.month").html(12);
        }
    })

    // 周历部分li的高度设置
    $(".calendarWeek .mainCon>ul>li").height($(".calendarWeek .mainCon").height())
})
