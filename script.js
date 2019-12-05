// var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
// var words = poem.split(" ");

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
      choices: ["function", "event handler", "event listenter", "script"],
      answer: "event listener"
  },
  {
    title: "What is Joes favorite color?",
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


var totalScore = 0;
var highestScore = 0;
var questPerMillisecond = 1500;
var questionIndex = 0;

// $.getScript("questions.js", function() {
//   alert("Script loaded but not necessarily executed.");
// });

// console.log(questions);
// console.log(questions[0].title);
 console.log("questions[0].choices= "+ questions[0].choices);
 console.log("questions[0].choices[0] = " + questions[0].choices[0]);
// console.log(questions[0].answer);
console.log("question 3 title:" +  questions[3].title);

//Listen for Start quiz button event.  Display first question.
buttonEl.addEventListener("click",startquiz);


function startquiz() {
  console.log("startquiz");
  //hide button
  // buttonE.style.display = 'none';
  //display the total Score
   showquestions();
    
  }
  

  
  //display the question






 function timerCountDown(i) {
    var timeLeft = 15;
  
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining to answer question";

      
      // timeLeft--;
  
      while (!timeLeft === 0) {
        // timerEl.textContent = "";
        showquestions(i);
        timeLeft--;
        // console.log("return from shoquest");
        // clearInterval(timeInterval);
      }
      timerEl.textContent = "";
      clearInterval(timeInterval);
      
    }, 1000);
  
  }

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



function showquestions() {
  mainEl.append(bodyEl);

  var qInterval = setInterval(function() {
    if (questions[questionIndex] === undefined || questionIndex >= questions.length) {
      clearInterval(qInterval);
    } else {
      mainEl.textContent = "";
      console.log("showquestion i =" + questionIndex);
      console.log(questions[questionIndex]);
      // debugger;
      console.log(questions[questionIndex].title);
       mainEl.textContent = questions[questionIndex].title;
      //TO Do Display questions
      // console.log(questions[i].choices);
      displayChoices();

       questionIndex++;
       
    }

  }, questPerMillisecond);
}

function displayChoices()
{

  // var data=['Apple', 'Banana', 'Kiwi'];
   var data = questions[questionIndex].choices;
	var output="";
	var output2="";
  var dataList;
   console.log("displayChoices" + questionIndex );
   console.log(questions[questionIndex].choices );
	
	for(var i=0; i< data.length; i++)
	{
		dataList=data[i];
		//  output+= '<input type="checkbox" value='+dataList+' name="box2">'  + '   ' + dataList+'   '+'<br><br>';
    // output2+= 'yes:<input type="radio" value="yes" name="box2">'+'no:<input type="radio" value="yes" name="box2">'+'<br><br>';
    output2+= dataList + ':<input type="radio" value= '+dataList+' name= '+dataList+'>'+'<br><br>';
		 document.getElementById("dataList").innerHTML=output;
		document.getElementById("radioBtn").innerHTML=output2;
	}
}
// function speedRead() {
//   mainEl.append(bodyEl);

//   var poemInterval = setInterval(function() {
//     if (words[i] === undefined) {
//       clearInterval(poemInterval);
//     } else {
//       //  mainEl.textContent = words[i];
      
//       i++;
//     }

//   }, wordsPerMillisecond);
// }

// prepareRead();


