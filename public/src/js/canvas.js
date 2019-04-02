class Canvas {
    constructor(width, height, backgroundColor, element) {
        this.width = width;
        this.height = height;
        this.element = element;
        this.backgroundColor = backgroundColor;
        this.ctx = this.element.getContext('2d');
    }

    draw() {
        this.element.width = this.width;
        this.element.height = this.height;
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawCards(cards) {
        cards.forEach(card => {
            this.ctx.fillStyle = '#5C8495';
            this.ctx.fillRect(card.x, card.y, card.width, card.height);
            this.ctx.lineWidth = 5;
            this.ctx.strokeStyle = '#001017';
            this.ctx.strokeRect(card.x, card.y, card.width, card.height);
        });
    }

    getClickedCoordinates(event) {
        let rect = this.element.getBoundingClientRect();
        let coor = {};

        coor.x = event.clientX - rect.left;
        coor.y = event.clientY - rect.top;

        return coor;
    }

    drawValue(card) {
        if (card.type === 'picture') {
            this.ctx.drawImage(card.value, card.x, card.y);
        } else {   
            this.ctx.font = '20px Roboto';
            this.ctx.fillStyle = '#100f0f';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(card.value, card.x + (card.width / 2), card.y + (card.height / 2));
        }
    
    }

    drawSelectedCard(card) {
        this.ctx.fillStyle = '#dad5d5';
        this.ctx.fillRect(card.x, card.y, card.width, card.height);
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#b5361b';
        this.ctx.strokeRect(card.x, card.y, card.width, card.height);
        this.drawValue(card);
    }

    drawMatchedCards(cards) {
        cards.forEach((card) => {
            this.ctx.lineWidth = 5;
            this.ctx.strokeStyle = '#001017';
            this.ctx.strokeRect(card.x, card.y, card.width, card.height);
        });
    }
}

export {Canvas}