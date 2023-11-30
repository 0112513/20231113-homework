let firstNumber = document.getElementById("firstNumber");
let guessNumberInput = document.getElementById('guessNumber');
let message = document.getElementById('message');
let rightMessage = document.getElementById('rightMessage');

let targetNumber = Math.floor(Math.random() * 100) + 1;
let maxAttempts = 5;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(guessNumberInput.value);

    attempts++;

    if (userGuess == targetNumber) {
        console.log("你猜中了！！");
        firstNumber.innerText = "你猜中了";
        disableInputAndButton();
    } else {
        console.log("你猜錯了呦");
        updateAttemptsMessage();
        if (attempts >= maxAttempts) {
            console.log("你已經用完所有的猜測次數！");
            disableInputAndButton();
        }
    }
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessNumberInput.value = "";
    firstNumber.innerText = "猜一個數字";
    rightMessage.innerText ="你還有5次機會";
    enableInputAndButton();
    console.log("遊戲已重置！");
    console.log(targetNumber);
}

function disableInputAndButton() {
    guessNumberInput.disabled = true;
    document.querySelector('button').disabled = true;
}

function enableInputAndButton() {
    guessNumberInput.disabled = false;
    document.querySelector('button').disabled = false;
}

function updateAttemptsMessage() {
    rightMessage.innerText = "你還有"+ maxAttempts - attempts+"次機會";
}

console.log(targetNumber);
