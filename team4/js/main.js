'use strict'

console.log('hello world!');
$(document).ready(function($){
    // 메인 로딩화면
    $(window).ready(function(){
        $('.rocon').delay(4000).fadeOut(2000);
    });


    //스크롤 해더 변경이벤트
    var headerHeight = $(".header").height();
    $(".hide-header").hide();
    $(window).scroll(function(){
        var rollIt = $(this).scrollTop() >= headerHeight/4;

    if(rollIt){
        $(".hide-header").show().css({"position":"fixed"});
            }
    else{
        $(".hide-header").hide();
            }
        });


    //메뉴 스크롤
    // $(document).ready(function(){

    //     function fnMove(seq){
    //         var offset = $('#main' + seq).offset();
    //         $('html,body').animate({scrollTop : (offset.top - windowHeight/2)},500);
    //     }
    // });
    // 본문내용 스크롤 이벤트
    $(window).scroll(function(){
        var sct = $(window).scrollTop();

        var boo1 = $('.article1').offset().top - $(window).height()/2;

        if(sct >= boo1){
            $('.article1').addClass('on')
        } 
        // else if (sct < boo1 ) {
        //     $('.article1').removeClass('on')
        // }

        
        var boo2 = $('.article2').offset().top - $(window).height()/2;

        if(sct >= boo2){
            $('.article2 > div').stop().css({
                transform : "translateX(0%)",
                transition : "all 1.5s"
            })
        } 
        // else if (sct < boo2) {
        //     $('.article2 > div').stop().css({
        //         transform : "translateX(100%)",
        //         transition : "all 2.5s"
        //     })
        // }

        var boo3 = $('.article3').offset().top - $(window).height()/2;

        if(sct >= boo3){
            $('.article3 > div').stop().css({
                transform : "translateX(0%)",
                transition : "all 1.5s"
            })
        } 
        // else if (sct < boo3) {
        //     $('.article3 > div').stop().css({
        //         transform : "translateX(-100%)",
        //         transition : "all 2.5s"
        //     })
        // }
        

        var boo4 = $('.article4').offset().top - $(window).height()/2;

        if(sct >= boo4){
            $('.article4 > div').stop().css({
                transform : "translateX(0%)",
                transition : "all 1.5s"
            })
        } 
        // else if (sct < boo4) {
        //     $('.article4 > div').stop().css({
        //         transform : "translateX(100%)",
        //         transition : "all 2.5s"
        //     })
        // }
    });
});


    // function fnMove(seq){
    //     var offset = $('#main' + seq).offset();
    //     $('html,body').animate({scrollTop : offset.top},500);
    // };