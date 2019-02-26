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
    cardsClicked: []
}

playBtn.addEventListener('click', () => {
    deck = new Deck(game.options.type, game.options.grid, canvas);
    deck.setCards(canvas);
    canvas.draw();
    canvas.drawCards(deck.cards);
});

canvas.element.addEventListener('click', (event) => {
    let clickedCard = deck.getClickedCard(canvas.getClickedCoordinates(event));
    

})