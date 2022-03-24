class Deck {
  constructor(type, size, cardWidth, cardHeight) {
    this.type = type;
    this.size = size;
    this.possibleVals = null;
    this.cards = [];
    this.matched = 0;
    this.cardWidth = cardWidth;
    this.cardHeight = cardHeight;
    this.numStart = 1;
    this.numEnd = 100; 
  }

  setPossibleVals(values) {
    this.possibleVals = values;
  }

  setCards(values, gameBoardWidth) {
    const vals = this.randomizeVals(values);
    let posX = 0; 
    let posY = 0;
    
    for (let i = 0; i < vals.length; i++) {
      this.cards.push({
        id: i,
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
      if (posX >= gameBoardWidth) {
        posX = 0;
        posY = posY + this.cardHeight;
      }
    }
  }

  getValues() {
    return new Promise((resolve) => {
      if (this.type === "word") resolve(this.getWords());
      if (this.type === "number") resolve(this.getNumbers(this.numStart, this.numEnd));
      if (this.type === "picture") {
        this.getImages().then((images) => {
          resolve(images);
        });
      }
    });   
  }

  getNumbers(min, max) {
    const nums = [];

    while (nums.length < this.size) {
      const randNum = String(Math.floor(Math.random() * (max - min + 1) + min));
      
      if (nums.includes(randNum)) continue;

      nums.push(randNum, randNum);
    }

    return nums;
  }

  getWords() {
    const words = [];
    
    while (words.length < this.size) {
      const randNum = Math.floor(Math.random() * (this.possibleVals.length));

      if (words.includes(this.possibleVals[randNum])) continue;

      words.push(this.possibleVals[randNum], this.possibleVals[randNum]);
    }

    return words;
  }

  async getImages() {
    const imgNames = this.getImageNames();
    const imgs = [];

    for (let imgName of imgNames) {
      const img = await this.loadImage(imgName);

      imgs.push(img, img);
    }

    return imgs;
  }

  getImageNames() {
    const names = [];

    while (names.length < this.size / 2) {
      const randNum = Math.floor(Math.random() * (this.possibleVals.length));

      if (names.includes(this.possibleVals[randNum])) continue;

      names.push(this.possibleVals[randNum]);
    }

    return names;
  }

  getCards() {
    return this.cards;
  }

  getSize() {
    return this.size;
  }

  loadImage(imgName) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = `./images/${imgName}.png`;
      
      img.onload = () => {
        resolve(img);
      }

      img.onerror = (message) => {
        reject(message);
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
    const vals = [...values];
    
    for (let i = vals.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [vals[i], vals[j]] = [vals[j], vals[i]];
    }

    return vals;
  }

  getMatched() {
    return this.matched;
  }

  setMatched(matched) {
    this.matched = matched;
  }

  setCardMatchedStatus(card, value) {
    for (let i = 0; i < this.size; i++) {
      if (this.cards[i] === card) {
        this.cards[i].matched = value;

        break;
      }
    }
  }
}

export default Deck;