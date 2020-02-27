import React from 'react';

import classes from './NavItems.module.scss';
import NavItem from './NavItem/NavItem';

const icons = [
    {
        name: 'location',
        text: 'Stores'
    },
    {
        name: 'wine',
        text: 'Products'
    },
    {
        name: 'user',
        text: 'My page'
    },
    {
        name: 'heart',
        text: 'Favorites'
    },
    {
        name: 'arrow-right',
        text: 'Logout'
    }
];

const NavItems = props => {
    return icons.map(icon => {
        return <NavItem name={icon.name} text={icon.text} size={30} />;
    });
};

export default NavItems;
