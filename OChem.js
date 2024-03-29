const questions = [
  {
    question: "How many electrons occupy the bonding molecular orbitals of CN triple bonds?",
    answers: [
      { text: "2", correct: false},
      { text: "4", correct: false},
      { text: "8", correct: false},
      { text: "6", correct: true},
    ],
  },
  {
    question: "Which of the following is not amphoteric?",
    answers: [
      { text: "NH2", correct: false},
      { text: "HF", correct: false},
      { text: "NH4+", correct: true},
      { text: "HCO3", correct: false},
    ],
  },
  {
    question: "Which of the following is a chiral C5H12O 1º-alcohol?",
    answers: [
      { text: "3-methyl-2-butanol", correct: false },
      { text: "2-methyl-2-butanol", correct: false },
      { text: "3-methyl-1-butanol", correct: false },
      { text: "2-methyl-1-butanol", correct: true },
    ],
  },
  {
    question: "Which of the following reagents would you expect to react with bromocyclopentane by an SN2 mechanism?",
    answers: [
      { text: "C2H5OH", correct: false },
      { text: "C2H5O(-) K(+)", correct: false },
      { text: "NaCN", correct: true },
      { text: "(CH3)3N", correct: false },
    ],
  },
  {
    question: "Chloroethane, C2H5Cl, does not react with methanol under mild conditions. What reagent could be added to the reaction mixture to increase the rate of substitution.?",
    answers: [
      { text: "HCl (conc.)", correct: false },
      { text: "NaOH", correct: false },
      { text: "NH4OH", correct: false },
      { text: "AgNO3", correct: true },
    ],
  },
  {
    question: "Which of the following compounds is unlikely to react with sodium metal?",
    answers: [
      { text: "C2H5OC2H5", correct: true },
      { text: "C2H5OH", correct: false },
      { text: "C2H5Br", correct: false },
      { text: "C2H5NH2", correct: false },
    ],
  },
  {
    question: "The reaction of sodium ethoxide with iodoethane to form diethyl ether is classified as ...",
    answers: [
      { text: "an electrophilic substitution", correct: false },
      { text: "a nucleophilic substitution", correct: true},
      { text: "a radical substitution", correct: false },
      { text: "an electrophilic addition", correct: false },
    ],
  },
  {
    question: "Compound X reacts with HI. The product of this reaction, when treated with KOH in ethanol, gives Y ( an isomer of X ). Ozonolysis of Y (H2O2 workup) produces two compounds: a two carbon carboxylic acid, and a four carbon ketone. What is X?",
    answers: [
      { text: "2-methyl-2-pentene", correct: false },
      { text: "4-methyl-1-pentene", correct: false },
      { text: "2,3-dimethyl-2-butene", correct: false },
      { text: "3-methyl-1-pentene", correct: true },
    ],
  },
  {
    question: "The SN2 reaction of 1-chloro-3-methylbutane with sodium methoxide is relatively slow, but can be accelerated by the addition of a small amount of NaI. How is this catalysis best explained?",
    answers: [
      { text: "The sodium cation helps pull off the chloride anion", correct: false },
      { text: "The iodide anion activates the methoxide nucleophile", correct: false },
      { text: "SN2 reaction of iodide ion converts the alkyl chloride to the more reactive alkyl iodide", correct: true },
      { text: "The NaI changes the mechanism to SN1", correct: false },
    ],
  },
  {
    question: "Which one of the following alcohols will be oxidized by Jones' reagent (CrO3 in 50% sulphuric acid) to a ketone having the same number of carbon atoms ?",
    answers: [
      { text: "1-methylcyclohexanol", correct: false },
      { text: "3,3-dimethylcyclopentanol", correct: true },
      { text: "3-methyl-1-hexanol", correct: false },
      { text: "3-ethyl-3-hexanol", correct: false },
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
}else{
  showScore();
}
}

nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){
  handleNextButton();
  } else{
  startQuiz();
}
});


startQuiz();