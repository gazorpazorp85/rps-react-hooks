import React from 'react';

export default function Icon(props) {
    
    const clickHandler = () => {
        if (!props.onPlayerChoice) return;
        props.onPlayerChoice(props.icon.name);
    }

    return (
        <div className={`flex center align-center icon-container ${props.icon.name} ${props.icon.size} + ${(props.icon.size) ? '' : 'pointer'} `}>
            <div className="flex center align-center icon-inner-container" onClick={clickHandler}>
                <img src={`${props.icon.src}`} alt="" />
            </div>
        </div>
    )
}