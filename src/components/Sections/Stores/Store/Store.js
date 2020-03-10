import React from 'react';

import classes from './Store.module.scss';

const Store = props => {
    return <div className={classes.Store}>{props.name}</div>;
};

export default Store;
