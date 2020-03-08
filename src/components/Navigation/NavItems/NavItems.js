import React from 'react';

import classes from './NavItems.module.scss';
import NavItem from './NavItem/NavItem';

const icons = [
    {
        name: 'location',
        text: 'Butikker',
        link: '/butikker'
    },
    {
        name: 'wine',
        text: 'Produkter',
        link: '/produkter'
    },

    {
        name: 'heart',
        text: 'Favoritter',
        link: '/favoritter'
    },
    {
        name: 'user',
        text: 'Min side',
        link: '/minside'
    },
    {
        name: 'arrow-right',
        text: 'Logg ut',
        link: '/utlogging'
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
