import React, { useState, useEffect } from 'react';

import Icon from './Icon';
import EmptyIcon from './EmptyIcon';

import GameService from '../services/GameService';

export default function GameMode(props) {

    const [computerIcon, setComputerIcon] = useState('');

    const selectComputerIcon = () => {
        const num = Math.floor(Math.random() * 3)
        const IconName = (num === 0) ? 'rock' : (num === 1) ? 'paper' : 'scissors';
        const selectedComputerIcon = props.icons.filter(icon => icon.name === IconName);
        selectedComputerIcon[0].size = 'big';
        setComputerIcon(selectedComputerIcon[0]);
    }

    const gameOutcome = () => {
            console.log(GameService.gameOutcome(props.icon, computerIcon));
            const diff = GameService.gameOutcome(props.icon, computerIcon);
            const updatedScore = GameService.updateScore(diff);
            props.updateScore(updatedScore);
    }

    useEffect(() => {
        let firstTimeout = () => setTimeout(() => selectComputerIcon(), 2000);
        let secondTimeout = () => setTimeout(() => gameOutcome(), 1000);
        (computerIcon === '') ? firstTimeout() : secondTimeout();
        return () => {
            clearTimeout(firstTimeout, secondTimeout);
        }
    }, [computerIcon]);

    return (
        <div className="flex column game-mode-container">
            <div className="flex upper-panel-container">
                <div className="uppercase">you picked</div>
                <div className="uppercase">the house picked</div>
            </div>
            <div className="flex bottom-panel-container">
                <Icon icon={props.icon} />
                {(computerIcon === '') ? <EmptyIcon /> : <Icon icon={computerIcon} />}
            </div>
        </div>
    )
}