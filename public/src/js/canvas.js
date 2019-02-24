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
        this.ctx.fillStyle = '#dad5d5';
        this.ctx.fillRect(card.x, card.y, card.width, card.height);
        this.ctx.font = '25px serif';
        this.ctx.fillStyle = '#100f0f';
        this.ctx.fillText(card.value, card.x, card.y + 20);
    }
}

export {Canvas}