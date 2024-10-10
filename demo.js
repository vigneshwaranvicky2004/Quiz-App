document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const authContainer = document.getElementById('auth-container');
    const loginSignupToggle = document.getElementById('login-signup-toggle');
    const quizContent = document.getElementById('quiz-content');
    const startQuizButton = document.querySelector(".content-button");
    const guidelinesSection = document.querySelector(".guidelines");
    const exitButton = document.querySelector("#exit-btn");
    const continueButton = document.querySelector("#continue-btn");
    const questionContainer = document.querySelector(".question-container");
    let currentQuestion = 0;
    let score = 0;
    const totalQuestions = 5;

    const questions = [
        {
            question: "What is the capital of France?",
            answers: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "Who painted the Mona Lisa?",
            answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correct: 2
        },
        {
            question: "What is the largest organ in the human body?",
            answers: ["Heart", "Brain", "Liver", "Skin"],
            correct: 3
        },
        {
            question: "Which of these is not a programming language?",
            answers: ["Python", "Java", "HTML", "Photoshop"],
            correct: 3
        }
    ];

    guidelinesSection.style.display = "none";
    questionContainer.style.display = "none";

    
    startQuizButton.addEventListener("click", () => {
        quizContent.style.display = "none";
        guidelinesSection.style.display = "block";
    });


    exitButton.addEventListener("click", () => {
        guidelinesSection.style.display = "none";
        quizContent.style.display = "flex";
    });


    continueButton.addEventListener("click", () => {
        guidelinesSection.style.display = "none";
        questionContainer.style.display = "flex";
        loadQuestion();
    });


    showSignup.addEventListener('click', function () {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    showLogin.addEventListener('click', function () {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    loginSignupToggle.addEventListener('click', function () {
        authContainer.style.display = (authContainer.style.display === 'none' || !authContainer.style.display) ? 'block' : 'none';
        quizContent.style.display = (authContainer.style.display === 'none') ? 'block' : 'none';
    });

    function loadQuestion() {
        const question = questions[currentQuestion];
        document.getElementById('question').textContent = question.question;
        const answerButtons = document.querySelectorAll(".answer-btn .btn");

        
        answerButtons.forEach((btn, index) => {
            btn.textContent = question.answers[index];
            btn.disabled = false; 
            btn.className = "btn"; 
        });

       
        const nextButton = document.querySelector(".nxt-btn");
        nextButton.style.display = "none";
    }

    window.checkAnswer = function(button) {
        const question = questions[currentQuestion];
        const selectedAnswerIndex = Array.from(button.parentNode.children).indexOf(button);

      
        if (selectedAnswerIndex === question.correct) {
            button.classList.add('correct');
            score++;
        } else {
            button.classList.add('wrong');
        }

        const answerButtons = document.querySelectorAll(".answer-btn .btn");
        answerButtons.forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.querySelector(".nxt-btn");
        nextButton.style.display = "block";
    }

    window.nextQuestion = function() {
        currentQuestion++;
        if (currentQuestion < totalQuestions) {
            loadQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        document.querySelector(".quiz").style.display = "none";
        const resultContainer = document.querySelector(".result");
        resultContainer.style.display = "block";
        document.getElementById("score").textContent = score;
    }
});
        
