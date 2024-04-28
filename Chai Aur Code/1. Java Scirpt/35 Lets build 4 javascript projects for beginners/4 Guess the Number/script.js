let randomNumber = parseInt(Math.random() * 100 + 1)

const sumbit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let preGuess = []
let numGuess = 1

let playGame = true  // false to game nhi khel skte hai game me ye hota hai

if (playGame) {
    sumbit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        //console.log(guess)
        vaildateGuess(guess)
    })
}

function vaildateGuess(guess) {
    // check ki number 1 se 100 tak hi hai aur number hi hai na
    // aur guess number low hai ya high
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number more than 1')
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100')
    }
    else {
        preGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // check ki guess number sahi hai
    if (guess === randomNumber) {
        displayMsg(`You guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMsg('Guess Number is low')
    } else if (guess > randomNumber) {
        displayMsg('Guess Number is high')
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMsg(message) {
    // display karega
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        // reset variable
        randomNumber = parseInt(Math.random() * 100 + 1)
        preGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    })
}

function endGame() {
    // first clern all holding vaule
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame"> Start new Game <button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}