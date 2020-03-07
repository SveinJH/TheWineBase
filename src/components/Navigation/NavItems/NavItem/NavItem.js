import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../../../UI/Icon/Icon';
import classes from './NavItem.module.scss';

const NavItem = props => {
    return (
        <div className={classes.NavItem}>
            <NavLink
                exact={props.exact}
                to={props.link}
                activeClassName={classes.Active}
            >
                <Icon name={props.name} size={props.size} />
                <div>{props.text}</div>
            </NavLink>
        </div>
    );
};

export default NavItem;
