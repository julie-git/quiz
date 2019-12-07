
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

var totalScore = 0;
var highestScore = 0;
var questPerMillisecond = 10000; //time between questions
var questionIndex = 0;
var userAnswer = "";
var totalSeconds = 75;
var secondsElapsed = 0;
var qinterval;
var secondsLeft = totalSeconds;


// $.getScript("questions.js", function() {
//   alert("Script loaded but not necessarily executed.");
// });
console.log(welcomeEl);
// console.log(questions);
// console.log(questions[0].title);
//  console.log("questions[0].choices= "+ questions[0].choices);
//  console.log("questions[0].choices[0] = " + questions[0].choices[0]);
// console.log(questions[0].answer);
// console.log("question 3 title:" +  questions[3].title);
// console.log("questions.length="+ questions.length);
// console.log(answerEl);




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
      // timerEl.textContent = secondsLeft + " seconds remaining to complete quiz";
      // showquestions();
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



function displayChoices()
{
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
		newButton = document.createElement('input');
          newButton.type = 'button';
          newButton.value = data[i];
          newButton.id = data[i];
          newButton.onclick = function () {
            console.log('You pressed '+this.id);
            console.log('You pressed '+this.value);
            return this.value;
            
          };
          choiceboxE1.append(newButton);
  }
  //stop timer
  // clearInterval(qinterval);
  // totalSeconds = 0;
}

function showTime(){
  timerEl.textContent = "Time : " + secondsLeft;
}

function checkAnswers(){
   var questionAnswer = questions[questionIndex].answer;
   console.log("checkAnswer: questionAnswer=" + questionAnswer)
   console.log("checkAnswer: userAnswer=" + userAnswer);
  if (userAnswer === questionAnswer){
      totalScore++;
      console.log("checkAnswer: totalScore" + totalScore);
      answerEl.textContent = "Correct";
      // alert("Answer was Correct!!");
   }else{
    //  alert("Answer is wrong!!");
      answerEl.textContent = "That answer is incorrect.";
      //deduct 15 seconds from totalTime as penalty
      totalSeconds = totalSeconds -15;
   }
    updateTotalScore();
    userAnswer = "";
    questionIndex++;
    // if (questionIndex < questions.length-1){
    //   questionIndex++;
    // }

    // clearInterval(qInterval);
}

function updateTotalScore(){
  totalScoreEl.textContent= "The Total Score: " + totalScore;
}

function quizOver(){
  mainEl.textContent = "QUIZ COMPLETE!!";
 //  choiceboxE1.textContent="Your Final Score = " + totalScore;
  timerEl.textContent="";
  answerEl.textContent = "";
  choiceboxE1.innerHTML = "";
 //Enter Initials into form
  var input = document.createElement("input");
  input.type = "text";
  input.name = "initials";
  input.label = "Enter Initials";
  var labelinit = document.createElement("Label");
  labelinit.innerHTML = "Enter Initials";
  answerEl.append(input);
  answerEl.prepend(labelinit);
}


//Listen for Start quiz button event.  Display first question, start timer
//buttonEl.addEventListener("click",startquiz);
buttonEl.addEventListener("click",function(event){
  event.preventDefault();
  buttonEl.style.visibility = 'hidden'; // hide Start Quiz button
  welcomeEl.textContent = "";
  showTime();
  startTimer();
  showquestions();
 
});

//Event Lister to check if an answer is clicked.
document.body.addEventListener("click", event => {
  if (event.target.nodeName == "INPUT") {
    console.log("Clicked", event.target.value);
    userAnswer = event.target.value;
    console.log("userAnser = " + userAnswer);
    // clearInterval(qInterval);
    
    //call function to check answer and update scores
    checkAnswers();
    // questionIndex++;
    showquestions();
  }
});






