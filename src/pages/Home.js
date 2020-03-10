import React, {useState} from 'react';

import Score from '../cmps/Score';
import Board from '../cmps/Board';
import RulesBtn from '../cmps/RulesBtn';
import RulesModal from '../cmps/RulesModal';

export default function Home() {

    const [toggleRulesModal, setToggleRulesModal] = useState(false);

    const onToggleRulesModal = () => {
        setToggleRulesModal(!toggleRulesModal);
    }

    return (
        <div className="flex column align-center home-container">
            <Score />
            <Board />
            <RulesBtn onToggle={onToggleRulesModal}/>
            {toggleRulesModal && <RulesModal onToggle={onToggleRulesModal} />}
        </div>
    )
}