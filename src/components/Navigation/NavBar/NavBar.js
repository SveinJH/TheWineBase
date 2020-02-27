import React from 'react';

import classes from './NavBar.module.scss';
import NavItems from '../NavItems/NavItems';

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <NavItems />
        </div>
    );
};

export default NavBar;
