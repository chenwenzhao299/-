$(function(){
    var scrollTop=$(window).scrollTop()
    console.log(scrollTop)
    $(".shouye").click(function(){
    $("html,body").animate({scrollTop:0},700)
    })
    $(".jianjie").click(function(){
    $("html,body").animate({scrollTop:650},700)
    })
    $(".aihao").click(function(){
    $("html,body").animate({scrollTop:1200},700)
    })
    $(".zuoye").click(function(){
    $("html,body").animate({scrollTop:2024},700)
    })
})