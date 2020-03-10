import React, { useState } from 'react';

import Score from '../cmps/Score';
import Board from '../cmps/Board';
import RulesBtn from '../cmps/RulesBtn';
import RulesModal from '../cmps/RulesModal';

import GameService from '../services/GameService';

export default function Home() {

    const [toggleRulesModal, setToggleRulesModal] = useState(false);
    const [score, setScore] = useState(GameService.loadScore('score'));

    const onToggleRulesModal = () => {
        setToggleRulesModal(!toggleRulesModal);
    }

    const updateScore = (updatedScore) => {
        setScore(updatedScore);
    }

    return (
        <div className="flex column align-center home-container">
            <Score score={score} />
            <Board updateScore={updateScore} />
            <RulesBtn onToggle={onToggleRulesModal} />
            {toggleRulesModal && <RulesModal onToggle={onToggleRulesModal} />}
        </div>
    )
}