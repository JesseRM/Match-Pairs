import {initGame, initGameBoard, initDeck, endGame, startTimer} from "./game.js";
import words from "./words.js";
import imageNames from "./imageNames.js";

const timerDisplay = document.querySelector("#timer");
const playBtn = document.querySelector("#play-btn");
const menuElements = {
  gridSize: document.querySelector("#grid-select"),
  type: document.querySelector("#type-select"),           
  time: document.querySelector("#time-select")
};
const canvas = document.querySelector("#game-board");
let gameBoard = null;
let deck = null;
let game = null;

playBtn.addEventListener("click", () => {
  if (game && game.options.timer.id) {
    timerDisplay.textContent = "";
    clearInterval(game.options.timer.id);
  }

  game = initGame(menuElements);
  gameBoard = initGameBoard(canvas);
  deck = initDeck(game, gameBoard.getWidth(), gameBoard.getHeight());

  if (deck.type === "word") deck.setPossibleVals(words);
  if (deck.type === "picture") deck.setPossibleVals(imageNames);
  
  deck.getValues().then((values) => {
    deck.setCards(values, gameBoard.getWidth());
    gameBoard.draw();
    gameBoard.drawBlankCards(deck.getCards());
    gameBoard.addCssClass("shadow");
  });

  if (game.options.timer.seconds) startTimer(game, timerDisplay, gameBoard);
});

canvas.addEventListener("click", (event) => {
  const clickedCard = deck.getClickedCard(gameBoard.getClickedCoordinates(event));
  
  // Check if user is allowed to make a selection, if the selected card has not been matched
  // and if the card has not already been selected
  if (game.userInput && !clickedCard.matched && !game.cardsClicked.includes(clickedCard)) {
    game.cardsDisplayed++;
    
    if (game.cardsDisplayed <= 2) {
      const options = {
        font: "Bangers"
      };
      gameBoard.drawSelectedCard(clickedCard, options);
      game.cardsClicked.push(clickedCard);
    }

    // If two cards are currently being displayed, do not allow the user to make another selection
    // and check for a match
    if (game.cardsDisplayed === 2) {
      game.userInput = false;
      
      //If the two selected cards don't match "flip" them over
      if (game.cardsClicked[0]["value"] !== game.cardsClicked[1]["value"]) {
        setTimeout(() => {
          if (game.isRunning) {
            gameBoard.drawBlankCards(game.cardsClicked);
            game.cardsClicked = [];
            game.userInput = true;
          }  
        }, 1000);
      } else {
        gameBoard.setMatchedCards(game.cardsClicked);
        deck.setCardMatchedStatus(game.cardsClicked[0], true);
        deck.setCardMatchedStatus(game.cardsClicked[1], true);
        game.cardsClicked = [];
        game.userInput = true;
        const numCardsMatched = 2;
        deck.setMatched(deck.getMatched() + numCardsMatched);
      }

      game.cardsDisplayed = 0;

      // If the number of matched cards is equal to the toal size  of the deck, user has won
      if (deck.getMatched() === deck.getSize()) {
        endGame("win", game, gameBoard);
      }
    }
  }
}); 