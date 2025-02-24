//question 1 variables
const q1a1 = document.getElementById('q1a1')
const q1a2 = document.getElementById('q1a2')
const q1a3 = document.getElementById('q1a3')
//question2 variables
const q2a1 = document.getElementById('q2a1')
const q2a2 = document.getElementById('q2a2')
const q2a3 = document.getElementById('q2a3')
//question 3 variables
const q3a1 = document.getElementById('q3a1')
const q3a2 = document.getElementById('q3a2')
const q3a3 = document.getElementById('q3a3')
// question 4 variables
const q4a1 = document.getElementById('q4a1')
const q4a2 = document.getElementById('q4a2')
const q4a3 = document.getElementById('q4a3')
// question 5 variables
const q5a1 = document.getElementById('q5a1')
const q5a2 = document.getElementById('q5a2')
const q5a3 = document.getElementById('q5a3')
let userChoice = ''
let numCorrect = 0
//question 1
function questionOne() {
    if (q1a1.checked) {
        userChoice = q1a1
    } else if(q1a2.checked || q1a3.checked) {
        userChoice = 'incorrect'
    } else {
        return
    }
    
    if (userChoice === q1a1) {
        numCorrect++
    }
}
// question 2
function questionTwo() {
    if (q2a1.checked || q2a2.checked) {
        userChoice = 'incorrect'
    } else if (q2a3.checked) {
        userChoice = q2a3
    } else {
        return
    }
    if (userChoice === q2a3) {
        numCorrect++
    }
}
// question 3
function questionThree() {
    if (q3a1.checked || q3a2.checked) {
        userChoice = 'incorrect'
    } else if (q3a3.checked) {
        userChoice = q3a3
    } else {
        return
    }
    if (userChoice === q3a3) {
        numCorrect++
    }
}
// question 4
function questionFour() {
    if (q4a2.checked || q4a3.checked) {
        userChoice = 'incorrect'
    } else if (q4a1.checked) {
        userChoice = q4a1
    } else {
        return
    }
    if (userChoice === q4a1) {
        numCorrect++
    }
}
//question 5
function questionFive() {
    if (q5a1.checked || q5a3.checked) {
        userChoice = 'incorrect'
    } else if (q5a2.checked) {
        userChoice = q5a2
    } else {
        return
    }
    if (userChoice === q5a2) {
        numCorrect++
    }
}
//results
function getResult() {
    questionOne()
    questionTwo()
    questionThree()
    questionFour()
    questionFive()
    let finalResult = `You got ${numCorrect}/5! Click Reset to redo the trivia.`
    document.getElementById('result').textContent = finalResult
}

function resetTrivia() {
    userChoice = ''
    numCorrect = 0
    q1a1.checked = false
    q1a2.checked = false
    q1a3.checked = false
    q2a1.checked = false
    q2a2.checked = false
    q2a3.checked = false
    q3a1.checked = false
    q3a2.checked = false
    q3a3.checked = false
    q4a1.checked = false
    q4a2.checked = false
    q4a3.checked = false
    q5a1.checked = false
    q5a2.checked = false
    q5a3.checked = false
    document.getElementById('result').textContent = '';

}