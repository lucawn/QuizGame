const quizData = [
  {
    question: "What year did the first iPhone come out?",
    a: "2000",
    b: "2003",
    c: "2007",
    d: "2009",
    correct: "c",
  },
  {
    question: "What does the 'i' stand for?",
    a: "Intelligent",
    b: "Internet",
    c: "Idea",
    d: "Information",
    correct: "b",
  },
  {
    question: "Which of these is NOT a model of the iphone?",
    a: "iPhone 11 Pro",
    b: "iPhone SE",
    c: "iPhone X",
    d: "iPhone Ultra",
    correct: "d",
  },
  {
    question: "How many iphones have been sold in total?",
    a: "Over 20 million",
    b: "Over 100 million",
    c: "Over one billion",
    d: "Over two billion",
    correct: "d",
  },
  {
    question: "How many iphone users are there worldwide?",
    a: "900 million",
    b: "1 billion",
    c: "3 billion",
    d: "7 billion",
    correct: "a",
  },
];

const questionEl = document.getElementById("question");
const a_textEl = document.getElementById("a_text");
const b_textEl = document.getElementById("b_text");
const c_textEl = document.getElementById("c_text");
const d_textEl = document.getElementById("d_text");
const nextBtn = document.getElementById("next-btn");
let currentQuizNum = 0;
let answer = "";
let score = 0;
let hasSelected = false;
const answersEls = document.getElementsByName("answer");

loadQuiz();

function getSelected() {
  answersEls.forEach((answerEl) => {
    // check if any answer is selected
    if (answerEl.checked) {
      answer = answerEl.id;
      hasSelected = true;
      // check if the answer is right
      if (answer === quizData[currentQuizNum].correct) {
        score++;
      }
      currentQuizNum++;
    }
  });
}

function loadQuiz() {
  const currentQuizData = quizData[currentQuizNum];
  hasSelected = false;
  answersEls.forEach((answerEl) => {
    //unselect all answers
    answerEl.checked = false;
  });
  questionEl.innerText = currentQuizData.question;
  a_textEl.innerText = currentQuizData.a;
  b_textEl.innerText = currentQuizData.b;
  c_textEl.innerText = currentQuizData.c;
  d_textEl.innerText = currentQuizData.d;
}

nextBtn.addEventListener("click", () => {
  getSelected();
  if (currentQuizNum < quizData.length && hasSelected === true) {
    loadQuiz();
  }
  if (currentQuizNum === quizData.length) {
    alert(
      `Well done! You answered correctly at ${score}/${quizData.length} questions.`
    );
    location.reload();
  }
});
