import React from 'react';

export default function Score (props){
    return (
        <div className="main-container score-container">
            <div className="score-subcontainer">
                <div className="title-container">
                    <h1 className="uppercase">rock paper scissors</h1>
                </div>
                <div className="flex score-card-container">
                    <div className="uppercase score-title">score</div>
                    <div className="score-number">{props.score}</div>
                </div>
            </div>
        </div>
    )
}