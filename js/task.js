/**
 *
 * @authors LEO
 * @date    2016-09-26 11:55:36
 * @version $Id$
 */







$(document).ready(function () {

    // 左侧树列表DIV的高度
    var height = document.documentElement.clientHeight;
    $(".tree").height(height-135);
    $(".tableBox").height(height-100);
  

    $("td i").click(function () {
        $(this).toggleClass("iRight");
        toggleChild($(this).parents("tr").attr("id"));
    })

    // 左侧树点击切换
    $(".tree>ul>li i").click(function(){
        $(this).siblings("ul").toggle();
        $(this).toggleClass("iMin")
    })
});



var childDomList = [];
//toggle dom by id
function toggleChild(id) {
    var $childDom = $("tr[pid='" + id + "']");
    var show = $childDom.attr("style") === "display: none;" ? true : false;
    if (clearChild())
        findChild(id, 0);
    $.each(childDomList, function (i, j) {
        if (show && j.deep === 0) {
            $(j.dom).show();
        }
        else {
            $(j.dom).hide();
        }
    });
}
//search Children by parentId deep
function findChild(id, deep) {
    var $childDom = $("tr[pid='" + id + "']");
    $.each($childDom, function (i, dom) {
        var childId = $(dom).attr("id");
        var showAttr = true;
        var deepAdd = deep + 1;
        if ($(dom).attr("style") === "display:none;") showAttr = false;
        childId && childDomList.push({deep: deep, dom: $(dom), showAttr: showAttr})
        && findChild(childId, deepAdd);
    });
}
function clearChild() {
    return childDomList.splice(0, childDomList.length);
}

/*
function Drag(sourceIndex, targetIndex) {
    Replace(sourceIndex, targetIndex, "tr th", 2);
    var $tr = $("tr");
    $.each($tr, function (i, j) {
        Replace(sourceIndex, targetIndex, $(j).find("td"), 2);
    });
}
function Replace(sourceIndex, targetIndex, el, deep) {
    if (!((sourceIndex >= deep) && (targetIndex >= deep))) return;
    var $el = typeof(el) === "string" ? $(el) : el;
    var $source = $el.eq(sourceIndex);
    var $target = $el.eq(targetIndex);
    var replaceText = $source.text();
    $source.text($target.text());
    $target.text(replaceText);
}
function DragByEl(sourceEl, targetEl) {
    var $PEl = $("tr th");
    Drag($PEl.index(sourceEl), $PEl.index(targetEl));
}
var tbHeader = document.getElementById("tb-header");
var z;
tbHeader.onmousedown = function (e) {
    e = e || window.event;
    var oldE = e;
    var nowE;
    z = true;
    tbHeader.onmouseover = function xx(e) {
        e = e || window.event;
        if (z == true) {
            $("#tb-header th").css("cursor", "e-resize");
            nowE = e;
        }
    };
    tbHeader.onmouseup = function () {
        z = false;
        $("#tb-header th").css("cursor", "pointer");
        DragByEl(oldE.target, nowE.target);
    };
};
tbHeader.ondragstart = function () {
    return false;
};*/


sortable();
function sortable() {
    var el = document.getElementById('tb-header');
    new Sortable(el);
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
