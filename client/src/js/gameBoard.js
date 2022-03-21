class GameBoard {
  constructor(canvasEl) {
    this.canvasEl = canvasEl;
    this.backCardColor = "#5C8495";
    this.faceCardColor = "#dad5d5";
    this.backOutline = "#001017";
    this.faceOutline = "#b5361b";
    this.outlineWidth = 5;
    this.fontSize = 20;
    this.ctx = null; 
  }

  setContext() {
    this.canvasEl.width = this.canvasEl.clientWidth;
    this.canvasEl.height = this.canvasEl.clientHeight;
    this.ctx = this.canvasEl.getContext("2d");
  }

  draw() {
    this.ctx.fillStyle = this.backCardColor;
    this.ctx.fillRect(0, 0, this.canvasEl.width, this.canvasEl.height);
  }

  drawBlankCards(cards) {
    cards.forEach(card => {
      this.ctx.fillStyle = this.backCardColor;
      this.ctx.fillRect(card.x, card.y, card.width, card.height);
      this.ctx.lineWidth = this.outlineWidth;
      this.ctx.strokeStyle = this.backOutline;
      this.ctx.strokeRect(card.x, card.y, card.width, card.height);
    });
  }

  getClickedCoordinates(event) {
    const rect = this.canvasEl.getBoundingClientRect();
    const coor = {};

    coor.x = event.clientX - rect.left;
    coor.y = event.clientY - rect.top;

    return coor;
  }

  drawValue(card, textColor, font) {
    if (card.type === "picture") {
      const picWidth = card.value.width > card.width ? (card.width - 20) : card.value.width;
      const picHeight = card.value.height > card.height ? (card.height - 20) : card.value.height;
      const picX = card.x + ((card.width - picWidth) / 2);
      const picY = card.y + ((card.height - picHeight) / 2);
      
      this.ctx.drawImage(card.value, picX, picY, picWidth, picHeight);
    } else {   
      this.ctx.fillStyle = textColor;
      this.ctx.textAlign = 'center';
      this.ctx.font = font;
      this.ctx.fillText(card.value, card.x + (card.width / 2), card.y + (card.height / 2));
    }
  }

  drawSelectedCard(card, options) {
    const fontName = options.font;
    const textColor = options.fillStyle ? options.fillStyle : "#100f0f";
    const font = `${this.font}px ${fontName ? fontName : ""}`;
    
    this.ctx.fillStyle = this.faceCardColor;
    this.ctx.fillRect(card.x, card.y, card.width, card.height);
    this.ctx.lineWidth = this.outlineWidth;
    this.ctx.strokeStyle = this.faceOutline;
    this.ctx.strokeRect(card.x, card.y, card.width, card.height);
    this.drawValue(card, textColor, font);
  }

  setMatchedCards(cards) {
    cards.forEach((card) => {
      this.ctx.lineWidth = this.outlineWidth;
      this.ctx.strokeStyle = this.faceOutline;
      this.ctx.strokeRect(card.x, card.y, card.width, card.height);
    });
  }

  addCssClass(className) {
    this.canvasEl.classList.add(className);
  }
}

export default GameBoard;