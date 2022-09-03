//CREATE THE OBJECTS
//buttons
var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
//pages
var landingPage = document.getElementById("landing-page");
var quizPage = document.getElementById("quiz-page");
var gameOverPage = document.getElementById("game-over-page");
//timer
var countdownEl = document.getElementById("timer")
//question
var questionEl = document.getElementById("question");
//options
var option1El = document.getElementById("option-1");
var option2El = document.getElementById("option-2");
var option3El = document.getElementById("option-3");
var option4El = document.getElementById("option-4");


//setting this as a variable
let questionNumber = "";

//Questions array
//future code: put choices in array
var questions = [
    {
        question: "1: Inside which HTML element do we put the JavaScript?",
        options: ["a. <script>", "b. <scripting>", "c. <js>", "d. <javascript>"],
        answer: "b. <scripting>"
    },
    {
        question: "2. Where is the correct place to insert a JavaScript?",
        options: ["a. The <head> section", "b. The <body> section", "c. either", "d. none"],
        answer: "b. The <body> section"
       
    },
    {
        question: "3. What is the correct syntax to link an external script called 'script.js'?",
        options: ["a. <script link='script.js'>", "b. var = function()", "c. <script src='script.js'>", "d. none of the above"],
        answer: "c. <script src='script.js'>"        
    },
    {
        question: "4. How do you create a function in JavaScript?",
        options: ["a. function = true", "b. js = nameOfFunction()", "c. function = nameOfFunction()", "d. var = nameOfFunction"],
        answer: "c. function = nameOfFunction()"
    },
    {
        question: "5. How do you call a function?",
        options: ["a. Help, please", "b. nameOfFunction = true", "c. There is no need to call a function", "d. nameOfFunction()"],
        answer: "d. nameOfFunction()"
    },
    {
        question: "6. How does a FOR loop start?",
        options: ["a. When the page loads", "b. FOR loops are Python exclusive", "c. function (l = 3; loop 0 > p; FOR++)","d. for (i = 0; i < n; i++)"],
        answer: "d. for (i = 0; i < n; i++)"
    },
];

//displays questions and choices
function displayQuestions(n) {
    //change text of selected elements to display the questions
    var userQuestion = questions[n].question;
    var userOption1 = questions[n].options[0];
    var userOption2 = questions[n].options[1];
    var userOption3 = questions[n].options[2];
    var userOption4 = questions[n].options[3];
    questionEl.innerText = userQuestion;
    option1El.innerText = userOption1;
    option2El.innerText = userOption2;
    option3El.innerText = userOption3;
    option4El.innerText = userOption4;
}

//When the start button is pressed, the landing page is hidden and the #quiz-page is shown
function startQuiz () {
    landingPage.style.display = "none";
    quizPage.style.display = "flex";
    nextBtn.style.display = "none";
    // Test will start from the first question
    secondsLeft = 105;
    questionNumber = 0;
    displayQuestions(questionNumber);
    // When an option is activated then question number +1
    option1El.addEventListener("click", function (){
        console.log("question 1");
        nextBtn.style.display = "flex";
    });
    option2El.addEventListener("click",  function (){
        console.log("question 2");
        nextBtn.style.display = "flex";
    });
    option3El.addEventListener("click",  function (){
        console.log("question 3");
        nextBtn.style.display = "flex";
    });
    option4El.addEventListener("click",  function (){
        console.log("question 4");
        nextBtn.style.display = "flex";
    });
    option.addEventListener("click",  function (){
        console.log("option");
        nextBtn.style.display = "flex";
    });

    // When next button is clicked, new question is shown
    nextBtn.addEventListener("click", function (){
    });
}

// TIMER STARTS
var startTimer = setInterval(function() {
    secondsLeft--;
    countdownEl.innerText = secondsLeft

    // if time is below or equal to cero then stop countdown and game is over
    if (secondsLeft <= 0){
        clearInterval(startTimer)
        gameOver();
    // if questions are done then stop interval and game is over
    } else if (questionNumber >= questions.length +1) {
        clearInterval(startTimer);
        gameOver();
    }
}, 1000);

function gameOver () {
    landingPage.style.display = "none";
    quizPage.style.display = "none";
}

//check if question is right or wrong (questions===answers)
//display next question question index +++ (if index is less than question lenght then nextquestion is called. if not the game is over)

// game is over when all questions are answered or timer equals cero
//new screen is shown. New screen shows total score


// store scores into local storage



//add event listener
startBtn.addEventListener("click", startQuiz);