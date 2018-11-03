$(document).ready(function(){
var score= 0;
var timeLeft = 20;
var intervalID = setInterval(countdown, 1000);

var questionBank = [
    {
        ask: "What color is the couch at Central Perk?",
        choices: ["purple", "orange", "yellow", "red"],
        correct: "orange"
    },
    {
        ask: "What is Phoebe's sister's name?",
        choices: ["Ursula", "Debbie", "Sarah", "Ulrike"],
        correct: "Ursula"
    },
    {
        ask: "Which famous person does Phoebe believe is her grandfather?",
        choices: ["Theodore Roosevelt", "Andrew Carnegie", "Albert Einstein", "Harry Truman"],
        correct: "Albert Einstein"
    },
    {
        ask: "How many categories for towels does Monica have?",
        choices: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        ask: "Which high school did Monica, Ross, and Rachel attend?",
        choices: ["Lincoln High School", "Kennedy High School", "Washington High School", "Jefferson High School"],
        correct: "Lincoln High School"
    },
    {
        ask: "Chandler tells Janice he is moving to _______",
        choices: ["Saudia Arabia", "Syria", "India", "Yemen"],
        correct: "Yemen"
    },
    {
        ask: "Which character got a pencil stuck in his/her ear?",
        choices: ["Monica", "Ross", "Joey", "Phoebe"],
        correct: "Monica"
    },
    {
        ask: "What did Monica start making to get over Richard?",
        choices: ["pies", "candy", "jam", "chocolates"],
        correct: "jam"
    },
    {
        ask: "What was wrong with the couch Ross returned to the store?",
        choices: ["It had a stain", "It was the wrong color", "It didn't fit", "It was cut in half"],
        correct: "It was cut in half"
    },
    {
        ask: "What heirloom did Phoebe inherit?",
        choices: ["a dollhouse", "a fur coat", "a car", "an urn"],
        correct: "a fur coat"
    }
]

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
    seconds = "0" + seconds;
    }

    if (minutes === 0) {
    minutes = "00";
    }
    else if (minutes < 10) {
    minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}
var converted = timeConverter(timeLeft);




var gameStart = function(){
    var timerDiv = $("<div>");
    timerDiv.attr("id", "timer");
    $("#instructions").after(timerDiv);
    var resetDiv = $("<div>");
    resetDiv.addClass("button resetButton");
    
    for (var i = 0; i < questionBank.length; i++){
        var QuestionDiv = $("<div>");
        var questionLine = $("<p>");
        questionLine.addClass("questions");
        QuestionDiv.append(questionLine);
        questionLine.append(questionBank[i].ask);
        
        for (var j = 0; j < questionBank[i].choices.length; j++){
            var button = $("<button>");
            button.addClass("button choices-button");
            var buttonText = (questionBank[i].choices[j])
            button.attr("id", buttonText)
            button.attr("index", i)
            button.text(buttonText);
            QuestionDiv.append(button);
            $(".question-field").append(QuestionDiv);
        }
    }
    $("#instructions").remove();
    
}

$("#start-button").on("click", function(){
    gameStart();
    
});
function countdown() {  
    if (timeLeft == 0){
        clearTimeout(intervalID);
        $(".question-field").empty();
        $("#timer").text("Your final score: " + score + "/10!");
        var resetButton = $("<button>");
        resetButton.addClass("button resetButton");
        resetButton.text("Play Again")
        $("main").append(resetButton)
    }else {
        timeLeft--;
        $("#timer").text(timeLeft + " remaining")
    }

};



$(document).on("click", ".choices-button", function(){
    console.log("button clicked");
   
    var userInput = $(this).attr("id");
    
    var index = $(this).attr("index");
    // console.log(score);
    $(this).addClass("clicked");
    $(this).siblings().prop("disabled", true);    

    if (userInput === questionBank[index].correct){
        score++;
    console.log(score)    
    };
    
});
 

//do a reset function at with a timeout or a button to reset and attach it to reset button




});