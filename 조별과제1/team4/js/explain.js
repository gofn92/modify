'use strict'

$(document).ready(function($){
    $('.ham-btn').on('click',function(e){
    e.preventDefault();
    
        $(this).toggleClass('active');
    
        $('.overlay').toggleClass('slide');
    
    });
    //--------------------------------------- 햄버거 버튼 클릭 ----------------

    //-------------------------------------- 본문 스크롤시 이벤트들 ------------
    $(window).scroll(function(){

        var sct = $(window).scrollTop();

        var boo1 = $('.article2').offset().top - $(window).height()/2;

        if(sct >= boo1){
            $('.article2').addClass('on');
        }

        var boo2 = $('.article3 .sub-text').offset().top - $(window).height()/2;

        if(sct >= boo2){
            $('.article3').addClass('on');
            $('.article3 .sub-text').addClass('on');
            $('.move > div').addClass('on');
        }

        var boo3 = $('.btn-silde-box').offset().top - $(window).height()/2;

        if(sct >= boo3){
            $('.btn-silde-box').addClass('on');
        }

        var boo4 = $('.article4').offset().top - $(window).height()/2;

        if(sct >= boo4){
            $('.article4').addClass('on');
        }

        var boo5 = $('.article5').offset().top - $(window).height()/2;

        if(sct >= boo5){
            $('.article5').addClass('on');
            $('.article5 .click-img1').addClass('on');
            $('.article5 .click-img2').addClass('on');
            $('.article5 .click-img3').addClass('on');
            $('.article5 .click-img4').addClass('on');
        }
    });
    

    // spec구간 클릭 이벤트
    $(function(){

        $('.tap-menu ul li').on('click',function(){
            var index = $(this).index();
            $(this).addClass('on').siblings().removeClass('on')
            $('.inner-content-box > div').eq(index).show()
            .siblings().hide()
    
            return false
            
        });
        
            

        var percent1 = 0;
        var setTimer = setInterval(timer,10);
        
        function timer(){
            percent1++;

            if(percent1 === 488){
                clearInterval(setTimer)
                return false;
            }

            $('.inner-content .number > p').text(percent1 + 'kW');
        }

        var percent2 = 0;
        var setTimer2 = setInterval(timer2,7);

        function timer2(){
            percent2++;

            if(percent2 === 663){
                clearInterval(setTimer2)
                return false;
            }

            $('.inner-content .number2 > p').text(percent2 + 'PS');
        }

        var percent3 = 0;
        var setTimer3 = setInterval(timer3,15);

        function timer3(){
            percent3++;

            if(percent3 === 331){
                clearInterval(setTimer3)
                return false;
            }

            $('.inner-content .number4 > p').text(percent3 + 'Km/h');
        }      
    });


    // btn-silde-box 구간 클릭이벤트
    $(function(){
        $('.btn-silde ul li').on('click',function(){
            var index = $(this).index();
            $(this).addClass('on').siblings().removeClass('on')
            $('.brobox .btn-silde-img').eq(index).show()
            .siblings().hide();

            return false;
        });
    });


    //Convenience구간 클릭 이벤트

    $('.article5 .click-img1').on('click',function(e){
        e.preventDefault();
        $('.click-text1').toggleClass('on');
    });

    $('.article5 .click-img2').on('click',function(e){
        e.preventDefault();
        $('.click-text2').toggleClass('on');
    });

    $('.article5 .click-img3').on('click',function(e){
        e.preventDefault();
        $('.click-text3').toggleClass('on');
    });

    $('.article5 .click-img4').on('click',function(e){
        e.preventDefault();
        $('.click-text4').toggleClass('on');
    });  

});(jQuery)
