import React, { useState, useEffect } from 'react';

import Icon from './Icon';
import EmptyIcon from './EmptyIcon';
import GameResult from './GameResult';
import Victorious from './Victorious';

import winSound from '../assets/sounds/win.mp3';
import loseSound from '../assets/sounds/lose.mp3';

import GameService from '../services/GameService';

export default function GameMode(props) {

    const [computerIcon, setComputerIcon] = useState('');
    const [gameResult, setGameResult] = useState('');
    const [isAnimationOver, setIsAnimationOver] = useState(false);
    const [audio, setAudio] = useState(null);

    const selectComputerIcon = () => {
        const num = Math.floor(Math.random() * 3)
        const iconName = (num === 0) ? 'rock' : (num === 1) ? 'paper' : 'scissors';
        const selectedComputerIcon = props.icons.find(icon => icon.name === iconName);
        selectedComputerIcon.size = 'big';
        setComputerIcon(selectedComputerIcon);
    }

    const gameOutcome = () => {
        const diff = GameService.gameOutcome(props.icon, computerIcon);
        setAudio((diff > 0) ? new Audio(winSound) : (diff < 0) ? new Audio(loseSound) : null);
        const updatedScore = GameService.updateScore(diff);
        setGameResult(GameService.showGameResult(diff));
        props.updateScore(updatedScore);
        if (diff === 0) setIsAnimationOver(true);
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
            setIsAnimationOver(false);
        }
    }, [computerIcon]);

    return (
        <div className="flex game-mode-container">
            <div className="flex player-panel-container">
                <div className="uppercase panel-title">you picked</div>
                {(gameResult === 'you win') ? <Victorious setIsAnimationOver={setIsAnimationOver} audio={audio}><Icon icon={props.icon} /></Victorious> : ''}
                <Icon icon={props.icon} />
            </div>
            {(gameResult === '') ? '' : <GameResult gameResult={gameResult} resetGame={resetGame} isAnimationOver={isAnimationOver} />}
            <div className="flex computer-panel-container">
                <div className="uppercase panel-title">the house picked</div>
                {(gameResult === 'you lose') ? <Victorious setIsAnimationOver={setIsAnimationOver} audio={audio}><Icon icon={props.icon} /></Victorious> : ''}
                {(computerIcon === '') ? <EmptyIcon /> : <Icon icon={computerIcon} />}
            </div>
        </div>
    )
}