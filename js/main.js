let wordBank = ['SKATE', 'PIANO', 'MAGIC', 'FLOWER', 'SWITCH', 'PERSON', 'FASTING', 'SOLDIER', 'HUSBAND', 'BETRAYAL'];
let answer = '';
let wrong = 0;
let guessed = [];
let lives = 7;
let randoWord = null;

function startGame() {
    document.getElementById('mainMenu').style.display= 'none';
    document.getElementById('mainGame').style.display= 'inline';
};

document.getElementById('mGame').addEventListener('click', startGame)

function randomWord() {
    answer = wordBank[Math.floor(Math.random() * wordBank.length)];
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
    document.getElementById('keys').innerHTML = 'You just got nerfed!'
}

function damage() {
    document.getElementById('wrongGuess').innerHTML = wrong;
    replaceHangmanPic();
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
    replaceHangmanPic();
});

function replaceHangmanPic() {
    if(wrong === 0) {
        document.getElementById('hangpic2').style.display = 'none';
        document.getElementById('hangpic3').style.display = 'none';
        document.getElementById('hangpic4').style.display = 'none';
        document.getElementById('hangpic5').style.display = 'none';
        document.getElementById('hangpic6').style.display = 'none';
        document.getElementById('hangpic7').style.display = 'none';
        document.getElementById('hangpic8').style.display = 'none';
        document.getElementById('hangpic1').style.display = 'inline';
    } else if(wrong === 1) {
        document.getElementById('hangpic1').style.display = 'none';
        document.getElementById('hangpic2').style.display = 'inline';
    } else if(wrong === 2) {
        document.getElementById('hangpic2').style.display = 'none';
        document.getElementById('hangpic3').style.display = 'inline';
    } else if(wrong === 3) {
        document.getElementById('hangpic3').style.display = 'none';
        document.getElementById('hangpic4').style.display = 'inline';
    } else if(wrong === 4) {
        document.getElementById('hangpic4').style.display = 'none';
        document.getElementById('hangpic5').style.display = 'inline';
    } else if(wrong === 5) {
        document.getElementById('hangpic5').style.display = 'none';
        document.getElementById('hangpic6').style.display = 'inline';
    } else if(wrong === 6) {
        document.getElementById('hangpic6').style.display = 'none';
        document.getElementById('hangpic7').style.display = 'inline';
    } else if(wrong === 7) {
        document.getElementById('hangpic7').style.display = 'none';
        document.getElementById('hangpic8').style.display = 'inline';
    }
};

document.getElementById('lifeTotal').innerHTML = lives;

randomWord();
buttonMenu();
currentWord();
replaceHangmanPic();