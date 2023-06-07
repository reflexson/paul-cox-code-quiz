



    
// Variables

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answer1Element = document.getElementById('ans1')
const answer2Element = document.getElementById('ans2')
const answer3Element = document.getElementById('ans3')
const answer4Element = document.getElementById('ans4')

let score = 0;

let currentQuestionIndex = 0;


// Event Listeneers

startButton.addEventListener('click', () => {
  startTimer()
  startGame()
})

answer1Element.addEventListener('click', () => {
  if(questions[currentQuestionIndex].correct === "a"){
    score++
  }
  currentQuestionIndex++
  showQuestion()
})

answer2Element.addEventListener('click', () => {
  if(questions[currentQuestionIndex].correct === "b"){
    score++
  }
  currentQuestionIndex++
  showQuestion()
})

answer3Element.addEventListener('click', () => {
  if(questions[currentQuestionIndex].correct === "c"){
    score++
  }
  currentQuestionIndex++
  showQuestion()
})

answer4Element.addEventListener('click', () => {
  if(questions[currentQuestionIndex].correct === "d"){
    score++
    
  }
  currentQuestionIndex++
  showQuestion()
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
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
  }


function startGame() {
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  showQuestion();
}

function showQuestion() {
  const question_data = questions[currentQuestionIndex];
  questionElement.innerText = question_data.question
  answer1Element.innerText = question_data.answer1
  answer2Element.innerText = question_data.answer2
  answer3Element.innerText = question_data.answer3
  answer4Element.innerText = question_data.answer4
}

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

