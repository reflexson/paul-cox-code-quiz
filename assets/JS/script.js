  
// Variables

const startButton = document.getElementById('start-btn')
const hsButton = document.getElementById('hs-btn')
const ejectElement = document.getElementById('eject')
const restartButton = document.getElementsByClassName('restart')
const timerElement = document.getElementById('topTimer')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answerStatusElement = document.getElementById('answerStatus')
const answer1Element = document.getElementById('ans1')
const answer2Element = document.getElementById('ans2')
const answer3Element = document.getElementById('ans3')
const answer4Element = document.getElementById('ans4')
const correctElement = document.getElementById('correct')
const wrongElement = document.getElementById('wrong')
const resultsElement =document.getElementById('results')
const quizContainerElement = document.getElementById('quizid')
const resultsContainerElement = document.getElementById('resultsid')
const hsContainerElement = document.getElementById('hsContainer')
const initialsElement = document.getElementById('initials')
const submitElement = document.querySelector('.submitBtn')
const scoreboardElement = document.getElementById('scoreboard')
let currentQuestionIndex = 0;
const wrongSeconds = 2;
let score = 0;
resultsElement.textContent = score;
var timeLeft = 60;



// Event Listeneers

startButton.addEventListener('click', () => {
  startTimer()
  startGame()
})

hsButton.addEventListener('click', () =>{
  quizContainerElement.classList.add('hide');
  hsContainerElement.classList.remove('hide');
} )

submitElement.addEventListener('click', () => {
  if (initialsElement.value.length == 0) {
    alert('Please enter your initials');
  }else{
    saveScore();
  window.location.reload();
  }
})

answer1Element.addEventListener('click', () => {
  if(questions[currentQuestionIndex].correct === "a"){
    score++;
    correctElement.classList.remove('hide');
  }else{
    wrongElement.classList.remove('hide');
    timeLeft -= wrongSeconds;
  }
  currentQuestionIndex++
  if (currentQuestionIndex === questions.length){
    setTimeout(loadResults, 1000);
  }else{
    setTimeout(showQuestion, 1000);
  }
})

answer2Element.addEventListener('click', () => {
  if(questions[currentQuestionIndex].correct === "b"){
    score++
    correctElement.classList.remove('hide');
  }else{
    wrongElement.classList.remove('hide');
    timeLeft -= wrongSeconds;
  }
  currentQuestionIndex++
  if (currentQuestionIndex === questions.length){
    setTimeout(loadResults, 1000);
  }else{
    setTimeout(showQuestion, 1000);
  }
})

answer3Element.addEventListener('click', () => {
  if(questions[currentQuestionIndex].correct === "c"){
    score++
    correctElement.classList.remove('hide');
  }else{
    wrongElement.classList.remove('hide');
    timeLeft -= wrongSeconds;
  }
  currentQuestionIndex++
  if (currentQuestionIndex === questions.length){
    setTimeout(loadResults, 1000);
  }else{
    setTimeout(showQuestion, 1000);
  }
})

answer4Element.addEventListener('click', () => {
  if(questions[currentQuestionIndex].correct === "d"){
    score++
    correctElement.classList.remove('hide');
  }else{
    wrongElement.classList.remove('hide');
    timeLeft -= wrongSeconds;
  }
  currentQuestionIndex++
  if (currentQuestionIndex === questions.length){
    setTimeout(loadResults, 1000);
  }else{
    setTimeout(showQuestion, 1000);
  }
})

// multiple restart buttons

for(var i = 0; i < restartButton.length; i++) {
  restartButton[i].addEventListener('click', function(){
 window.location.reload(); 
}, false);
}

// Functions

function startTimer() {
    var timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        showResults();
      } else {
        timerElement.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
  }

function startGame() {
  startButton.classList.add('hide');
  hsButton.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  ejectElement.classList.remove('hide');
  showQuestion();
}

function showQuestion() {
  wrongElement.classList.add('hide');
  correctElement.classList.add('hide');
  const question_data = questions[currentQuestionIndex];
  questionElement.innerText = question_data.question
  answer1Element.innerText = question_data.answer1
  answer2Element.innerText = question_data.answer2
  answer3Element.innerText = question_data.answer3
  answer4Element.innerText = question_data.answer4
}

function loadResults(){
  timeLeft = -1;
}

function showResults(){
  ejectElement.classList.add('hide');
  answerStatusElement.classList.add('hide');
  timerElement.textContent = "Timer";
  resultsElement.textContent = score;
  quizContainerElement.classList.add('hide');
  resultsContainerElement.classList.remove('hide');
}

function saveScore(){
  let scoreArray = JSON.parse(localStorage.getItem("userScore")) || []
  let newScore = {
    finalScore: score,
    userName: initialsElement.value,
  }
scoreArray.push(newScore);
localStorage.setItem("userScore", JSON.stringify(scoreArray));
}

function displayScores(){
  let scoreArray = JSON.parse(localStorage.getItem("userScore")) || []
  scoreArray.sort(function(a,b){
    return b.finalScore - a.finalScore
  })
  scoreArray.forEach(element => {
    const listItem = document.createElement("li");
    listItem.textContent = element.userName + '-' + element.finalScore + '/10';
    scoreboardElement.append(listItem)
  });
  if (scoreArray.length === 0){
    scoreboardElement.classList.add('hide');
  }
}

displayScores();


// Questions Object Array

const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript link?",
    answer1: "A - <js>",
    answer2: "B - <script>", 
    answer3: "C - <javascript>", 
    answer4: "D - <CSS>",
    correct: "b" 
  },
  {
    question: 'Which built-in method returns the calling string value converted to lower case?',
    answer1: "A - toLowerCase()",
    answer2: "B - toLower()",
    answer3: "C - changeCase(case)",
    answer4: "D - None of the above",
    correct: "a" 
  },
  {
    question: 'Which of the following function of Array object joins all elements of an array into a string?',
    answer1: "A - concat()",
    answer2: "B - join()",
    answer3: "C - pop()",
    answer4: "D - map()",
    correct: "b" 
  },
  {
    question: 'Which of the following type of variable is visible only within a function where it is defined?',
    answer1: "A - global variable",
    answer2: "B - local variable",
    answer3: "C - Both of the above",
    answer4: "D - None of the above.",
    correct: "b" 
  },
  {
    question: 'How do you add a comment in a CSS file?',
    answer1: "A - /* this is a comment */",
    answer2: "B - // this is a comment //",
    answer3: "C - // this is a comment",
    answer4: "D - <!-- this is a comment-->",
    correct: "a" 
  },
  {
    question: 'What HTML tag makes a link?',
    answer1: "A - <a>",
    answer2: "B - <tr>",
    answer3: "C - <lo>",
    answer4: "D - <link>",
    correct: "a" 
  },
  {
    question: 'What HTML tag makes a new line?',
    answer1: "A - <break>",
    answer2: "B - <a>",
    answer3: "C - <pb>",
    answer4: "D - <br> ",
    correct: "d" 
  },
  {
    question: 'What CSS property makes text go bold?',
    answer1: "A - font-size",
    answer2: "B - text-decoration",
    answer3: "C - bold",
    answer4: "D - font weight",
    correct: "d"  
  },
  {
    question: 'What two other tags do li tags need to work?',
    answer1: "A - <ul> or <h1>",
    answer2: "B - <h1> or <ol>",
    answer3: "C - <h1> or <p>",
    answer4: "D - <ul> or <ol>",
    correct: "d" 
  },
  {
    question: 'How do you write "Hello" in an alert box?',
    answer1: "A - alert(\"Hello\");",
    answer2: "B - lol(Im tired)",
    answer3: "C - you don't",
    answer4: "D - please be over",
    correct: "a" 
  }
]

