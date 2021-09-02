class Canvas {
    constructor(backgroundColor, element) {
        this.element = element;
        this.backgroundColor = backgroundColor;
        this.ctx = null;
    }

    setContext() {
        this.element.width = this.element.clientWidth;
        this.element.height = this.element.clientHeight;
        this.ctx = this.element.getContext('2d');
    }

    draw() {
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, this.element.width, this.element.height);
    }

    drawBlankCards(cards) {
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
            let picWidth = card.value.width > card.width ? (card.width - 20) : card.value.width;
            let picHeight = card.value.height > card.height ? (card.height - 20) : card.value.height;
            let picX = card.x + ((card.width - picWidth) / 2);
            let picY = card.y + ((card.height - picHeight) / 2);
            
            this.ctx.drawImage(card.value, picX, picY, picWidth, picHeight);
        } else {   
            this.ctx.fillStyle = '#100f0f';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(card.value, card.x + (card.width / 2), card.y + (card.height / 2));
        }
    }

    drawSelectedCard(card, font) {
        if (font) this.ctx.font = `20px ${font}`;
        
        this.ctx.fillStyle = '#dad5d5';
        this.ctx.fillRect(card.x, card.y, card.width, card.height);
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#b5361b';
        this.ctx.strokeRect(card.x, card.y, card.width, card.height);
        this.drawValue(card);
    }

    setMatchedCards(cards) {
        cards.forEach((card) => {
            this.ctx.lineWidth = 5;
            this.ctx.strokeStyle = '#001017';
            this.ctx.strokeRect(card.x, card.y, card.width, card.height);
        });
    }

    setFont(font) {
        this.ctx.font = font;
    }

    addCssClass(className) {
        this.element.classList.add(className);
    }
}

export {Canvas}