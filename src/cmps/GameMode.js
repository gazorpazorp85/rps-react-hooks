import React, { useState, useEffect } from 'react';

import Icon from './Icon';
import EmptyIcon from './EmptyIcon';
import GameResult from './GameResult';
import Victorious from './Victorious';

import GameService from '../services/GameService';

export default function GameMode(props) {

    const [computerIcon, setComputerIcon] = useState('');
    const [gameResult, setGameResult] = useState('');

    const selectComputerIcon = () => {
        const num = Math.floor(Math.random() * 3)
        const iconName = (num === 0) ? 'rock' : (num === 1) ? 'paper' : 'scissors';
        const selectedComputerIcon = props.icons.find(icon => icon.name === iconName);
        selectedComputerIcon.size = 'big';
        setComputerIcon(selectedComputerIcon);
    }

    const gameOutcome = () => {
        const diff = GameService.gameOutcome(props.icon, computerIcon);
        const updatedScore = GameService.updateScore(diff);
        setGameResult(GameService.showGameResult(diff));
        props.updateScore(updatedScore);
    }

    const resetGame = () => {
        props.resetGame();
        setComputerIcon('');
        setGameResult('');
    }

    useEffect(() => {
        let firstTimeout = () => setTimeout(() => selectComputerIcon(), 800);
        let secondTimeout = () => setTimeout(() => gameOutcome(), 500);
        (computerIcon === '') ? firstTimeout() : secondTimeout();
        return () => {
            clearTimeout(firstTimeout, secondTimeout);
        }
    }, [computerIcon]);

    return (
        <div className="flex game-mode-container">
            <div className="flex player-panel-container">
                <div className="uppercase panel-title">you picked</div>
                {(gameResult === 'you win') ? <Victorious><Icon icon={props.icon} /></Victorious> : ''}
                <Icon icon={props.icon} />
            </div>
            {(gameResult === '') ? '' : <GameResult gameResult={gameResult} resetGame={resetGame} />}
            <div className="flex computer-panel-container">
                <div className="uppercase panel-title">the house picked</div>
                {(gameResult === 'you lose') ? <Victorious><Icon icon={props.icon} /></Victorious> : ''}
                {(computerIcon === '') ? <EmptyIcon /> : <Icon icon={computerIcon} />}
            </div>
        </div>
    )
}