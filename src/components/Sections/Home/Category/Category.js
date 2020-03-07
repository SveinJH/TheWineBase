import React from 'react';

import classes from './Category.module.scss';

const Category = props => {
    return (
        <div className={classes.Category} onClick={props.clicked}>
            <img src={props.icon} alt="" />
            <div>{props.text}</div>
        </div>
    );
};

export default Category;
