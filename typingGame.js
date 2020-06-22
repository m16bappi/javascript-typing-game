let isPlaying = true;
let timmer = 60;
let points = 0;
let css = true;
let intervelId;

const list = [
    "Mehedi", 'Hasan', 'Bijoy', 'Munna', 'Ador', 'Sabbir', 'Rizvi', 'mess', 'proclaim',
    'hope', 'monarch', 'unfortunate', 'exemption', 'incongruous', 'impound', 'pride',
    'shiver', 'penny', 'screen', 'jacket', 'timetable', 'federation', 'abstract', 'elaborate',
    'thanks', 'argument', 'descent', 'formation', 'column', 'invasion', 'history', 'multiply'
];

const wordId = document.getElementById('wordId');
const inputId = document.getElementById('input');
const timmerId = document.getElementById('timmer');
const pointsId = document.getElementById('score');

inputId.addEventListener('click', startGame);

function startGame() {
    if (css) readyInput();
    else removeInput();
}

function readyInput() {
    timmer = 60;
    points = 0;
    ShowWord();
    inputId.type = "text";
    inputId.value = '';
    pointsId.innerHTML = "Points : 0";
    timmerId.innerHTML = "Time : " + timmer;
    inputId.classList.remove('btn-danger');
    inputId.removeEventListener('click', startGame);
    inputId.addEventListener('input', checkWords);
    intervelId = setInterval(CountDown, 1000);
    console.log('ready input');
}

function removeInput() {
    console.log('remove input');
    inputId.removeEventListener('input', checkWords);
    inputId.type = 'button';
    inputId.value = 'Play Again ?';
    inputId.classList.add('btn-danger');
    wordId.innerHTML = "Game Over";
    inputId.addEventListener('click', startGame);
    css = true;
}

function checkWords() {
    if (inputId.value == wordId.innerHTML) {
        ShowWord();
        isPlaying = true;
        points++;
        inputId.value = '';
    }
    pointsId.innerHTML = "Score : " + points;
}


function ShowWord() {
    const wordIndex = Math.floor(Math.random() * list.length);
    wordId.innerHTML = list[wordIndex];
}

function CountDown() {
    if (timmer > 0) {
        timmer--;
    } else if (timmer == 0) {
        isPlaying = false;
        css = false;
        clearInterval(intervelId);
        startGame();
    }
    timmerId.innerHTML = "Time : " + timmer;
}
