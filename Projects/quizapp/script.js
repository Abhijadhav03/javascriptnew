const questions = [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false }
      ]
    },
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      answers: [
        { text: "var myVar;", correct: true },
        { text: "int myVar;", correct: false },
        { text: "variable myVar;", correct: false },
        { text: "letVar myVar;", correct: false }
      ]
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      answers: [
        { text: "//", correct: true },
        { text: "#", correct: false },
        { text: "/* */", correct: false },
        { text: "<!-- -->", correct: false }
      ]
    },
    {
      question: "Which of the following is a JavaScript framework?",
      answers: [
        { text: "Angular", correct: true },
        { text: "Laravel", correct: false },
        { text: "Django", correct: false },
        { text: "Ruby on Rails", correct: false }
      ]
    },
    {
      question: "What is the output of 'typeof null' in JavaScript?",
      answers: [
        { text: "'object'", correct: true },
        { text: "'null'", correct: false },
        { text: "'undefined'", correct: false },
        { text: "'boolean'", correct: false }
      ]
    },
    {
      question: "How do you write a function in JavaScript?",
      answers: [
        { text: "function myFunction() {}", correct: true },
        { text: "def myFunction() {}", correct: false },
        { text: "func myFunction() {}", correct: false },
        { text: "function: myFunction() {}", correct: false }
      ]
    },
    {
      question: "Which is the fastest land animal?",
      answers: [
        { text: "Cheetah", correct: true },
        { text: "Lion", correct: false },
        { text: "Horse", correct: false },
        { text: "Leopard", correct: false }
      ]
    },
    {
      question: "Which animal is known for having the longest lifespan?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Bowhead Whale", correct: true },
        { text: "Galápagos Tortoise", correct: false },
        { text: "Blue Whale", correct: false }
      ]
    },
    {
      question: "Which bird is known for being flightless?",
      answers: [
        { text: "Penguin", correct: true },
        { text: "Eagle", correct: false },
        { text: "Parrot", correct: false },
        { text: "Sparrow", correct: false }
      ]
    },
    {
      question: "Which mammal is known for laying eggs?",
      answers: [
        { text: "Platypus", correct: true },
        { text: "Kangaroo", correct: false },
        { text: "Bat", correct: false },
        { text: "Elephant", correct: false }
      ]
    },
    {
      question: "Which animal has the highest blood pressure?",
      answers: [
        { text: "Giraffe", correct: true },
        { text: "Elephant", correct: false },
        { text: "Shark", correct: false },
        { text: "Whale", correct: false }
      ]
    }
  ];
  
  const questionelement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionelement.innerHTML = (currentQuestionIndex + 1) + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  // Disable all buttons after selecting an answer
  Array.from(answerButtonsElement.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  nextButton.style.display = "block"; // Show the next button
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  resetState();
  questionelement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Restart";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", startQuiz);
}
 
// Start the quiz when the page loads
startQuiz();