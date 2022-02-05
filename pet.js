export default class Pig {
  constructor (name) {
    this._name = name;
    this._happiness = 50;
    this._health = 50;
    this._thirst = 20;
    this._hunger = 20;
    this._playButton = document.querySelector(".button-play");
    this._feedButton = document.querySelector(".button-feed");
    this._drinkButton = document.querySelector(".button-drink");
    this._sleepButton = document.querySelector(".button-sleep");
  }  
  
  get startInfo() {
    return `Here is your pet initial info: 
    \nHappiness: ${this._happiness}. 
    \nHealth: ${this._health}. 
    \nThirst Level: ${this._thirst}. 
    \nHunger Level: ${this._hunger}. 
    \nKeep feeding, playing, giving them drinks and ensure your Peppa is happy.`;
  }
  
  // actions
  feed() {
    this._feedButton.addEventListener("click", () => {
      this._hunger -= 2;
      this._health += 1;
      console.log(`Hunger level: ${this._hunger}`);
      console.log(`Health level: ${this._health}`);
    })

  }
  
  drink() {
    this._drinkButton.addEventListener("click", () => {
      this._thirst -= 2;
      this._health += 1;
      console.log(`Thirst level: ${this._thirst}`);
      console.log(`Health level: ${this._health}`);
    })
    
  }
  
  play() {
    this._playButton.addEventListener("click", () => {
      this._happiness += 3;
      this._hunger += 2;
      this._thirst += 1;
      console.log(`Hapiness level: ${this._happiness}`);
      console.log(`Hunger level: ${this._hunger}`);
    })
  }

  sleep() {
    this._sleepButton.addEventListener("click", () => {
      this._health += 2;
      console.log(`Health level: ${this._health}`);
    })
    
  }

  //setting timeout if user doesn't want to look after pet
  hungerDrain() {
    setTimeout(() => {this._hunger +=5 }, 1000);
  }
  
  healthDrain() {
    setTimeout(() => {this._health -=5 }, 1000);
  }
  
  happinessDrain() {
    setTimeout(() => {this._happiness -=3 }, 1000);
  }
  
  thirstDrain() {
      setTimeout(() => {this._thirst +=1 }, 1000);
      console.log(thirsty)
  }
  
  // to check if the pet is still happy
  isPetHappy() {
    if (this._health === 0 || this._happiness === 0 || this._thirst === 60 || this._hunger === 40) {
      console.log("Sadly, your pet is not happy. Try to feed them, give drink or play!");
    } else {
      console.log("Your pet is happy. Good job!");
    }
  }

};