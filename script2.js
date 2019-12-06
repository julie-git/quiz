
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

var totalScore = 0;
var highestScore = 0;
var questPerMillisecond = 10000; //time between questions
var questionIndex = 0;
var userAnswer = "";
var totalSeconds = 75;
var secondsElapsed = 0;
var qinterval;
var secondsLeft;


// $.getScript("questions.js", function() {
//   alert("Script loaded but not necessarily executed.");
// });

// console.log(questions);
// console.log(questions[0].title);
//  console.log("questions[0].choices= "+ questions[0].choices);
//  console.log("questions[0].choices[0] = " + questions[0].choices[0]);
// console.log(questions[0].answer);
// console.log("question 3 title:" +  questions[3].title);
console.log("questions.length="+ questions.length);
console.log(answerEl);

//Listen for Start quiz button event.  Display first question.
//buttonEl.addEventListener("click",startquiz);
buttonEl.addEventListener("click",function(event){
   event.preventDefault();
   timerEl.textContent = totalSeconds + " seconds remaining to complete quiz";
   startTimer();
    showquestions();
  
});
    

 

// function startquiz() {
//   console.log("startquiz");

//   //hide button
//   // buttonE.style.display = 'none';
//   //display the total Score
//   totalScoreEl.textContent= "The Total Score: " + totalScore;
  
//   startTimer();
//   setTimeout(function(){ showquestions() }, 1000)
//   // showquestions();
    
//   }
  
  // function myTimer(){
  //   qInterval= setInterval(decrement, questPerMillisecond);
  //   var timer = 15;
  //     function decrement(){
  //       timer--;
  //       console.log(timer);
  //       timerEl.textContent = time + " seconds remaining to answer question";
  //       //update screen with value of timer;
  //      if (timer ===0){
  //         console.log("timesup");

  //       }
  //     }
    
  // }
  
  //display the question






//  function timerCountDown(i) {
//     var timeLeft = 15;
  
//     var timeInterval = setInterval(function() {
//       timerEl.textContent = timeLeft + " seconds remaining to answer question";

      
//       // timeLeft--;
  
//       while (!timeLeft === 0) {
//         // timerEl.textContent = "";
//         showquestions(i);
//         timeLeft--;
//         // console.log("return from shoquest");
//         // clearInterval(timeInterval);
//       }
//       timerEl.textContent = "";
//       clearInterval(timeInterval);
      
//     }, 1000);
  
//   }

// function timerCountDown(i) {
//   var timeLeft = 15;

//   var timeInterval = setInterval(function() {
//     timerEl.textContent = timeLeft + " seconds remaining to answer question";
//     timeLeft--;

//     if (!timeLeft === 0) {
//       // timerEl.textContent = "";
//       showquestions(i);
//       console.log("return from shoquest");
//       clearInterval(timeInterval);
//     }

//   }, 1000);

// }

// function myTimer(){
//   clearInterval(qinterval);
//   qInterval= setInterval(decrement, questPerMillisecond);
//   var timer = 2;
//     function decrement(){
//       timer--;
//       timerEl.textContent = timer + " seconds remaining to answer question";
//       console.log(timer);
//       if (timer === 0){
//         console.log("timesup");
//         clearInterval(qInterval);
//         checkAnswers;
//         // questionIndex++;
//         if (questionIndex < questions.length-1){
//           questionIndex++;
//            console.log("inside if questionIndex =" + questionIndex);
//           showquestions();
//         }else{
//           console.log("myTimer: quiz over");
//           clearInterval(qInterval);
//           quizOver();
//           //quiz over..do quiz end stuff
//         }
        
//       }
//     }
  
// }


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
      timerEl.textContent = secondsLeft + " seconds remaining to complete quiz";
      // showquestions();
      if(totalSeconds-secondsElapsed<=0 ){
        clearInterval(qinterval);
         console.log("quiz over");
      }
      timerEl.textContent = secondsLeft + " seconds remaining to complete quiz";
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
   }
  //     //TO Do 
  //     // console.log(questions[i].choices);
  //     var returnAnswer = displayChoices();
  //     console.log("returnAnswer =" + returnAnswer);
  //     //To Do check answers update timers and score
  //     clearInterval(qInterval);
  //      questionIndex++;
  //      showquestions()
  //   }

  // }, questPerMillisecond);
}

// function displayChoices()
// {

//   // var data=['Apple', 'Banana', 'Kiwi'];
//    var data = questions[questionIndex].choices;
// 	var output="";
// 	var output2="";
//   var dataList;
//    console.log("displayChoices" + questionIndex );
//    console.log(questions[questionIndex].choices );
	
// 	for(var i=0; i< data.length; i++)
// 	{
// 		dataList=data[i];
// 		//  output+= '<input type="checkbox" value='+dataList+' name="box2">'  + '   ' + dataList+'   '+'<br><br>';
//     // output2+= 'yes:<input type="radio" value="yes" name="box2">'+'no:<input type="radio" value="yes" name="box2">'+'<br><br>';
//     output2+= dataList + ':<input type="radio" value= '+dataList+' name= '+dataList+'>'+'<br><br>';
// 		 document.getElementById("dataList").innerHTML=output;
// 		document.getElementById("radioBtn").innerHTML=output2;
// 	}
// }

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
      answerEl.textContent = "Wrong";
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

function quizOver(){
   mainEl.textContent = "QUIZ COMPLETE!!";
  //  choiceboxE1.textContent="Your Final Score = " + totalScore;
   timerEl.textContent="";
   answerEl.textContent = "";
  //Enter Initials into form
   var input = document.createElement("input");
   input.type = "text";
   input.name = "initials";
   input.label = "Enter Initials";
   answerEl.append(input);
}




