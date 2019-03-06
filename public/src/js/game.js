function endGame(type, canvas) {
    if (type === 'win') {
        canvas.ctx.fillStyle = 'rgba(230, 235, 244, 0.6)';
        canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
        canvas.ctx.font = '80px Roboto';
        canvas.ctx.fillStyle = '#148207';
        canvas.ctx.textAlign = 'center';
        canvas.ctx.fillText('You win!', canvas.width / 2, canvas.height / 2);
    }
}

export {endGame};