
const allQuestions = [
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<javascript>", "<js>", "<script>"]
    }
]

const answers = ["<ol>", "font-size", "<script>"]

let questionNumber = document.querySelector(".question-number");
let questionLastNumber = document.querySelector(".question-last-number");
let question = document.querySelector(".question");
let options = document.querySelectorAll(".options");
let nextButton = document.getElementById("next-button");
let completeButton = document.getElementById("complete-button");
let circles = document.querySelectorAll(".circle");


let questionsNumber = 0;

function nextQuestion() {
    let number = parseInt(questionNumber.innerHTML) + 1;
    let lastNumber = parseInt(questionLastNumber.innerHTML)
    if (number === lastNumber) {
        completeButton.classList.remove("display-button");
        nextButton.classList.add("display-button");
    }
    if (number <= lastNumber) {
        questionNumber.innerHTML = number;
        question.innerHTML = allQuestions[questionsNumber].question;
        for (let i = 0; i < options.length; i++) {
            options[i].value = allQuestions[questionsNumber].options[i]
            options[i].style.backgroundColor = "#c6e2ff";
            options[i].style.color = "black";

        }
        questionsNumber += 1;

    }
}

for (let i = 0; i < options.length; i++) {
    options[i].onclick = function (event) {
        for (let i = 0; i < options.length; i++) {
            options[i].style.backgroundColor = "#c6e2ff"
            options[i].style.color = "black";
        }
        if (event.target.value === answers[questionsNumber]) {
            options[i].style.backgroundColor = "green"
            options[i].style.color = "white";
            circles[questionsNumber].innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            circles[questionsNumber].style.color = "green";
        }
        else {
            options[i].style.backgroundColor = "#c0263c"
            options[i].style.color = "white";
            circles[questionsNumber].innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
            circles[questionsNumber].style.color = "#c0263c";
        }
    }
}