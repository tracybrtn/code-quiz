//CREATE THE OBJECTS
//pages
var landingPage = document.getElementById("landing-page");
var quizPage = document.getElementById("quiz-page");
var gameOverPage = document.getElementById("game-over-page");
var highScoresPage = document.getElementById("high-scores-page");
//LANDING PAGE
    //start and high scores buttons
var startBtn = document.getElementById("start-btn");
var highScoresBtn = document.getElementById("high-scores-btn");
//QUIZ PAGE
    //timer
var countdownEl = document.getElementById("timer")
    //question
var questionEl = document.getElementById("question");
    //options
var option1El = document.getElementById("option-1");
var option2El = document.getElementById("option-2");
var option3El = document.getElementById("option-3");
var option4El = document.getElementById("option-4");
    //answers
var answerContainerEl = document.getElementById("answer-container");
var showAnswerEl = document.getElementById("show-answer");
//GAME OVER PAGE
    //score
var scoreEl = document.getElementById("score");
var submitEl = document.getElementById("initials-submit");
var initialsEl = document.getElementById("initials-score");
var highScoresEl = document.getElementById("high-scores-list");
var replayBtn = document.getElementById("replay-btn");

//HIGH SCORES PAGE
var playAgainBtn = document.getElementById("play-again-btn");



//setting variables for the beginning of the game
let questionNumber = 0;
let score = 0;



//Questions array
var questions = [
    {
        question: "1: Inside which HTML element do we put the JavaScript?",
        options: ["a. <script>", "b. <scripting>", "c. <js>", "d. <javascript>"],
        answer: "a. <script>"
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
function displayQuestions(questionNumber) {
    //change text of selected elements to display the questions
    var userQuestion = questions[questionNumber].question;
    var userOption1 = questions[questionNumber].options[0];
    var userOption2 = questions[questionNumber].options[1];
    var userOption3 = questions[questionNumber].options[2];
    var userOption4 = questions[questionNumber].options[3];
    questionEl.innerText = userQuestion;
    option1El.innerText = userOption1;
    option2El.innerText = userOption2;
    option3El.innerText = userOption3;
    option4El.innerText = userOption4;
}

//STARTS GAME
//When the start button is pressed, the landing page game over and high scores page are hidden and the #quiz-page is shown
function startQuiz () {
    landingPage.style.display = "none";
    quizPage.style.display = "flex";
    gameOverPage.style.display = "none";
    highScoresPage.style.display = "none";
    // Test will start at 75 seconds
    secondsLeft = 75;
    // TIMER STARTS
    var startTimer = setInterval(function() {
        secondsLeft--;
        countdownEl.innerText = secondsLeft
        // if time is below or equal to cero then stop countdown and game is over
        if (secondsLeft <= 0){
            clearInterval(startTimer)
            gameOver();
        // if questions are done then stop interval and game is over
        } else if (questionNumber >= questions.length) {
            clearInterval(startTimer);
            console.log("Final score is " + score);
            gameOver();
        }
    }, 1000);
    //test will start at question number 0
    questionNumber = 0;
    displayQuestions(questionNumber);
}

//Check if answer is correct and show next question
function checkAnswer(answer) {
    //check if answer is right or wrong by checking if the answer and the choice are the same
    if (questions[questionNumber].answer === questions[questionNumber].options[answer]) {
        // correct answer
        showAnswerEl.innerText = "Correct!";
        //add points
        score = score + 10;

    } else {
        // if it is not right it is wrong
        showAnswerEl.innerText = "Wrong! The right answer is " + questions[questionNumber].answer + ".";
        //substract time
        secondsLeft = secondsLeft - 10;
    }
    questionNumber++;
    answerContainerEl.style.display = "block";
    displayQuestions(questionNumber);
    console.log(score);
};

//quiz is over
function gameOver () {
    landingPage.style.display = "none";
    quizPage.style.display = "none";
    highScoresPage.style.display = "none";
    gameOverPage.style.display = "flex";
    scoreEl.innerText = score;
}

function storeScore () {
    //get item high scores
    var savedHighScores = localStorage.getItem('high scores');
    var scoresArr;
    console.log(savedHighScores);

    //if there are not any saved high scores, then the array is an empty array
    if (savedHighScores === null) {
        scoresArr = []
    // if there are any high scores, then they show up in the function
    } else {
        scoresArr = JSON.parse(savedHighScores)
    }
    // store both name and score of users
    let userInfo = {
        name: initialsEl.value,
        score: score
    }
    console.log(userInfo);
    scoresArr.push(userInfo);
    console.log(scoresArr);

    //stringify array to store in local
    var scoresArrString = JSON.stringify(scoresArr);
    //store array into high score item
    window.localStorage.setItem("high scores", scoresArrString);

    //show high score screen
    showHighScores();
}


function showHighScores () {
    landingPage.style.display = "none";
    quizPage.style.display = "none";
    highScoresPage.style.display = "flex";
    gameOverPage.style.display = "none";

    //display high scores
    var getHighScores = localStorage.getItem("high scores");
    //check if there are any in local storage
    if (getHighScores === null) {
        return;
    }
    //transform strings into objects
    var scoresArrParse = JSON.parse(getHighScores);
    console.log(scoresArrParse);
    //append items
    for (i = 0; i < scoresArrParse.length; i++) {
        var showScores = document.createElement("p");
        showScores.textContent = scoresArrParse[i].name + ": " + scoresArrParse[i].score;
        highScoresEl.appendChild(showScores);
        console.log(showScores);
    }
}

// Choices/options
function choose1() {
    checkAnswer(0);
}

function choose2() {
    checkAnswer(1);
}

function choose3() {
    checkAnswer(2);
}

function choose4() {
    checkAnswer(3);
}

//add event listeners
    //Start Quiz
startBtn.addEventListener("click", startQuiz);
replayBtn.addEventListener("click", startQuiz);
playAgainBtn.addEventListener("click", startQuiz);
    //Check High Scores
highScoresBtn.addEventListener("click", showHighScores);
    //Choose options and check answers
option1El.addEventListener("click", choose1);
option2El.addEventListener("click", choose2);
option3El.addEventListener("click", choose3);
option4El.addEventListener("click", choose4);
    //submit high score
submitEl.addEventListener("click", function() {
    if (initialsEl.value === "") {
        alert("Please enter your initials");
        return;
    }
    storeScore();
})