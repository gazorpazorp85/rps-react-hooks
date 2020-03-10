import React from 'react';

import rulesImg from '../assets/imgs/image-rules.svg';
import iconClose from '../assets/imgs/icon-close.svg';

export default function RulesModal(props) {
    return (
        <div className="rules-modal-screen">
            <div className="flex column rules-modal">
                <div className="flex modal-title-container">
                    <div className="uppercase modal-title">rules</div>
                    <div className="pointer" onClick={props.onToggle}>
                        <img src={iconClose} alt="" />
                    </div>
                </div>
                <div className="rules-img-container">
                    <img src={rulesImg} alt="" />
                </div>
            </div>
        </div>
    )
}