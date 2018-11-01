$(document).ready(function(){
var score = 0;

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
var buttonText;
var gameStart = function(){
    for (var i = 0; i < questionBank.length; i++){
        var QuestionDiv = $("<div>");
        var questionLine = $("<p>");
        questionLine.addClass("questions");
        QuestionDiv.append(questionLine);
        questionLine.append(questionBank[i].ask);

        for (var j = 0; j < questionBank[i].choices.length; j++){
            var form = $("<form>");
            var input = $("<input type=radio>");
            $("input:name").val("choice");

            // var inputText = (questionBank[i].choices[j])
            $("input:text").val(questionBank[i].choices[j]);
            // input.text(inputText);
            
            // input.attr("index", j)
            //I want to use this above for checkWin, but scope is an issue
            form.append(input);
            QuestionDiv.append(form);
            $(".question-field").append(QuestionDiv);
            }
    }
    $("#instructions").remove();
}

$("#start-button").on("click", function(){
    gameStart();
    });
// //if what they clicked matches correct from object

// var clickedButton = function(){
//     buttonText = 
// }


// $(".button").click(function(){
//     var userInput = $(this).att("id");
//     var index = $(this).att("index");
    

//     if (userInput === questionBank[index].correct){
//         score ++;
//     }
// //  })


//maybe in for loop somehow add data to the correct one...
 

// var checkAnswer = function (){
//     if ($(".button").click("clicked"
//         score ++;
//     }
// }



});