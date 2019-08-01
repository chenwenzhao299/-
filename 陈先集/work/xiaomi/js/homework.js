$(document).ready(function(){
    // 定义正在显示的元素的下标
    var index = 0;
    $(".right").click(function(){
        index++;
        if(index>4){
            index = 0;
        }
        animate(index);
        
    })
    $(".left").click(function(){
        index--;
        if(index<0){
            index=4;
        }
        animate(index)
    })
    function animate(index){
        $(".box img").eq(index).show().siblings().hide()
        $(".foot>span").eq(index).addClass("active").siblings().removeClass("active");
    }
})