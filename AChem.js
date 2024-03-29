const questions = [
  {
    question: "As you move from left to right across the periodic table ____.",
    answers: [
      { text: "atomic radius increases", correct: false },
      { text: "Ionization energy decreases", correct: false },
      { text: "atomic radius decreases", correct: true },
      { text: "Electronegativity decreases", correct: false },
    ],
  },
  {
    question: "Aqua regla, the reagent that can be used to dissolve gold, is a 3:1 mixture of which acids?",
    answers: [
      { text: "Hydrochloric and Nitric Acids", correct: true},
      { text: "Hydrofluoric and Nitric Acids", correct: false },
      { text: "Hydrochloric and Sulfuric Acids", correct: false },
      { text: "Perchloric and Sulfuric Acids", correct: false },
    ],
  },
  {
    question: "This detects contamination from reagents, sample handling, and the entire measurement process.",
    answers: [
      { text: "matched-matrix blank", correct: false },
      { text: "method blank", correct: true },
      { text: "solvent blank", correct: false },
      { text: "callibration blank", correct: false },
    ],
  },

  {
    question: "What is the main ISO standard used by testing and callibration laboratories to gain accredits and formal recognition of their competencies to carry out tests and/or calibrations, including sampling?",
    answers: [
      { text: "ISO 9000:2000", correct: false },
      { text: "AOAC", correct: false },
      { text: "ISO/IEC 17025", correct: true },
      { text: "EURACHEM", correct: false },
    ],
  },

  {
    question: "The method that is widely used for the determination of the protein content of meat and animal food is the ____. ",
    answers: [
      { text: "Kjeldahl Method", correct: true },
      { text: "McBride Method", correct: false },
      { text: "Mohr Method", correct: false },
      { text: "Liebeig Method", correct: false },
    ],
  },

  {
    question: "What happens to the volume of a fully inflated balloon when it is taken outside on a cold day?",
    answers: [
      { text: "its volume increases", correct: false },
      { text: "Its volume decreases", correct: true },
      { text: "It remains the same", correct: false },
      { text: "Its volume becomes equal to zero", correct: false },
    ],
  },

  {
    question: "Which of the following instruments uses a cuvette?",
    answers: [
      { text: "Gas Chromatography", correct: false },
      { text: "UV-Vis Spectrophotometer", correct: true },
      { text: "pH Meter", correct: false },
      { text: "Flame-AAS", correct: false },
    ],
  },

  {
    question: "What will you perform to know that the Atomic Absorption Spectrometer(AAS) continues to work properly? ",
    answers: [
      { text: "Calibration Check", correct: true },
      { text: "QC sample recoveries", correct: false },
      { text: "Blank", correct: false },
      { text: "Standard Addition", correct: false },
    ],
  },

  {
    question: "Glass container is NOT suitable for ___.",
    answers: [
      { text: "oil and grease determination", correct: false },
      { text: "microbiological analysis", correct: false },
      { text: "inorganic trace analysis", correct: true },
      { text: "all of the choices", correct: false },
    ],
  },

  {
    question: "The maximum holding time for acid preserved samples that will be subjected to determination of metals is ____.",
    answers: [
      { text: "48 Hours", correct: false },
      { text: "1 Week", correct: false },
      { text: "3 Months", correct: false },
      { text: "6 Months", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question"); 
const answerButtons=document.getElementById("answer-buttons"); 
const nextButton=document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next"; 
  console.log(currentQuestionIndex);
  showQuestions();
}

function showQuestions(){
  resetState();
  var currentQuestion = questions[currentQuestionIndex]; 
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer=> {
    const button = document.createElement("button"); 
    button.innerHTML = answer.text; 
    button.classList.add("btn"); 
    answerButtons.appendChild(button);
    if(answer.correct == true){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  var selectedBtn = e.target;
  var isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else{
    selectedBtn.classList.add("incorrect");
    /*alert("This is incorrect!");*/
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
} 

function showScore(){
  resetState();
  questionElement.innerHTML = "You scored " + score + " out of " + questions.length + "!";
  nextButton.innerHTML = "Answer Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex += 1;
  console.log(currentQuestionIndex)
  if (currentQuestionIndex < questions.length){
    showQuestions();
  }
    else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }   else{
  startQuiz();
  }
});

startQuiz();