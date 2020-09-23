var questions = [
    {
        question: "What is the best programming language?",
        choices: ["Java", "Go", "Ruby", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "Is CSS fun",
        choices: ["Yes", "No" ],
        answer: "No"
    },
    {
        question: "What is 7 x 7?",
        choices: ["49", "120", "56", "14"],
        answer: "49"
    },
]

var score = 0;
var currentQuestionIndex = -1;
var timeCount = 0;
var timer;

function start() {
    timeCount = 100;
    document.getElementById("timeCount").innerHTML = timeCount;
    timer = setInterval(function() {
        document.getElementById("timeCount").innerHTML = timeCount;
        if (timeCount === 0) {
            clearInterval(timer);
            alert("Times up!");
        }
    }, 1000);

    next();
}

function endGame() {
    clearInterval(timer);

    //Add content for end screen

    document.getElementById("quizArea").innerHTML = quizContent
}
    
//deduct 15seconds from the timer if user chooses an incorrect answer
function incorrect() {
    timeLeft -= 15; 
    next();
}

//increases the score by 20points if the user chooses the correct answer
function correct() {
    score += 20;
    next();
}

function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    getscore();
}

function getscore(){
    var quizContent = `<h2>` + localStorage.getItem("highscoreName") + `'s highscore is: </h2>
    <h1>` + localStorage.getItem("highscore") + `</h1>
    <button onclick="clearScore()"> Clear score!</button><button onclick="resetGame()"Try again?</button>
    `;

    document.getElementById("quizArea").innerHTML = quizContent;
}