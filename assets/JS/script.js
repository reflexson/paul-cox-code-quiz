



    
// Variables

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answer1Element = document.getElementById('ans1')
const answer2Element = document.getElementById('ans2')
const answer3Element = document.getElementById('ans3')
const answer4Element = document.getElementById('ans4')
const correctElement = document.getElementById('correct')
const wrongElement = document.getElementById('wrong')
const resultsElement =document.getElementById('results')
const quizContainerElement = document.getElementById('quizid')
const resultsContainerElement = document.getElementById('resultsid')
let score = 0;
const initialsElement = document.getElementById('initials')
const submitElement = document.querySelector('.submitBtn')
let currentQuestionIndex = 0;

resultsElement.textContent = score;



// if (i == currentQuestionIndex.length-1)

// Event Listeneers

startButton.addEventListener('click', () => {
  startTimer()
  startGame()
})

answer1Element.addEventListener('click', () => {
  if(questions[currentQuestionIndex].correct === "a"){
    score++;
    correctElement.classList.remove('hide');
  }else{
    wrongElement.classList.remove('hide');
  }
  currentQuestionIndex++
  if (currentQuestionIndex === questions.length){
    setTimeout(showResults, 1000);
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
  }
  currentQuestionIndex++
  if (currentQuestionIndex === questions.length){
    setTimeout(showResults, 1000);
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
  }
  currentQuestionIndex++
  if (currentQuestionIndex === questions.length){
    setTimeout(showResults, 1000);
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
  }
  currentQuestionIndex++
  if (currentQuestionIndex === questions.length){
    setTimeout(showResults, 1000);
  }else{
    setTimeout(showQuestion, 1000);
  }
})



// Functions

// Timer

function startTimer() {
  var timeLeft = 30;
    var elem = document.getElementById('topTimer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        showResults();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
  }


function startGame() {
  startButton.classList.add('hide');
  questionContainerElement.classList.remove('hide');
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

function showResults(){
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
localStorage.setItem("userScore", JSON.stringify(scoreArray))

}
submitElement.onclick=saveScore;

function displayScores(){
  let scoreArray = JSON.parse(localStorage.getItem("userScore")) || []
  scoreArray.sort(function(a,b){
    return b.finalScore - a.finalScore
  })
  scoreArray.forEach(element => {
    const listItem = document.createElement("li");
    listItem.textContent = element.userName + '-' + element.finalScore + '/10';
    const scoreboardElement = document.getElementById('scoreboard');
    scoreboardElement.append(listItem)
  });

}
displayScores();


// Questions Object Array

const questions = [
  {
    question: "What is 2+2?",
    answer1: "2",
    answer2: "4", 
    answer3: "6", 
    answer4: "9",
    correct: "b" 
  },
  {
    question: 'What is 5 +1?',
    answer1: "2",
    answer2: "4",
    answer3: "6",
    answer4: "9",
    correct: "c" 
  },
  {
    question: 'What is 4 * 2?',
    answer1: "2",
    answer2: "4",
    answer3: "6",
    answer4: "8",
    correct: "d" 
  }
]

