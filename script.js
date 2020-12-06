const startQuiz= document.getElementById('start-page');
const startBtn= document.getElementById('start-btn');
const quiz= document.getElementById('quiz');
const questions= document.getElementById('questions');
const results= document.getElementById('result')
const nextBtn = document.getElementById('next-btn');
const gameover= document.getElementById('gameover')
const quizBtn= document.getElementById('quizBtn')
const highscoreContainer=document.getElementById('highscoreContainer');
const highscorePage= document.getElementById('highscorePage');
const highscoreInitials=document.getElementById('highscore-Initials');
const highscoreResults= document.getElementById('highscore-results');
const endPageBtns= document.getElementById('endPageBtns');
const restartGame= document.getElementById('playAgain');
const submitScoreBtn= document.getElementById('submitScore');




// quiz variables
var score= 0; 
var time = questions.length * 20;
var currentQuestionIndex = 0;
 

let shuffledQuestions, currentQuestionIndex; 


//define questions
const questions = [{

        question: "What does DOM stand for?",
        ChoiceA:"Document Objective Module",
        ChoiceB: "Distinct Object Model",
        ChoiceC: "Document Object Model",
        ChoiceD: "Direct Objective Module",
        correctAnswer: "C"
    },

        //repeat 5 times
{
        question: "If we want define style for an unique element, then which css selector will we use ?",
        ChoiceA: "class",
        ChoiceB: "id",
        ChoiceC: "element",
        ChoiceD: "var",
        correctAnswer: "B"
},
{
        question: "Which of the following is not JavaScript Data Types?",
        ChoiceA: "Undefined",
        ChoiceB: "Number",
        ChoiceC: "Boolean",
        ChoiceD: "Float",
        correctAnswer: "D"

},
{

        question: "What is the correct sequence of HTML tags for starting a webpage?",
        ChoiceA: "head, html, body, title",
        ChoiceB: "html, head, title, body",
        ChoiceC: "html, body, tyle, head",
        ChoiceD: "head, html, body, title",
        correctAnswer: "B"
},
{
        question: "How can you make a list that lists the items with numbers?",
        ChoiceA: "Ul",
        ChoiceB: "Li",
        ChoiceC: "Ol",
        ChoiceD: "Nu",
        correctAnswer: "C"
},
{
        question: "Inside which HTML element do we put the JavaScript?",
        ChoiceA: "<script>",
        ChoiceB: "<head>",
        ChoiceC: "<meta>",
        ChoiceD: "<style>",
        correctAnswer: "A"
}


];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 6

// functions


// start quiz

// start timer

//show time

//get question

// question click

//correct/incorrect feedback??

//next question

//quiz end

// final score var

//hide questions

//save high score

//submit initials






