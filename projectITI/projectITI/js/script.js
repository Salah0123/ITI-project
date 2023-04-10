let mainBtns = document.querySelectorAll(".main-buttons button");
let mainCardOfQuiz = document.querySelectorAll(".cardsOfQuizes .typesOfQuizes .cardOne");

let cardsOfQuizes = document.querySelector(".cardsOfQuizes");


let startBtn = document.getElementById("startBtn");
let quizSittings = document.querySelector(".card-quiz-setting");
let quizDom = document.querySelector(".card-quiz");
let question = document.getElementById("question");
let mainDiv = document.querySelector(".answerElements");  //answers
let countSpan = document.querySelector(".count");
let totalCount = document.querySelector(".totalCount");
let meterValue = document.querySelector("#meterValue");
let nextBtn = document.querySelector("#nextBtn");
let finishBtn = document.getElementById("finishBtn");


let typeOfQuiz;
let currentIndex = 0;
let rightAnswer = 0;






//main buttons
for (var i =0; i<mainBtns.length; i++){
    mainBtns[i].addEventListener("click", showCartQuiz)
}
for (var i = 0; i < mainCardOfQuiz.length; i++) {
  mainCardOfQuiz[i].addEventListener("click", showCartQuiz);
}
function showCartQuiz() {
    typeOfQuiz = event.target.dataset.title;
    console.log(typeOfQuiz);
    cardsOfQuizes.style.display = "none";
    quizSittings.style.display = "block"
}



startBtn.addEventListener("click", getQuestions);
function getQuestions() {
    if(startBtn.dataset.title) {
        typeOfQuiz = startBtn.dataset.title;

    }
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200) {
            let questionsObject = JSON.parse(this.responseText);
            console.log(questionsObject);
            let qCount = questionsObject.length
            quizSittings.style.display = "none";
            quizDom.style.display = "block"

            setMeter(qCount)

            //add question data
            addQuestionData(questionsObject[currentIndex], qCount);


            //click on next btn
            nextBtn.disabled = true
            nextBtn.style.cursor = "no-drop";
            let answers = document.getElementsByName("question");
            for(var i =0; i<answers.length; i++) {
                answers[i].onclick = () =>{

                    nextBtn.disabled = false;
                    nextBtn.style.cursor = "pointer";
                }
                
            }

            nextBtn.onclick = ()=>{
              //right answer
              let theRightAnswer = questionsObject[currentIndex].right_answer;
              currentIndex++;
              meterValue.setAttribute("value", currentIndex);
              countSpan.innerHTML = currentIndex;
              //check answer
              checkAnswer(theRightAnswer, qCount);

              question.innerHTML = "";
              mainDiv.innerHTML = "";
              addQuestionData(questionsObject[currentIndex], qCount);

              //next btn
              nextBtn.disabled = true;
              nextBtn.style.cursor = "no-drop";
              let answers = document.getElementsByName("question");
              for (var i = 0; i < answers.length; i++) {
                answers[i].onclick = () => {
                  nextBtn.disabled = false;
                  nextBtn.style.cursor = "pointer";
                };
              }

              //show results
              showResults(qCount)



            }


        }
    }
    // questions / html_questions.json;
    myRequest.open("GET", `questions/${typeOfQuiz}.json`, true);
    myRequest.send()
}


function setMeter(num){
    totalCount.innerHTML = num;
    meterValue.setAttribute("max", num)
}


function addQuestionData(obj, count) {
    if(currentIndex < count){
        let questionText = document.createTextNode(obj.title);
        question.appendChild(questionText);

        for (let i = 1; i <= 4; i++) {
          let answerDiv = document.createElement("div");
          let radioInput = document.createElement("input");
          radioInput.name = "question";
          radioInput.setAttribute("type", "radio");
          radioInput.id = `answer_${i}`;
          radioInput.dataset.answer = obj[`answer_${i}`];

          //create label

          let theLabel = document.createElement("label");
          theLabel.htmlFor = `answer_${i}`;
          let theLabelText = document.createTextNode(obj[`answer_${i}`]);
          theLabel.appendChild(theLabelText);

          answerDiv.appendChild(radioInput);
          answerDiv.appendChild(theLabel);

          mainDiv.appendChild(answerDiv);
        }
    }else {
        nextBtn.disabled = true;
        nextBtn.style.cursor = "no-drop";
    }
}


//check answer

function checkAnswer(theRightAnswer, Count) {
    let answers = document.getElementsByName("question")
    let theChosenAnswer;
    for(let i=0; i<answers.length; i++){
        if(answers[i].checked){
            theChosenAnswer = answers[i].dataset.answer
        }
    }

    if (theChosenAnswer === theRightAnswer) {
        rightAnswer++
        console.log("hiiii");
    }


}

//show results
function showResults(count) {
    let theResults
    if(currentIndex === count) {
        nextBtn.remove()
        finishBtn.remove()
        meterValue.remove()

        if (rightAnswer > count / 2 && rightAnswer < count) {
            theResults = `<span class="good">Good, ${rightAnswer} from ${count} Is Correct</span>`;
        }else if(theResults === count) {
            theResults = `<span class="perfect">Perfect, All Answers Is Correct</span>`;
        }else {
            theResults = `<span class="bad">Bad, ${rightAnswer} from ${count} Is Correct</span>`;
        }
        console.log(quizDom);
        quizDom.innerHTML = theResults
    }
}


finishBtn.onclick = ()=>{
    location.reload()
}
