//Data

const wordList = [
  {
    word: "mountain",
    hint: "A large landform that rises prominently above its surroundings.",
  },
  {
    word: "orchestra",
    hint: "A large ensemble of musicians playing various instruments together.",
  },
  {
    word: "telescope",
    hint: "An optical instrument that gathers and magnifies distant objects for observation.",
  },
  {
    word: "cucumber",
    hint: "A green vegetable with a mild flavor, often used in salads or pickles.",
  },
  {
    word: "architecture",
    hint: "The art and science of designing and constructing buildings.",
  },
  {
    word: "adventure",
    hint: "An exciting or unusual experience, often involving risk or danger.",
  },
  {
    word: "technology",
    hint: "The application of scientific knowledge for practical purposes, especially in industry.",
  },
  {
    word: "butterfly",
    hint: "A flying insect with brightly colored wings and a slender body.",
  },
  {
    word: "submarine",
    hint: "A watercraft capable of independent operation underwater.",
  },
  {
    word: "magnetism",
    hint: "The force of attraction or repulsion between objects with magnetic properties.",
  },
  {
    word: "whale",
    hint: "A large marine mammal with a streamlined body and a blowhole for breathing.",
  },
  {
    word: "quasar",
    hint: "An extremely luminous celestial object, thought to be a type of active galactic nucleus.",
  },
  {
    word: "garden",
    hint: "A piece of ground, often near a house, used for growing flowers, fruits, or vegetables.",
  },
  {
    word: "robot",
    hint: "A machine capable of carrying out complex tasks, often programmable by computer.",
  },
  {
    word: "crystal",
    hint: "A solid material with a repeating, ordered arrangement of atoms or molecules.",
  },
  {
    word: "volcano",
    hint: "A vent in the Earth's crust through which molten lava, ash, and gases erupt.",
  },
  {
    word: "puzzle",
    hint: "A game, toy, or problem that tests one's ingenuity or knowledge.",
  },
  {
    word: "galaxy",
    hint: "A system of millions or billions of stars, together with gas and dust, held together by gravitational attraction.",
  },
  {
    word: "cathedral",
    hint: "A large and important church, typically the chief church of a diocese.",
  },
  {
    word: "voyage",
    hint: "A long journey, especially by sea or in space.",
  },
];

// MAIN CONTAINER

const mainsection = document.createElement("section");
mainsection.classList.add("main-container");
document.body.appendChild(mainsection);
mainsection.style.alignItems = "center";

///Leftand Right Container

const leftContainer = document.createElement("div");
leftContainer.classList.add("left-container");
mainsection.appendChild(leftContainer);
const rightContainer = document.createElement("div");
rightContainer.classList.add("right-container");
mainsection.appendChild(rightContainer);

//Left Container
///Gallows
const gallows = document.createElement("div");
leftContainer.appendChild(gallows);
gallows.classList.add("gallow-main");
gallows.style.width = "353px";
gallows.style.height = "581px";
gallows.style.marginLeft = "150px";
gallows.style.marginTop = "70px";

// Create gallows components
createGallowsComponent(42, 353, "rotate(90deg)", 100, -120);
createGallowsComponent(42, 581, "", 0, 0);
createGallowsComponent(42, 202.598, "rotate(45deg)", 80, 30);
createGallowsComponent(10, 74, "", 250, 80);
createGallowsComponent(380, 42, "rotate(180deg)", 0, 540);

// Function to create a gallows component
function createGallowsComponent(
  width,
  height,
  transform,
  marginLeft,
  marginTop
) {
  const component = document.createElement("div");
  gallows.appendChild(component);

  component.style.width = width + "px";
  component.style.height = height + "px";
  component.style.transform = transform;
  component.style.flexShrink = "0";
  component.style.borderRadius = "5px";
  component.style.border = "3px solid #FFFEFE";
  component.style.background = "#000";
  component.style.position = "absolute";
  component.style.zIndex = "10";
  component.style.marginLeft = marginLeft + "px";
  component.style.marginTop = marginTop + "px";
}

//Person
const person = document.createElement("div");
gallows.appendChild(person);

person.style.position = "absolute";
//head
const headDiv = document.createElement("div");
headDiv.classList.add("display-hidden");

headDiv.style.width = "101px";
headDiv.style.height = "101px";
headDiv.style.flexShrink = "0";
headDiv.style.borderRadius = "101px";
headDiv.style.border = "5px solid #909090";
headDiv.style.background = "#fff";
headDiv.style.marginLeft = "200px";
headDiv.style.marginTop = "170px";
person.appendChild(headDiv);

//body
const bodyDiv = document.createElement("div");
bodyDiv.classList.add("display-hidden");
bodyDiv.style.width = "5px";
bodyDiv.style.height = "131px";
bodyDiv.style.flexShrink = "0";
bodyDiv.style.background = "#909090";
bodyDiv.style.marginLeft = "250px";
bodyDiv.style.marginTop = "10px";
person.appendChild(bodyDiv);

//Left hand

const lefthand = document.createElement("div");
lefthand.classList.add("display-hidden");
lefthand.style.width = "5px";
lefthand.style.height = "100px";
lefthand.style.transform = "rotate(-40deg)";
lefthand.style.flexShrink = "0";
lefthand.style.background = "#909090";
lefthand.style.marginLeft = "310px";
lefthand.style.marginTop = "-130px";
person.appendChild(lefthand);
//Right hand
const righthand = document.createElement("div");
righthand.classList.add("display-hidden");
righthand.style.width = "5px";
righthand.style.height = "100px";
righthand.style.transform = "rotate(40deg)";
righthand.style.flexShrink = "0";
righthand.style.background = "#909090";
righthand.style.marginLeft = "180px";
righthand.style.marginTop = "-100px";
person.appendChild(righthand);

//LeftLeg
const leftLeg = document.createElement("div");
leftLeg.classList.add("display-hidden");
leftLeg.style.width = "5px";
leftLeg.style.height = "80px";
leftLeg.style.background = "#909090";
leftLeg.style.transform = "rotate(40deg)";
leftLeg.style.flexShrink = "0";
leftLeg.style.marginLeft = "180px";
person.appendChild(leftLeg);

//legRight
const rightLeg = document.createElement("div");
rightLeg.classList.add("display-hidden");
rightLeg.style.width = "5px";
rightLeg.style.height = "80px";
rightLeg.style.background = "#909090";
rightLeg.style.transform = "rotate(-40deg)";
rightLeg.style.flexShrink = "0";
rightLeg.style.marginLeft = "310px";
rightLeg.style.marginTop = "-90px";
person.appendChild(rightLeg);

///The Game Name

const gamename = document.createElement("p");
gamename.innerText = "Hang Man Game";
gamename.style.fontSize = "35px";
gamename.style.marginLeft = "200px  ";
leftContainer.appendChild(gamename);

//Left Container UP
//Right Container Down

//WordDisplay
const wordDisplay = document.createElement("ul");
wordDisplay.classList.add("word-display");
rightContainer.appendChild(wordDisplay);

//Hints
const hintH4 = document.createElement("h4");
hintH4.classList.add("hint-text");
hintH4.innerText = "Hint: ";
rightContainer.appendChild(hintH4);
const hintBold = document.createElement("b");
hintH4.appendChild(hintBold);

//Guess Word

const guessword = document.createElement("h4");
guessword.classList.add("guess-word");
guessword.innerText = "Incorrect guess: ";
rightContainer.appendChild(guessword);
guessword.style.marginLeft = "300px";
const guessBold = document.createElement("b");
guessword.appendChild(guessBold);

//Keyboard

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
rightContainer.appendChild(keyboard);

//// Adding everything

//Keyboard adding //Keyboard buttons clickable
const fetchkeboard = document.querySelector(".keyboard");

for (let i = 97; i < 122; i++) {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = String.fromCharCode(i);
  fetchkeboard.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

// =============== GamePlay Part ===============

//Get Data into hints
let currentWord;
let correctLetters = [];
let wrongGuess = 0;
const maxGuess = 6;

///Game Reseter

const resetGame = () => {
  correctLetters = [];
  wrongGuess = 0;
  guessBold.innerText = `${wrongGuess} / ${maxGuess}`;
  headDiv.classList.add("display-hidden");
  bodyDiv.classList.add("display-hidden");
  lefthand.classList.add("display-hidden");
  righthand.classList.add("display-hidden");
  leftLeg.classList.add("display-hidden");
  rightLeg.classList.add("display-hidden");
  keyboard.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  gameModal.classList.remove("show");
};

//Random Words
const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word; // Move this line after the definition of word
  hintH4.innerText = `Hint: ${hint}`;
  // resetGame();
};

getRandomWord();
//GameOver function

const gameOver = (isVictory) => {
  setTimeout(() => {
    const modalText = isVictory
      ? `You found the word`
      : `The correct word was: `;
    gameModal.querySelector("h4").innerText = `${
      isVictory ? "Congrats" : "Game Over"
    }`;
    gameModal.querySelector(
      "p"
    ).innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
  }, 300);
};

///Initialize game

const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    wrongGuess++;
    if (headDiv.classList.contains("display-hidden")) {
      headDiv.classList.remove("display-hidden");
    } else if (bodyDiv.classList.contains("display-hidden")) {
      bodyDiv.classList.remove("display-hidden");
    } else if (lefthand.classList.contains("display-hidden")) {
      lefthand.classList.remove("display-hidden");
    } else if (righthand.classList.contains("display-hidden")) {
      righthand.classList.remove("display-hidden");
    } else if (leftLeg.classList.contains("display-hidden")) {
      leftLeg.classList.remove("display-hidden");
    } else if (rightLeg.classList.contains("display-hidden")) {
      rightLeg.classList.remove("display-hidden");
    }
  }
  button.disabled = true;
  guessBold.innerText = `${wrongGuess} / ${maxGuess}`;
  if (wrongGuess === maxGuess) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

///Modal
// Create div for modal content
let modalDiv = document.createElement("div");
modalDiv.classList.add("modal");
document.body.appendChild(modalDiv);

const gameModal = document.querySelector(".modal");
//Modal Div
let modalContent = document.createElement("div");
modalContent.classList.add("content");
modalDiv.appendChild(modalContent);

// Create h4 and p element for modal text

let gameOverH4 = document.createElement("h4");
let modalTextP = document.createElement("p");
let modalButton = document.createElement("button");

modalButton.classList.add("play-again");
const playAgain = document.querySelector(".play-again");

gameOverH4.textContent = "Game Over!";
modalButton.textContent = "Play Agan!";

modalContent.appendChild(gameOverH4);
modalContent.appendChild(modalTextP);
modalContent.appendChild(modalButton);

modalButton.addEventListener("click", resetGame);
getRandomWord();
