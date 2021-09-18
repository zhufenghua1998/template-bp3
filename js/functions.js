/**
 * 自动获取年份
 */
function getYear(){
    let year = new Date().getFullYear();
    $("#year").html(year);
}

/**
 * 灵活固定footer
 */
function fix_footer(){
    if($(window).height()==$(document).height()){
        $(".copyright").addClass("navbar-fixed-bottom");
    }
    else{
        $(".copyright").removeClass(" navbar-fixed-bottom");
    }
}