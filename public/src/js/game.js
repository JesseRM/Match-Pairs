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

function getMenuVals(menu) {
    const vals = {};
    let min = null;

    if (menu.gridSize.value === '4 x 4') vals.grid = [4, 4];
    else if (menu.gridSize.value === '4 x 5') vals.grid = [4, 5];
    else if (menu.gridSize.value === '5 x 6') vals.grid = [5, 6];
    else vals.grid = [4, 4];

    vals.type = menu.type.value.toLowerCase();
    min = parseInt(menu.time.value[0], 10);

    if (min && min > 0 && min <= 5) {
        vals.time = min;
    } else {
        vals.time = 0;
    }

    return vals;
}

export {endGame, getMenuVals};