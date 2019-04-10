class Deck {
    constructor(type, grid, canvas) {
        this.type = type;
        this.size = grid[0] * grid[1];
        this.possibleVals = null;
        this.cards = [];
        this.matched = 0;
        this.cardWidth = canvas.width / grid[0];
        this.cardHeight = canvas.height / grid[1]; 
    }

    setCards(values, canvas) {
        let vals = this.randomizeVals([...values]);
        let posX = 0, posY = 0;
        
        for (let i = 0; i < vals.length; i++) {
            this.cards.push({
                cardNum: i,
                type: this.type,
                value: vals[i],
                width: this.cardWidth,
                height: this.cardHeight,
                matched: false,
                x: posX,
                y: posY
            });

            posX = posX + this.cardWidth;

            //Check if we need to start a new row
            if (posX >= canvas.width) {
                posX = 0;
                posY = posY + this.cardHeight;
            }
        }
    }

    getValues() {
        return new Promise((resolve) => {
            if (this.type === 'word') resolve(this.getWords());
            if (this.type === 'number') resolve(this.getNumbers(1, 100));
            if (this.type === 'picture') {
                this.getImages().then((images) => {
                    resolve(images);
                });
            }
        });   
    }

    getNumbers(min, max) {
        let nums = [];

        while (nums.length < this.size) {
            let rand = String(Math.floor(Math.random() * (max - min + 1) + min));
            
            if (nums.includes(rand)) continue;

            nums.push(rand, rand);
        }

        return nums;
    }

    getWords() {
        let words = [];
        
        while (words.length < this.size) {
            let rand = Math.floor(Math.random() * (this.possibleVals.length));

            if (words.includes(this.possibleVals[rand])) continue;

            words.push(this.possibleVals[rand], this.possibleVals[rand]);
        }

        return words;
    }

    async getImages() {
        let imgNames = this.getImageNames();
        let imgs = [];

        for (let i = 0; i < imgNames.length; i++) {
            let img = await this.loadImage(imgNames[i]);
        
            imgs.push(img, img);
        }

        return imgs;
    }

    getImageNames() {
        let names = [];

        while (names.length < this.size / 2) {
            let rand = Math.floor(Math.random() * (this.possibleVals.length));

            if (names.includes(this.possibleVals[rand])) continue;

            names.push(this.possibleVals[rand]);
        }

        return names;
    }

    loadImage(imgName) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.src = `./images/${imgName}.png`;
            
            img.onload = () => {
                console.log('loaded');
                resolve(img);
            }

            img.onerror = () => {
                console.log('Error loading image');
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