import {words} from './words'

class Deck {
    constructor(type, grid, canvas) {
        this.type = type;
        this.size = grid[0] * grid[1];
        this.cards = [];
        this.matched = 0;
        this.cardWidth = canvas.width / grid[0];
        this.cardHeight = canvas.height / grid[1]; 
    }

    setCards(canvas) {
        let values = this.randomizeVals(this.getValues(this.type, this.size));
        let x = 0, y = 0;
        
        for (let i = 0; i < values.length; i++) {
            this.cards.push({
                cardNum: i,
                value: values[i],
                width: this.cardWidth,
                height: this.cardHeight,
                matched: false,
                x: x,
                y: y
            });

            x = x + this.cardWidth;

            if (x >= canvas.width) {
                x = 0;
                y = y + this.cardHeight;
            }
        }

    }

    getValues(type, size) {
        let values = [];

        if (type === 'number') {
            while (values.length < size) {
                let rand = String(Math.floor(Math.random() * (100 - 1) + 1));
                
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

    getClickedCard(coor) {
        for (let i = 0; i < this.cards.length; i++) {
            if (coor.x >= this.cards[i].x && coor.x <= (this.cards[i].x + this.cardWidth)
                && coor.y >= this.cards[i].y && coor.y <= (this.cards[i].y + this.cardHeight)) {
                    return this.cards[i];
                }
        }
    }

    randomizeVals(values) {
        let vals = [...values];
        
        for (let i = vals.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [vals[i], vals[j]] = [vals[j], vals[i]];
        }

        return vals;
    }
}

export {Deck}