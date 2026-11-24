/* ==========================================
   QUIZMASTER - QUIZ APPLICATION
   Version: 1.0
   Technology: JavaScript ES6+
========================================== */


/* ==========================================
   1. QUIZ QUESTIONS
========================================== */

const questions = [

    {
        question: "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],

        answer: 0
    },

    {
        question: "Which CSS property is used to change text color?",

        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],

        answer: 2
    },

    {
        question: "Which JavaScript keyword declares a block-scoped variable?",

        options: [
            "var",
            "let",
            "define",
            "variable"
        ],

        answer: 1
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",

        options: [
            "<link>",
            "<href>",
            "<a>",
            "<url>"
        ],

        answer: 2
    },

    {
        question: "Which CSS property creates space inside an element?",

        options: [
            "margin",
            "padding",
            "spacing",
            "border"
        ],

        answer: 1
    },

    {
        question: "Which method selects an element by its ID?",

        options: [
            "document.querySelectorAll()",
            "document.getElementById()",
            "document.getElementsByClassName()",
            "document.createElement()"
        ],

        answer: 1
    },

    {
        question: "Which symbol is used for single-line comments in JavaScript?",

        options: [
            "<!-- -->",
            "#",
            "//",
            "/* */"
        ],

        answer: 2
    },

    {
        question: "Which HTML attribute specifies an image source?",

        options: [
            "href",
            "src",
            "link",
            "alt"
        ],

        answer: 1
    },

    {
        question: "Which CSS layout system is designed for two-dimensional layouts?",

        options: [
            "Flexbox",
            "CSS Grid",
            "Float",
            "Inline"
        ],

        answer: 1
    },

    {
        question: "Which JavaScript method adds an event listener to an element?",

        options: [
            "addEventListener()",
            "addEvent()",
            "createEvent()",
            "attachElement()"
        ],

        answer: 0
    }

];


/* ==========================================
   2. APPLICATION STATE
========================================== */

let currentQuestionIndex = 0;

let score = 0;

let selectedAnswer = null;


/* ==========================================
   3. DOM ELEMENT REFERENCES
========================================== */

const startScreen = document.getElementById("startScreen");

const quizScreen = document.getElementById("quizScreen");

const resultScreen = document.getElementById("resultScreen");

const startButton = document.getElementById("startButton");

const nextButton = document.getElementById("nextButton");

const restartButton = document.getElementById("restartButton");

const questionText = document.getElementById("questionText");

const optionsContainer = document.getElementById("optionsContainer");

const questionCounter = document.getElementById("questionCounter");

const progressPercentage = document.getElementById("progressPercentage");

const progressFill = document.getElementById("progressFill");

const progressBar = document.getElementById("progressBar");

const errorMessage = document.getElementById("errorMessage");

const finalScore = document.getElementById("finalScore");

const resultMessage = document.getElementById("resultMessage");


/* ==========================================
   4. START QUIZ
========================================== */

function startQuiz() {

    currentQuestionIndex = 0;

    score = 0;

    selectedAnswer = null;

    startScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    displayQuestion();

}


/* ==========================================
   5. DISPLAY QUESTION
========================================== */

function displayQuestion() {

    const currentQuestion = questions[currentQuestionIndex];

    selectedAnswer = null;

    errorMessage.classList.add("hidden");

    // Display question

    questionText.textContent = currentQuestion.question;


    // Update question counter

    questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;


    // Update progress

    const progress =
        ((currentQuestionIndex + 1) / questions.length) * 100;

    progressFill.style.width = `${progress}%`;

    progressPercentage.textContent =
        `${Math.round(progress)}% Completed`;

    progressBar.setAttribute(
        "aria-valuenow",
        currentQuestionIndex + 1
    );


    // Clear previous options

    optionsContainer.replaceChildren();


    // Generate answer options dynamically

    currentQuestion.options.forEach((option, index) => {

        const optionButton = document.createElement("button");

        optionButton.type = "button";

        optionButton.className = "option-button";

        optionButton.setAttribute("aria-pressed", "false");


        // Create option label

        const optionLetter = document.createElement("span");

        optionLetter.className = "option-letter";

        optionLetter.textContent = String.fromCharCode(65 + index);


        // Create option text

        const optionText = document.createElement("span");

        optionText.textContent = option;


        // Add elements to button

        optionButton.append(optionLetter, optionText);


        // Add click event

        optionButton.addEventListener("click", () => {

            selectAnswer(index);

        });


        // Add button to container

        optionsContainer.appendChild(optionButton);

    });


    // Update next button text

    nextButton.textContent =
        currentQuestionIndex === questions.length - 1
            ? "View Results →"
            : "Next Question →";

}


/* ==========================================
   6. SELECT ANSWER
========================================== */

function selectAnswer(index) {

    selectedAnswer = index;

    errorMessage.classList.add("hidden");


    const optionButtons =
        optionsContainer.querySelectorAll(".option-button");


    // Remove previous selection

    optionButtons.forEach((button, buttonIndex) => {

        button.classList.remove("selected");

        button.setAttribute("aria-pressed", "false");


        if (buttonIndex === index) {

            button.classList.add("selected");

            button.setAttribute("aria-pressed", "true");

        }

    });

}


/* ==========================================
   7. VALIDATE AND MOVE TO NEXT QUESTION
========================================== */

function nextQuestion() {

    // Check whether an answer is selected

    if (selectedAnswer === null) {

        errorMessage.classList.remove("hidden");

        return;

    }


    // Check correct answer

    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answer) {

        score += 10;

    }


    // Move to next question

    currentQuestionIndex++;


    // Check quiz completion

    if (currentQuestionIndex < questions.length) {

        displayQuestion();

    } else {

        showResults();

    }

}


/* ==========================================
   8. DISPLAY FINAL RESULTS
========================================== */

function showResults() {

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    // Display final score

    finalScore.textContent =
        `${score} / ${questions.length * 10}`;


    // Display performance message

    const percentage =
        (score / (questions.length * 10)) * 100;


    if (percentage === 100) {

        resultMessage.textContent =
            "Outstanding! Perfect score. You're a web development expert!";

    } else if (percentage >= 70) {

        resultMessage.textContent =
            "Excellent work! You have a strong understanding of web development.";

    } else if (percentage >= 40) {

        resultMessage.textContent =
            "Good effort! Keep practicing to improve your skills.";

    } else {

        resultMessage.textContent =
            "Keep learning! Practice makes you better.";

    }

}


/* ==========================================
   9. RESTART QUIZ
========================================== */

function restartQuiz() {

    currentQuestionIndex = 0;

    score = 0;

    selectedAnswer = null;


    resultScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

}


/* ==========================================
   10. EVENT LISTENERS
========================================== */

// Start button

startButton.addEventListener("click", startQuiz);


// Next question button

nextButton.addEventListener("click", nextQuestion);


// Restart button

restartButton.addEventListener("click", restartQuiz);