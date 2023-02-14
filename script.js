const radioInput = document.querySelectorAll('input[type="radio"');
const resultPcChoice = document.querySelector('.pcChoice');
const resultUserChoice = document.querySelector('.userChoice');
const possibilities = ['Rock','Paper','Scissors'];
const play = document.querySelector("#play");
const result = document.querySelector('.result');
let userChoice;
let pcChoice;

radioInput[0].addEventListener("change", () => {
    console.log("Hola1");
    userChoice = 0;
});

radioInput[1].addEventListener("change", () => {
    console.log("Hola2");
    userChoice = 1;
});

radioInput[2].addEventListener("change", () => {
    console.log("Hola3");
    userChoice = 2;
});

play.addEventListener("click", () =>{
    console.log("Hi");
    game(pcChoice, userChoice);
});

function game(pcChoice,userChoice){
    pcChoice = Math.floor(Math.random() * 3);
    resultPcChoice.innerHTML = `PC: ${possibilities[pcChoice]}`
    resultUserChoice.innerHTML = `USER: ${(possibilities[userChoice])}`;
    
    if(pcChoice == userChoice){
        result.innerHTML = "Tie";
    }else if((possibilities[pcChoice] == possibilities[0] && possibilities[userChoice] == possibilities[1]) || (possibilities[pcChoice] == possibilities[1] && possibilities[userChoice] == possibilities[2]) || (possibilities[pcChoice] == possibilities[2] && possibilities[userChoice] == possibilities[0])){
        result.innerHTML = "You Win";
    }else{
        result.innerHTML = "You lose";
    }
}