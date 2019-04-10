function endGame(type, game, canvas) {
    game.userInput = false;
    game.isRunning = false;
    
    if (game && game.options.timer.id) clearInterval(game.options.timer.id);
    
    canvas.setFont('50px Bangers');
    canvas.ctx.fillStyle = 'rgba(230, 235, 244, 0.7)';
    canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (type === 'win') canvas.ctx.fillStyle = '#148207';
    if (type === 'loose') canvas.ctx.fillStyle = '#b80404';

    canvas.ctx.textAlign = 'center';
    canvas.ctx.fillText(type === 'win' ? 'You win!' : 'Out of time...', canvas.width / 2, canvas.height / 2);
}

function getMenuVals(menu) {
    const vals = {};

    if (menu.gridSize.value === '4 x 4') vals.grid = [4, 4];
    else if (menu.gridSize.value === '4 x 5') vals.grid = [4, 5];
    else if (menu.gridSize.value === '5 x 6') vals.grid = [5, 6];
    else vals.grid = [4, 4];

    vals.type = menu.type.value.toLowerCase();
    vals.timer = {};
    
    if (menu.time.value !== 'None') {
        let min = parseInt(menu.time.value, 10);

        if (min && min > 0 && min <= 5) {
            vals.timer.seconds = min * 60;
        } else {
            vals.timer.seconds = 0;
        }
    }

    return vals;
}

function displayTimeLeft(secs, timeDisplay) {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;
    let time = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    timeDisplay.textContent = time;
}

function startTimer(game, display, canvas) {
    let then = Date.now() + game.options.timer.seconds * 1000;
    
    displayTimeLeft(game.options.timer.seconds, display);

    game.options.timer.id = setInterval(() => {

        game.options.timer.secondsLeft = Math.round((then - Date.now()) / 1000);

        if (game.options.timer.secondsLeft < 0) {
            clearInterval(game.options.timer.id);

            endGame('loose', game, canvas)
            return;
        }

        displayTimeLeft(game.options.timer.secondsLeft, display);
    }, 1000);
}

export {endGame, getMenuVals, startTimer};