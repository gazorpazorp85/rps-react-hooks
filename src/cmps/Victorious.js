import React, { useState, useEffect } from 'react';

export default function Victorious() {

    const [isFirstCircleShown, setIsFirstCircleShown] = useState(false);
    const [isSecondCircleShown, setIsSecondCircleShown] = useState(false);
    const [isThirdCircleShown, setIsThirdCircleShown] = useState(false);

    useEffect(() => {
        const firstTimeout = () => setTimeout(() => setIsFirstCircleShown(true), 500);
        const secondTimeout = () => setTimeout(() => setIsSecondCircleShown(true), 1000);
        const thirdTimeout = () => setTimeout(() => setIsThirdCircleShown(true), 1500);
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