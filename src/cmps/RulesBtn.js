import React from 'react'

export default function RulesBtn(props) {

    return (
        <div className="flex rules-container">
            <div className="flex center align-center uppercase pointer btn-rules" onClick={props.onToggle}>
                <div>rules</div>
            </div>
        </div>
    )
}