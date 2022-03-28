class Deck {
  constructor(type, values, cardWidth, cardHeight) {
    this.type = type;
    this.values = values;
    this.cards = [];
    this.matched = 0;
    this.cardWidth = cardWidth;
    this.cardHeight = cardHeight;
  }

  setCards(gameBoardWidth) {
    let posX = 0; 
    let posY = 0;

    for (let i = 0; i < this.values.length; i++) {
      this.cards.push({
        id: i,
        type: this.type,
        value: this.values[i],
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

  getCards() {
    return this.cards;
  }

  getSize() {
    return this.cards.length;
  }

  getClickedCard(coor) {
    for (let i = 0; i < this.cards.length; i++) {
      if (coor.x >= this.cards[i].x && coor.x <= (this.cards[i].x + this.cardWidth)
        && coor.y >= this.cards[i].y && coor.y <= (this.cards[i].y + this.cardHeight)) {
        return this.cards[i];
      }
    }
  }

  getMatched() {
    return this.matched;
  }

  setMatched(matched) {
    this.matched = matched;
  }

  setCardMatchedStatus(card, value) {
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i] === card) {
        console.log("matched");
        this.cards[i].matched = value;

        break;
      }
    }
  }
}

export default Deck;