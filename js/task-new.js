/**
 * Created by admin on 2016/10/14.
 */
/**
 *
 * @authors LEO
 * @date    2016-09-26 11:55:36
 * @version $Id$
 */



$(document).ready(function() {
    //$("table").resizableColumns({});

    // 左侧树列表DIV的高度
    var height = document.documentElement.clientHeight;
    $(".tree").height(height - 135);
    $(".tableBox").height(height - 100);

    var listSort = $("#sortTh");
    var listSave = $("#saveTh");

    console.log(listSort);
    console.log(listSave);

    listSort.click(function() {
        sort()
    })
    listSave.click(function() {
        save()
    })
});

var el = document.getElementById('tb-header');
var sort = function() {
    console.log("排序");
    $(".tableBox tbody").hide();
    $(".tableBox th").css("border", "1px dotted #fff");
    // sortable();

    
    new Sortable(el, {
        group: "localStorage-example",
        store: {
            get: function(sortable) {
                var order = localStorage.getItem(sortable.options.group);
                return order ? order.split('|') : [];
            },
            set: function(sortable) {
                var order = sortable.toArray();
                localStorage.setItem(sortable.options.group, order.join('|'));
            }
        }
    })
}

function save() {
    console.log("保存");
    $(".tableBox tbody").show();
    $(".tableBox th").css("border", "1px solid #fff");
    new Sortable(el, {
        group: "",
        store: ""
    })
}




