import React from 'react';

import Icon from './Icon';

export default function IconsList(props) {
    return (
        props.icons.map((icon) => <Icon key={icon._id} icon={icon} onPlayerChoice={props.onPlayerChoice}/>)
    )
}