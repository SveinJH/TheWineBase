import React from 'react';

import Icon from '../../../UI/Icon/Icon';
import classes from './NavItem.module.scss';

const NavItem = props => {
    return (
        <div className={classes.NavItem}>
            <a href="">
                <Icon name={props.name} size={props.size} />
                <div>{props.text}</div>
            </a>
        </div>
    );
};

export default NavItem;
