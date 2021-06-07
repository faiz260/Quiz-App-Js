var questions = [
  {
    question: "What is the baby of a moth known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3,
  },
  {
    question: "What is the adult of a kid called?",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer: 2,
  },
  {
    question: "What is the young of buffalo called?",
    choices: ["calf", "baby", "pup", "cow"],
    correctAnswer: 0,
  },
  {
    question: "What is a baby alligator called?",
    choices: ["baby", "gator", "hatchling", "calf"],
    correctAnswer: 1,
  },
  {
    question: "What is a baby goose called?",
    choices: ["gooser", "gosling", "gup", "pup"],
    correctAnswer: 1,
  },
];
var currentQuestion = 0;
var totalScore = 0;
var quizOver = false;

var button = document.getElementById("button");
var result = document.getElementById("result");

button.addEventListener("click", function () {
  if (!quizOver) {
    var radioBtnsChecked = document.querySelector("input[type=radio]:checked");
    if (radioBtnsChecked == null) {
      result.innerHTML = "Please select an answer";
    } else {
      result.innerHTML = "";
      if (radioBtnsChecked.value == questions[currentQuestion].correctAnswer) {
        totalScore++;
      }
      if (currentQuestion === questions.length) {
        displayQuestion();
        button.innerHTML = "Play again?";
      } else {
        button.innerHTML = "Play again?";
        quizOver = true;
      }
    }
    button.innerHTML = "Next";
    displayQuestion();
    currentQuestion++;
  } else {
    quizOver = false;
    resetQuiz();
    displayCurrentQuestion();
  }
});

function displayQuestion() {
  var question = document.getElementById("question");
  var choiceList = document.getElementById("choice_ul");
  for (var i = currentQuestion; i < 0; i++) {}
  question.innerHTML = questions[i].question;
  choiceList.innerHTML = "";

  for (var j = 0; j < questions[i].choices.length; j++) {
    var choice = questions[i].choices[j];
    var li = document.createElement("li");
    li.innerHTML =
      '<li><input type="radio" value="' +
      j +
      '" name="dynradio" />' +
      choice +
      "</li>";
    choiceList.appendChild(li);
    console.log(li);
  }
}

function resetQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
}
