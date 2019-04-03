import {Canvas} from './canvas'
import {Deck} from './deck'
import {endGame, getMenuVals} from './game'

const playBtn = document.querySelector('#play-btn');
const menuElements = {
    gridSize: document.querySelector('#grid-select'),
    type: document.querySelector('#type-select'),
    time: document.querySelector('#time-select')
}
const canvas = new Canvas(600, 600, '#27566B', document.querySelector('#canvas'));
let deck = null;
let game = null;

playBtn.addEventListener('click', () => {
    game = {
        options: null,
        cardsDisplayed: 0,
        cardsClicked: [],
        userInput: true
    }
    
    game.options = getMenuVals(menuElements);
    deck = new Deck(game.options.type, game.options.grid, canvas);
    
    deck.getValues().then((values) => {
        deck.setCards(values, canvas);
        canvas.draw();
        canvas.drawCards(deck.cards);
    });
});

canvas.element.addEventListener('click', (event) => {
    let clickedCard = deck.getClickedCard(canvas.getClickedCoordinates(event));
    
    if (clickedCard.matched !== true && !game.cardsClicked.includes(clickedCard) && game.userInput) {
        game.cardsDisplayed++;
        
        if (game.cardsDisplayed <= 2) {
            canvas.drawSelectedCard(clickedCard);
            game.cardsClicked.push(clickedCard);
        }

        if (game.cardsDisplayed === 2) {
            game.userInput = false;
            
            if (game.cardsClicked[0]['value'] !== game.cardsClicked[1]['value']) {
                setTimeout(() => {
                    canvas.drawCards(game.cardsClicked);
                    game.cardsClicked = [];
                    game.userInput = true;
                }, 1000);
            } else {
                canvas.drawMatchedCards(game.cardsClicked);
                game.cardsClicked[0]['matched'] = true;
                game.cardsClicked[1]['matched'] = true;
                game.cardsClicked = [];
                game.userInput = true;
                deck.matched += 2;
            }

            game.cardsDisplayed = 0;

            if (deck.matched === deck.size) {
                endGame('win', canvas);
            }
        }
    }
}); 

