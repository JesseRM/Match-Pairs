import {Canvas} from './canvas'

const playBtn = document.querySelector('#play-btn');
const canvas = new Canvas(500, 300, '#27566B', document.querySelector('#canvas'))
const game = {
    options: {
        grid: '4 x 4',
        type: 'number'
    }
}

playBtn.addEventListener('click', () => {
    canvas.draw();
});