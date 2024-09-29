// Targeting all the relevant DOM elements:

let image1 = document.querySelector('.firstPlayer');
let image2 = document.querySelector('.secondPlayer');
let message = document.querySelector('h1');
let playButton = document.querySelector('button');



// Adding event listener for play button and creating the play function

playButton.addEventListener('click', () => {
    // Generating two random numbers and assigning them to the source attribute of images

let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

let randomImage1 = `images/dice${randomNumber1}.png`;
let randomImage2 = `images/dice${randomNumber2}.png`;

image1.setAttribute('src', randomImage1);
image2.setAttribute('src', randomImage2);

if (randomNumber1 === randomNumber2) {
    message.textContent = "It's a tie";
} else if (randomNumber1 > randomNumber2){
    message.textContent = "🚩 First player wins";
} else if (randomNumber1 < randomNumber2){
    message.textContent = " Second players wins 🚩";
} 
});
















































