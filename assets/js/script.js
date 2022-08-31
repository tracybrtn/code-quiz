//Create the objects
var startBtn = document.querySelector("#start-btn");
var landingPage = document.getElementById("landing-page");
var quizPage = document.getElementById("quiz-page");


//When the start button is pressed, then #quiz-page is shown
function startQuiz () {
    landingPage.style.display = "none";
    quizPage.style.display = "flex";
}


//add event listener
startBtn.addEventListener("click", startQuiz);