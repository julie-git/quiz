
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
var submitBtnEl = document.getElementById("initbtn");
var playBtn = document.getElementById("playbtn");
var clearBtn = document.getElementById("clearbtn");

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
var playerInitials = "";
var initBtn;
var labelinit;
var input;

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

 submitBtnEl.style.visibility = 'hidden';
 clearBtn.style.visibility = 'hidden';
 playBtn.style.visibility = 'hidden';

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
  console.log("quiz over");
  // stop timer;
  clearInterval(qinterval);
 // Clear screen
  timerEl.textContent="";
  answerEl.textContent = "";
  choiceboxE1.innerHTML = "";
  mainEl.textContent = "QUIZ COMPLETE!!";
  updateTotalScore();
 //Create Form to enter initials
  // var input = document.createElement("input");
  input = document.createElement("input");
  input.type = "text";
  input.name = "initials";
  input.id = "initials";
  input.label = "Enter Initials";
  // var labelinit = document.createElement("Label");
  labelinit = document.createElement("Label");
  labelinit.innerHTML = "Enter Initials";
  answerEl.append(input);
  answerEl.prepend(labelinit);
  //Create button
  // initBtn = document.createElement("button");
  // // var initBtn = document.createElement("button");
  // initBtn.textContent = "Submit";
  // initBtn.id="initialBtn";
  // answerEl.append(initBtn);
  submitBtnEl.style.visibility = "visible";
}

function questionsTimeout(){
  setTimeout(function() {
    console.log("inside timeout");
    // if (evtFired) {
      // console.log("timeout event fired true");
      showquestions();
      
    // }
  }, 1000);
  }

  // function storeScore(){
  //   // Check browser support
  //   if (typeof(Storage) !== "undefined") {
  //     // Store
  //     localStorage.setItem(initials, totalScore);
      
  //     // Retrieve
  //     document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  //   } else {
  //     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  //   }
  //   }

   function showEndGame(){
    var keyname="";
    var keyvalue="";
    var highplayerArr= [];
    var top3PlayerArr = [
      {
        player: "",
        score: ""
      },
      {
        player: "",
        score: ""
      },
      {
        player: "",
        score: ""
      }
    ];

    mainEl.textContent = "High Scores"
    clearBtn.style.visibility = 'visible';
     playBtn.style.visibility = 'visible';
    //To Do Function that creates list of winners
      localStorage.setItem(playerInitials,totalScore);
       console.log("showEndGame: stored playerInit and totalscore: " + playerInitials + " " + totalScore);
       console.log(localStorage.length);
     //get top 3. highest scores from local storage
     for (var i = 0; i < localStorage.length; i++){
        var player   = localStorage.key(i);
         var score = localStorage.getItem(player);
          highplayerArr.push(score);

        console.log("key = " + player + "  score = " + score);
      }
      //sort scores highest to lowast
      console.log("before" + highplayerArr);
      highplayerArr.sort(function(a, b){return b-a});
      console.log("After sort " + highplayerArr);

      // var maxScore = 0; var maxCount = 3 varArrayInd= 0; var i2=0;
      // for (var i = 0; i < localStorage.length; i++){
      //    var player   = localStorage.key(i);
      //    var score = localStorage.getItem(player);
      //    console.log("i=" + i + " key = " + player + "  score = " + score);
      //    if (score >= maxScore){
      //        MaxScore = score;
      //         console.log("Maxsore = " + MaxScore);
      //         i2++;
      //        //loop through remaining values for more matches
      //        for(i2 )
      //    }

      // }
     
      var topIndex = 0; var done = false;
      for (var i = 0; i < 3; i++){
        console.log("done = " + done);
        if (done === true){ 
          break;
        }
        var findScore = highplayerArr[i];
        
        console.log("i= " + i);
        console.log("finscore=" + findScore);
        for (var i2 = 0; i2 < localStorage.length; i2++){
          if (done === true){ break;}
          console.log("i2= " + i2);
          var player   = localStorage.key(i2);
          var score = localStorage.getItem(player);
          //find the key in local storage with the matching score;
          if (score === findScore){
            //add to top3 arry arr
              console.log("mathed score" + findScore)
              console.log("storgeIndex = " + i2)
              console.log("matched i" + i);
              console.log("matched "  + player + "  " + score);
              console.log("topIndex= " + topIndex);
              top3PlayerArr[topIndex].player = player;
              top3PlayerArr[topIndex].score = score;
              topIndex++;
              if( topIndex > 2) {done = true; break;}
          }
        }
      } 
     
    console.log(top3PlayerArr);

   }

   function startquiz(){
    buttonEl.style.visibility = 'hidden'; // hide Start Quiz button after clicking
    //welcomeEl.textContent = "";
    submitBtnEl.style.visibility = 'hidden';
    clearBtn.style.visibility = 'hidden';
    playBtn.style.visibility = 'hidden';
    mainEl.textContent="";
    answerEl.innerHTML="";
    totalScoreEl.textContent="";
   
    showTime();
    startTimer();
    showquestions();
   }

//Listen for Start quiz button event.  Display first question, start timer
//buttonEl.addEventListener("click",startquiz);
buttonEl.addEventListener("click",function(event){
  event.preventDefault();
  startquiz();
  // buttonEl.style.visibility = 'hidden'; // hide Start Quiz button after clicking
  // welcomeEl.textContent = "";
  // showTime();
  // showHighscore();
  // startTimer();
  // showquestions();
 
});

//Event Lister to check if an answer button is clicked.
//  document.body.addEventListener("click", event => {
  choiceboxE1.addEventListener("click", event => {
// document.body.addEventListener("click", answerClicked(event) )
  if (event.target.nodeName == "INPUT") {
    console.log("Inside handler Clicked", event.target.value);
    userAnswer = event.target.value;
    console.log("userAnser = " + userAnswer);
   
    //call function to check answer and update scores
    checkAnswers();
    console.log("comeback from checkanswers");
    console.log("inside answer listener click evt: questionindex=" + questionIndex);
    if (questionIndex < questions.length){
    //set brief pause for answers to display with the question
    // setTimeout(showquestions(), 10000);
    // evtFired = true;
    
       questionsTimeout();
    }else{
      console.log("inside answer listener click run quizOver");
      //game over
      quizOver();
    }
  
  }
});

//event listener for submtting initials and score s
submitBtnEl.addEventListener("click", function(event) {
  event.preventDefault();
   console.log("clicked submit initials");
  playerInitials = document.getElementById("initials").value
  console.log(playerInitials);
  //hide form and button
  answerEl.innerHTML = "";
  submitBtnEl.style.visibility = "hidden";
   showEndGame();
 });

//evenListener for clearing scores
clearBtn.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.clear();
  console.log("local storage cleared");
  alert("All Scores Cleared");

});

playBtn.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("clicked on play again button");
  startquiz();

});

