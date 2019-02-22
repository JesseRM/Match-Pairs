import {Canvas} from './canvas'
import {Deck} from './deck'

const playBtn = document.querySelector('#play-btn');
const canvas = new Canvas(500, 300, '#27566B', document.querySelector('#canvas'));
let deck = null;
const game = {
    options: {
        grid: [4, 4],
        type: 'number'
    }
}

playBtn.addEventListener('click', () => {
    deck = new Deck(game.options.type, game.options.grid, canvas);
    deck.setCards(canvas);
    canvas.draw();
    canvas.drawCards(deck.cards);
});