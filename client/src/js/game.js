import { GameBoardImage, GameBoardText } from "./model/gameBoard.js";
import Deck from "./model/deck.js";

function initGame(menuElements) {
  const game = {
    options: null,
    cardsDisplayed: 0,
    cardsClicked: [],
    userInput: true,
    isRunning: true
  }

  game.options = getMenuVals(menuElements);

  return game;
}

function initDeck(gameState, values, gameBoardWidth, gameBoardHeight) {
  const gridColums = gameState.options.grid[0];
  const gridRows = gameState.options.grid[1];
  const cardWidth = gameBoardWidth / gridColums;
  const cardHeight = gameBoardHeight / gridRows;
  const shuffled = [];

  for (let value of values) shuffled.push(value, value);

  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const deck = new Deck(gameState.options.type, shuffled, cardWidth, cardHeight);

  return deck;
}

function initGameBoard(canvasEl, type) {
  let gameBoard = null;

  if (type === "picture") gameBoard = new GameBoardImage(canvasEl);
  if (type !== "picture") gameBoard = new GameBoardText(canvasEl);
  gameBoard.setContext()
  
  return gameBoard;
}

function endGame(type, game, gameBoard) {
  game.userInput = false;
  game.isRunning = false;
  
  if (game && game.options.timer.id) clearInterval(game.options.timer.id);
  
  gameBoard.displayEndGame(type);
}

function getMenuVals(menu) {
  const vals = {};

  if (menu.gridSize.value === "4 x 4") vals.grid = [4, 4];
  else if (menu.gridSize.value === "4 x 5") vals.grid = [4, 5];
  else if (menu.gridSize.value === "5 x 6") vals.grid = [5, 6];
  else vals.grid = [4, 4];

  vals.type = menu.type.value.toLowerCase();
  vals.timer = {};
  
  if (menu.time.value !== "None") {
    const minutes = parseInt(menu.time.value, 10);

    if (minutes && minutes > 0 && minutes <= 5) {
      vals.timer.seconds = minutes * 60;
    } else {
      vals.timer.seconds = 0;
    }
  }

  return vals;
}

function displayTimeLeft(secs, timeDisplay) {
  const minutes = Math.floor(secs / 60);
  const seconds = secs % 60;
  const time = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  timeDisplay.textContent = time;
}

function startTimer(game, display, gameBoard) {
  const then = Date.now() + game.options.timer.seconds * 1000;
  
  displayTimeLeft(game.options.timer.seconds, display);

  game.options.timer.id = setInterval(() => {
    game.options.timer.secondsLeft = Math.round((then - Date.now()) / 1000);

    if (game.options.timer.secondsLeft < 0) {
      clearInterval(game.options.timer.id);

      endGame("loose", game, gameBoard);
      return;
    }

    displayTimeLeft(game.options.timer.secondsLeft, display);
  }, 1000);
}

export {endGame, getMenuVals, startTimer, initDeck, initGame, initGameBoard};