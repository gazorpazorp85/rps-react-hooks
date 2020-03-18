import React, { useState, useEffect } from 'react';

export default function Victorious(props) {

    const [isFirstCircleShown, setIsFirstCircleShown] = useState(false);
    const [isSecondCircleShown, setIsSecondCircleShown] = useState(false);
    const [isThirdCircleShown, setIsThirdCircleShown] = useState(false);

    const firstTimeoutHandler = () => {
        setIsFirstCircleShown(true);
        props.audio.play();
    }

    const thirdTimeoutHandler = () => {
        setIsThirdCircleShown(true);
        props.setIsAnimationOver(true);
    }

    useEffect(() => {
        const firstTimeout = () => setTimeout(() => firstTimeoutHandler(), 300);
        const secondTimeout = () => setTimeout(() => setIsSecondCircleShown(true), 600);
        const thirdTimeout = () => setTimeout(() => thirdTimeoutHandler(), 900);
        firstTimeout();
        secondTimeout();
        thirdTimeout();
        return () => {
            clearTimeout(firstTimeout, secondTimeout, thirdTimeout);
            setIsFirstCircleShown(false);
            setIsSecondCircleShown(false);
            setIsThirdCircleShown(false);
        }
    }, []);

    return (
        <div className="flex center align-center victorious-container">
            {isFirstCircleShown && !isSecondCircleShown && !isThirdCircleShown ?
                <div className="flex center align-center third-ghost-circle">
                    <div className="flex center align-center second-ghost-circle">
                        <div className="flex center align-center first-circle">
                        </div>
                    </div>
                </div> : ''}
            {isFirstCircleShown && isSecondCircleShown && !isThirdCircleShown ?
                <div className="flex center align-center third-ghost-circle">
                    <div className="flex center align-center second-circle">
                        <div className="flex center align-center first-circle">
                        </div>
                    </div>
                </div> : ''}
            {isFirstCircleShown && isSecondCircleShown && isThirdCircleShown ?
                <div className="flex center align-center third-circle">
                    <div className="flex center align-center second-circle">
                        <div className="flex center align-center first-circle">
                        </div>
                    </div>
                </div> : ''}
        </div>
    )
}