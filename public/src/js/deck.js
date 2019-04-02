import {words} from './words'
import {images} from './images'

class Deck {
    constructor(type, grid, canvas) {
        this.type = type;
        this.size = grid[0] * grid[1];
        this.cards = [];
        this.matched = 0;
        this.cardWidth = canvas.width / grid[0];
        this.cardHeight = canvas.height / grid[1]; 
    }

    setCards(values, canvas) {
        let vals = this.randomizeVals([...values]);
        let x = 0, y = 0;
        
        for (let i = 0; i < vals.length; i++) {
            this.cards.push({
                cardNum: i,
                type: this.type,
                value: vals[i],
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

    getValues() {
        return new Promise((resolve) => {
            if (this.type === 'word') resolve(this.getWords(words));
            if (this.type === 'number') resolve(this.getNumbers());
            if (this.type === 'picture') {
                this.getImages().then((images) => {
                    console.log(images);
                    resolve(images);
                });
            }
        });   
    }

    getNumbers() {
        let nums = [];

        while (nums.length < this.size) {
            let rand = String(Math.floor(Math.random() * (100 - 1) + 1));
            
            if (nums.includes(rand)) continue;

            nums.push(rand, rand);
        }

        return nums;
    }

    getWords(wordArr) {
        let words = [];
        
        while (words.length < this.size) {
            let rand = Math.floor(Math.random() * (wordArr.length));

            if (words.includes(wordArr[rand])) continue;

            words.push(wordArr[rand], wordArr[rand]);
        }

        return words;
    }

    async getImages() {
        console.log('getimages ran');
        let imgNames = this.getImageNames(images);
        let imgs = [];

        for (let i = 0; i < imgNames.length; i++) {
            let img = await this.loadImage(imgNames[i]);
        
            imgs.push(img, img);
        }

        return imgs;
    }

    getImageNames(imageNames) {
        let names = [];

        while (names.length < this.size / 2) {
            let rand = Math.floor(Math.random() * (imageNames.length));

            if (names.includes(imageNames[rand])) continue;

            names.push(imageNames[rand]);
        }

        return names;
    }

    loadImage(path) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.src = `./images/${path}.png`;
            
            img.onload = () => {
                console.log('loaded');
                resolve(img);
            }

            img.onerror = () => {
                console.log('Error');
            }
        });
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