/*
// 以下兩種為建立有名字之ready函數方式
//這裡不能亂排,會失效
$(Mark);
$(document).ready(Mark);
*/
$(function() { //若不建立函數名字,直接這樣就可
    $("td").dblclick(function(){
        var bc = $(this).css("background-color")
        /*alert(bc);*/
        if (bc == "rgba(0, 0, 0, 0)") //只能用alert裡顯示的rgba, 用#會沒用
            $(this).css({backgroundColor: "yellow"}); //除非建立後台伺服器,才可以click後永久變
        else
            $(this).css({backgroundColor: "rgba(0, 0, 0, 0)"});
    });
    /*$("header a").css({color: "#000"}); //這樣才會永久改變css屬性 */    
})
