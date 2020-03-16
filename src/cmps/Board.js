import React, { useState } from 'react';

import IconsList from './IconsList';
import GameMode from './GameMode';

import iconPaper from '../assets/imgs/icon-paper.svg';
import iconRock from '../assets/imgs/icon-rock.svg';
import iconScissors from '../assets/imgs/icon-scissors.svg';

export default function Board(props) {

    const [playerChoice, setPlayerChoice] = useState('');
    const [selectedIcon, setSelectedIcon] = useState({});

    const icons = [{ src: iconPaper, name: 'paper', _id: 'paperIcon' },
    { src: iconRock, name: 'rock', _id: 'rockIcon' },
    { src: iconScissors, name: 'scissors', _id: 'scissorsIcon' }]

    const onSetPlayerChoice = (iconName) => {
        const selected = icons.find(icon => icon.name === iconName);
        selected.size = 'big';
        setPlayerChoice(iconName);
        setSelectedIcon(selected);
    }

    const resetGame = () => {
        setPlayerChoice('');
        setSelectedIcon({});
    }

    return (
        <div className="flex center full main-container">
            {(playerChoice === '') ?
                <div className="icons-container">
                    <IconsList icons={icons} onPlayerChoice={onSetPlayerChoice} />
                </div>
                : <GameMode playerChoice={playerChoice} icon={selectedIcon}
                    updateScore={props.updateScore} icons={icons} resetGame={resetGame} />}
        </div>
    )
}