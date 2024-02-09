
const questions = [
  {
    ques: "What does SSD stand for in terms of computer storage?",
    options:[
      {text: "Solid-State Drive", correct: true},
      {text: "Serial Storage Device", correct: false},
      {text: "Secondary Storage Disk", correct: false},
      {text: "System Storage Drive", correct: false},

    ]
  },
  {
    ques: "Which programming language is often used for web development alongside HTML and CSS?",
    options:[
      {text: "JavaScript", correct: true},
      {text: "C#", correct: false},
      {text: "Java", correct: false},
      {text: "NodeJs", correct: false},

    ]
  },
  {
    ques: "What does VPN stand for??",
    options:[
      {text: "Verified Private Network", correct: false},
      {text: "Very Personal Network", correct: false},
      {text: "Virtual Private Network", correct: true},
      {text: "Visual Presentation Network", correct: false},

    ]
  },
  {
    ques: "Which technology is used for wireless communication between devices over short distances?",
    options:[
      {text: "Bluetooth", correct: true},
      {text: "NFC", correct: false},
      {text:  "Wifi", correct: false},
      {text: "LTE", correct: false},

    ]
  },
  {
    ques: "What does CPU stands for?",
    options:[
      {text: "Central Power Unit",correct: false},
      {text: "Computer Processing Unit", correct: false},
      {text: "Central Power Unit", correct: false},
      {text:  "Central Processing Unit", correct: true},

    ]
  },
];
let ques = document.querySelector(".ques");
let options = document.querySelector(".options");
let nextBtn = document.querySelector(".btn");

let currQuesInd = 0;
let score = 0;

function startQuiz(){
  currQuesInd = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  if(currQuesInd===5){
    console.log("game over");
    gameOver();
  }
  resetState();
  let currQues = questions[currQuesInd];
  let quesNum = currQuesInd++;
  ques.innerText = `Q${quesNum+1}.  ${currQues.ques}`;
  // console.log(ques.innerText);
  currQues.options.forEach(ans=> {
    const button = document.createElement("button");
    button.classList.add("opt");
    button.innerText = ans.text;
    options.appendChild(button);
    if(ans.correct){
      button.dataset.correct = ans.correct;
    }
    button.addEventListener("click",selectAns);
  });
}

function resetState(){
  nextBtn.style.display = "none";
  while(options.firstChild){
    options.removeChild(options.firstChild);
  }
}

function selectAns(e){
  let selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct;
  if(isCorrect){
    console.log("correct ans");
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("wrong");
  }
  Array.from(options.children).forEach(button=>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");          //show the correct option even if wrong answer is selected
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
  nextBtn.addEventListener("click",showQuestion);
}

function gameOver(){
  if(score>=3){
    ques.innerHTML = `<h2 style="text-align:center">WellDone! :)</h2> <h1 style="color: #0F1035;">score: ${score}<h1>`
  }
  else{
    ques.innerHTML = `<h2 style="text-align:center">You can do Better! :(</h2> <h1 style="color: #0F1035;">score: ${score}<h1>`

  }
  options.innerHTML = "";
}
startQuiz();