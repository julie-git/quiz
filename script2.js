
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
      title: "What takes precendence when creating a Bootstrap grid?.",
      choices: ["columns", "tags", "images", "rows"],
      answer: "rows"
  },
  {
      title: "What do you need to create make stuff happen when clicking on a button?",
      choices: ["function", "event handler", "event listener", "script"],
      answer: "event listener"
  },
  {
    title: "What is Joe's favorite color?",
    choices: ["chartruse", "magenta", "salmon", "turqoise"],
    answer: "salmon"
  }
];

var mainEl = document.getElementById("main");
var readEl = document.getElementById("read");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");
var buttonEl = document.getElementById("startbtn");
var choiceboxE1 = document.getElementById("choicebox");
var totalScoreEl = document.getElementById("totalscore");
var answerEl = document.getElementById("answerbox");
var welcomeEl = document.querySelector("h1");
var highscoreEl = document.getElementById("highscore");

var totalScore = 0;
var highScore = 0;
var questPerMillisecond = 10000; //time between questions
var questionIndex = 0;
var userAnswer = "";
var totalSeconds = 75;
var secondsElapsed = 0;
var qinterval;
var secondsLeft = totalSeconds;
var evtFired = false;


// $.getScript("questions.js", function() {
//   alert("Script loaded but not necessarily executed.");
// });
// console.log(questions);
// console.log(questions[0].title);
//  console.log("questions[0].choices= "+ questions[0].choices);
//  console.log("questions[0].choices[0] = " + questions[0].choices[0]);
// console.log(questions[0].answer);
// console.log("question 3 title:" +  questions[3].title);
// console.log("questions.length="+ questions.length);
 console.log(highscoreEl);


function startTimer() {
    // Write code to start the timer here
    console.log("startTimer");
    clearInterval(qinterval);
    qinterval= setInterval(function(){
      console.log("inside interval");
      secondsElapsed++;
      console.log('secondsElapsed =' +secondsElapsed )
      secondsLeft = totalSeconds - secondsElapsed;
      console.log('secondsLeft =' +secondsLeft );
      showTime();
      if(totalSeconds-secondsElapsed<=0 ){
        clearInterval(qinterval);
         console.log("quiz over");
         quizOver();
      }
      // timerEl.textContent = secondsLeft + " seconds remaining to complete quiz";
      showTime();
    },1000)
    // showquestions();
  }



function showquestions() {
  console.log("called showquestions");
  console.log('showquestions:' + questionIndex );
  //clear answer result 
  answerEl.textContent = "";
  if (questionIndex < questions.length){
  // myTimer();
      mainEl.append(bodyEl);
      mainEl.textContent = "";
       console.log("showquestion questionIndex =" + questionIndex);
      console.log(questions[questionIndex]);
  
       mainEl.textContent = questions[questionIndex].title;
       displayChoices();
  }else{
    console.log("end of questions");
    clearInterval(qinterval);
    quizOver();
   }
  
}



function displayChoices(){
  var data = questions[questionIndex].choices;
	// var output="";
	// var output2="";
  var dataList;
  choiceboxE1.textContent = '';
   console.log("displayChoices" + questionIndex );
   console.log(questions[questionIndex].choices );
  //  buttonContainer = document.getElementById('#choicebox');
   var buttonsToCreate, buttonContainer, newButton;
	for(var i=0; i< data.length; i++)
	{
    dataList=data[i];
    // newPTag = document.createElement('p');
     newButton = document.createElement('input');
     newButton.type = 'button';
     newButton.value = data[i];
     newButton.id = data[i];

     newButton.onclick = function () {
      console.log('You pressed '+this.id);
      console.log('You pressed '+this.value);
      return this.value;
           
      };
      //  newPTag.append(newButton);
      //  choiceboxE1.append(newPTag);
       choiceboxE1.append(newButton);
  }
  //stop timer
  // clearInterval(qinterval);
  // totalSeconds = 0;
}

function showTime(){
  timerEl.textContent = "Time : " + secondsLeft;
}

function showHighscore(){
  highscoreEl.textContent = "High Score : " + highScore;
}

function checkAnswers(){
   var questionAnswer = questions[questionIndex].answer;
   console.log("checkAnswer: questionAnswer=" + questionAnswer)
   console.log("checkAnswer: userAnswer=" + userAnswer);
   //clear the question from the screen
  //  choiceboxE1.innerHTML = "";
  if (userAnswer === questionAnswer){
      totalScore++;
      console.log("checkAnswer: totalScore" + totalScore);
      answerEl.textContent = "Correct";
      
   }else{
      answerEl.textContent = "Wrong.";
      //deduct 15 seconds from totalTime as penalty
      totalSeconds = totalSeconds -15;
   }
    updateTotalScore();
    userAnswer = "";
    questionIndex++;
  }
  

function updateTotalScore(){
  totalScoreEl.textContent= "Your Score: " + totalScore;
}

function quizOver(){
  
 // Clear screen
  timerEl.textContent="";
  answerEl.textContent = "";
  choiceboxE1.innerHTML = "";
  mainEl.textContent = "QUIZ COMPLETE!!";
  updateTotalScore();
 //Create Form to enter initials
  var input = document.createElement("input");
  input.type = "text";
  input.name = "initials";
  input.label = "Enter Initials";
  var labelinit = document.createElement("Label");
  labelinit.innerHTML = "Enter Initials";
  answerEl.append(input);
  answerEl.prepend(labelinit);
  //Create button
  var initBtn = document.createElement("button");
  initBtn.textContent = "Submit";
  initBtn.id="initalBtn";
  answerEl.append(initBtn);
}


//Listen for Start quiz button event.  Display first question, start timer
//buttonEl.addEventListener("click",startquiz);
buttonEl.addEventListener("click",function(event){
  event.preventDefault();
  buttonEl.style.visibility = 'hidden'; // hide Start Quiz button after clicking
  welcomeEl.textContent = "";
  showTime();
  showHighscore();
  startTimer();
  showquestions();
 
});

//Event Lister to check if an answer button is clicked.
 document.body.addEventListener("click", event => {
// document.body.addEventListener("click", answerClicked(event) )
  if (event.target.nodeName == "INPUT") {
    console.log("Clicked", event.target.value);
    userAnswer = event.target.value;
    console.log("userAnser = " + userAnswer);
   
    //call function to check answer and update scores
    checkAnswers();
    console.log("comeback from checkanswers");

    //set brief pause for answers to display with the question
    // setTimeout(showquestions(), 10000);
    // evtFired = true;
    questionsTimeout();
    // showquestions();
  }
});



// function answerClicked(event){
//   console.log(event);
//   if (event.target.nodeName == "INPUT") {
//     console.log("Clicked", event.target.value);
//     userAnswer = event.target.value;
//     console.log("userAnser = " + userAnswer);
   
//     //call function to check answer and update scores
//     checkAnswers();
//     evtFired = true;
//     console.log("comeback from checkanswers");
//     //set brief pause for answers to display with the question
//     // setTimeout(showquestions(), 10000);
// }
// }
function questionsTimeout(){
setTimeout(function() {
  console.log("inside timeout");
  // if (evtFired) {
    // console.log("timeout event fired true");
    showquestions();
    
  // }
}, 1000);
}



