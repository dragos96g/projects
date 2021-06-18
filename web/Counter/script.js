var seconds;
var sets;
var sets2;
var breakS;
var mode = 1;
var action;
var timeCounter;
var paused = false;
var p;
var min;
var sec;

$(function(){
    $("#seconds").spinner({
        min: 5,
        max: 180,
        step: 5
    });
    
    $("#sets").spinner({
        min: 0,
        max: 20
    });
    $("#break").spinner({
        min: 0,
        max: 180,
        step: 5
    });
    
    $("#button3").click(function(){
        location.reload();
    })
    
    $("#button2").click(function(){
        
        seconds = document.getElementById("seconds").value;
        sets = document.getElementById("sets").value;
        breakS = document.getElementById("break").value;
        sets2 = sets;
        
        if(sets2 == 1){
            $("#setsLeft").hide();
        }
            
        if(seconds <= 0 && sets <= 0){
            
        window.alert("Please input the number of seconds and sets!");}
        
        else if(sets <= 0){window.alert("Please input the number of sets!");}
            
        else if(breakS <= 0 && sets >= 2){window.alert("Please input the number of break seconds!");}
        
        else if(seconds <= 0){window.alert("Please input the number of seconds!");}
            
        else{  
            
        mode = 2;
           
        $("#button1").css("visibility","visible");
            
        $("#button3").css("visibility","visible");
            
        $("#time").css("visibility","visible");
            
        $("#inputs").fadeOut("fast");
            
        $("#button2").css("visibility","hidden");
            
        calcTime(seconds);
        
        getReady();};
            
    });
    
    
    $("#button1").click(function(){
        if(paused == false){
        $("#button1 ion-icon").attr("name","play");
        paused = true;
        }else{
        $("#button1 ion-icon").attr("name","pause");
        paused = false;
        }
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function StartTimer(){
        sets --;
        clearInterval(action);
        var s = seconds;
        calcTime(s);
        action = setInterval(function(){
            if(paused == false){
              
            $("#timevalue").text(format(min) + ":" + format(sec));
            $("#setsLeft").text((sets2 - sets) + " out of " + sets2);
            $("#timevalue").css("color", "#3498db");
            $("#timevalue").css("margin-left", "45px");
            $("#actionMode").fadeIn();
            $("#actionMode").text("Work!");
            $("#actionMode").css("color", "#3498db");
            $("#actionMode").css("left", "36%");
            
            playSound(s);
            
            if(s <= 0 && sets > 0){
                
                
            $("#stop")[0].play();
                
                startBreak();
                
            } else if(s <= 0){
                
              
            $("#done")[0].play();
        
                
              clearInterval(action);
                
                $("#timevalue").text("Done!");
                $("#timevalue").css("right", "25px");
                $("#actionMode").fadeOut();
                $("#timevalue").css("color", "#27ae60");
                $("#setsLeft").fadeOut();
                mode = 1;
                
            }else{
             s -= 1;
            calcTime(s);};
        }},1000);
        
    };
    
    function startBreak(){
        var s = breakS;
        clearInterval(action);
        calcTime(s);
        action = setInterval(function(){
            if(paused == false){
            
            $("#timevalue").text(format(min) + ":" + format(sec));
            $("#setsLeft").text((sets2 - sets) + " out of " + sets2);
            $("#timevalue").css("color", "#e74c3c");
            $("#actionMode").fadeIn();
            $("#actionMode").text("Rest!");
            $("#actionMode").css("color", "#e74c3c");
            playSound(s);
            
            if(s <= 0){
                
            $("#stop")[0].play();
                
                StartTimer();
            }else{ 
            s -= 1;
            calcTime(s);};
        }},1000);
            
    };
    
    function playSound(s){
        if(s == 3){
            $("#ready")[0].play();
        }else if(s == 2){
            $("#ready2")[0].play();
        }else if(s == 1){
            $("#ready")[0].play();
        };
    }
    
    function getReady(){
        var r = 3;
        action = setInterval(function(){
            $("#timevalue").text(r);
            $("#timevalue").css("margin-left", "155px");
            $("#timevalue").css("color", "#2ecc71");
            $("#actionMode").fadeIn();
            $("#actionMode").text("Get ready!");
            $("#actionMode").css("color", "#2ecc71");
            playSound(r);
            if(r != 0){
            r--;
            }else{
                
                $("#go")[0].play();
                clearInterval(action);
                StartTimer();
                
            }
            
        },900);
    };
    
    
    
    
    function calcTime(s){
        var t = s / 60 % 1;
            sec = s % 60;
            min = s / 60 - t;
        
    }
    
    function format(number){
        if(number<10){
            return '0' + number;
        }else{return number;
             }};
    
});