import React from 'react';

import Icons from '../../../images/sprites.svg';
import classes from './Icon.module.scss';

const Icon = props => {
    const classList = ['icon', `icon-${props.name}`];
    if (props.isFavorite) {
        classList.push(classes.Liked);
    }

    return (
        <svg
            className={classList.join(' ')}
            width={props.size}
            height={props.size}
        >
            <use xlinkHref={`${Icons}#icon-${props.name}`} />
        </svg>
    );
};

export default Icon;
