$(document).ready(function(){
var score = 0;

var questionBank = {
    question1: {
        question: "What color is the couch at Central Perk?",
        choices: ["purple", "orange", "yellow", "red"],
        correct: "orange"
    }

}

//i need a div for the each question and a div for each button row
var gameStart = function(){
    var QuestionDiv = $("<div>");
    var questionLine = $("<p>")
    QuestionDiv.append(questionLine);
    questionLine.text(questionBank.question1.question);
    $(".question-field").append(QuestionDiv);

    

    for (var i = 0; i < questionBank.question1.choices.length; i++){
         var button = $("<button>");
         button.addClass("button");
        button.text(questionBank.question1.choices[i]);
        QuestionDiv.append(button);
        console.log(button)

}

}
 gameStart()














})