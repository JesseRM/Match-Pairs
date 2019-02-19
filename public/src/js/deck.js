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
        let values = getValues(this.type);
        
        for (let i = 0; i < values.length; i++) {
            let coordinates = [];

            if (this.cards.length === 0) {
                coordinates = [5, 5]
            } else {
                coordinates = 
            }
            
            this.cards.push({
                cardNum: i,
                value: values[i],
                width: this.cardWidth,
                height: this.cardHeight,
                coordinates
            })
        }

    }
}