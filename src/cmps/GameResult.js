import React from 'react';

export default function GameResult(props) {
    return (
        <div className="flex column game-result-container">
            <div className="uppercase game-result-title">
                {props.gameResult}
            </div>
            {props.isAnimationOver && <div className="flex center align-center pointer play-again-button" onClick={props.resetGame}>
                <div className="uppercase">play again</div>
            </div>}
        </div>
    )
}