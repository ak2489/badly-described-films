// Variables for quiz

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const tag = document.getElementById('tag');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

//Variables for questions

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// Functions for quiz

function startGame() {
    startButton.classList.add('hide');
    tag.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function setStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

//Array of questions 

const questions = [
    {
        question: "Boy spends 7 years being the 3rd wheel.",
        answers: [
            { text: "Harry Potter and the Deathly Hollows", correct: true},
            { text: "Twilight", correct: false},
            { text: "Sherlock Holmes", correct: false},
            { text: "Star Wars a New Hope", correct: false}
        ]
    },
    {
        question: "Talking frog convinces son to kill his dad.",
        answers: [
            {text: "The Princess and the Frog", correct: false},
            {text: "Star Wars the Empire Strikes Back", correct: true},
            {text: "The Muppets Christmas Carol", correct: false},
            {text: "Shrek", correct: false}
        ]
    },
    {
        question: "A guy that is alone in the woods kisses a dead body while 7 other guys watch.",
        answers: [
            {text: "Sleeping Beauty", correct: false},
            {text: "Sleepy Hollow", correct: false},
            {text: "Snow White and the Seven dwarfs", correct: true},
            {text: "The Corpse Bride", correct: false}
        ]
    },
    {
        question: "A family's AirBnB experience goes very wrong.",
        answers: [
            {text: "The Shining", correct: true},
            {text: "Room 237", correct: false},
            {text: "Cabin in the Woods", correct: false},
            {text: "The Evil Dead", correct: false}
        ]
    },
    {
        question: "A series of naps.",
        answers: [
            {text: "The Matrix", correct: false},
            {text: "Avatar", correct: false},
            {text: "Sucker Punch", correct: false},
            {text: "Inception", correct: true}
        ]
    },
    {
        question: "Cancer survivor never loses his sense of humor.",
        answers: [
            {text: "50/50", correct: false},
            {text: "Deadpool", correct: true},
            {text: "The fault in our Stars", correct: false},
            {text: "Bucket List", correct: false}
        ]
    },
    {
        question: "Woman abandons all her standards to win back a horny teenager with greasy hair.",
        answers: [
            {text: "Grease", correct: true},
            {text: "Loser", correct: false},
            {text: "American Pie", correct: false},
            {text: "Not Another Teen Movie", correct: false}
        ]
    },
    {
        question: "A depressed office worker joins a cult and destabilizes the government.",
        answers: [
            {text: "Fight Club", correct: false},
            {text: "V for Vendetta", correct: false},
            {text: "Blade Runner", correct: false},
            {text: "The Matrix", correct: true}
        ]
    },
    {
        question: "Divorced man discovers he is trans, loses custody of his children.",
        answers: [
            {text: "Big Momma's House", correct: false},
            {text: "White Chicks", correct: false},
            {text: "Mrs Doubtfire", correct: true},
            {text: "Mr Nanny", correct: false}
        ]
    },
    {
        question: "A beautiful princess gets catfished.",
        answers: [
            {text: "Beauty and the Beast", correct: false},
            {text: "Cinderella", correct: false},
            {text: "Sherk", correct: false},
            {text: "Aladdin", correct: true}
        ]
    }
];