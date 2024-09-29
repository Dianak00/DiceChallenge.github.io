
let randomNumber1 = Math.ceil(Math.random() * 6);
let randomDiceImage1 = 'images/dice' + randomNumber1 + '.png';
//console.log(randomDiceImage1);
let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomDiceImage1);

let randomNumber2 = Math.ceil(Math.random() *6);
let randomDiceImage2 = 'images/dice' + randomNumber2 + '.png';
//console.log(randomDiceImage2);
let image2 = document.querySelector('.secondPlayer');
image2.setAttribute('src', randomDiceImage2);

let inputText = document.querySelector('h1');
console.log(randomNumber1);
console.log(randomNumber2);
if (randomNumber1 === randomNumber2) {
    inputText.innerHTML = "It's a tie";
} else if (randomNumber1 > randomNumber2){
    inputText.innerHTML = "🚩 First player wins";
} else if (randomNumber1 < randomNumber2){
     inputText.innerHTML = "🚩 Second players wins";
}


