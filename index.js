import Pig from "./pet.js";

const startInfo = document.querySelector(".start-info");

const startGame = () => {
  
  let newPet = new Pig("Peppa");
  startInfo.textContent = "Welcome to new Peppa game. " + newPet.startInfo;

  let game = prompt("Do you want to play with Peppa Pig? Type Yes or No");
  if (game === "Yes") {
    newPet.isPetHappy()
    newPet.play();
    newPet.feed();
    newPet.drink();
    newPet.sleep();

  } else {
    console.log("Your pet's happiness will decrease!")
    newPet.happinessDrain();
    newPet.hungerDrain();
    newPet.healthDrain();
    newPet.thirstDrain();
  } 
}

startGame();