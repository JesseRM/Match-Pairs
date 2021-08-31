import {Canvas} from './canvas'
import {Deck} from './deck'
import {endGame, getMenuVals, startTimer} from './game'
import {words} from './words'
import {images} from './images'

const timerDisplay = document.querySelector('#timer');
const playBtn = document.querySelector('#play-btn');
const menuElements = {
    gridSize: document.querySelector('#grid-select'),
    type: document.querySelector('#type-select'),
    time: document.querySelector('#time-select')
}
const canvas = new Canvas('#27566B', document.querySelector('#canvas'));
let deck = null;
let game = null;

playBtn.addEventListener('click', () => {
    if (game && game.options.timer.id) {
        timerDisplay.textContent = '';
        clearInterval(game.options.timer.id);
    }
    
    game = {
        options: null,
        cardsDisplayed: 0,
        cardsClicked: [],
        userInput: true,
        isRunning: true
    }
    
    game.options = getMenuVals(menuElements);
    
    canvas.setContext();
    deck = new Deck(game.options.type, game.options.grid, canvas);

    if (deck.type === 'word') deck.setPossibleVals(words);
    if (deck.type === 'picture') deck.setPossibleVals(images);
    
    deck.getValues().then((values) => {
        deck.setCards(values, canvas);
        canvas.draw();
        canvas.drawBlankCards(deck.cards);
        canvas.addCssClass('shadow');
    });

    if (game.options.timer.seconds) startTimer(game, timerDisplay, canvas);
});

canvas.element.addEventListener('click', (event) => {
    let clickedCard = deck.getClickedCard(canvas.getClickedCoordinates(event));
    
    if (game.userInput && clickedCard.matched !== true && !game.cardsClicked.includes(clickedCard)) {
        game.cardsDisplayed++;
        
        if (game.cardsDisplayed <= 2) {
            canvas.drawSelectedCard(clickedCard, 'Bangers');
            game.cardsClicked.push(clickedCard);
        }

        if (game.cardsDisplayed === 2) {
            game.userInput = false;
            
            if (game.cardsClicked[0]['value'] !== game.cardsClicked[1]['value']) {
                setTimeout(() => {
                    if (game.isRunning) {
                        canvas.drawBlankCards(game.cardsClicked);
                        game.cardsClicked = [];
                        game.userInput = true;
                    }  
                }, 1000);
            } else {
                canvas.setMatchedCards(game.cardsClicked);
                game.cardsClicked[0]['matched'] = true;
                game.cardsClicked[1]['matched'] = true;
                game.cardsClicked = [];
                game.userInput = true;
                deck.matched += 2;
            }

            game.cardsDisplayed = 0;

            if (deck.matched === deck.size) {
                endGame('win', game, canvas);
            }
        }
    }
}); 

