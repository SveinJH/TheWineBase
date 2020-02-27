import React from 'react';

import Icons from '../../../images/sprites.svg';

const Icon = props => {
    return (
        <svg
            className={`icon icon-${props.name}`}
            width={props.size}
            height={props.size}
        >
            <use xlinkHref={`${Icons}#icon-${props.name}`} />
        </svg>
    );
};

export default Icon;
