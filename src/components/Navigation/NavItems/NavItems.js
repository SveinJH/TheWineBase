import React from 'react';

import classes from './NavItems.module.scss';
import NavItem from './NavItem/NavItem';

const icons = [
    {
        name: 'location',
        text: 'Butikker',
        link: '/'
    },
    {
        name: 'wine',
        text: 'Produkter',
        link: '/products'
    },

    {
        name: 'heart',
        text: 'Favoritter',
        link: '/'
    },
    {
        name: 'user',
        text: 'Min side',
        link: '/'
    },
    {
        name: 'arrow-right',
        text: 'Logg ut',
        link: '/'
    }
];

const NavItems = props => {
    return icons.map(icon => {
        return (
            <NavItem
                key={icon.name}
                name={icon.name}
                text={icon.text}
                size={30}
                link={icon.link}
            />
        );
    });
};

export default NavItems;
