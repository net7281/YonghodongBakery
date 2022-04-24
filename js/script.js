$(document).ready(function(){

First();
ResizeVW();

    //실행 시 일어나는 이벤트
    function First(){

        FWinW = $(window).width();

        if(FWinW>768){
            PCmode();
        }else{
            MOBILEmode();
        }

    }

    //화면 크기 전환
    function ResizeVW(){
        let WinW = $(window).width();
        let timer = null;
        let sec = 300;

        $(window).on('resize',function(){

            clearTimeout(timer);
            timer=setTimeout(function(){
                WinW=$(window).width();
                if(WinW<768){
                    
                    $(document).off("mousemove");
                    MOBILEmode();
                }else{
                    PCmode();
                }
            },sec);

        });

    }

    //모바일 애니메이션
    function MOBILEmode(){
        $('#move1').animate({
            top: "-50",
            left: "-150",
        },1000,'easeOutBack');

        $('#move2').delay(100).animate({
            top: "-15",
            left: "45",
        },1000,'easeOutBack');


        $('#move3').delay(200).animate({
            top: "470",
            right: "100",
        },1000,'easeOutBack');


        $('#move4').delay(400).animate({
            top: "620",
            right: "-10",
        },1000,'easeOutBack');

    }

    //pc 애니메이션
    function PCmode(){

            //시작 애니메이션
            $('#move1').animate({
                top: "-280",
                left: "-170",
            },1000,'easeOutBack');

            $('#move2').delay(100).animate({
                top: "-230",
                left: "340",
            },1000,'easeOutBack');


            $('#move3').delay(200).animate({
                top: "160",
                left: "280",
            },1000,'easeOutBack');


            $('#move4').delay(400).animate({
                top: "250",
                left: "1000",
            },1000,'easeOutBack');
            //end


            // 애니메이션 후 실행
            window.setTimeout(function(){
                $('.btn').css("opacity",1);
                $(document).mousemove(function(e){
                    
                    //마우스커서
                    $('.btn').css("top", e.pageY-5);
                    $('.btn').css("left", e.pageX-5);
        
                    var docX = $(document).width();
                    var docY = $(document).height();
        
                    var moveX = (e.pageX-docX/2)/(docX/2) * -10;
                    var moveY = (e.pageY-docY/2)/(docY/2)* -10;
        
                    
                    //동그라미 꿈틀
                    $('#move1').css("left", -170 + moveX+'px');
                    $('#move1').css("top", -280 + moveY+'px');
        
                    $('#move2').css("left", 340 + moveY * -2+'px');
                    $('#move2').css("top", -230 + moveX * -2 +'px');
        
                    $('#move3').css("left", 280 + moveX * -3 +'px');
                    $('#move3').css("top", 160 + moveY * -3 +'px');
        
                    $('#move4').css("left", 1000 + moveY *-0.8 + 'px');
                    $('#move4').css("top", 250 + moveX *-0.8 +'px');
                    });  

            }, 1000);//end

            
            //마우스커서 화면밖에 나갔을때 사라지게 하기
            $(document).bind("mouseleave", function(){
                $('.btn').css("opacity",0);
            });

            $(document).bind("mouseenter", function(){
                $('.btn').css("opacity",1);
            });


        
    }








});/*end*/    