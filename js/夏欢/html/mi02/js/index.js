$(document).ready(function(){
    var index = 0;
    $(".next").click(function(){
        index++;
        if(index>4){
            index=0;
        }
        animate(index);
        
    })
    $(".prev").click(function(){
        index--;
        if(index<0){
            index=4;
        }
        animate(index);
    })
    $(".all-icons>span").click(function(){
        index=$(this).index()
        animate(index);
    })
    function animate(index){
        $(".banner img").eq(index).show().siblings().hide()
        $(".all-icons>span").eq(index).addClass("active").siblings().removeClass("active");
    }
})