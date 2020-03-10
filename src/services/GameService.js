export default {
    storeScore,
    loadScore,
    gameOutcome,
    updateScore,
    showGameResult
}

const KEY = 'score';

function storeScore(key, any) {
    localStorage[key] = JSON.stringify(any);
}

function loadScore(key) {
    var str = localStorage[key] || 0;
    return JSON.parse(str);
}

function gameOutcome(playerCoin, computerCoin) {
    switch (playerCoin.name) {
        case 'paper':
            return (computerCoin.name === 'rock') ? 1 : 
                   (computerCoin.name === 'scissors') ? -1 : 0;
        case 'rock':
            return (computerCoin.name === 'scissors') ? 1 : 
                   (computerCoin.name === 'paper') ? -1 : 0;
        case 'scissors':
            return (computerCoin.name === 'paper') ? 1 : 
                   (computerCoin.name === 'rock') ? -1 : 0;
        default:
            return 0;
    }
}

function updateScore(diff) {
    let score = loadScore(KEY);
    let newScore = score + diff;
    (newScore < 0) ? storeScore(KEY, 0) : storeScore(KEY, newScore);
    return (newScore < 0) ? 0 : newScore;
}

function showGameResult(diff) {
    return (diff === 1) ? ' you win' : (diff === -1) ? 'you lose' : 'draw';
}