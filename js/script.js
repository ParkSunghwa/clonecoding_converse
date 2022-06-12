$(document).ready(function(){

    $(".wrap_topbar > .topbar > .box_nav > ul > li").click(function(){

        var indexNum = $(this).index();

        if($(this).hasClass("active")){
            $(".wrap_nav2depth").removeClass("active");
            $(this).removeClass("active");
            $(".wrap_nav2depth > .nav2depth > .nav2depth_left > .box_content").removeClass("active");
        } else {
            $(".wrap_nav2depth").addClass("active");
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(".wrap_nav2depth > .nav2depth > .nav2depth_left > .box_content").eq(indexNum).addClass("active");
            $(".wrap_nav2depth > .nav2depth > .nav2depth_left > .box_content").eq(indexNum).siblings().removeClass("active");
        };


    });

    $(".wrap_nav2depth > .bg_nav2depth_right, .wrap_nav2depth > .nav2depth > .nav2depth_right").click(function(){

        $(".wrap_nav2depth").removeClass("active");
        $(".wrap_nav2depth > .nav2depth > .nav2depth_left > .box_content").removeClass("active");
        $(".wrap_topbar > .topbar > .box_nav > ul > li").removeClass("active");
    });













});