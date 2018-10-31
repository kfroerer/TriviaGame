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

var gameStart = function(){
    for (var i = 0; i < questionBank.length; i++){
        var QuestionDiv = $("<div>");
        var questionLine = $("<p>");
        questionLine.addClass("questions");
        QuestionDiv.append(questionLine);
        questionLine.append(questionBank[i].ask);

        for (var j = 0; j < questionBank[i].choices.length; j++){
            var button = $("<button>");
            button.addClass("button");
            button.text(questionBank[i].choices[j]);
            QuestionDiv.append(button);
            $(".question-field").append(QuestionDiv);

            }
}
}
 gameStart()
});