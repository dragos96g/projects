var playing = 0;
var score;
var action;
var timeremaining;
var correctAnswer;

//if we click on the start/reset
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing == 1){
        location.reload(); //reload page
    }
    if(playing == 0){ //if we are not playing
        
        //change mode to playing
        playing = 1;
        
        score = 0; //set score to 0
        document.getElementById("scorevalue").innerHTML = score;
        
        //show countdown box
        show("timeremaining");
        timeremaining = 60;
        
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide the game over box
        hide("gameover");
        
        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset";
        
        //start countdown
        startCountdown();
        
        //generate Q&A
        generateQA();
        
    }
    if(playing == 2){
        location.reload();
        playing = 0;
    }
}

// clicking on an answer box
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //if we are playing
    if(playing != 0){
        if(this.innerHTML == correctAnswer){
            //correct answer
            score++;
            document.getElementById("score").innerHTML = "Scor: " + score;
            
            //show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1200);
            
            //Generate new Q&A
            generateQA();
            
           }else{
               //wrong answer
            penalty();   
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1200);
           }
    }
}
}

//functions

//start counter

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        if(timeremaining <= 0){ //gameover
            stopCountdown();
            show("gameover");
            
            document.getElementById("gameover").innerHTML = "<p>Timpul a expirat!</p><p>Scorul tău este " + score + "</p>";
            
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = 2;
            document.getElementById("startreset").innerHTML = "Reset";
        }
    },1000);
}

//2 seconds penalty
function penalty(){
    timeremaining -= 2;
}
//stop counter

function stopCountdown(){
    clearInterval(action);
}

//hide elements
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//show elements
function show(Id){
    document.getElementById(Id).style.display = "block";
}

//generate question and multiple answers
function generateQA(){
    
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    
    while(x*y == correctAnswer){ 
     x = 1+ Math.round(9*Math.random());
     y = 1+ Math.round(9*Math.random());}
    
    correctAnswer = x*y;
    
    document.getElementById("question").innerHTML = x + "x" + y;
    
    var correctPosition = 1+ Math.round(3*Math.random());
    
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answers
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition){
            var wrongAnswer;
            
            do{ wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));} //a wrong answer
            
            while(answers.indexOf(wrongAnswer)>-1)
                
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            
            answers.push(wrongAnswer);
        }
    }
    
}

































