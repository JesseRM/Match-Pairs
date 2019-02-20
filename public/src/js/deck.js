import {words} from './words'

class Deck {
    constructor(type, grid) {
        this.type = type;
        this.size = grid[0] * grid[1];
        this.cards = [];
        this.cardWidth = null;
        this.cardHeight = null;
        this.cardPadding = 5;
    }

    setCards(canvas) {
        let values = this.getValues(this.type, this.size);
        
        for (let i = 0; i < values.length; i++) {
            let coordinates = [];

            if (this.cards.length === 0) {
                coordinates = [this.cardPadding, this.cardPadding];
            } else {
                coordinates[0] = this.cards[i - 1]['coordinates'][0] + this.cardWidth + this.cardPadding;
                coordinates[1] = this.cards[i - 1]['coordinates'][1];

                if (coordinates[0] > canvas.width) {
                    coordinates[0] = this.cardPadding;
                    coordinates[1] = this.cards[i - 1]['coordinates'][1] + this.cardHeight + this.cardPadding;
                }
            }
            
            this.cards.push({
                cardNum: i,
                value: values[i],
                width: this.cardWidth,
                height: this.cardHeight,
                coordinates: [coordinates[0], coordinates[1]]
            })
        }

    }

    getValues(type, size) {
        let values = [];

        if (type === 'number') {
            while (values.length < size) {
                let rand = Math.floor(Math.random() * (100 - 1) + 1);
                
                if (values.includes(rand)) continue;

                values.push(rand, rand);
            }
        }

        if (type === 'word') {
            while (values.length < size) {
                let rand = Math.floor(Math.random() * (size + 1));

                if (values.includes(words[rand])) continue;

                values.push(words[rand], words[rand]);
            }
        }

        return values;
    }
}