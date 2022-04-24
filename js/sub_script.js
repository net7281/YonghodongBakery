$(document).ready(function(){

    
    var ThisCon = 1; //1:con1 2:con2 3:con3
    var setPlay =true;   
    var funPlay = true;


    First();
    ResizeVW();


    //실행 시 일어나는 이벤트
    function First(){

        FWinW = $(window).width();

        if(FWinW>768){
            mapMove(funPlay);
            WheelE();
        }else{
            $('#con1').css('visibility', 'visible');
            $('#con2').css('visibility', 'visible');
            $('#con3').css('visibility', 'visible');
            $('#con1').css('opacity', '1');
            $('#con2').css('opacity', '1');
            $('#con3').css('opacity', '1');
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
                    $('.map').off("mousemove");
                    $(window).off('mousewheel');
                    $('#con1').css('visibility', 'visible');
                    $('#con2').css('visibility', 'visible');
                    $('#con3').css('visibility', 'visible');
                    $('#con1').css('opacity', '1');
                    $('#con2').css('opacity', '1');
                    $('#con3').css('opacity', '1');
                }else{
                    ThisCon = 1
                    setPlay =true;
                    $('#con1').css('visibility', 'visible');
                    $('#con2').css('visibility', 'hidden');
                    $('#con3').css('visibility', 'hidden');
                    mapMove(funPlay);
                    WheelE();
                }
            },sec);

        });
    }


// map move

    function mapMove(flag){
        var rotateForce = 10; // max popup rotation in deg 
        var SrotateForce = 30; // max shadow rotation in deg 

        
            $('.map').mousemove(function(e) { 
                        $('.map').css('transition', 'none'); 
                        var docX = $('.mapwrap').width() + 165; 
                        var docY = $('.mapwrap').height() +260; 

                        var rotateY = (e.offsetY / docX * rotateForce*2) - rotateForce; 
                        var rotateX = -((e.offsetX / docY * rotateForce*2) - rotateForce); 

                        var shadowY = (e.offsetY / docX * SrotateForce*2) - SrotateForce; 
                        var shadowX = -((e.offsetX / docY * SrotateForce*2) - SrotateForce); 
                        
                        
                        
                            // .css('left', moveX+'px') 
                            // .css('top', moveY+'px') 
                            // .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)'); 
                            $('.mapwrap') .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)'); 
                            $('.map') .css('filter', 'drop-shadow('+shadowX+'px '+shadowY+'px 0px #d96704)'); 
                    }); 


                    $('.mapwrap').mouseleave(function(){
                        $('.map').css('transition', 'all 0.5s'); 
                        $('.mapwrap').css('transform', 'rotateX('+0+'deg) rotateY('+0+'deg)'); 
                        $('.map').css('filter', 'drop-shadow('+30+'px '+10+'px 0px #d96704)'); 
                    }); 
        
    };// map move end
     
//whell event
    function WheelE(funPlay){
        

        $(window).on('mousewheel',function(e){
            
            var wheel = e.originalEvent.wheelDelta;
            
            if(setPlay==true){
                if(wheel>0){    
                    setPlay=false;
                    if(ThisCon==1){
                        $('#con2').css('visibility', 'hidden');
                        $('#con3').css('visibility', 'visible');
                        $('#con1').animate({
                            opacity: 0
                        },500,function(){
                            $('#con1').css('visibility', 'hidden');
                        });
                        $('#con3').animate({
                            opacity: 1
                        },500,function(){
                            ThisCon=3;
                            setPlay =true;
                        });
                    
                        }else if(ThisCon==2){
                            $('#con3').css('visibility', 'hidden');
                            $('#con1').css('visibility', 'visible');
                            $('#con2').animate({
                                opacity: 0
                            },500,function(){
                                $('#con2').css('visibility', 'hidden');
                            });
                            $('#con1').animate({
                                opacity: 1
                            },500,function(){
                                ThisCon=1;
                                setPlay =true;
                            });
                            
                        }else if(ThisCon==3){
                            $('#con1').css('visibility', 'hidden');
                            $('#con2').css('visibility', 'visible');
                            $('#con3').animate({
                                opacity: 0
                            },500,function(){
                                $('#con3').css('visibility', 'hidden');
                            });
                            $('#con2').animate({
                                opacity: 1
                            },500,function(){
                                ThisCon=2;
                                setPlay =true;
                            });
                        }else{ThisCon=1};
                    }else{
                        setPlay=false;
                        if(ThisCon==1){
                            $('#con3').css('visibility', 'hidden');
                            $('#con2').css('visibility', 'visible');
                            $('#con1').animate({
                                opacity: 0
                            },500,function(){
                                $('#con1').css('visibility', 'hidden');
                            });
                            $('#con2').animate({
                                opacity: 1
                            },500,function(){
                                ThisCon=2;
                                setPlay =true;
                            });
                        
                        }else if(ThisCon==2){
                            $('#con1').css('visibility', 'hidden');
                            $('#con3').css('visibility', 'visible');
                            $('#con2').animate({
                                opacity: 0
                            },500,function(){
                                $('#con2').css('visibility', 'hidden');
                            });
                            $('#con3').animate({
                                opacity: 1
                            },500,function(){
                                ThisCon=3;
                                setPlay =true;
                            });
                            
                        }else if(ThisCon==3){
                            $('#con2').css('visibility', 'hidden');
                            $('#con1').css('visibility', 'visible');
                            $('#con3').animate({
                                opacity: 0
                            },500,function(){
                                $('#con3').css('visibility', 'hidden');
                            });
                            $('#con1').animate({
                                opacity: 1
                            },500,function(){
                                ThisCon=1;
                                setPlay =true;
                            });
                        }else{ThisCon=1};
                    }

            }

            


        });
    };






});/*end*/   