import {Canvas} from './canvas'
import {Deck} from './deck'

const playBtn = document.querySelector('#play-btn');
const canvas = new Canvas(500, 300, '#27566B', document.querySelector('#canvas'));
let deck = null;
const game = {
    options: {
        grid: [4, 4],
        type: 'word'
    },
    cardsDisplayed: 0,
    cardsClicked: [],
    userInput: true
}

playBtn.addEventListener('click', () => {
    deck = new Deck(game.options.type, game.options.grid, canvas);
    deck.setCards(canvas);
    canvas.draw();
    canvas.drawCards(deck.cards);
});

canvas.element.addEventListener('click', (event) => {
    let clickedCard = deck.getClickedCard(canvas.getClickedCoordinates(event));
    
    if (clickedCard.matched !== true && !game.cardsClicked.includes(clickedCard) && game.userInput) {
        game.cardsDisplayed++;
        
        if (game.cardsDisplayed <= 2) {
            canvas.drawValue(clickedCard);
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
                game.cardsClicked[0]['matched'] = true;
                game.cardsClicked[1]['matched'] = true;
                game.cardsClicked = [];
                game.userInput = true;
            }

            game.cardsDisplayed = 0;
        }
    }
}); 