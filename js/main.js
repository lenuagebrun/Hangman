let wordBank = ['SKATE', 'PIANO', 'MAGIC', 'FLOWER', 'SWITCH', 'PERSON','FASTING', 'SOLDIER', 'HUSBAND'];
let answer = '';
let wrong = 0;
let guessed = [];
let lives = 7;
let randoWord = null;

function randomWord() {
    answer = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(answer);
};

function generateButtonClickEvents(){
    document.querySelectorAll('.letter-button').forEach(
        letterButton => letterButton.addEventListener('click', clickGuess)
    );
};

function buttonMenu() {
    let letterButton = letter =>`<button class='letter-button' id ='${letter}'>
    ${letter}
    </button>`
    let buttonBoard ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letterButton).join('');
    document.getElementById('keys').innerHTML = buttonBoard;
    generateButtonClickEvents();
};
function clickGuess(event) {
    const clickedLetter = event.target.id;
    guessed.indexOf(clickedLetter) === -1 ? guessed.push(clickedLetter): null;
    document.getElementById(clickedLetter).setAttribute('disabled', true);
    if (answer.indexOf(clickedLetter) === 0) {
        currentWord();
    }else if (answer.indexOf(clickedLetter) === -1) {
        wrong++;
        damage();
    }
};
function clickGuess(event) {
    clickedLetter = event.target.id
    guessed.indexOf(clickedLetter) === -1 ? guessed.push(clickedLetter): null;
    document.getElementById(clickedLetter).setAttribute('disabled', true);
    if (answer.indexOf(clickedLetter) >= 0) {
        currentWord();
        checkWin();
    }else if (answer.indexOf(clickedLetter) === -1) {
        wrong++;
        damage();
        checkLoss();
    }
};

function checkWin() {
    if (randoWord === answer) {
        document.getElementById('keys').innerHTML = 'Nice guessing child';
    }
}

function checkLoss() {
    if(wrong === lives)
    document.getElementById('keys').innerHTML = 'Looks like that guy is gonna be hanging there for a while<br>-Noah Eror, 2020'
}

function damage() {
    document.getElementById('wrongGuess').innerHTML = wrong;
};

function currentWord() {
    randoWord = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join('');
    document.getElementById('field').innerHTML = randoWord;
};

document.getElementById('reset').addEventListener('click', function(){
    wrong = 0;
    guessed = [];
    randomWord();
    buttonMenu();
    damage();
    currentWord();
});



document.getElementById('lifeTotal').innerHTML = lives;
randomWord();
buttonMenu();
currentWord();

