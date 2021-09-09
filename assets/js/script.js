// Variables for quiz

const startButton = document.getElementById('start-btn')
const tag = document.getElementById('tag')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

// Functions for quiz

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    tag.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

function setNextQuestion() {

}

function selectAnswer() {

}