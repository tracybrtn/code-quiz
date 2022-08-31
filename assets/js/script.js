//Create the objects
var startBtn = document.getElementById("start-btn");
var landingPage = document.getElementById("landing-page");
var quizPage = document.getElementById("quiz-page");
var questionEl = document.getElementById("question");
var answerEl1 = document.getElementById("option-1");
var answerEl2 = document.getElementById("option-2");
var answerEl3 = document.getElementById("option-3");
var answerEl4 = document.getElementById("option-4");
//setting this as a variable
let questionNumber

//Questions array
var questions = [
    {
        question: "1: Inside which HTML element do we put the JavaScript?",
        options: [
            {text: "a. <script>", correct: true},
            {text: "b. <scripting>", correct: false},
            {text: "c. <js>", correct: false},
            {text: "d. <javascript>", correct: false},
        ]
    },
    {
        question: "2. Where is the correct place to insert a JavaScript?",
        options: [
            {text: "a. The <head> section", correct: false},
            {text: "b. The <body> section", correct: true},
            {text: "c. either", correct: false},
            {text: "d. none", correct: false},
        ]
    },
    {
        question: "3. What is the correct syntax to link an external script called 'script.js'?",
        options: [
            {text: "a. <script link='script.js'>", correct: false},
            {text: "b. var = function()", correct: false},
            {text: "c. <script src='script.js'>", correct: true},
            {text: "d. none of the above", correct: false},
        ]
    },
    {
        question: "4. How do you create a function in JavaScript?",
        options: [
            {text: "a. function = true", correct: false},
            {text: "b. js = nameOfFunction()", correct: false},
            {text: "c. function = nameOfFunction()", correct: true},
            {text: "d. var = nameOfFunction", correct: false},
        ]
    },
    {
        question: "5. How do you call a function?",
        options: [
            {text: "a. Help, please", correct: false},
            {text: "b. nameOfFunction = true", correct: false},
            {text: "c. There is no need to call a function", correct: false},
            {text: "d. nameOfFunction()", correct: true},
        ]
    },
    {
        question: "6. How does a FOR loop start?",
        options: [
            {text: "a. When the page loads", correct: false},
            {text: "b. FOR loops are Python exclusive", correct: false},
            {text: "c. function (l = 3; loop 0 > p; FOR++)", correct: false},
            {text: "d. for (i = 0; i < n; i++)", correct: true},
        ]
    },
];



//When the start button is pressed, the landing page is hidden and the #quiz-page is shown
function startQuiz () {
    landingPage.style.display = "none";
    quizPage.style.display = "flex";
    // Test will start from the first question
    questionNumber = 0;
    displayQuestions(questionNumber);
}

function displayQuestions(n) {
    //change text of selected elements to display the questions
    questionEl.innerText = questions[n].question
    answerEl1.innerText = questions[n].options[0].text
    answerEl2.innerText = questions[n].options[1].text
    answerEl3.innerText = questions[n].options[2].text
    answerEl4.innerText = questions[n].options[3].text
}


//add event listener
startBtn.addEventListener("click", startQuiz);

