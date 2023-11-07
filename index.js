var buttonColor=["red", "green", "blue", "yelllow"];
var gamePattern=[];
var userClickedPatterns=[];
var level = 0;
var started = false;

$(document).on("click", function(){
    if(!started){
    nextSequence()
    started = true;
    }
})

$(".btn").on("click", function(e){
    var userChosenColor = e.target.id;
    userClickedPatterns.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPatterns.length-1);
    })

function nextSequence(){

    userClickedPatterns=[];
    
    level++;
    $("h1").text("Level "+level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChoosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChoosenColor);

    playSound(randomChoosenColor);
}

    
function playSound(name){

    if(name==="red"){
        $("#red").fadeOut(100).fadeIn(100);
        var audioRed = new Audio("./sounds/red.mp3");
        audioRed.play();
    }
    else if(name==="green"){
        $("#green").fadeOut(100).fadeIn(100);
        var audioGreen = new Audio("./sounds/green.mp3");
        audioGreen.play();
    }
    else if(name==="blue"){
        $("#blue").fadeOut(100).fadeIn(100);
        var audioBlue = new Audio("./sounds/blue.mp3");
        audioBlue.play();
    }
    else if(name==="yellow"){
        $("#yellow").fadeOut(100).fadeIn(100);
        var audioYellow = new Audio("./sounds/yellow.mp3");
        audioYellow.play();
    }
}

function animatePress(currentColor){
        $("."+currentColor).addClass("pressed");
        setTimeout(function(){$("."+currentColor).removeClass("pressed")}, 100)
    }

function checkAnswer(currentLevel){
    if(userClickedPatterns[currentLevel] === gamePattern[currentLevel]){;

        if(userClickedPatterns.length === gamePattern.length){
        setTimeout(function(){nextSequence()},1000);

        }
    } else if(userClickedPatterns[currentLevel] !== gamePattern[currentLevel]){
        
        $("h1").text("Game Over, Press Any Key to Restart");

        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over")},100);
        
        var audioWrong = new Audio("./sounds/wrong.mp3");
        audioWrong.play();
        
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern=[];
    started = false;
}




